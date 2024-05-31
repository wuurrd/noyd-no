import { Markdown } from "~/components/Markdown";
import { UserHomeLayout } from "~/components/UserHomeLayout";

// https://gdprcontrol.no/personvernerklaring-mal/

const policy = `
Accessful AS er behandlingsansvarlig for behandlingen av personopplysninger som beskrevet i denne personvernerklæringen. I denne personvernerklæringen forklarer vi hva slags personopplysninger vi lagrer og hvordan vi behandler de. Denne personvernerklæringen gjelder for: Nøyd og alle kundeimplementasjoner.

## Personopplysninger vi samler inn og behandler
Vi behandler følgende kategorier av personopplysninger:

- Grunnleggende informasjon: navn
- Kontaktinformasjon: adresse, telefonnummer, epostadresse
- Konto og profilinformasjon: Innstillinger, preferanser,
- Kundehistorikk og kundeengasjement: aktive produkter og avtaler samt produkter og tjenester du har hatt tidligere, hvor mye og hvor ofte de brukes, status på produkter/tjenester,
- Kundeaktivitet: lese- og handlingshistorikk fra app, nettsider eller elektronisk kommunikasjon vi sender ut. Samt teknisk informasjon om enhetene du bruker.
- Cookies

Personopplysningene samles i de fleste tilfeller inn direkte fra deg eller de genereres i forbindelse med at du bruker våre tjenester og produkter. Når vi henter personopplysninger fra andre kilder, henter vi personopplysninger fra følgende kilder:

## Hvordan vi bruker personopplysningene
### Levering av tjeneste/avtaleinngåelse
Vi bruker dine personopplysninger til å oppfylle våre avtaler med deg, det vil si når du har bestilt et produkt eller en tjeneste fra oss. Det rettslige grunnlaget for å behandle personopplysninger til dette formålet er at behandlingen er nødvendig for å oppfylle en avtale med deg.

### Administrasjon av kundeforhold
Vi bruker dine personopplysninger til å administrere vårt kundeforhold med deg. Det kan for eksempel være kundeservice, klagebehandling og feilretting vedrørende ditt kundeforhold. Det rettslige grunnlaget for å behandle personopplysninger til dette formålet er at behandlingen er nødvendig for å oppfylle en avtale med deg.

### Analyse, forretningsutvikling og forbedring av tjenester
Vi arbeider kontinuerlig med å utvikle og forbedre våre tjenester og produkter. Mye av dette arbeidet innebærer å analysere ulike former for personopplysninger, som for eksempel kundeaktivitet, kundehistorikk og konto og profilinformasjon. Det rettslige grunnlaget for å behandle personopplysninger til dette formålet er vår berettigede interesse.

### Tilpasset brukeropplevelse
Vi tilpasser brukeropplevelsen og kommunikasjonen til ditt kundeforhold og dette bruker vi personopplysninger til. Det rettslige grunnlaget for å behandle personopplysninger til dette formålet er vår berettigede interesse.

### Salg og markedsføring
Vi bruker personopplysninger i forbindelse med salg og markedsføring av våre produkter og tjenester, for eksempel ved at du mottar epost fra oss. Det rettslige grunnlaget for å behandle personopplysninger til dette formålet er vår berettigede interesse. Du har mulighet å reservere deg fra deler av denne behandlingen ved å, for eksempel, reservere deg fra å motta epost fra oss. I tillegg til dette kan vi også be deg om samtykke til å bruke dine personopplysninger til såkalt profilering, hvor vi utleder interesser og behov på bakgrunn av dine personopplysninger. Hensikten med profilering vil være at markedsføringen vår skal bli mer relevant.

### Systemovervåking, feilretting mm.
Vi overvåker våre systemer etter feil og problemer. En del av disse prosessene innebærer lagring og behandling av personopplysninger. Det rettslige grunnlaget for å behandle personopplysninger til dette formålet er vår berettigede interesse.

### Sikkerhet, avdekking av svindel og kriminelle handlinger
Vi behandler personopplysninger i vårt arbeid med å beskytte våre brukere og oss selv mot svindelaktivitet, misbruk og kriminelle handlinger. Det rettslige grunnlaget for å behandle personopplysninger til dette formålet er vår berettigede interesse.

### Overholde rettslige forpliktelser
I enkelte tilfeller er vi pålagt å behandle personopplysninger av hensyn til andre rettslige forpliktelser. Et eksempel på dette er informasjon knyttet til salg, som vi er pliktig til å regnskapsføre og oppbevare i henhold til bokføringsloven. Det rettslige grunnlaget for å behandle personopplysninger til dette formålet er at behandlingen er nødvendig for å oppfylle en rettslig forpliktelse som påhviler oss.

## Dine rettigheter
Dersom du ønsker å utøve noen av dine rettigheter, ta kontakt med oss på dpo@noyd.no

### Rett til innsyn i egne opplysninger
Du kan be om en kopi av alle opplysninger vi behandler om deg. Ta kontakt på epostadressen ovenfor for å bruke innsynsretten din.

### Rett til korrigering av personopplysninger
Du har rett til å be oss rette eller supplere opplysninger som er feilaktige eller misvisende.

### Retten til sletting av personopplysninger
Du har rett til å få dine personopplysninger slettet uten ugrunnet opphold. Du kan derfor når som helst be oss slette opplysninger om deg selv. Men merk at informasjon som vi er pålagt beholde av hensyn til andre rettslige forpliktelser (som fore eksempel bokføringsloven) ikke vil bli slettet.

### Begrensning av behandling av personopplysninger
I noen situasjoner kan du også be oss begrense behandlingen av opplysninger om deg. Dette gjør du ved å administrere samtykker eller reservasjoner i våre løsninger.

### Protestere mot en behandling av personopplysninger
Dersom vi behandler opplysninger om deg med grunnlag i våre oppgaver eller på bakgrunn av en interesseavveining, har du rett til å protestere på vår behandling av opplysninger om deg. Dette gjør du ved å administrere samtykker eller reservasjoner i våre løsninger.

### Dataportabilitet
Du har rett til å få utlevert dine personopplysninger i et strukturert, alminnelig anvendt og maskinlesbart format. Ta kontakt på epostadressen ovenfor for å få utlevert dine personopplysninger.

### Du kan klage på vår behandling av personopplysninger
Vi håper du vil si ifra dersom du mener vi ikke overholder reglene i personopplysningsloven. Si da gjerne først i fra gjennom den kontakten eller kanalen du allerede har etablert med oss. Du kan også klage over vår behandling av personopplysninger. Dette gjør du til Datatilsynet.
`;

export default function PrivacyPolicy() {
  return (
    <UserHomeLayout title="Personvernerklæring" homeLink={"/"}>
      <div className="bg-white p-4">
        <Markdown>{policy}</Markdown>
      </div>
    </UserHomeLayout>
  );
}
