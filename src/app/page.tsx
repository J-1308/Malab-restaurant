import { FloatingCall, NoticeBar, SiteHeader } from "./_components/site-header";
import { Footer } from "./_sections/footer";
import { Hero } from "./_sections/hero";
import { Inside } from "./_sections/inside";
import { Reviews } from "./_sections/reviews";
import { Signatures } from "./_sections/signatures";
import { Visit } from "./_sections/visit";
import { Welcome } from "./_sections/welcome";

export default function Home() {
  return (
    <>
      <NoticeBar />
      <SiteHeader />
      <main>
        <Hero />
        <Welcome />
        <Signatures />
        <Inside />
        <Reviews />
        <Visit />
      </main>
      <Footer />
      <FloatingCall />
    </>
  );
}
