import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Stack } from "@/components/sections/stack";
import { Work } from "@/components/sections/work";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";

/**
 * Homepage — composed as server components only. No client JS on this
 * route: the shell, grid, and all sections render on the server, and the
 * one animation is plain CSS.
 *
 * Order is the pitch order for freelance clients (primary audience):
 * what I do -> what I take on -> how it runs -> with what -> proof ->
 * who -> how to reach me. The featured projects show here; the full
 * case-study index is /work.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <Services />
      <Stack />
      <Process />
      <About />
      <Contact />
    </>
  );
}
