import HeroV2 from '@my_components/hero-v2';
import { ModeToggle } from '@my_components/navigation/mode-toggle';
import UsVsThem from '@my_components/us-vs-them';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full flex-col items-center justify-between bg-white dark:bg-black sm:items-start">
        {/* <Hero /> */}
        <ModeToggle />
        <HeroV2 />
        <UsVsThem />
      </main>
    </div>
  );
}
