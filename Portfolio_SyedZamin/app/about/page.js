export const metadata = {
  title: "About | Syed Zamin",
  description:
    "From enterprise finance to data science — the background behind the work.",
};

// Confirmed facts only. Exact dates/institution intentionally omitted rather
// than guessed — add them here once confirmed, nothing fabricated in the meantime.
const timeline = [
  {
    org: "State Street",
    role: "Backend Financial Analyst",
    body: "Worked with enterprise financial data — reporting, reconciliations, controls, and KPI tracking. The role wasn't data science, but it's where I learned what it actually takes for a number to be trusted.",
  },
  {
    org: "Danish Crown",
    role: "Logistics Operations",
    body: "Worked with operational data in SAP, focused on process improvement across logistics workflows. Different domain, same underlying skill — finding where a process breaks down and using data to fix it.",
  },
  {
    org: "MSc Data Science",
    role: "Career transition",
    body: "Went back to study the technical foundations — statistics, machine learning, data engineering — needed to turn the analytical instincts from finance and operations into models and systems.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-paper text-ink dark:bg-void dark:text-chalk">
      {/* ---------- HEADER ---------- */}
      <section className="mx-auto max-w-content px-6 pb-16 pt-40 md:pt-48">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted dark:text-mutedDark">
            About
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Building practical data science on top of enterprise business
            experience.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted dark:text-mutedDark">
            Enterprise financial data taught me what makes a number
            trustworthy. An MSc in Data Science taught me how to build the
            systems that produce it.
          </p>
        </div>
      </section>

      {/* ---------- TIMELINE ---------- */}
      <section className="mx-auto max-w-content px-6 pb-24">
        <div className="mx-auto max-w-prose space-y-6">
          {timeline.map((item) => (
            <div
              key={item.org}
              className="rounded-xl border border-ink/10 bg-surface p-8 dark:border-chalk/10 dark:bg-surfaceDark"
            >
              <h3 className="font-display text-lg font-medium">
                {item.role}{" "}
                <span className="text-muted dark:text-mutedDark">
                  — {item.org}
                </span>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted dark:text-mutedDark">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- WHY IT MATTERS ---------- */}
      <section className="border-t border-ink/[0.06] bg-ink/[0.015] px-6 py-24 dark:border-chalk/[0.08] dark:bg-chalk/[0.02]">
        <div className="mx-auto max-w-prose text-center">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Why this background matters
          </h2>
          <p className="mt-5 text-muted dark:text-mutedDark">
            Coming from finance and operations rather than a pure computer
            science path changes how I approach a modeling problem: I start
            with the business question and the decision the output needs to
            support, not with the most interesting algorithm available.
          </p>
        </div>
      </section>
    </main>
  );
}
