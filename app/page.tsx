import Hero from './components/hero';
import HeroV2 from './components/hero-v2';
import UsVsThem from './components/us-vs-them';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full flex-col items-center justify-between bg-white dark:bg-black sm:items-start">
        {/* <Hero /> */}
        <HeroV2 />
        <UsVsThem />
      </main>
    </div>
  );
}
