import { getDictionary } from "@/dictionaries";
import { Language } from "@/i18n-config";

type HomeType = {
  params: { lang: Language };
};

export default async function Home({ params: { lang } }: HomeType) {
  const { Home } = await getDictionary(lang);
  return (
    <main className="container mx-auto min-h-screen">
      <h1>{Home.title}</h1>
    </main>
  );
}
