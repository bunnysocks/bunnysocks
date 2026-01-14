import { Intro } from "@/components/Intro";
import { Meteors } from "@/components/ui/meteors";

export default function Home() {
  return (
    <div className="w-8/12 mx-auto flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black relative h-[500px] overflow-hidden">
      <Meteors/>
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Intro/>
      </main>
    </div>
  );
}
