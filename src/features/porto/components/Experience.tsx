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
      className="text-black dark:text-white py-16 px-4 border-t border-white/40 dark:border-white/10"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Experiences
      </h2>

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-3 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />

        <div className="space-y-4">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 py-4 md:py-6">
              <div className="grid gap-4 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] md:items-center">

                <div>
                  <h3 className="text-base md:text-lg font-semibold">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-200">
                    {exp.company}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {exp.location}
                  </p>
                </div>

                <div className="md:text-right">
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 font-medium">
                    {exp.date}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
