"use client";
import Image from "next/image";

export const AboutMe = () => {
  return (
    <div id="about" className="bg-[#181c1c] p-4 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-[2fr_1fr] gap-4">
        <div className="flex justify-center items-start p-4 order-first md:order-last">
          <Image
            src="/fotohanif.jpeg"
            alt="Foto Hanif"
            width={300}
            height={300}
            sizes="(max-width: 768px) 100vw, 300px"
            className="border-2 rounded-sm border-white"
          />
        </div>

        <div>
          <div className="p-2 bg-[#181c1c]">
            <p className="text-green-300">About</p>
            <p>Muhammad Hanif Fauzi</p>
          </div>

          <div className="p-2 text-justify">
            <p>
              Hello! I&apos;m Muhammad Hanif Fauzi, a Full-Stack Web Developer
              passionate about building modern and efficient web applications.
              I&apos;m currently focusing on strengthening both frontend
              development with Next.js and backend development with Express.js,
              while also exploring database design and management using
              PostgreSQL.
            </p>
          </div>

          <div className="p-2 text-justify">
            <p>
              I began my journey into web development in May 2025 when I joined
              the Purwadhika Digital School bootcamp to build a solid foundation
              in full-stack development. Since then, I have continued to sharpen
              my skills through self-learning—exploring tutorials on YouTube,
              experimenting with personal projects, and diving into official
              documentation. This combination of structured learning and
              independent practice has fueled my growth and strengthened my
              passion for creating impactful web solutions.
            </p>
          </div>

          <div className="p-2 text-justify">
            <p>
              My primary learning foundation comes from the Purwadhika Digital
              School bootcamp, where I gained hands-on experience by working on
              real-world projects throughout the program. To complement this, I
              continue to pursue self-learning through YouTube tutorials and
              official documentation, which helps me strengthen problem-solving
              skills and broaden my technical understanding. At present, I am
              focusing on deepening my expertise in both frontend development
              with Next.js and backend development with Express.js, while also
              expanding my knowledge of programming languages and modern web
              technologies to become a more versatile developer.
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
            <p>Full-Stack Web Developer</p>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="p-2">
              <p className="text-green-300">Currently Working On</p>
              <p>-</p>
            </div>

            <div className="p-2">
              <p className="text-green-300">Working At</p>
              <p>-</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
