import { Link } from "react-router-dom";
import {
  Mail,
  ArrowUpRight,
} from "lucide-react";
function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">

          {/* Brand */}

          <div className="lg:col-span-2">

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 font-bold text-xl text-white">
                S
              </div>

              <h2 className="text-3xl font-bold text-white">
                Slide
                <span className="text-indigo-400">
                  Sense
                </span>
              </h2>

            </div>

            <p className="mt-6 max-w-md leading-7 text-slate-400">
              AI-powered PowerPoint Formatting Consistency Checker
              that automatically detects and fixes presentation
              formatting issues using Machine Learning.
            </p>

            <div className="mt-8 flex gap-4">
<a
  href="https://github.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-xl border border-white/10 px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
>
  GitHub
</a>

<a
  href="https://linkedin.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-xl border border-white/10 px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
>
  LinkedIn
</a>

<a
  href="shubhangiv005@gmail.com.com"
  className="rounded-xl border border-white/10 p-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
>
  <Mail size={20} />
</a>


            </div>

          </div>

          {/* Product */}

          <div>

            <h3 className="mb-6 text-lg font-semibold text-white">
              Product
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/features" className="hover:text-white">
                  Features
                </Link>
              </li>

              <li>
                <Link to="/technology" className="hover:text-white">
                  Technology
                </Link>
              </li>

              <li>
                <Link to="/demo" className="hover:text-white">
                  Demo
                </Link>
              </li>

            </ul>

          </div>

          {/* Resources */}

          <div>

            <h3 className="mb-6 text-lg font-semibold text-white">
              Resources
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li>
                <Link
                  to="/documentation"
                  className="hover:text-white"
                >
                  Documentation
                </Link>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  API Reference
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  User Guide
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-lg font-semibold text-white">
              Contact
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>

              <li>
                <a
                  href="mailto:your@email.com"
                  className="hover:text-white"
                >
                  Email
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-white"
                >
                  GitHub
                  <ArrowUpRight size={16} />
                </a>
              </li>

            </ul>

          </div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8">

          <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">

            <p>
              © 2026 SlideSense. All rights reserved.
            </p>

            <p>
              Built with React • FastAPI • Machine Learning
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;