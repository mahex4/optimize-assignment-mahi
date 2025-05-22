import dynamic from "next/dynamic";
import Newsletter from "../components/Newsletter";
import { blogPosts } from "./constants";
import Skeleton from "../components/Skeleton";

const DynamicBlogPostCard = dynamic(() => import("../components/BlogPostCard"), {
  loading: () => <BlogPostCardSkeleton />
})

const BlogPostCardSkeleton = () => {
  return (<article className="relative border-white/20 border dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
    <div className="relative w-full h-full overflow-hidden aspect-square">
      <Skeleton className="object-cover" />
    </div>
  </article>)
}

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Blog</h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Latest insights and updates about AI art generation
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <DynamicBlogPostCard key={index} post={post} />
          ))}
        </div>

        <Newsletter />
      </div>
    </div>
  );
}