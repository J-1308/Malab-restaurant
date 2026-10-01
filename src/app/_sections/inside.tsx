import { LoopVideo } from "../_components/loop-video";
import { place, somali } from "../_lib/malab";

export function Inside() {
  return (
    <section id="inside" aria-labelledby="inside-title" className="bg-card">
      <div className="mx-auto grid max-w-6xl items-center gap-10 gutter py-16 lg:grid-cols-2 lg:gap-16 lg:px-0 lg:py-24">
        <div>
          <p className="text-gold-deep">
            <span className="font-serif text-[1.15rem]">{somali.tea.so}</span>
            <span className="caps ml-2 text-[0.72rem]">· {somali.tea.en}</span>
          </p>
          <h2
            id="inside-title"
            className="mt-3 font-heading text-[clamp(2.4rem,5vw,3.6rem)] leading-[0.95] font-extrabold text-maroon uppercase"
          >
            Velvet booths, marble tables
          </h2>
          <p className="mt-5 max-w-[42ch] text-[1.1rem] leading-relaxed text-ink/80">
            Emerald and plum velvet, brass-edged marble and a crystal chandelier over it all. Come in
            for brunch with friends, a platter with the family, or a mojito and dessert after dinner on{" "}
            {place.road}.
          </p>
        </div>
        <div className="mx-auto w-full max-w-[24rem] overflow-hidden rounded-2xl shadow-[0_20px_40px_-24px_rgb(30_23_21/0.6)] lg:mx-0 lg:justify-self-end">
          <LoopVideo
            src="/media/room.mp4"
            poster="/media/room-poster.jpg"
            label="Inside Malab: emerald and plum velvet booths, gold-framed chairs and a crystal chandelier"
            className="block aspect-[720/1060] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
