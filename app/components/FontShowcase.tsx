import { fontMap } from "../fonts/fontMap";
import FontCard, { FontData } from "./FontCard";

const fonts: FontData[] = [
  {
    name: "Dancing Script",
    text: "AI Art Generator",
    className: "Dancing_Script",
  },
  { name: "Anton", text: "AI Art Generator", className: "Anton" },
  {
    name: "Bebas Neue",
    text: "AI Art Generator",
    className: "Bebas_Neue",
  },
  { name: "Charm", text: "AI Art Generator", className: "Charm" },
  { name: "Cinzel", text: "AI Art Generator", className: "Cinzel" },
  {
    name: "Comfortaa",
    text: "AI Art Generator",
    className: "Comfortaa",
  },
  {
    name: "Courgette",
    text: "AI Art Generator",
    className: "Courgette",
  },
  {
    name: "Crimson Text",
    text: "AI Art Generator",
    className: "Crimson_Text",
  },
  { name: "Dosis", text: "AI Art Generator", className: "Dosis" },
  {
    name: "Great Vibes",
    text: "AI Art Generator",
    className: "Great_Vibes",
  },
  {
    name: "Indie Flower",
    text: "AI Art Generator",
    className: "Indie_Flower",
  },
  {
    name: "Josefin Sans",
    text: "AI Art Generator",
    className: "Josefin_Sans",
  },
  { name: "Kalam", text: "AI Art Generator", className: "Kalam" },
  { name: "Lato", text: "AI Art Generator", className: "Lato" },
  {
    name: "Libre Baskerville",
    text: "AI Art Generator",
    className: "Libre_Baskerville",
  },
  { name: "Lobster", text: "AI Art Generator", className: "Lobster" },
  {
    name: "Montserrat",
    text: "AI Art Generator",
    className: "Montserrat",
  },
  {
    name: "Open Sans",
    text: "AI Art Generator",
    className: "Open_Sans",
  },
  { name: "Oswald", text: "AI Art Generator", className: "Oswald" },
  {
    name: "Pacifico",
    text: "AI Art Generator",
    className: "Pacifico",
  },
  {
    name: "Playfair Display",
    text: "AI Art Generator",
    className: "Playfair_Display",
  },
  { name: "Poppins", text: "AI Art Generator", className: "Poppins" },
  {
    name: "Quicksand",
    text: "AI Art Generator",
    className: "Quicksand",
  },
  { name: "Raleway", text: "AI Art Generator", className: "Raleway" },
  { name: "Roboto", text: "AI Art Generator", className: "Roboto" },
  {
    name: "Roboto Condensed",
    text: "AI Art Generator",
    className: "Roboto_Condensed",
  },
  {
    name: "Roboto Mono",
    text: "AI Art Generator",
    className: "Roboto_Mono",
  },
  {
    name: "Roboto Slab",
    text: "AI Art Generator",
    className: "Roboto_Slab",
  },
  { name: "Rubik", text: "AI Art Generator", className: "Rubik" },
  {
    name: "Source Sans Pro",
    text: "AI Art Generator",
    className: "Source_Sans_Pro",
  },
  {
    name: "Source Serif Pro",
    text: "AI Art Generator",
    className: "Source_Serif_Pro",
  },
  {
    name: "Space Grotesk",
    text: "AI Art Generator",
    className: "Space_Grotesk",
  },
  {
    name: "Space Mono",
    text: "AI Art Generator",
    className: "Space_Mono",
  },
  { name: "Ubuntu", text: "AI Art Generator", className: "Ubuntu" },
  {
    name: "Work Sans",
    text: "AI Art Generator",
    className: "Work_Sans",
  },
];

export default function FontShowcase() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Our AI Models Can Generate Text in These Fonts
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Experience the power of AI with our extensive font collection
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {fonts.map((font) => (
            <FontCard key={`font-card-${font.name}`} name={font.name} text={font.text} className={font.className} />
          ))}
        </div>
      </div>
    </section>
  );
}
