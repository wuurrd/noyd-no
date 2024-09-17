export const prerender = false;

import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();

  const name = data.get("contact-name");
  const company = data.get("contact-company");
  const email = data.get("contact-email");
  const phone = data.get("contact-phone");
  const comments = data.get("contact-comments");


  // need to misspell the name so it's not picked up by client autofilling
  const emailHoneypot = data.get("emaiRequired");
  if (emailHoneypot) {
    // if it's filled, it's most likely a bot
    return new Response(null, { status: 302, headers: { location: "/nb/contact_confirm" } });
  }

  if (!name || !company || !email) {
    return new Response(
      JSON.stringify({
        message: "Påkrevd felt mangler",
      }),
      { status: 400 },
    );
  }
  // Do something with the data, then return a success response
  const discordUrl = import.meta.env.SLACK_URL;

  const discordContent = {
    username: "Noyd",
    content: "New message from noyd.no",
    embeds: [
      {
        fields: [
          {
            name: "Navn",
            value: name,
            inline: true,
          },
          {
            name: "Sameie",
            value: company,
            inline: true,
          },
          {
            name: "E-post",
            value: email,
          },
          {
            name: "Phone",
            value: phone,
          },
          {
            name: "Kommentarer",
            value: comments,
          },
        ],
      },
    ],
  };

  const res = await fetch(discordUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(discordContent),
  });

  if (res.status === 200 || res.status === 201 || res.status === 204) {
    return new Response(null, { status: 302, headers: { location: "/nb/contact_confirm" } });
  } else {
    return new Response(null, { status: 302, headers: { location: "/nb/contact_error" } });
  }

  //   return new Response(
  //     JSON.stringify({
  //       message: "Success!",
  //     }),
  //     { status: 200 },
  //   );
};
