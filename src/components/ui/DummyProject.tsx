import Image from "next/image";

interface DummyContentProps {
  situation: string;
  task: string;
  action: string;
  result: string;
  image: string;
}

export const DummyContent = ({
  situation,
  task,
  action,
  result,
  image,
}: DummyContentProps) => {
  return (
    <div className="bg-[#181c1c] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <div className="max-w-3xl mx-auto text-white text-base md:text-lg space-y-6">
        <div>
          <h3 className="font-bold text-white mb-1">Situation:</h3>
          <p>{situation}</p>
        </div>
        <div>
          <h3 className="font-bold text-white mb-1">Task:</h3>
          <p>{task}</p>
        </div>
        <div>
          <h3 className="font-bold text-white mb-1">Action:</h3>
          <p>{action}</p>
        </div>
        <div>
          <h3 className="font-bold text-white mb-1">Result:</h3>
          <p>{result}</p>
        </div>
      </div>

      <div className="relative w-full h-64 md:h-96 mt-10">
        <Image
          src={image}
          alt="Project mockup"
          className="object-contain"
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </div>
    </div>
  );
};
