import Hero from "./components/Hero";
import Features from "./components/Features";
import dynamic from "next/dynamic";

const features = [
  {
    title: "AI-Powered Generation",
    description:
      "Create unique illustrations and logos in seconds using advanced AI technology",
  },
  {
    title: "Professional Quality",
    description:
      "Get high-resolution, print-ready artwork suitable for any project",
  },
  {
    title: "Easy to Use",
    description:
      "Simple text prompts transform into beautiful artwork with just a few clicks",
  },
];

const DynamicFontShowcase = dynamic(() => import("./components/FontShowcase"), {
  loading: () => <p>loading...</p>
})

const DynamicGallery = dynamic(() => import("./components/Gallery"),{
  loading: () => <p>loading....</p>
})

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Features features={features} />
      <DynamicFontShowcase />
      <DynamicGallery />
    </div>
  );
}
