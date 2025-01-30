import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-800 dark:bg-background text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">FrontEnd Toolkit</h3>
            <p className="text-zinc-400">
              Empowering web developers with essential tools and resources.
            </p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-zinc-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-white">
                  Tools
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-white">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-white">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Connect</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-zinc-400 hover:text-white">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-white">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-white">
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-2">Newsletter</h4>
            <p className="text-zinc-400 mb-2">
              Stay updated with our latest tools and resources
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded bg-zinc-700 text-white"
            />
          </div>
        </div>
        <div className="mt-8 text-center text-zinc-400">
          <p>
            &copy; {new Date().getFullYear()} FrontEnd Toolkit. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
