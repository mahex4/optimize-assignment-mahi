import PhotoCardSkeleton from "../components/PhotoCardSkeleton";

export default async function GalleryPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Gallery</h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Explore our collection of AI-generated artwork
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({length: 20}).map((photo) => (
            <PhotoCardSkeleton />
          ))}
        </div>
      </div>
    </div>
  );
}
