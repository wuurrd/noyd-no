import { redirect } from "@remix-run/node";

export async function loader() {
  return redirect("/terms-of-service", { status: 301 });
}
