import { useState, type FormEvent } from 'react';
import { ScrollReveal } from '../components/ui/ScrollReveal';

type InquiryType = 'Bridal' | 'Atelier' | 'Press' | 'General';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [inquiry, setInquiry] = useState<InquiryType>('Bridal');
  const [message, setMessage] = useState('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Static site — open the user's mail client with a pre-composed message.
    const subject = `${inquiry} Inquiry — ${name || 'New enquiry'}`;
    const body = `From: ${name} <${email}>\n\n${message}`;
    window.location.href = `mailto:hello@kristenandron.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <article className="pt-32 md:pt-40">
      <header className="px-6 pb-20 md:px-10 md:pb-28">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <ScrollReveal className="md:col-span-12">
            <span className="label-wide text-pewter">— Contact</span>
            <h1 className="display-xl mt-5 text-6xl leading-[0.95] md:text-8xl lg:text-[10rem]">
              Lorem ipsum{' '}
              <em className="display-italic">dolor sit amet.</em>
            </h1>
          </ScrollReveal>
        </div>
      </header>

      <section className="grid grid-cols-1 gap-12 px-6 md:grid-cols-12 md:gap-16 md:px-10">
        {/* Side info */}
        <ScrollReveal className="md:col-span-4 md:pt-3">
          <p className="editorial text-lg text-ink/75 md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt.
          </p>
          <div className="mt-10 space-y-6 border-t hairline pt-8">
            <div>
              <span className="label-wide text-pewter">Studio</span>
              <p className="display-italic mt-1.5 text-2xl">By appointment</p>
            </div>
            <div>
              <span className="label-wide text-pewter">Email</span>
              <p className="mt-1.5">
                <a
                  href="mailto:hello@kristenandron.com"
                  className="border-b hairline-strong hover:border-ink transition-colors"
                >
                  hello@kristenandron.com
                </a>
              </p>
            </div>
            <div>
              <span className="label-wide text-pewter">Elsewhere</span>
              <ul className="mt-1.5 space-y-1.5">
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-pewter transition-colors"
                  >
                    Instagram ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://pinterest.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-pewter transition-colors"
                  >
                    Pinterest ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* Form */}
        <ScrollReveal delay={0.1} className="md:col-span-8">
          <form onSubmit={onSubmit} className="grid grid-cols-1 gap-10">
            <Field label="Name" id="name">
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="field-input"
                autoComplete="name"
              />
            </Field>

            <Field label="Email" id="email">
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="field-input"
                autoComplete="email"
              />
            </Field>

            <Field label="Inquiry type">
              <div className="flex flex-wrap gap-2">
                {(['Bridal', 'Atelier', 'Press', 'General'] as InquiryType[]).map((t) => (
                  <button
                    key={t}
                    type="button"
                    data-cursor="hover"
                    onClick={() => setInquiry(t)}
                    className={[
                      'reset-btn label border px-5 py-2.5 transition-colors duration-300',
                      inquiry === t
                        ? 'border-ink bg-ink text-bone'
                        : 'hairline-strong text-ink/70 hover:border-ink hover:text-ink',
                    ].join(' ')}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </Field>

            <Field label="Message" id="message">
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={6}
                className="field-input resize-none"
              />
            </Field>

            <div className="pt-4">
              <button
                type="submit"
                data-cursor="hover"
                className="reset-btn group inline-flex items-center gap-3 border-b hairline-strong pb-2 label hover:border-ink transition-colors"
              >
                Send inquiry
                <span className="inline-block transition-transform duration-500 ease-editorial group-hover:translate-x-2">
                  →
                </span>
              </button>
            </div>
          </form>
        </ScrollReveal>
      </section>

      {/* Local field styles — kept here so they don't leak into the global stylesheet. */}
      <style>{`
        .field-input {
          width: 100%;
          border: 0;
          border-bottom: 1px solid var(--hairline-strong);
          background: transparent;
          padding: 14px 0 12px;
          font-family: 'Geist', system-ui, sans-serif;
          font-size: 18px;
          color: var(--color-ink);
          outline: none;
          transition: border-color 280ms var(--ease-silk);
        }
        .field-input:focus {
          border-bottom-color: var(--color-ink);
        }
        .field-input::placeholder {
          color: var(--color-pewter);
        }
      `}</style>
    </article>
  );
}

function Field({
  label,
  id,
  children,
}: {
  label: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="label-wide text-pewter mb-3 block"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
