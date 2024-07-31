import Hero from "@/components/hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { MdHomeFilled } from "react-icons/md";
import Grid from "@/components/Grid"
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Client from "@/components/client";
import Experince from "@/components/Experince";
import Approch from "@/components/Approch";
import Footer from "@/components/footer" ;




export default function Home() {
  return (
    <main className="relative flex-col bg-black-100 flex justify-center items-center overflow-hidden mx-auto sm:px-2 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Client />
        <Experince />
        <Approch />
        <Footer />
      </div>
    </main>
  );
}
