'use client';
import Link from 'next/link';
import Image from 'next/image';
import { locations } from '../data/locations';

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-stone-950">
      {/* Mobile Layout - All 3 in viewport */}
      <div className="lg:hidden flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <div className="flex-none py-6 px-4 text-center bg-gradient-to-b from-stone-900 to-transparent">
          <h1 className="text-2xl font-serif text-white italic mb-1">Choose Your</h1>
          <p className="text-amber-400 text-xs uppercase tracking-widest font-bold">Kaveri Experience</p>
        </div>

        {/* Three Outlets - Stacked Compact */}
        <div className="flex-1 flex flex-col gap-3 px-4 pb-6 overflow-y-auto">
          {Object.values(locations).map((loc, index) => (
            <Link
              href={`/${loc.slug}`}
              key={loc.slug}
              className="relative group rounded-2xl overflow-hidden shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 hover:scale-[1.02] flex-none"
              style={{
                height: 'calc((100vh - 140px) / 3.2)',
                minHeight: '180px'
              }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={loc.image}
                  alt={loc.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-950/50 to-transparent group-hover:from-stone-950/60 transition-all duration-500" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex items-center px-5">
                <div className="flex-1">
                  {/* Tagline */}
                  <span className="inline-block py-1 px-2.5 mb-2 rounded-full border border-white/30 bg-black/30 text-white/90 text-[8px] uppercase tracking-wider font-bold backdrop-blur-sm">
                    {loc.tagline}
                  </span>

                  {/* Title */}
                  <h2 className="text-2xl sm:text-3xl font-serif text-white italic mb-2 drop-shadow-lg">
                    {loc.name}
                  </h2>

                  {/* Description */}
                  <p className="text-stone-300 text-xs leading-relaxed mb-3 max-w-[200px]">
                    {loc.description}
                  </p>

                  {/* Arrow Icon */}
                  <div className="flex items-center gap-2 text-amber-400 group-hover:gap-3 transition-all">
                    <span className="text-xs font-bold uppercase tracking-wider">Explore</span>
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>

                {/* Decorative Number */}
                <div className="flex-none ml-4 opacity-20 group-hover:opacity-30 transition-opacity">
                  <span className="text-6xl font-serif italic text-white font-bold">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Border Accent */}
              <div className={`absolute inset-0 border-2 border-transparent group-hover:border-amber-500/30 rounded-2xl transition-colors duration-500 pointer-events-none`} />
            </Link>
          ))}
        </div>
      </div>

      {/* Desktop Layout - Side by Side (Keep Original) */}
      <div className="hidden lg:flex lg:flex-row h-screen w-full overflow-hidden">
        {Object.values(locations).map((loc) => (
          <Link
            href={`/${loc.slug}`}
            key={loc.slug}
            className="relative flex-1 group transition-all duration-700 ease-out hover:flex-[1.5] overflow-hidden border-r border-white/10 last:border-0"
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
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-stone-950/10 opacity-80 group-hover:opacity-60 transition-opacity duration-700" />
            </div>

            {/* Glass Content Card */}
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <div className="w-full max-w-md p-10 rounded-[2rem] bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] text-center transform translate-y-8 group-hover:translate-y-0 opacity-90 group-hover:opacity-100 transition-all duration-500 ease-out flex flex-col items-center">

                <span className="inline-block py-1 px-3 mb-4 rounded-full border border-white/20 bg-black/20 text-white/90 text-[10px] uppercase tracking-[0.3em] font-bold backdrop-blur-sm">
                  {loc.tagline}
                </span>

                <h2 className="text-6xl font-serif text-white italic mb-4 drop-shadow-lg">
                  {loc.name}
                </h2>

                <div className={`w-12 h-1 rounded-full mb-6 bg-gradient-to-r from-[#d4af37] to-[#f9e29c] shadow-lg`} />

                <p className="text-stone-300 text-base font-light mb-8 max-w-xs mx-auto leading-relaxed">
                  {loc.description}
                </p>

                <button className="px-8 py-3 bg-white text-stone-900 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-amber-500 hover:text-white transition-all transform hover:scale-105 shadow-xl">
                  Explore
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
