import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Stack } from "@/components/sections/stack";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";

/**
 * Homepage — composed as server components only. No client JS on this
 * route: the shell, grid, and all sections render on the server, and the
 * one animation is plain CSS.
 *
 * Order is the pitch order for freelance clients (primary audience):
 * what I do -> what I take on -> how it runs -> with what -> who ->
 * how to reach me. Work is its own route (/work) so this page stays
 * credible with no published case studies.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Stack />
      <About />
      <Contact />
    </>
  );
}
