// app/about/page.tsx
const About = () => {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-3xl font-bold mb-8">About Us</h1>

      <section>
        <h2 className="text-2xl font-bold mb-4">Our History</h2>
        <p className="text-gray-700 mb-4">
          This blog was created to share knowledge, insights, and tips on
          various topics such as technology, lifestyle, and more.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-4">
          Our mission is to inspire and educate readers with high-quality
          content on topics that matter most.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p className="text-gray-700">
          You can reach us at{" "}
          <a href="mailto:contact@blog.com" className="text-blue-600">
            revoluzee@gmail.com
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default About;
