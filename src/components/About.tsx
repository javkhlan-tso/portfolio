import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-neutral-100 dark:bg-neutral-800/60 px-8 py-24 md:px-20 lg:px-32">
      <h2 className="mb-4 text-xl font-bold text-neutral-900 dark:text-white md:text-2xl">
        ⚡ About Me
      </h2>

      <div className="flex flex-col items-center gap-12 md:flex-row md:items-start md:gap-16">
        <div className="flex flex-col gap-5 text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 md:flex-1">
          <p>
            Hey! I&apos;m Javkhlan Tsogtsaikhan, I&apos;ve been close to a computer since an early age,
            and been passionate about it ever since. I really liked to build
            stuff using no-code tools back in 2010, and from that, I explored
            how to code myself — fast-forward to today, I do programming in
            various languages and technologies, and had the privilege to work at
            a Recruitment Company and a SaaS Company.
          </p>
          <p>
            I&apos;m interested in building something awesome with code and
            automating tasks, currently focused on{" "}
            <span className="font-medium text-neutral-900 dark:text-white">
              Web Development
            </span>
            ,{" "}
            <span className="font-medium text-neutral-900 dark:text-white">
              AI/ML
            </span>
            , and{" "}
            <span className="font-medium text-neutral-900 dark:text-white">
              Open Source
            </span>
            .
          </p>
          <p>
            When I&apos;m not coding I play games with my friends, watch some
            show on Netflix, or if the weather&apos;s good, go hiking!
          </p>
        </div>

        <div className="relative shrink-0 md:w-72 lg:w-80">
          <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5 dark:ring-white/10">
            <Image
              src="/about.png"
              alt="Jake Tsogtsaikhan"
              width={400}
              height={500}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
