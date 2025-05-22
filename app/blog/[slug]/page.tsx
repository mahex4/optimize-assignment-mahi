import { notFound } from "next/navigation";
import Image from "next/image";
import { blogPosts } from "../constants";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.link.replace("/blog/", ""),
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.link === `/blog/${params.slug}`);

  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.link === `/blog/${params.slug}`);

  if (!post) return notFound();

  return (
    <div className="prose dark:prose-invert mx-auto px-4 mt-12 py-12">
      <h1>{post.title}</h1>
      <p className="text-sm text-white">
        {post.date} • {post.readTime} min read
      </p>
      <Image
        width={400}
        height={400}
        loading="eager"
        src={post.image}
        alt={post.title}
        className="my-6 rounded-md max-w-full"
      />
      <p>{post.excerpt}</p>
    </div>
  );
}
