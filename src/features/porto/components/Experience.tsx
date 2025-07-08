export const TimelineExperience = () => {
  const experiences = [
    {
      date: "June 2025 – Present",
      title: "Front-end Engineer",
      company: "Google",
      location: "Singapore",
    },
    {
      date: "February 2025 – May 2025",
      title: "Freelance Full-stack Developer",
      company: "Personal Finance Tracker Project",
      location: "Remote",
    },
    {
      date: "September 2024 – January 2025",
      title: "Software Engineer Intern",
      company: "Apple",
      location: "Cupertino, California – USA (Remote)",
    },
    {
      date: "June 2024 – September 2024",
      title: "Full-stack Developer",
      company: "Real Estate Listing Platform Project",
      location: "Remote",
    },
    {
      date: "March 2024 – June 2024",
      title: "AI Resume Tool Developer",
      company: "Independent Project",
      location: "Remote",
    },
    {
      date: "November 2023 – March 2024",
      title: "Back-end Engineer",
      company: "EduPro LMS Project",
      location: "Remote",
    },
    {
      date: "July 2023 – November 2023",
      title: "Mobile Developer",
      company: "Restaurant Booking App Project",
      location: "Remote",
    },
    {
      date: "February 2023 – July 2023",
      title: "Frontend Engineer",
      company: "Internal Performance Dashboard Project",
      location: "Remote",
    },
    {
      date: "September 2021 – December 2022",
      title: "BSc Computer Science",
      company: "International University of Technology",
      location: "Munich, Germany",
    },
    {
      date: "July 2019 – August 2021",
      title: "A-Level Diploma (STEM)",
      company: "British International School",
      location: "Jakarta, Indonesia",
    },
  ];

  return (
    <section id="experience" className="bg-[#181c1c] text-white py-16 px-4 ">
      <h2 className="text-3xl font-bold text-center mb-12">Experiences</h2>

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-500 -translate-x-1/2 z-0" />

        <div className="space-y-10 relative z-10">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="grid grid-cols-[1fr_40px_1fr] items-center"
            >
              <div className="text-right text-green-300 text-sm">
                {exp.date}
              </div>

              {/* Tengah: Dot */}
              <div className="flex justify-center items-center">
                <div className="w-2.5 h-2.5 bg-[#395b64] rounded-full  shadow-md" />
              </div>

              <div>
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
