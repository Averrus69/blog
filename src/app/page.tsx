// app/page.tsx
import Link from "next/link";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <header className="bg-gray-800 text-white text-center py-16">
        <h1 className="text-4xl font-bold">Welcome to Our Blog</h1>
        <p className="mt-4 text-xl">Sharing Knowledge, Stories, and Insights</p>
        <Link
          href="/blog"
          className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Explore Posts
        </Link>
      </header>

      {/* Featured Posts */}
      <section className="container mx-auto py-16">
        <h2 className="text-2xl font-bold mb-8">Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </section>

      {/* Popular Categories */}
      <section className="container mx-auto py-16">
        <h2 className="text-2xl font-bold mb-8">Popular Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-200 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">Technology</h3>
            <p className="text-gray-600 mt-2">
              The latest news, tutorials, and trends in tech.
            </p>
            <Link
              href="/categories/technology"
              className="text-blue-600 mt-4 block"
            >
              View Articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
