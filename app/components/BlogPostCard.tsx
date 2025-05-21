import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: number;
  image: string;
  link: string;
}

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <article className="relative border-white/20 border dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className="relative w-full h-full overflow-hidden aspect-square">
        <Image width={400} height={400} src={post.image} className="object-cover" alt={post.title} />
      </div>
      <div className="absolute bottom-0 w-full bg-[linear-gradient(to_top,_rgba(15,23,42,1)_0%,_rgba(15,23,42,0.8)_70%,_rgba(15,23,42,0)_100%)] p-6">
        <div className="flex items-center mb-4">
          <span className="text-sm text-gray-600 dark:text-gray-300">
            {post.date}
          </span>
          <span className="mx-2 text-gray-400">•</span>
          <span className="text-sm text-gray-600 dark:text-gray-300">
            {post.readTime} min read
          </span>
        </div>
        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
        <Link
          href={post.link}
          className="inline-flex items-center text-purple-600 hover:text-purple-700"
        >
          Read More
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
}
