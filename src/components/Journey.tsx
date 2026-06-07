const journey = [
  {
    period: "2022 – Present",
    title: "Software Engineer",
    organization: "Walmart Global Tech, Bentonville, AR, USA",
    side: "right",
  },
  {
    period: "2021 – 2022",
    title: "React Developer",
    organization: "Antra Inc., Arlington, VA, USA",
    side: "right",
  },
  {
    period: "2018 – 2021",
    title: "M.S. Computer Science",
    organization: "Concordia University Chicago, IL, USA",
    side: "left",
  },
  {
    period: "2015 – 2016",
    title: "Relationship Manager",
    organization: "XacBank, Mongolia",
    side: "right",
  },
  {
    period: "2013 – 2015",
    title: "Account Manager",
    organization: "XacBank, Mongolia",
    side: "right",
  },
  {
    period: "2011 – 2013",
    title: "Core Banking System Specialist",
    organization: "XacBank, Mongolia",
    side: "right",
  },
  {
    period: "2004 – 2010",
    title: "B.A. Mathematics",
    organization: "Bogazici University, Istanbul, Turkey",
    side: "left",
  },
] as const;

type JourneyItem = (typeof journey)[number];

function Card({ period, title, organization }: Omit<JourneyItem, "side">) {
  return (
    <div className="rounded-xl bg-white dark:bg-neutral-900 p-6 shadow-md shadow-black/10 dark:shadow-black/30 ring-1 ring-black/5 dark:ring-white/10 transition-transform duration-200 hover:-translate-y-1.5">
      <p className="text-2xl font-bold text-neutral-800 dark:text-white">
        {period}
      </p>
      <p className="mt-1 text-base font-medium text-neutral-700 dark:text-neutral-300">
        {title}
      </p>
      <p className="mt-1 text-sm text-neutral-400 dark:text-neutral-500">
        {organization}
      </p>
    </div>
  );
}

export default function Journey() {
  return (
    <section id="journey" className="px-8 py-24 md:px-20 lg:px-32">
      <h2 className="mb-16 text-center text-3xl font-semibold text-neutral-800 dark:text-white md:text-4xl">
        My Journey So Far
      </h2>

      <div className="relative mx-auto max-w-4xl">
        {/* Center line */}
        <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-neutral-800 dark:bg-neutral-400" />

        <div className="flex flex-col gap-8">
          {journey.map((item, index) => (
            <div key={index} className="relative flex items-center">
              {/* Dot on center line */}
              <div className="absolute left-1/2 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-neutral-800 dark:bg-neutral-400" />

              {item.side === "left" ? (
                <div className="w-[calc(50%-2rem)] mr-auto">
                  <Card period={item.period} title={item.title} organization={item.organization} />
                </div>
              ) : (
                <div className="w-[calc(50%-2rem)] ml-auto">
                  <Card period={item.period} title={item.title} organization={item.organization} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
