"use client";

import { motion } from "framer-motion";
import { EXPO_EASE } from "@/lib/motion";

// Reusable structure — supports "experience" today, and "education" /
// "certification" later without changing the render logic below.
// Any field left as `null` is simply not rendered — visitors never see a
// TODO string. Search this file for "NEEDS INPUT" to find what's missing.
const timeline = [
  {
    id: "state-street",
    type: "experience",
    title: "Backend Financial Analyst",
    org: "State Street",
    dates: null, // NEEDS INPUT: exact employment dates
    location: null, // NEEDS INPUT: location
    employmentType: null, // NEEDS INPUT: full-time / contract / etc.
    description:
      "Worked with enterprise financial data — not a data science role, but the foundation for understanding how a trustworthy number actually gets built.",
    responsibilities: [
      "Supported financial reporting and reconciliations",
      "Worked with operational controls and KPI reporting",
      "Analysed financial processes to improve accuracy",
    ],
    technologies: [],
    achievements: null, // NEEDS INPUT: only add if factually confirmed
  },
  {
    id: "danish-crown",
    type: "experience",
    title: "Logistics Operations",
    org: "Danish Crown",
    dates: null, // NEEDS INPUT
    location: null, // NEEDS INPUT
    employmentType: null, // NEEDS INPUT
    description:
      "Worked with operational data in SAP, focused on process improvement across logistics workflows.",
    responsibilities: [
      "Managed operational data workflows in SAP",
      "Analysed logistics processes to identify improvements",
    ],
    technologies: ["SAP"],
    achievements: null,
  },
  // Future entries — same shape, different `type`:
  // { id: "msc", type: "education", title: "MSc Data Science", org: "...", ... }
  // { id: "cert-x", type: "certification", title: "...", org: "...", ... }
];

const TYPE_LABEL = {
  experience: "Experience",
  education: "Education",
  certification: "Certification",
};

const nodeVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EXPO_EASE } },
};

function TimelineCard({ entry }) {
  const meta = [entry.employmentType, entry.location].filter(Boolean).join(" · ");

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2, ease: EXPO_EASE }}
      className="rounded-xl border border-ink/10 bg-surface p-7 dark:border-chalk/10 dark:bg-surfaceDark md:p-8"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-wide text-accent">
            {TYPE_LABEL[entry.type]}
          </span>
          <h3 className="mt-1 font-display text-lg font-medium">
            {entry.title}{" "}
            <span className="text-muted dark:text-mutedDark">— {entry.org}</span>
          </h3>
        </div>
        {entry.dates && (
          <span className="font-mono text-xs text-muted dark:text-mutedDark">
            {entry.dates}
          </span>
        )}
      </div>

      {meta && (
        <p className="mt-1 font-mono text-xs text-muted dark:text-mutedDark">
          {meta}
        </p>
      )}

      <p className="mt-4 text-sm leading-relaxed text-muted dark:text-mutedDark">
        {entry.description}
      </p>

      {entry.responsibilities?.length > 0 && (
        <div className="mt-5">
          <h4 className="font-mono text-[11px] uppercase tracking-wide text-muted dark:text-mutedDark">
            Key responsibilities
          </h4>
          <ul className="mt-2 space-y-1.5">
            {entry.responsibilities.map((r) => (
              <li key={r} className="text-sm text-ink/80 dark:text-chalk/80">
                {r}
              </li>
            ))}
          </ul>
        </div>
      )}

      {entry.technologies?.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {entry.technologies.map((t) => (
            <span
              key={t}
              className="inline-flex items-center rounded-md border border-ink/15 px-2.5 py-1 font-mono text-xs text-muted dark:border-chalk/15 dark:text-mutedDark"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {entry.achievements && (
        <div className="mt-5">
          <h4 className="font-mono text-[11px] uppercase tracking-wide text-muted dark:text-mutedDark">
            Achievements
          </h4>
          <p className="mt-2 text-sm text-ink/80 dark:text-chalk/80">
            {entry.achievements}
          </p>
        </div>
      )}
    </motion.div>
  );
}

export default function ExperiencePage() {
  return (
    <main className="bg-paper text-ink dark:bg-void dark:text-chalk">
      <section className="mx-auto max-w-content px-6 pb-16 pt-40 md:pt-48">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted dark:text-mutedDark">
            Experience
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Career timeline
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted dark:text-mutedDark">
            From enterprise finance and logistics operations into data
            science — each stage, and what it actually involved.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-content px-6 pb-24">
        <div className="relative mx-auto max-w-prose">
          {/* the line — sits behind the nodes, spans the full list */}
          <div
            aria-hidden="true"
            className="absolute bottom-2 left-[7px] top-2 w-px bg-ink/10 dark:bg-chalk/10"
          />

          <ol className="space-y-10">
            {timeline.map((entry) => (
              <motion.li
                key={entry.id}
                variants={nodeVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="relative list-none pl-10"
              >
                {/* node — sits on top of the line, ring "cuts" through it */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full bg-accent ring-4 ring-paper dark:ring-void"
                />
                <TimelineCard entry={entry} />
              </motion.li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
