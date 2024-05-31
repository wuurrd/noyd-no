import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import ReactMarkdown from "react-markdown";
import clsx from "clsx";
import { Link } from "@remix-run/react";
import { House } from "@phosphor-icons/react/dist/csr/House";
import { ReactNode } from "react";

export const Home = House;
//import { UserHomeLayout } from "~/components/components";

const MAX_WIDTH = "max-w-[1280px]";

const theme = {
  backgroundStyles: {
    background:
      "linear-gradient(288deg, #E5DDC5 0%, #E5DDC5 35%, #F1EEDC calc(35% + 1px), #F1EEDC 45%, #BED7DC calc(45% + 1px), #BED7DC 65%, #B3C8CF calc(65% + 1px), #B3C8CF 100%)",
  },
  contentBackground: "bg-[#ffffffdd]",
};

export function Markdown({ children, className }: { children?: string | null; className?: string }) {
  // replace links with markdown links with shorter title
  const urlRegexp = /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/gi;
  const replaceLink = (url: string) => {
    const title = url.length > 32 ? url.slice(0, 32) + "..." : url;
    return `[${title}](${url})`;
  };
  const replaced = children?.replace(urlRegexp, replaceLink);
  return (
    <div className={"markdown " + className}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {replaced}
      </ReactMarkdown>
    </div>
  );
}
export const UserHomeLayout = ({
  title,
  header,
  children,
  homeLink,
}: {
  title: string;
  header?: ReactNode;
  children: ReactNode;
  homeLink: string;
}) => {
  return (
    <div
      className="m-auto flex h-screen flex-col items-center overflow-auto px-4 md:px-8"
      style={theme.backgroundStyles}
    >
      <div className="flex w-full flex-col items-center justify-end">
        <div
          className={clsx("flex w-full flex-row justify-between border-b py-8 border-black items-center", MAX_WIDTH)}
        >
          <Link to={homeLink} className="phudu text-4xl flex flex-row items-end gap-2">
            <Home weight="duotone" />
            <div className="hidden md:flex">{title}</div>
          </Link>
          {header}
        </div>
      </div>

      {children}

      <div className={clsx("flex w-full flex-row border-t border-black", MAX_WIDTH)}>
        <div className={clsx("flex flex-row justify-center text-sm gap-[1rem] p-4 items-center w-full")}>
          <a href="/">En tjeneste fra 👍 Nøyd - noyd.no</a>
          <span className="hidden lg:flex">
            <Link to="/privacy">Personvernerklæring</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

const termsOfService = `
  Accessful AS leverer digitale tjenester og produkter under merket Nøyd. Disse brukervilkårene ("Vilkårene") regulerer forholdet mellom deg som bruker og Accessful AS når du bruker våre tjenester og produkter. Ved å bruke våre tjenester, aksepterer du disse vilkårene i sin helhet.

  ### Omfang av tjenester
  Accessful AS tilbyr en rekke digitale produkter og tjenester som du kan lese mer om på våre nettsider eller i våre apper. Disse inkluderer, men er ikke begrenset til, digitale plattformer, applikasjoner og tilpassede kundeimplementasjoner.

  ### Bruksrettigheter
  Når du aksepterer disse vilkårene, gir Accessful AS deg en ikke-eksklusiv, ikke-overførbar rett til å bruke de tjenester og produkter vi tilbyr, under forutsetning av at du følger disse vilkårene og eventuelle tilleggsvilkår som gjelder for spesifikke tjenester.

  ### Brukerkonto
  For å få tilgang til visse deler av våre tjenester, kan det være nødvendig å opprette en brukerkonto. Du er ansvarlig for å opprettholde konfidensialiteten til din konto og passord og for alle aktiviteter som foregår under din konto.

  ### Betalingsvilkår
  For betalingstjenester forplikter du deg til å betale de avgifter som er avtalt ved registrering eller kjøp av våre produkter eller tjenester. Alle priser er oppgitt i norske kroner og inkluderer gjeldende norsk merverdiavgift.

  ### Endringer i tjenestene og vilkårene
  Accessful AS forbeholder seg retten til å endre tjenestene eller vilkårene for bruk av tjenestene. Vesentlige endringer vil bli kommunisert til deg før de trer i kraft.

  ### Opphør av bruk
  Du kan når som helst avslutte bruken av våre tjenester og lukke din konto hos oss. Accessful AS kan også avslutte din tilgang til tjenestene med rimelig varsel dersom du bryter vilkårene.

  ### Ansvarsbegrensning
  Accessful AS er ikke ansvarlig for indirekte tap som følge av bruk eller manglende mulighet til å bruke tjenestene, med mindre tapet skyldes grov uaktsomhet eller forsett fra Accessful AS sin side.

  ### Tvisteløsning
  Eventuelle tvister som oppstår i forbindelse med disse vilkårene skal først søkes løst gjennom dialog med Accessful AS. Hvis en løsning ikke kan oppnås, kan saken bringes inn for norske domstoler med Oslo tingrett som verneting.

  ### Kontaktinformasjon
  Hvis du har spørsmål om disse brukervilkårene eller våre tjenester, vennligst kontakt oss på support@noyd.no.
`;

export default function TermsOfService() {
  return (
    <UserHomeLayout title="Brukervilkår" homeLink={"/"}>
      <div className="bg-white p-4">
        <Markdown>{termsOfService}</Markdown>
      </div>
    </UserHomeLayout>
  );
}
