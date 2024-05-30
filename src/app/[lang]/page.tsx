import { getDictionary } from "@/dictionaries";
import { Language } from "@/i18n-config";

type HomeType = {
  params: { lang: Language };
};

export default async function Home({ params: { lang } }: HomeType) {
  const { Home } = await getDictionary(lang);
  console.log("Lang: ", lang);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{Home.title}</h1>
    </main>
  );
}
