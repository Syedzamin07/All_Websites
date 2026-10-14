"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, EXPO_EASE } from "@/lib/motion";

// Each category: { title, intro?, skills: [{ name, icon?, description?, note? }] }
// Only confirmed skills belong here — empty arrays are intentional, not
// missing markup. Categories with zero skills are filtered out at render
// time rather than shown as a visible gap. Add real entries as they're
// confirmed; nothing here is guessed.
const skillCategories = [
  {
    title: "Programming Languages",
    skills: [{ name: "Python" }, { name: "SQL" }],
  },
  {
    title: "Data Analysis",
    skills: [{ name: "Pandas" }, { name: "NumPy" }],
  },
  {
    title: "Machine Learning",
    skills: [
      { name: "Scikit-learn" },
      { name: "XGBoost" },
      { name: "Imbalanced Learning" },
      { name: "Classification" },
      { name: "Feature Engineering" },
      { name: "Model Evaluation" },
      { name: "SHAP" },
    ],
  },
  {
    title: "Statistics",
    skills: [
      { name: "Hypothesis Testing" },
      { name: "Probability" },
      { name: "Confidence Intervals" },
    ],
  },
  {
    title: "Databases",
    skills: [{ name: "MySQL" }],
  },
  {
    title: "Data Visualisation",
    skills: [{ name: "Matplotlib" }],
  },
  {
    title: "Business Intelligence",
    skills: [{ name: "Power BI" }, { name: "Microsoft Excel" }],
  },
  {
    title: "Tools & Platforms",
    skills: [{ name: "Git" }, { name: "GitHub" }, { name: "SAP" }],
  },
];

function SkillChip({ skill }) {
  // No description → compact tag. With a description → a slightly taller
  // block so the one-liner has room, without turning every skill into a card.
  if (!skill.description) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-md border border-ink/15 px-3 py-1.5 font-mono text-xs text-ink/80 transition-colors duration-200 dark:border-chalk/15 dark:text-chalk/80">
        {skill.icon && <span aria-hidden="true">{skill.icon}</span>}
        {skill.name}
        {skill.note && (
          <span className="text-muted dark:text-mutedDark">· {skill.note}</span>
        )}
      </span>
    );
  }

  return (
    <div className="rounded-md border border-ink/15 px-3 py-2 dark:border-chalk/15">
      <span className="inline-flex items-center gap-1.5 font-mono text-xs text-ink/80 dark:text-chalk/80">
        {skill.icon && <span aria-hidden="true">{skill.icon}</span>}
        {skill.name}
        {skill.note && (
          <span className="text-muted dark:text-mutedDark">· {skill.note}</span>
        )}
      </span>
      <p className="mt-1 text-xs leading-snug text-muted dark:text-mutedDark">
        {skill.description}
      </p>
    </div>
  );
}

function SkillCategory({ category }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: EXPO_EASE }}
      className="h-full rounded-xl border border-ink/10 bg-surface p-9 shadow-subtle transition-all duration-200 hover:border-ink/20 hover:shadow-card dark:border-chalk/10 dark:bg-surfaceDark dark:hover:border-chalk/20 dark:hover:shadow-cardDark md:p-10"
    >
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="font-display text-xl font-medium tracking-tight">
          {category.title}
        </h3>
        <span className="font-mono text-[11px] text-muted/70 dark:text-mutedDark/70">
          {category.skills.length}
        </span>
      </div>

      {category.intro && (
        <p className="mt-2.5 text-sm leading-relaxed text-muted dark:text-mutedDark">
          {category.intro}
        </p>
      )}

      <div className="mt-6 border-t border-ink/10 pt-6 dark:border-chalk/10">
        <div className="flex flex-wrap gap-2.5">
          {category.skills.map((skill) => (
            <SkillChip key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function SkillsPage() {
  const populatedCategories = skillCategories.filter(
    (c) => c.skills.length > 0
  );

  return (
    <main className="bg-paper text-ink dark:bg-void dark:text-chalk">
      <section className="mx-auto max-w-content px-6 pb-24 pt-40 md:pt-48">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted dark:text-mutedDark">
            Skills
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Skills & tools
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted dark:text-mutedDark">
            Organised by category, not rated by level — every skill here is
            one I&apos;ve actually used.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-content px-6 pb-32 md:pb-40">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 items-start gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10"
        >
          {populatedCategories.map((category) => (
            <SkillCategory key={category.title} category={category} />
          ))}
        </motion.div>
      </section>
    </main>
  );
}
