"use client"

import Image from "next/image"
import * as React from "react"

import { FadeInTransition } from "@/components/fade-in-transition"

const MAX_IMAGE_HEIGHT = 420

type Artwork = {
  src: string
  name: string
  description?: string
  size?: string
  category: string
  width: number
  height: number
}

type ArtworkBase = Omit<Artwork, "width" | "height">

const IMAGE_DIMENSIONS: Record<string, { width: number; height: number }> = {
  "/art/apple-min.jpg": { width: 3088, height: 3048 },
  "/art/bear-min.jpg": { width: 3840, height: 2981 },
  "/art/bird-min.jpg": { width: 3152, height: 4200 },
  "/art/cat-min.jpg": { width: 3264, height: 4224 },
  "/art/charcoalScream-min.jpg": { width: 506, height: 680 },
  "/art/chicken-min.jpg": { width: 3149, height: 2960 },
  "/art/duck-min.jpg": { width: 2000, height: 1500 },
  "/art/grandpa-min.jpg": { width: 2560, height: 3583 },
  "/art/isaac-min.jpg": { width: 3329, height: 4509 },
  "/art/pearls-min.jpg": { width: 2624, height: 3250 },
  "/art/penBottle-min.jpg": { width: 2698, height: 3464 },
  "/art/skydiver-min.jpg": { width: 2916, height: 2142 },
  "/art/teapot-min.jpg": { width: 1187, height: 1367 },
  "/design/beamSticker-min.png": { width: 717, height: 465 },
  "/design/blueno-min.jpg": { width: 1000, height: 1000 },
  "/design/breakthrough-min.jpg": { width: 1600, height: 1200 },
  "/design/caitlin_gammaPhi-min.jpg": { width: 720, height: 1280 },
  "/design/coffeeConvo-min.jpg": { width: 1780, height: 1103 },
  "/design/colorado_small-min.jpg": { width: 792, height: 1050 },
  "/design/dessertsDG_vertical-01-min.jpg": { width: 936, height: 1212 },
  "/design/dg_block_design-min.png": { width: 1997, height: 1510 },
  "/design/dreamer-min.jpg": { width: 2048, height: 1536 },
  "/design/empty_calendars-01-min.png": { width: 2325, height: 3225 },
  "/design/gameNight-01-min.jpg": { width: 2550, height: 3300 },
  "/design/gradBooklet-min.jpg": { width: 1050, height: 1275 },
  "/design/groovy_dg-01-min.png": { width: 2550, height: 1650 },
  "/design/hat_designs-02-min.png": { width: 1386, height: 633 },
  "/design/hat_designs-03-min.png": { width: 1151, height: 548 },
  "/design/joinListserv.jpeg": { width: 1500, height: 1621 },
  "/design/lazyLunches-min.jpg": { width: 3703, height: 2250 },
  // "/design/lineup-min.png": { width: 1000, height: 1500 },
  "/design/paintNight-min.jpg": { width: 1229, height: 799 },
  "/design/review_finder_blue-02-min.png": { width: 1311, height: 682 },
}

const FALLBACK_DIMENSIONS = { width: 1600, height: 1600 }

function withDimensions(items: ArtworkBase[]): Artwork[] {
  return items.map((item) => {
    const dims = IMAGE_DIMENSIONS[item.src]
    if (!dims) {
      console.warn(`Missing dimensions for ${item.src}`)
    }
    return {
      ...item,
      ...(dims ?? FALLBACK_DIMENSIONS),
    }
  })
}

const artSlidesOne: ArtworkBase[] = [
  { src: "/art/apple-min.jpg", name: "Apple", description: "Colored pencil on toned paper", size: "9 x 9", category: "Studio Art" },
  { src: "/art/bear-min.jpg", name: "Bear & Dragonfly", description: "Cut paper", size: "24 x 18", category: "Studio Art" },
  { src: "/art/bird-min.jpg", name: "The Bluebird", description: "Micron + paint pen", size: "10 x 12", category: "Studio Art" },
  { src: "/art/cat-min.jpg", name: "Bullwinkle", description: "Paint pen on black paper", size: "12 x 18", category: "Studio Art" },
  { src: "/art/charcoalScream-min.jpg", name: "Scream", description: "Charcoal", size: "18 x 24", category: "Studio Art" },
  { src: "/art/chicken-min.jpg", name: "Chicken", description: "Micron + paint pen", size: "9 x 9", category: "Studio Art" },
  { src: "/art/duck-min.jpg", name: "Duck", category: "Studio Art", description: "Micron + paint pen" },
  { src: "/design/dreamer-min.jpg", name: "Dreamer", category: "Studio Art", description: "Cut paper" },
]

const artSlidesTwo: ArtworkBase[] = [
  { src: "/art/grandpa-min.jpg", name: "Grandpa", category: "Studio Art", description: "Micron pen" },
  { src: "/art/isaac-min.jpg", name: "Isaac", category: "Studio Art", description: "Chalk pastel" },
  { src: "/art/pearls-min.jpg", name: "Pearls", category: "Studio Art", description: "Inkwash" },
  { src: "/art/penBottle-min.jpg", name: "Pen & Bottle", category: "Studio Art", description: "Micron pen + colored pencil" },
  { src: "/art/skydiver-min.jpg", name: "Skydiver", category: "Studio Art", description: "Colored pencil" },
  { src: "/art/teapot-min.jpg", name: "Teapot", category: "Studio Art", description: "Colored pencil" },
  { src: "/design/breakthrough-min.jpg", name: "Breakthrough", category: "Studio Art", description: "Cut paper + chicken wire" },
]

