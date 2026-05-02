import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t hairline mt-32 px-6 py-16 md:px-10 md:py-20">
      <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
        <div className="col-span-2">
          <Link to="/" className="reset-btn group inline-flex items-baseline gap-2">
            <span className="display-italic text-4xl md:text-5xl leading-none transition-opacity group-hover:opacity-70">
              Kristen Andron
            </span>
          </Link>
          <p className="editorial mt-4 max-w-md text-pewter text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>

        <div>
          <h4 className="label-wide text-ink/60 mb-4">Index</h4>
          <ul className="space-y-2.5">
            {[
              { to: '/bridal', label: 'Bridal' },
              { to: '/atelier', label: 'Atelier' },
              { to: '/about', label: 'About' },
              { to: '/contact', label: 'Contact' },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm hover:text-pewter transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="label-wide text-ink/60 mb-4">Elsewhere</h4>
          <ul className="space-y-2.5">
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-sm hover:text-pewter transition-colors"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                className="text-sm hover:text-pewter transition-colors"
              >
                Pinterest
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@kristenandron.com"
                className="text-sm hover:text-pewter transition-colors"
              >
                hello@kristenandron.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 flex flex-col-reverse gap-3 border-t hairline pt-6 md:flex-row md:items-center md:justify-between">
        <span className="label text-ink/50">
          © {new Date().getFullYear()} Kristen Andron. All rights reserved.
        </span>
        <span className="label text-ink/50">Lorem ipsum dolor sit amet.</span>
      </div>
    </footer>
  );
}
