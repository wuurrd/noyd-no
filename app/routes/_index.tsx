import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Nøyd - noyd.no" }, { name: "description", content: "Nøyd - noyd.no" }];
};

export default function Index() {
  return (
    <div
      className="flex h-screen w-screen flex-col text-gray-800"
      // style={{ fontFamily: `'Dongle', sans-serif`, fontSize: "4vw" }}
    >
      <div className="bg-white bg-opacity-60 w-full 2xl:w-1/2 px-12 h-full relative flex flex-col justify-center gap-[1em]">
        <div className="flex flex-row gap-1 items-center justify-center">
          <div className="text-center text-[8em] sm:text-[14em]" style={{ fontFamily: `'Dongle', sans-serif` }}>
            nøyd
          </div>
          <div className="text-[4em] sm:text-[8em]" style={{ fontFamily: `'Dongle', sans-serif` }}>
            👍
          </div>
        </div>

        <div className="sm:text-[2em]  text-[1.1em] text-center">
          Nøyd er en plattform spesifikt utviklet for borettslag og sameier i Norge. Vi tilbyr verktøy og tjenester som
          hjelper styrer og beboere med å administrere sine eiendommer på en mer effektiv måte.
        </div>

        <div className="sm:text-[2em] text-[1.1em] text-center">Ta kontakt med oss for mer informasjon.</div>

        <div
          className="text-center text-[2em] pt-16 sm:pt-24 sm:text-[4em]"
          style={{ fontFamily: `'Dongle', sans-serif` }}
        >
          hei@noyd.no
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 pt-32 flex flex-row items-center justify-center gap-4 sm:text-[1em]">
          <a href="/privacy-policy">Personvernerklæring</a>
          <a href="/terms-of-service">Brukervilkår</a>
        </div>
      </div>
      {/* <h1 className="text-white opacity-90" style={{ fontSize: "40vw", lineHeight: "0.7em" }}>
        nøyd
      </h1>
      <div>Vi jobber med noe nytt og spennende!</div>
      <div>hei@noyd.no</div> */}
    </div>
  );
}
