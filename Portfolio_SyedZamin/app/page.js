import Link from "next/link";

const proof = [
  { value: "40+", label: "models shipped to production" },
  { value: "12", label: "dashboards in daily use" },
  { value: "3+ yrs", label: "building systems that don't break" },
];

const capabilities = [
  {
    code: "ML",
    title: "Modeling & ML",
    body: "Models built to hold up in production, not just on a validation set.",
  },
  {
    code: "DE",
    title: "Analytics Engineering",
    body: "Warehouses and pipelines that make every downstream number trustworthy.",
  },
  {
    code: "BI",
    title: "Dashboards & BI",
    body: "Interfaces for decisions — built for the person checking them at 8am, not the demo.",
  },
  {
    code: "DS",
    title: "Data Storytelling",
    body: "The narrative that gets a number out of a deck and into a decision.",
  },
];

const work = [
  {
    meta: "SQL · dbt · Warehouse design",
    title: "Product Analytics Warehouse",
    body: "A modeled analytics layer that turned scattered event logs into a single source of truth.",
  },
  {
    meta: "Python · scikit-learn",
    title: "Churn Risk Model",
    body: "A classification model surfacing at-risk accounts two weeks earlier than the prior heuristic.",
  },
  {
    meta: "Power BI · SQL",
    title: "Revenue Dashboard Suite",
    body: "Exec-facing dashboards that replaced a monthly slide deck with a live, always-current view.",
  },
];

