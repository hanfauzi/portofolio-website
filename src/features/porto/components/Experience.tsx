export const TimelineExperience = () => {
  const experiences = [
    {
      date: "December 2024 – Present",
      title: "Front-end Developer",
      company: "Agensi Pekerjaan Ajobthing Sdn Bhd",
      location: "Sleman, Yogyakarta – Indonesia",
    },
    {
      date: "July 2023 – December 2024",
      title: "Front-end Developer",
      company: "Itsavirus",
      location: "Denpasar, Bali – Indonesia",
    },
    {
      date: "September 2022 – April 2023",
      title: "Full-stack Developer",
      company: "LnData Indonesia",
      location: "Surabaya, East Java – Indonesia",
    },
    {
      date: "August 2022 – September 2022",
      title: "Engineer Intern",
      company: "Unilever Indonesia",
      location: "Surabaya, East Java – Indonesia",
    },
    {
      date: "February 2022 – July 2022",
      title: "Mobile Development Cohort",
      company: "Bangkit Academy 2022",
      location: "Surabaya, East Java – Indonesia",
    },
    {
      date: "May 2021 – February 2023",
      title: "Founder & Full-stack Developer",
      company: "Breakpoint Indonesia",
      location: "Surabaya, East Java – Indonesia",
    },
    {
      date: "January 2020 – August 2023",
      title: "Team Coach Extracurricular",
      company: "SMAN 1 Sidoarjo",
      location: "Sidoarjo, East Java – Indonesia",
    },
  ];

  return (
    <section id='experience' className="bg-[#181c1c] text-white py-16 px-4 font-mono">
      <h2 className="text-3xl font-bold text-center mb-12">Experiences</h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Garis vertikal */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-500 -translate-x-1/2 z-0" />

        <div className="space-y-10 relative z-10">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="grid grid-cols-[1fr_40px_1fr] items-center"
            >
              {/* Kiri: Date */}
              <div className="text-right  text-green-300 text-sm">
                {exp.date}
              </div>

              {/* Tengah: Dot */}
              <div className="flex justify-center items-center">
                <div className="w-2.5 h-2.5 bg-[#395b64] rounded-full  shadow-md" />
              </div>

              {/* Kanan: Experience */}
              <div >
                <h3 className="font-semibold">{exp.title}</h3>
                <p className="text-sm">{exp.company}</p>
                <p className="text-xs text-gray-300">{exp.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
