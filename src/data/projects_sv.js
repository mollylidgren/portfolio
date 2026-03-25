// src/data/projectsData_sv.js
import projectImg6 from "../assets/images/hero_sky.png";

import projectWebAHome from "../assets/images/projectWebA/home.png";
import projectWebATranser from "../assets/images/projectWebA/airportTransfer.png";
import projectWebAAboutHotel from "../assets/images/projectWebA/aboutTheHotel.png";
import projectWebAContact from "../assets/images/projectWebA/contact.png";
import projectWebAAboutUs from "../assets/images/projectWebA/aboutUs.png";
import projectWebASelected from "../assets/images/projectWebA/selectionOverview.png";

import projectUppslagG from "../assets/images/projectGreen/uppslagG.jpg";
import projectMoodBoardG from "../assets/images/projectGreen/MoodBoardG.png";
import projectGrafiskProfilG from "../assets/images/projectGreen/GrafiskProfilG.png";

import strawberry from "../assets/images/projectPosters/strawberry.jpg";
import nail from "../assets/images/projectPosters/nail.jpg";

import cows from "../assets/images/projectPhotos/cows.jpg";
import sky from "../assets/images/projectPhotos/sky.jpg";
import ebbs from "../assets/images/projectPhotos/ebbs.jpg";

import projectTwigims from "../assets/video/projectTwigims/TheTwigims.mp4";
import projectTwigimsImg from "../assets/images/projectTwigims/twigims.png";

import bikeMovie from "../assets/video/projectBike/cykelframjandet.mp4";
import bikeImg from "../assets/images/projectBike/cykelfrämjandetBild.png";

