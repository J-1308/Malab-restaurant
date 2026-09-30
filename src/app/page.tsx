import { Footer } from "./_sections/footer";
import { Hero } from "./_sections/hero";
import { Kitchen } from "./_sections/kitchen";
import { Reviews } from "./_sections/reviews";
import { Room } from "./_sections/room";
import { Visit } from "./_sections/visit";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <Kitchen />
        <Room />
        <Reviews />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
