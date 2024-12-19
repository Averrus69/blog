// app/blog/page.tsx
import Link from "next/link";

const Blog = () => {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>

      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-48 object-cover"
              src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*_bJ2z2NRfTncHAv5UjUxwA.jpeg"
              alt="Post Thumbnail"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                How to Build a Blog with Next.js
              </h3>
              <p className="text-gray-700 mb-4">
                A step-by-step guide to building a dynamic blog.
              </p>
              <Link href="/blog/post-1" className="text-blue-600">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
