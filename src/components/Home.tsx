import Image from "next/image";

export default function Home() {
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col items-center justify-center gap-6 px-8 text-center"
    >
      <p className="text-3xl text-neutral-500 dark:text-neutral-400 md:mb-2">
        Hi 👋 I&apos;m
      </p>

      <div className="relative h-64 w-64 overflow-hidden rounded-full shadow-xl ring-4 ring-neutral-200 dark:ring-neutral-700 md:h-72 md:w-72 lg:h-80 lg:w-80">
        <Image
          src="/profile.png"
          alt="Jake Tsogtsaikhan"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      <h1 className="text-5xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-7xl lg:text-8xl">
        Jake Tsogtsaikhan
      </h1>
      <div className="grid w-fit grid-cols-[auto_auto_auto] items-center gap-x-3 gap-y-1 text-2xl text-neutral-500 dark:text-neutral-400">
        <span className="text-right"></span>
        <span>☕️</span>
        <span className="text-left">AI/ML</span>

        <span className="text-right">Brewing</span>
        <span>☕️</span>
        <span className="text-left">Full-stack</span>

        <span className="text-right"></span>
        <span>☕️</span>
        <span className="text-left">Math</span>
      </div>
    </section>
  );
}
