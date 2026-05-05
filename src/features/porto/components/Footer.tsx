"use client";

export const Footer = () => {

  return (
    <footer className="py-24 px-6 md:px-16 lg:px-24 border-t border-foreground/10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <div className="space-y-6">
          <div className="flex flex-col leading-[0.7]">
            <span className="text-3xl font-black tracking-tighter">MUHAMMAD</span>
            <span className="text-3xl font-black tracking-tighter text-primary">HANIF FAUZI</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-12 md:gap-24">
          <div className="space-y-4">
            <p className="text-xs font-black uppercase tracking-[0.3em]">ARUNIKA v3.0</p>
          </div>
        </div>
      </div>

    </footer>
  );
};
