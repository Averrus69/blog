// pages/blog.tsx
import React from "react";

const Post1 = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Blog Title */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900">
          How to Build a Blog with Next.js
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          A step-by-step guide to building a dynamic blog.
        </p>
      </header>

      {/* Blog Content */}
      <article className="space-y-6 text-lg text-gray-800">
        <section>
          <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
          <p>
            In this tutorial, we'll walk through how to build a dynamic blog
            with Next.js 13. We'll cover setting up your Next.js environment,
            styling with Tailwind CSS, creating pages, and dynamic routes for
            your blog posts.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900">
            Step 1: Setting Up Your Next.js Project
          </h2>
          <p>
            To begin, create a Next.js project by running the following command
            in your terminal:
          </p>
          <pre className="bg-gray-100 p-4 rounded-md text-sm text-gray-700">
            npx create-next-app@latest blog-nextjs --typescript
          </pre>
          <p>
            After the project is created, navigate to the project directory and
            install Tailwind CSS for styling.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900">
            Step 2: Installing Tailwind CSS
          </h2>
          <p>
            Follow the instructions in the official Tailwind CSS docs to install
            and configure it for your Next.js project.
          </p>
          <pre className="bg-gray-100 p-4 rounded-md text-sm text-gray-700">
            npm install -D tailwindcss postcss autoprefixer npx tailwindcss init
          </pre>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900">
            Step 3: Creating Blog Pages
          </h2>
          <p>
            Now that we have set up Tailwind CSS, let's create some pages to
            display our blog posts. In the Next.js pages directory, you can
            create dynamic routes to display individual blog posts.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900">Conclusion</h2>
          <p>
            Congratulations! You've now learned how to build a simple blog using
            Next.js. You can expand upon this foundation by adding more features
            such as creating a content management system (CMS), integrating with
            APIs, and adding authentication.
          </p>
        </section>
      </article>
    </div>
  );
};

export default Post1;
