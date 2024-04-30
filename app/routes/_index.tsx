import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "nøyd.no" }, { name: "description", content: "Welcome to nøyd.no!" }];
};

export default function Index() {
  return (
    <div className="flex h-full w-full flex-col justify-center gap-2">
      <div className="flex flex-col items-center">
        <div className="w-80 sm:w-96 flex flex-col items-center gap-6 border bg-white px-4 py-8 border-black">
          <h1>Welcome to nøyd.no!</h1>
        </div>
      </div>
    </div>
  );
}
