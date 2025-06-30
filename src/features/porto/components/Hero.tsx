export const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#181c1c] font-mono relative overflow-hidden px-4 py-10 sm:px-8 sm:py-16">
      {/* Gambar PNG di sisi kanan background */}
      <img
        src="/nobg.png"
        alt="Background Decoration"
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] opacity-20 pointer-events-none z-0"
      />

      {/* Konten utama */}
      <div className="border border-white w-full max-w-5xl space-y-4 text-white relative z-10 bg-[#181c1c]/80 p-4 sm:p-6">
        {/* Header */}
        <div className="border border-white p-2 sm:p-3">
          <h1 className="text-lg sm:text-xl font-bold">Hello Everyone!</h1>
        </div>

        {/* Greetings Section */}
        <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] border border-white">
          <div className="border-b sm:border-b-0 sm:border-r border-white p-2 text-green-300">
            Greetings.
          </div>
          <div className="p-2 text-sm text-justify">
            I'm Muhammad Hanif Fauzi, a Full-Stack Web Developer based in
            Tangerang Selatan, Banten, with a passion for building scalable and
            high-performance web solutions tailored to real business needs.
            Proficient in modern technologies like React, Next.js, Node.js, and
            MongoDB, I specialize in crafting responsive front-end interfaces
            and robust back-end architectures. With a strong focus on clean
            code, performance optimization, and user experience, I aim to turn
            complex ideas into elegant, reliable applications that drive
            meaningful results.
          </div>
        </div>

        {/* Pages Section */}
        <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] border border-white">
          <div className="border-b sm:border-b-0 sm:border-r border-white p-2 text-green-300">
            Pages.
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-2 text-xs">
            <a
              href="#"
              className="border border-white p-2 hover:bg-white hover:text-black text-center"
            >
              Home
            </a>
            <a
              href="#"
              className="border border-white p-2 hover:bg-white hover:text-black text-center"
            >
              Experiences
            </a>
            <a
              href="#"
              className="border border-white p-2 hover:bg-white hover:text-black text-center"
            >
              Contacts
            </a>
            <a
              href="#"
              className="border border-white p-2 hover:bg-white hover:text-black text-center"
            >
              About
            </a>
            <a
              href="#"
              className="border border-white p-2 hover:bg-white hover:text-black text-center"
            >
              Projects
            </a>
            <a
              href="#"
              className="border border-white p-2 hover:bg-white hover:text-black text-center"
            >
              Download My Resume
            </a>
            <a
              href="#"
              className="border border-white p-2 hover:bg-white hover:text-black text-center"
            >
              Skills
            </a>
            <a
              href="#"
              className="border border-white p-2 hover:bg-white hover:text-black text-center"
            >
              Blogs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
