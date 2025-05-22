import { createClient } from "pexels";
import PhotoCard from "../components/PhotoCard";

export interface Photo {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  photographer: string;
  photographerUrl: string;
}

async function fetchPhotos(): Promise<Photo[]> {
  const client = createClient(process.env.NEXT_PUBLIC_PEXEL_KEY || "");
  const response = await client.photos.search({
    query: "ai generated art",
    per_page: 20,
  });

  if ("error" in response) {
    throw new Error(response.error);
  }

  return response.photos.map((photo) => ({
    id: photo.id,
    title: photo.alt || "Untitled",
    description: photo.alt || "No description available",
    image: photo.src.large2x,
    tags: ["Abstract", "Digital", "Art"],
    photographer: photo.photographer,
    photographerUrl: photo.photographer_url,
  }));
}

export const revalidate = 3600; // I have kept a revalidation period of an hour

export default async function GalleryPage() {
  let photos: Photo[] = [];

  try {
    photos = await fetchPhotos();
  } catch (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 mb-4">
            {(error as Error).message || "Failed to load gallery"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Gallery</h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Explore our collection of AI-generated artwork
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo) => (
            <PhotoCard photo={photo} />
          ))}
        </div>
      </div>
    </div>
  );
}
