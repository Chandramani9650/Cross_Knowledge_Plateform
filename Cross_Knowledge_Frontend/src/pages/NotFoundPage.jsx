import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import notfound2 from "../assets/notfound2.png"

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-pink-50 text-center px-4">
      <h1 className="text-6xl font-extrabold text-pink-500 mb-3">404</h1>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Uh-oh! We couldn’t find that page.
      </h2>
      <p className="text-gray-600 mb-5 max-w-sm">
        It seems you’ve wandered off. Let’s take you back where it’s safe!
      </p>

      <Link
        to="/"
        className="flex items-center gap-2 px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        Home
      </Link>

      <img
        src={notfound2}
        alt="404 Illustration"
        className="w-64 mt-8"
      />
    </div>
  );
}
