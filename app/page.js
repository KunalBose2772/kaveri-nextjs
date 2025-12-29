'use client';
import Link from 'next/link';
import Image from 'next/image';
import { locations } from '../data/locations';

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row h-screen w-screen overflow-hidden bg-stone-900">
      {Object.values(locations).map((loc) => (
        <Link
          href={`/${loc.slug}`}
          key={loc.slug}
          className="relative flex-1 group transition-all duration-700 ease-out hover:flex-[1.2] lg:hover:flex-[1.5] overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10 last:border-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={loc.image}
              alt={loc.name}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
              priority
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-stone-950/10 opacity-80 group-hover:opacity-60 transition-opacity duration-700" />
          </div>

          {/* Glass Content Card */}
          <div className="absolute inset-0 flex items-center justify-center p-6 md:p-12">
            <div className="w-full max-w-md p-8 md:p-10 rounded-[2rem] bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] text-center transform translate-y-8 group-hover:translate-y-0 opacity-90 group-hover:opacity-100 transition-all duration-500 ease-out flex flex-col items-center">

              {/* Tagline */}
              <span className="inline-block py-1 px-3 mb-4 rounded-full border border-white/20 bg-black/20 text-white/90 text-[10px] uppercase tracking-[0.3em] font-bold backdrop-blur-sm">
                {loc.tagline}
              </span>

              {/* Title */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white italic mb-4 drop-shadow-lg">
                {loc.name}
              </h2>

              {/* Divider */}
              <div className={`w-12 h-1 rounded-full mb-6 bg-${loc.color}-500 shadow-glow`} />

              {/* Description (Hidden on mobile initially, shown on hover/desktop?) 
                                Keep it simple as per original design 
                            */}
              <p className="text-stone-300 text-sm md:text-base font-light mb-8 max-w-xs mx-auto leading-relaxed">
                {loc.description}
              </p>

              {/* Button */}
              <button className="px-8 py-3 bg-white text-stone-900 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-amber-500 hover:text-white transition-all transform hover:scale-105 shadow-xl">
                Explore
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
