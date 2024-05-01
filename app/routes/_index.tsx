import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Nøyd - noyd.no" }, { name: "description", content: "Nøyd - noyd.no" }];
};

export default function Index() {
  return (
    <div
      className="flex h-screen w-screen flex-col justify-center items-center text-gray-800"
      style={{ fontFamily: `'Dongle', sans-serif`, fontSize: "4vw" }}
    >
      <h1 className="text-white opacity-90" style={{ fontSize: "40vw", lineHeight: "0.7em" }}>
        nøyd
      </h1>
      <div>Vi jobber med noe nytt og spennende!</div>
      <div>hei@noyd.no</div>
    </div>
  );
}
