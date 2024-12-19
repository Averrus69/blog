// components/Footer.tsx
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Blog Website. All rights reserved.</p>
        <div className="mt-4">
          <Link href="https://twitter.com" className="text-blue-400 mx-2">
            Twitter
          </Link>
          <Link href="https://facebook.com" className="text-blue-600 mx-2">
            Facebook
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
