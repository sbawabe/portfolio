import Image from "next/image";

const helloLayers = ["hello-svg", "hello-svg delay-1", "hello-svg delay-2"];

export default function Home() {
  return (
    <main className="home-hero">
      <section className="home-hero__content flex w-full flex-col justify-between gap-8 md:flex-row md:items-end">
        <div className="hello-stack" aria-hidden="true">
          {helloLayers.map((className, index) => (
            <Image
              key={`hello-${index}`}
              src="/hello.svg"
              alt=""
              width={500}
              height={200}
              aria-hidden="true"
              className={className}
              priority={index === 0}
            />
          ))}
        </div>
        <div className="hello-card white-border-card blue--bold h-fit">
          <h3 className="no-uppercase">
            My name is Sarah, and I&apos;m a Senior Software Engineer based in New York City. Welcome to my website!
          </h3>
        </div>
      </section>
    </main>
  );
}