export const projects_sv = [
  {
    id: "1",
    title: "Webbplats – Accommodation Delux",
    role: "Front-end utvecklare & bidragande visuell designer",
    type: "Universitetsprojekt (koncept)",
    description: `Ett konceptbaserat universitetsprojekt utvecklat i grupp där vi skapade en komplett webbplats för ett fiktivt reseföretag. Målet var att designa en inspirerande och intuitiv bokningsupplevelse för användare som vill utforska och boka resor online. Prototyper och gränssnittsflöden utvecklades i Figma och webbplatsen byggdes från grunden med React. Mitt huvudsakliga fokus låg på front-end utveckling, samtidigt som jag bidrog till projektets visuella identitet och övergripande designriktning.`,
    responsibilities: [
      "Designa wireframes och interaktiva prototyper i Figma för att definiera användarflöden och gränssnittsstruktur",
      "Utveckla responsiva webbgränssnitt från grunden med React och moderna front-end-metoder",
      "Bidra till skapandet av en sammanhängande visuell identitet, inklusive färgpalett, typografi och grafiska element",
      "Designa användarvänliga gränssnitt och interaktiva komponenter såsom bokningsflöden och navigationsstrukturer",
      "Samarbeta nära med teammedlemmar för att säkerställa en konsekvent och enhetlig designlösning",
    ],
    result:
      "Slutresultatet blev ett visuellt sammanhållet och användarcentrerat webbplatskoncept som balanserar funktionalitet med engagerande design. Projektet stärkte min erfarenhet av att kombinera front-end utveckling med gränssnittsdesign samt att arbeta tillsammans mot en helhetsorienterad digital lösning. Utvalda skärmar och designelement visas ovan för att lyfta fram centrala delar av projektet.",
    img: projectWebAHome,
    shortDescription:
      "Ett universitetsprojekt för en fiktiv resebokningswebbplats, designad i Figma och utvecklad i React.",
    media: [
      { type: "image", src: projectWebAHome },
      { type: "image", src: projectWebAAboutHotel },
      { type: "image", src: projectWebASelected },
      { type: "image", src: projectWebAContact },
      { type: "image", src: projectWebAAboutUs },
      { type: "image", src: projectWebATranser },
      { type: "image", src: projectWebAContact },
    ],
  },
  {
    id: "2",
    title: "Fotografi & efterbearbetning",
    role: "Fotograf & efterbearbetningsredigerare",
    type: "Självständigt konceptprojekt",
    description:
      "Ett självständigt foto- och efterbearbetningsprojekt som utforskar hur råa bilder kan transformeras genom redigeringsprocesser. Jag tog originalfotografierna och utvecklade det slutliga visuella uttrycket genom strukturerad färggradering och retuschering. Projektet lyfter fram hur efterbearbetning påverkar stämning, ton och visuell tydlighet.",
    responsibilities: [
      "Planera och fotografera originalmaterial med fokus på komposition och ljussättning",
      "Utföra färgkorrigering och tonjustering i Adobe Lightroom",
      "Förfina detaljer och förbättra bilder i Adobe Photoshop",
      "Utveckla en konsekvent visuell stämning genom färggradering",
      "Presentera före- och efterjämförelser för att visa redigeringsprocessen och den visuella transformationen",
    ],
    result:
      "Slutresultatet utgörs av ett antal bilder som visar på hur redigering kan förstärka atmosfär, djup och visuellt berättande. Genom projektet stärktes min förståelse för ljus, färgteori och efterbearbetningsflöden samt min förmåga att förvandla råmaterial till färdigt visuellt innehåll.",
    img: cows,
    shortDescription:
      "Ett foto- och redigeringsprojekt som visar före- och efterförvandlingar genom Lightroom och Photoshop.",
    media: [
      { type: "image", src: cows },
      { type: "image", src: sky },
      { type: "image", src: ebbs },
    ],
  },
  {
    id: "3",
    title: "Reklamaffischer",
    role: "Visuell designer & kreativ konceptutvecklare",
    type: "Självständigt konceptprojekt",
    description:
      "Ett självständigt reklamkoncept där jag utvecklade två produktfokuserade affischer för fiktiva kosmetikvarumärken. Varje affisch designades med en egen visuell identitet och känslomässig ton. Den ena kring ett mörkrött nagellack och den andra centrerad kring ett läppglans med mjuka rosa estetiska uttryck. Projektet utforskar färgpsykologi, komposition och produktcentrerat visuellt berättande i ett kommersiellt sammanhang.",
    responsibilities: [
      "Utveckla individuella visuella koncept och varumärkesriktningar för två fiktiva kosmetikprodukter",
      "Skapa sammanhängande färgpaletter för att förstärka produktidentitet och känslomässig ton",
      "Hämta och integrera royaltyfria bilder samt AI-genererat visuellt material (Adobe Firefly)",
      "Designa och komponera alla visuella element, typografi och layout i Adobe Photoshop",
      "Fokusera på produktframtoning, hierarki och tydlig kommersiell kommunikation",
    ],
    result:
      "Slutresultatet består av två visuellt distinkta reklamaffischer som effektivt lyfter fram produkterna genom strategisk användning av färg, komposition och typografi. Projektet stärkte min förmåga att översätta produktidentitet till tydlig visuell kommunikation och skapa kommersiella designkoncept från grunden.",
    img: nail,
    shortDescription:
      "Ett konceptuellt projekt med reklamaffischer som utforskar visuell identitet, färg och produktfokuserad design.",
    media: [
      { type: "image", src: nail },
      { type: "image", src: strawberry },
    ],
  },
  {
    id: "4",
    title: "Magasinuppslag – konceptet ‘Handla Grönt’",
    role: "Visuell designer & redaktionell layoutdesigner",
    type: "Universitetsprojekt (koncept)",
    description:
      "Ett hållbarhetsfokuserat redaktionellt koncept utvecklat inom en universitetskurs. Projektet utforskar visuell kommunikation för en fiktiv publikation med fokus på medveten konsumtion och miljömedvetenhet.",
    responsibilities: [
      "Utveckla ett visuellt koncept och moodboard baserat på hållbarhet som kärntema",
      "Skapa en sammanhängande grafisk identitet inklusive färgpalett, typografi och illustrativa element",
      "Designa egna illustrationer för att stödja den redaktionella berättelsen",
      "Producera ett komplett magasinuppslag anpassat för både tryckta och digitala format",
      "Genomföra designen i Adobe Illustrator, Photoshop och InDesign",
    ],
    result:
      "Ett visuellt konsekvent och konceptdrivet magasinuppslag som kommunicerar hållbarhet genom genomtänkt typografi, illustration och layout, anpassat för både webb och tryckt presentation.",
    img: projectUppslagG,
    shortDescription:
      "Ett konceptuellt magasinuppslag som utforskar hållbar livsstil genom visuell identitet, illustration och layoutdesign.",
    media: [
      { type: "image", src: projectUppslagG },
      { type: "image", src: projectMoodBoardG },
      { type: "image", src: projectGrafiskProfilG },
    ],
  },
  {
    id: "5",
    title: "Illustrerad animationsfilm – The Twigims",
    role: "Illustratör, motion designer & konceptskapare",
    type: "Universitetsprojekt (koncept)",
    description:
      "Ett konceptbaserat motion design-projekt utvecklat inom en universitetskurs där jag skapade en originalanimerad film från grunden. Varje bildruta i filmen illustrerades individuellt i Adobe Illustrator och sattes senare samman och animerades i After Effects. Projektet utforskar kreativt visuellt berättande genom dynamiska övergångar och flytande kompositioner som håller tittarens uppmärksamhet.",
    responsibilities: [
      "Utveckla det kreativa konceptet och den visuella berättelsen för filmen",
      "Illustrera alla visuella tillgångar bildruta för bildruta i Adobe Illustrator",
      "Animera och komponera filmen i After Effects med fokus på mjuka och engagerande övergångar",
      "Designa rörelsesekvenser där element smälter samman och flyter in i varandra för att styra tittarens uppmärksamhet",
      "Hitta och implementera ljudeffekter och ljud för att förstärka den totala upplevelsen",
    ],
    result:
      "Slutresultatet är en visuellt uttrycksfull och rytmiskt animerad kortfilm som kombinerar illustration, motion design och ljud för att skapa en engagerande tittarupplevelse. Projektet stärkte mina färdigheter inom visuellt berättande, animationsworkflow och kreativ konceptutveckling.",
    img: projectTwigimsImg,
    shortDescription:
      "En illustrerad animationsfilm skapad i Illustrator och After Effects som utforskar kreativa övergångar och visuellt berättande.",
    media: [{ type: "video", src: projectTwigims }],
  },
  {
    id: "6",
    title: "Kortfilm – ‘Cykelfrämjandet’",
    role: "Konceptutvecklare & efterproduktionsdesigner",
    type: "Universitetsprojekt (koncept)",
    description:
      "Ett konceptbaserat filmprojekt utvecklat inom en universitetskurs för Cykelfrämjandet som fiktiv uppdragsgivare. Målet var att producera en engagerande reklamfilm som uppmuntrar vardagscykling genom kreativt berättande och visuellt uttryck. Jag bidrog till utvecklingen av kärnkonceptet och berättelsen, deltog i inspelningsprocessen och hade en viktig roll i efterproduktionen med fokus på visuella effekter och redigering.",
    responsibilities: [
      "Medutveckla det kreativa konceptet och berättelsen för reklamfilmen",
      "Delta i filmning och produktion på inspelningsplats",
      "Designa och implementera visuella effekter och rörelseelement i efterproduktionen",
      "Bidra till klippning och visuell rytm för att stärka berättandet",
      "Samarbeta nära med teamet för att säkerställa en sammanhängande slutproduktion",
    ],
    result:
      "Slutresultatet är en dynamisk och visuellt engagerande reklamfilm som kombinerar konceptutveckling, live-action-material och efterproduktionseffekter för att kommunicera ett inspirerande budskap. Projektet stärkte min erfarenhet av samarbetsbaserad filmproduktion, visuella effekter och berättelsedrivet innehållsskapande.",
    note: "Obs! Videon är optimerad för webbvisning. Originalmaterialet finns i högre upplösning och kvalitet.",
    img: bikeImg,
    shortDescription:
      "Ett universitetsbaserat gruppfilmprojekt för en fiktiv kund som kombinerar konceptutveckling, filmning och efterproduktion med visuella effekter.",
    media: [{ type: "video", src: bikeMovie }],
  },
];
