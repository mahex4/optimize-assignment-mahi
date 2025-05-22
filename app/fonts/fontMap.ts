import { NextFont } from "next/dist/compiled/@next/font";
import {
  Anton,
  Dancing_Script,
  Bebas_Neue,
  Charm,
  Cinzel,
  Comfortaa,
  Courgette,
  Crimson_Text,
  Dosis,
  Great_Vibes,
  Indie_Flower,
  Josefin_Sans,
  Kalam,
  Lato,
  Libre_Baskerville,
  Lobster,
  Montserrat,
  Open_Sans,
  Oswald,
  Pacifico,
  Playfair_Display,
  Poppins,
  Quicksand,
  Raleway,
  Roboto,
  Roboto_Condensed,
  Roboto_Mono,
  Roboto_Slab,
  Rubik,
  Source_Sans_3,
  Source_Serif_4,
  Space_Grotesk,
  Space_Mono,
  Ubuntu,
  Work_Sans,
  Mukta,
} from "next/font/google";

const anton = Anton({ weight: "400", subsets: ["latin"] });
const dancingScript = Dancing_Script({ weight: "400", subsets: ["latin"] });
const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const charm = Charm({ weight: "400", subsets: ["latin"] });
const cinzel = Cinzel({ weight: "400", subsets: ["latin"] });
const comfortaa = Comfortaa({ weight: "400", subsets: ["latin"] });
const courgette = Courgette({ weight: "400", subsets: ["latin"] });
const crimsonText = Crimson_Text({ weight: "400", subsets: ["latin"] });
const dosis = Dosis({ weight: "400", subsets: ["latin"] });
const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"] });
const indieFlower = Indie_Flower({ weight: "400", subsets: ["latin"] });
const josefinSans = Josefin_Sans({ weight: "400", subsets: ["latin"] });
const kalam = Kalam({ weight: "400", subsets: ["latin"] });
const lato = Lato({ weight: "400", subsets: ["latin"] });
const libreBaskerville = Libre_Baskerville({ weight: "400", subsets: ["latin"] });
const lobster = Lobster({ weight: "400", subsets: ["latin"] });
const montserrat = Montserrat({ weight: "400", subsets: ["latin"] });
const mukta = Mukta({ weight: "400", subsets: ["latin"] });
const openSans = Open_Sans({ weight: "400", subsets: ["latin"] });
const oswald = Oswald({ weight: "400", subsets: ["latin"] });
const pacifico = Pacifico({ weight: "400", subsets: ["latin"] });
const playfairDisplay = Playfair_Display({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });
const quicksand = Quicksand({ weight: "400", subsets: ["latin"] });
const raleway = Raleway({ weight: "400", subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });
const robotoCondensed = Roboto_Condensed({ weight: "400", subsets: ["latin"] });
const robotoMono = Roboto_Mono({ weight: "400", subsets: ["latin"] });
const robotoSlab = Roboto_Slab({ weight: "400", subsets: ["latin"] });
const rubik = Rubik({ weight: "400", subsets: ["latin"] });
const sourceSansPro = Source_Sans_3({ weight: "400", subsets: ["latin"] });
const sourceSerifPro = Source_Serif_4({ weight: "400", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ weight: "400", subsets: ["latin"] });
const spaceMono = Space_Mono({ weight: "400", subsets: ["latin"] });
const ubuntu = Ubuntu({ weight: "400", subsets: ["latin"] });
const workSans = Work_Sans({ weight: "400", subsets: ["latin"] });

export interface FontMap {
  [fontName: string]: NextFont;
}

export const fontMap: FontMap = {
  "Anton": anton,
  "Dancing Script": dancingScript,
  "Bebas Neue": bebasNeue,
  "Charm": charm,
  "Cinzel": cinzel,
  "Comfortaa": comfortaa,
  "Courgette": courgette,
  "Crimson Text": crimsonText,
  "Dosis": dosis,
  "Great Vibes": greatVibes,
  "Indie Flower": indieFlower,
  "Josefin Sans": josefinSans,
  "Kalam": kalam,
  "Lato": lato,
  "Libre Baskerville": libreBaskerville,
  "Lobster": lobster,
  "Montserrat": montserrat,
  "Mukta": mukta,
  "Open Sans": openSans,
  "Oswald": oswald,
  "Pacifico": pacifico,
  "Playfair Display": playfairDisplay,
  "Poppins": poppins,
  "Quicksand": quicksand,
  "Raleway": raleway,
  "Roboto": roboto,
  "Roboto Condensed": robotoCondensed,
  "Roboto Mono": robotoMono,
  "Roboto Slab": robotoSlab,
  "Rubik": rubik,
  "Source Sans Pro": sourceSansPro,
  "Source Serif Pro": sourceSerifPro,
  "Space Grotesk": spaceGrotesk,
  "Space Mono": spaceMono,
  "Ubuntu": ubuntu,
  "Work Sans": workSans,
};