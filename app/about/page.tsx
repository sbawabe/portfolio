import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <section className="flex flex-col gap-12 lg:gap-4">
      <div className="work-section">
        <div className="work-content gap-6">
          <Image
            src="/hello.svg"
            alt="Hello illustration"
            width={320}
            height={128}
            priority
            className="w-full max-w-xs"
          />
          <p>
            My name is Sarah, and I’m a <b>Senior Software Engineer</b> at Fern (acquired by Postman in 2026), currently based in New York City.
            I work on Fern’s core docs team, where I collaborate closely with designers, engineers, and customers to build tools that are
            both powerful and a joy to use.
          </p>
          <p>
            I’ve always been drawn to the intersection of <b>art, math, and science</b>. I began college studying physics, but everything clicked
            when I took my first programming (and later, UI/UX) course. At Brown University (Class of 2021), I went on to double major in{" "}
            <b>Computer Science and Astrophysics</b>, with a strong focus on design, and served as the <b>Head Teaching Assistant for UI/UX</b>{" "}
            cementing my passion for building beautiful, thoughtful, and impactful products.
          </p>
          <p>Outside of work, you can find me drinking coffee, running, cooking, and playing with my cat, Gouda.🐱</p>
        </div>

        <div className="work-image lg:max-w-[40vw]">
          <Image
            src="/about/lake2.JPG"
            alt="Sarah portrait"
            width={1000}
            height={1000}
            objectFit="cover"
            className="rounded-md"
            priority
          />
        </div>
      </div>
    </section>
  )
}
