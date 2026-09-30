import { LoopVideo } from "../_components/loop-video";
import { place } from "../_lib/malab";

export function Room() {
  return (
    <section id="room" aria-labelledby="room-title" className="bg-plum">
      <div className="grid items-center gap-12 gutter py-20 lg:grid-cols-12 lg:gap-8 lg:py-32">
        <div className="lg:col-span-5 lg:col-start-2">
          <p className="label text-brass">The room</p>
          <h2
            id="room-title"
            className="mt-4 font-display text-[clamp(2.6rem,6vw,4.5rem)] leading-[0.95] tracking-[-0.01em] text-balance"
          >
            Velvet, marble and a chandelier.
          </h2>
          <p className="mt-6 max-w-[38ch] text-pretty text-lg leading-relaxed text-cream/85">
            Emerald and plum booths, brass-edged marble tables and gold walls on{" "}
            {place.road}, open from breakfast until late.
          </p>
        </div>
        <figure className="lg:col-span-5 lg:col-start-7">
          <div className="relative isolate mx-auto w-full max-w-[28rem] lg:mx-0">
            <LoopVideo
              src="/media/room.mp4"
              poster="/media/room-poster.jpg"
              label="Inside Malab: emerald and plum velvet booths, gold-framed chairs and a crystal chandelier"
              className="block aspect-[720/1060] w-full bg-marble object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute -right-3 -bottom-3 -z-10 hidden h-full w-full border border-burgundy lg:block"
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
