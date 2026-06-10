import Image from "next/image";
import type { ReactNode } from "react";
import type { GalleryImage } from "@/lib/site-content";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  actions?: ReactNode;
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
  actions,
}: SectionIntroProps) {
  const centered = align === "center";

  return (
    <div
      className={`space-y-5 ${
        centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
      }`}
    >
      <span className="eyebrow">{eyebrow}</span>
      <div className="space-y-4">
        <h2 className="section-heading text-balance">{title}</h2>
        {description && (
          <p
            className={`section-copy ${centered ? "mx-auto" : ""}`.trim()}
          >
            {description}
          </p>
        )}
      </div>
      {actions ? <div className="pt-2">{actions}</div> : null}
    </div>
  );
}

type GalleryMosaicProps = {
  items: GalleryImage[];
};

export function GalleryMosaic({ items }: GalleryMosaicProps) {
  return (
    <div className="mx-auto grid max-w-6xl gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-12">
      {items.map((image) => {
        const sizeClass =
          image.size === "wide"
            ? "xl:col-span-7"
            : image.size === "portrait"
              ? "xl:col-span-5"
              : "xl:col-span-6";
        const heightClass =
          image.size === "portrait"
            ? "h-[21rem] sm:h-[23rem] lg:h-[26rem]"
            : image.size === "wide"
              ? "h-[18rem] sm:h-[21rem] lg:h-[24rem]"
              : "h-[18rem] sm:h-[19rem] lg:h-[21rem]";

        return (
          <figure
            key={image.src}
            className={`group relative isolate overflow-hidden rounded-[24px] border border-white/70 bg-slate-950 shadow-[0_20px_60px_rgba(15,23,42,0.12)] ring-1 ring-slate-950/6 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(15,23,42,0.16)] ${sizeClass} ${heightClass}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/16 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/56 via-slate-950/14 via-28% to-transparent transition-all duration-500 group-hover:from-slate-950/62 group-hover:via-slate-950/18" />
            <div className="absolute inset-0 rounded-[24px] ring-1 ring-inset ring-white/14" />

            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 lg:p-6">
              <div className="max-w-[min(30rem,84%)]">
                <span className="inline-flex translate-y-0 items-center rounded-full border border-white/20 bg-white/12 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/88 backdrop-blur-md transition-all duration-500 group-hover:-translate-y-0.5 group-hover:bg-white/16">
                  {image.tag ?? "Gallery"}
                </span>
                <figcaption className="mt-3 text-pretty text-base font-semibold leading-6 text-white drop-shadow-[0_2px_10px_rgba(15,23,42,0.28)] sm:text-lg">
                  {image.title ?? image.alt}
                </figcaption>
                {image.caption ? (
                  <p className="mt-2 text-sm leading-6 text-white/78 transition-all duration-500 md:translate-y-2 md:opacity-0 group-hover:md:translate-y-0 group-hover:md:opacity-100">
                    {image.caption}
                  </p>
                ) : null}
              </div>
            </div>
          </figure>
        );
      })}
    </div>
  );
}
