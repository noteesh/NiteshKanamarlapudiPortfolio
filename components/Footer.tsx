import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Navigation Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/skills" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/noteesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors inline-flex items-center"
                >
                  <FaGithub className="mr-2" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/noteesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors inline-flex items-center"
                >
                  <FaLinkedin className="mr-2" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:niteshkanamarlapudi@gmail.com"
                  className="text-gray-400 hover:text-blue-400 transition-colors inline-flex items-center"
                >
                  <FaEnvelope className="mr-2" />
                  Email
                </a>
              </li>
            </ul>
          </div>

          {/* About This Site */}
          <div>
            <h3 className="text-white font-semibold mb-4">Built With</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Portfolio crafted with <span className="text-blue-400 font-medium">Next.js 14</span>, <span className="text-blue-400 font-medium">TypeScript</span>, <span className="text-blue-400 font-medium">Tailwind CSS</span>, and <span className="text-blue-400 font-medium">Framer Motion</span> :)
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Nitesh Kanamarlapudi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
