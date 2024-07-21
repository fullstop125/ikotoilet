import "@styles/globals.css";
import Script from "next/script";

// Theme
import { ThemeProvider } from "@components/theme/ThemeProvider";

export const metadata = {
  title: "IkoToilet",
  description:
    "Ikotoilet is a social enterprise that invests in innovation to solve sanitation crisis in Africa and beyond. We offer high quality mobile toilets ranging from simple portable toilets to VIP mobile vacuum toilet systems.",
  keywords: "mobile toilets, portable toilets, vip toilets, mobile vacuum toilets, mobile toilets for sale, mobile toilets for rent, mobile toilets for hire, mobile toilets for events, mobile toilets for construction sites, mobile toilets for weddings, mobile toilets for funerals, mobile toilets for parties, mobile toilets for festivals, mobile toilets for schools, mobile toilets for churches, mobile toilets for hospitals, mobile toilets for government, mobile toilets for businesses, mobile toilets for homes, mobile toilets for offices, mobile toilets for hotels, mobile toilets for restaurants, mobile toilets for bars, mobile toilets for clubs, mobile toilets for markets, mobile toilets for farms, mobile toilets for factories, mobile toilets for warehouses, mobile toilets for mines, mobile toilets for oil rigs, mobile toilets for military, mobile toilets for police, mobile toilets for fire fighters, mobile toilets for disaster relief, mobile toilets for refugees, mobile toilets for displaced persons, mobile toilets for homeless, mobile toilets for slums, mobile toilets for informal settlements, mobile toilets for rural areas, mobile toilets for urban areas, mobile toilets for cities, mobile toilets for towns, mobile toilets for villages, mobile toilets for communities, mobile toilets for countries, mobile toilets for continents, mobile toilets for the world, mobile toilets for the universe",
};

const RootLayout = async ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        <link href="https://languages.abranhe.com/logos.css" rel="stylesheet" />
      </head>
      <body className="dark:bg-black bg-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main id="app" className="app dark:bg-black bg-white">
            {children}
          </main>
        </ThemeProvider>
      </body>
      <Script
        src="https://kit.fontawesome.com/75471b6a8f.js"
        crossorigin="anonymous"
      ></Script>
    </html>
  );
};

export default RootLayout;
