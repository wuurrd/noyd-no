import { redirect } from "@remix-run/node";

export async function loader() {
  return redirect("/privacy-policy", { status: 301 });
}
