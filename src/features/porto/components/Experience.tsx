export const TimelineExperience = () => {
  const experiences = [
    {
      date: "May 2025 – October 2025",
      title: "Bootcamp Full-stack Web Development",
      company: "Purwadhika Digital Technology School",
      location: "Tangerang, Indonesia",
    },
    {
      date: "October 2020 – October 2024",
      title: "Islamic Family Law (Bachelor's Degree)",
      company: "STDI Imam Syafi'i",
      location: "Jember, Indonesia",
    },
  ];

  return (
<section
  id="experience"
  className="text-black py-16 px-4 border-t border-white/40"
>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Experiences
      </h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {experiences.map((exp, idx) => (
          <article
            key={idx}
            className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white/90 shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all duration-200"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-blue-500 to-cyan-400" />

            <div className="pl-4 pr-4 md:pl-6 md:pr-6 py-4 md:py-5 ml-1">
              <p className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs md:text-sm font-medium text-blue-700 shadow-sm mb-3">
                {exp.date}
              </p>

              <h3 className="text-base md:text-lg font-semibold mb-1">
                {exp.title}
              </h3>
              <p className="text-sm text-gray-700">{exp.company}</p>
              <p className="text-xs text-gray-500">{exp.location}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
