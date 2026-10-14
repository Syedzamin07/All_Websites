import EmailLink from "@/components/EmailLink";

export const metadata = {
  title: "Contact | Syed Zamin",
};

export default function ContactPage() {
  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <h2 className="text-6xl md:text-8xl font-bold mb-8 apple-gradient">Let&apos;s talk.</h2>
      <div className="space-y-6 text-center font-medium">
        <EmailLink className="text-2xl md:text-3xl text-blue-500 block hover:underline transition-all" />
        <a
          href="https://www.linkedin.com/in/syedzamin/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl md:text-3xl text-blue-500 block hover:underline transition-all"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Syedzamin07"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl md:text-3xl text-blue-500 block hover:underline transition-all"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