const posterDesigns: ArtworkBase[] = [
  { src: "/design/caitlin_gammaPhi-min.jpg", name: "Gamma Phi", category: "Poster Design" },
  { src: "/design/coffeeConvo-min.jpg", name: "Coffee Conversations", category: "Poster Design" },
  { src: "/design/joinListserv.jpeg", name: "Join Listserv", category: "Poster Design" },
  { src: "/design/gameNight-01-min.jpg", name: "Game Night", category: "Poster Design" },
  { src: "/design/empty_calendars-01-min.png", name: "Empty Calendars", category: "Poster Design" },
  { src: "/design/lazyLunches-min.jpg", name: "Lazy Lunches", category: "Poster Design" },
  { src: "/design/paintNight-min.jpg", name: "Paint Night", category: "Poster Design" },
  { src: "/design/blueno-min.jpg", name: "SW Blueno", category: "Poster Design" },
  // { src: "/design/lineup-min.png", name: "SW Lineup", category: "Poster Design" },
  { src: "/design/gradBooklet-min.jpg", name: "Grad Booklet", category: "Poster Design" },
  { src: "/design/colorado_small-min.jpg", name: "Colorado", category: "Poster Design" },
  { src: "/design/dessertsDG_vertical-01-min.jpg", name: "Desserts DG", category: "Poster Design" },
]

const stickerLogoDesigns: ArtworkBase[] = [
  { src: "/design/groovy_dg-01-min.png", name: "Groovy DG", category: "Sticker & Logo" },
  { src: "/design/hat_designs-02-min.png", name: "Hat Designs DG", category: "Sticker & Logo" },
  { src: "/design/beamSticker-min.png", name: "BEAM Sticker", category: "Sticker & Logo" },
  { src: "/design/dg_block_design-min.png", name: "DG Block Design", category: "Sticker & Logo" },
  { src: "/design/hat_designs-03-min.png", name: "Hat Designs DG 2", category: "Sticker & Logo" },
  { src: "/design/review_finder_blue-02-min.png", name: "Review Finder", category: "Sticker & Logo" },
]

const GALLERY_ITEMS: Artwork[] = withDimensions([
  ...artSlidesOne,
  ...artSlidesTwo,
  ...posterDesigns,
  ...stickerLogoDesigns,
])

const INITIAL_BATCH = 12
const BATCH_SIZE = 9

export default function ArtPage() {
  const [visibleCount, setVisibleCount] = React.useState(INITIAL_BATCH)
  const sentinelRef = React.useRef<HTMLDivElement | null>(null)
  const hasMoreToShow = visibleCount < GALLERY_ITEMS.length

  React.useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel || !hasMoreToShow) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((current) => Math.min(current + BATCH_SIZE, GALLERY_ITEMS.length))
        }
      },
      { rootMargin: "0px 0px 200px 0px" }
    )

    observer.observe(sentinel)

    return () => {
      observer.disconnect()
    }
  }, [hasMoreToShow, visibleCount])

  const visibleItems = React.useMemo(() => GALLERY_ITEMS.slice(0, visibleCount), [visibleCount])

  return (
    <section className="flex flex-col gap-8 pb-16">
      <header className="space-y-3">
        <h1 className="text-4xl font-semibold tracking-tight">Art &amp; Design</h1>
        <p className="max-w-3xl text-base text-muted-foreground">
          Making art has always been a huge part of life. Here's a peek into some drawings, mixed media art, posters,
          and more that I've created over the years.
        </p>
      </header>

      <div className="flex flex-wrap gap-4 sm:gap-5 lg:gap-6">
        {visibleItems.map((item, index) => {
          const displayHeight = Math.min(item.height, MAX_IMAGE_HEIGHT)
          const tileStyle = { "--tile-height": `${displayHeight}px` } as React.CSSProperties

          return (
            <FadeInTransition
              key={`${item.src}-${index}`}
              delay={(index % INITIAL_BATCH) * 0.03}
              className="flex w-full sm:w-auto"
            >
              <figure
                className="group relative w-full max-w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:w-fit sm:h-[var(--tile-height)] sm:max-h-[var(--tile-height)]"
                tabIndex={0}
                style={tileStyle}
              >
                <div
                  className="relative flex w-full items-center justify-center overflow-hidden rounded-md sm:h-[var(--tile-height)] sm:max-h-[var(--tile-height)] sm:w-auto"
                >
                  <Image
                    src={item.src}
                    alt={item.name || "Art piece"}
                    width={item.width}
                    height={item.height}
                    className="h-auto w-full object-contain transition duration-500 ease-out group-hover:scale-105 sm:h-[var(--tile-height)] sm:w-auto"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, (max-width: 1600px) 32vw, 420px"
                    priority={index < 4}
                    loading={index < 4 ? "eager" : "lazy"}
                  />
                  <div className="pointer-events-none absolute inset-0 flex flex-col justify-end gap-2 bg-gradient-to-t from-black/85 via-black/30 to-transparent px-4 py-5 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <p className="text-base font-semibold tracking-wide">{item.name}</p>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/80">
                      {item.category}
                      {item.size ? ` • ${item.size}` : ""}
                    </p>
                    {item.description ? <p className="text-sm text-white/90">{item.description}</p> : null}
                  </div>
                </div>
                <figcaption className="sr-only">
                  {item.name} — {item.category}
                  {item.size ? `, ${item.size}` : ""}
                  {item.description ? `. ${item.description}` : ""}
                </figcaption>
              </figure>
            </FadeInTransition>
          )
        })}
      </div>

      <div ref={sentinelRef} aria-hidden className="h-20 w-full" />
      <p className="text-center text-xs uppercase tracking-[0.4em] text-muted-foreground">
        {hasMoreToShow ? "Keep scrolling to load more" : "You've reached the end... for now. :)"}
      </p>
    </section>
  )
}
