import { Contact } from "@/components/Contact";
import { CustomDock } from "@/components/CustomDock";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Intro } from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { Meteors } from "@/components/ui/meteors";

export default function Home() {
  return (
    <div className="w-8/12 mx-auto flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black relative overflow-hidden">
      <CustomDock/>
      <Meteors/>
      <main className="flex min-h-screen w-full  flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Intro/>
        <Experience/>
        <Education/>
        <Skills/>
        <Projects/>
        <Contact/>
      </main>
    </div>
  );
}