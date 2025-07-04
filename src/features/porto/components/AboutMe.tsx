"use client";

import Image from "next/image";

export const AboutMe = () => {
  return (
    <div id="about" className="bg-[#181c1c] font-mono p-4 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-[2fr_1fr] gap-4">
        {/* Gambar Profil */}
        <div className="flex justify-center items-start p-4 order-first md:order-last">
          <Image src="/fotohanif.jpeg" alt="Foto Hanif" width={300} height={300} className="border-2 rounded-sm border-white" />
        </div>

        {/* Konten Tulisan */}
        <div>
          <div className="p-2 bg-[#181c1c]">
            <p className="text-green-300">About</p>
            <p>Muhammad Hanif Fauzi</p>
          </div>

          <div className="p-2 text-justify">
            <p>
              Hello! I&apos;m Muhammad Hanif Fauzi. I am a Full-stack Web
              Developer, currently focusing and deeply developing my skills as a
              Frontend Developer using Next.js.
            </p>
          </div>

          <div className="p-2 text-justify">
            <p>
              I began my journey into web development in 2020 while working on a
              final project for a college course in Computer Programming. This
              sparked my interest, and I further honed my skills through YouTube
              tutorials and self-learning by undertaking various projects in my
              own startup, which specializes in web development services.
            </p>
          </div>

          <div className="p-2 text-justify">
            <p>
              My primary learning resources are YouTube, self-learning through
              project work, and self-debugging with the help of Stack Overflow
              and Google. Presently, I am concentrating on frontend development
              using React.js and Next.js, and I am also expanding my knowledge
              into mobile development with React Native.
            </p>
          </div>

          <div className="p-2 text-justify">
            <p>
              I have a passion for learning new things and enjoy discussing web
              development topics. I also love sharing my knowledge with others.
            </p>
          </div>

          <div className="p-2 text-justify">
            <p>
              This website is a platform for me to showcase my works, projects,
              and skills in web development.
            </p>
          </div>

          <div className="p-2 mt-8">
            <p className="text-green-300">My Role is</p>
            <p >Full-Stack Web Developer</p>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="p-2">
              <p className="text-green-300">Currently Working On</p>
              <p>Masih Rahasia Banget</p>
            </div>

            <div className="p-2">
              <p className="text-green-300">Working At</p>
              <p>Jakarta, Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