export default function Home() {
  return (
    <>
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .reveal { opacity: 0; animation: reveal 0.6s cubic-bezier(0.16,1,0.3,1) forwards; }
        }
        @keyframes reveal {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <main className="bg-paper text-ink dark:bg-void dark:text-chalk">
        {/* ---------- HERO ---------- */}
        <section className="mx-auto max-w-content px-6 pb-24 pt-40 md:pb-32 md:pt-48">
          <div className="mx-auto max-w-3xl text-center">
            <p
              className="reveal font-mono text-xs uppercase tracking-[0.2em] text-muted dark:text-mutedDark"
              style={{ animationDelay: "0.05s" }}
            >
              AI / Data Scientist
            </p>

            <h1
              className="reveal mt-6 font-display text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl"
              style={{ animationDelay: "0.15s" }}
            >
              Building systems that turn{" "}
              <span className="text-accent">data</span> into decisions.
            </h1>

            <p
              className="reveal mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted dark:text-mutedDark"
              style={{ animationDelay: "0.25s" }}
            >
              I&apos;m Syed Zamin. I design and ship the models, pipelines, and
              dashboards that companies actually rely on — not the ones that
              only work in the notebook.
            </p>

            <div
              className="reveal mt-10 flex flex-wrap items-center justify-center gap-4"
              style={{ animationDelay: "0.35s" }}
            >
              <Link
                href="/dashboards"
                className="rounded-md bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent/90"
              >
                View dashboards
              </Link>
              <Link
                href="/contact"
                className="rounded-md border border-ink/15 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/30 dark:border-chalk/15 dark:text-chalk dark:hover:border-chalk/30"
              >
                Connect
              </Link>
            </div>
          </div>

          {/* Hero visual — a chart treated like a real product screenshot,
              framed in a browser chrome. Not a decoration; a proof point. */}
          <div
            className="reveal mx-auto mt-20 max-w-3xl"
            style={{ animationDelay: "0.45s" }}
          >
            <div className="overflow-hidden rounded-xl border border-ink/10 bg-surface shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] dark:border-chalk/10 dark:bg-surfaceDark dark:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-1.5 border-b border-ink/10 px-4 py-3 dark:border-chalk/10">
                <span className="h-2.5 w-2.5 rounded-full bg-ink/15 dark:bg-chalk/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-ink/15 dark:bg-chalk/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-ink/15 dark:bg-chalk/15" />
                <span className="ml-3 font-mono text-[11px] text-muted dark:text-mutedDark">
                  revenue-model.dashboard
                </span>
              </div>
              <div className="p-8">
                <svg viewBox="0 0 640 220" className="h-auto w-full" role="img" aria-label="Line chart showing an upward trend">
                  {[40, 90, 140, 190].map((y) => (
                    <line
                      key={y}
                      x1="0"
                      y1={y}
                      x2="640"
                      y2={y}
                      stroke="currentColor"
                      strokeOpacity="0.06"
                      strokeWidth="1"
                    />
                  ))}
                  <path
                    d="M0 170 L90 150 L180 158 L270 110 L360 118 L450 70 L540 78 L640 30"
                    fill="none"
                    stroke="#4C6FFF"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {[
                    [0, 170],
                    [90, 150],
                    [180, 158],
                    [270, 110],
                    [360, 118],
                    [450, 70],
                    [540, 78],
                    [640, 30],
                  ].map(([x, y]) => (
                    <circle key={`${x}-${y}`} cx={x} cy={y} r="3.5" fill="#4C6FFF" />
                  ))}
                </svg>
                <div className="mt-4 flex justify-between font-mono text-[11px] text-muted dark:text-mutedDark">
                  <span>Q1</span>
                  <span>Q2</span>
                  <span>Q3</span>
                  <span>Q4</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- PROOF STRIP ---------- */}
        <section className="border-y border-ink/[0.06] dark:border-chalk/[0.08]">
          <div className="mx-auto grid max-w-content grid-cols-1 divide-y divide-ink/[0.06] px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 dark:divide-chalk/[0.08]">
            {proof.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-1 py-10 text-center">
                <span className="font-display text-3xl font-semibold">
                  {item.value}
                </span>
                <span className="font-mono text-xs text-muted dark:text-mutedDark">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- CAPABILITIES ---------- */}
        <section className="mx-auto max-w-content px-6 py-24 md:py-32">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              What I do
            </h2>
            <p className="mt-4 text-muted dark:text-mutedDark">
              Four disciplines, one goal — data that a business can actually act on.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="group rounded-xl border border-ink/10 bg-surface p-8 transition-all duration-200 hover:-translate-y-0.5 hover:border-ink/20 hover:shadow-[0_12px_32px_-16px_rgba(0,0,0,0.12)] dark:border-chalk/10 dark:bg-surfaceDark dark:hover:border-chalk/20 dark:hover:shadow-[0_12px_32px_-16px_rgba(0,0,0,0.5)]"
              >
                <span className="inline-flex h-8 items-center rounded-md bg-accent/10 px-2.5 font-mono text-xs font-medium text-accent">
                  {c.code}
                </span>
                <h3 className="mt-5 font-display text-lg font-medium">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted dark:text-mutedDark">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- FEATURED WORK ---------- */}
        <section className="border-t border-ink/[0.06] bg-ink/[0.015] dark:border-chalk/[0.08] dark:bg-chalk/[0.02]">
          <div className="mx-auto max-w-content px-6 py-24 md:py-32">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Featured work
              </h2>
              <Link
                href="/projects"
                className="text-sm text-muted transition-colors hover:text-accent dark:text-mutedDark"
              >
                View all work →
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
              {work.map((p) => (
                <div
                  key={p.title}
                  className="rounded-xl border border-ink/10 bg-surface p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-ink/20 dark:border-chalk/10 dark:bg-surfaceDark dark:hover:border-chalk/20"
                >
                  <p className="font-mono text-[11px] uppercase tracking-wide text-muted dark:text-mutedDark">
                    {p.meta}
                  </p>
                  <h3 className="mt-3 font-display text-base font-medium">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted dark:text-mutedDark">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 font-mono text-[11px] text-muted/70 dark:text-mutedDark/70">
              placeholder copy — swap in real case studies on /projects
            </p>
          </div>
        </section>

        {/* ---------- CTA ---------- */}
        <section className="mx-auto max-w-content px-6 py-24 text-center md:py-32">
          <h2 className="mx-auto max-w-lg font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Have a problem worth solving with data?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted dark:text-mutedDark">
            I&apos;m open to conversations about hard datasets, messy
            dashboards, and models that need to actually ship.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-md bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent/90"
          >
            Connect
          </Link>
        </section>
      </main>
    </>
  );
}
