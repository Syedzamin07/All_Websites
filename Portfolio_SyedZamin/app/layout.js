import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Nav from "@/components/Nav";

export const metadata = {
  title: "Syed Zamin — Data Scientist",
  description:
    "AI / Data Scientist building models, dashboards, and analytics systems that hold up in production.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var stored=window.localStorage.getItem('theme');var theme=stored||(window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');document.documentElement.classList.toggle('dark',theme==='dark')}catch(error){}})()",
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
