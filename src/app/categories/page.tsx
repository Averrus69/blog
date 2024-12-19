// app/categories/page.tsx
import Link from "next/link";
const Categories = () => {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-3xl font-bold mb-8">Categories</h1>

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
    </div>
  );
};

export default Categories;
