'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function MegaMenu() {
    const [activeMenu, setActiveMenu] = useState(null);

    const menuItems = {
        'Our Menu': {
            items: [
                {
                    title: 'Restaurant Menu',
                    href: '/menu',
                    desc: 'Full dining menu with curries, breads & more',
                    image: '/assets/menu/paneer-tikka.jpg',
                    icon: '🍽️'
                },
                {
                    title: 'Traditional Sweets',
                    href: '/sweets',
                    desc: 'Handcrafted sweets made with pure ingredients',
                    image: '/assets/Hampers/IMG_7925.jpg',
                    icon: '🍬'
                },
                {
                    title: 'Fresh Bakery',
                    href: '/bakery',
                    desc: 'Cakes, pastries, cookies baked daily',
                    image: '/assets/Hampers/IMG_7834.jpg',
                    icon: '🥐'
                }
            ]
        },
        'Gifts & Orders': {
            items: [
                {
                    title: 'Gift Hampers',
                    href: '/hampers',
                    desc: 'Premium hampers for every occasion',
                    image: '/assets/Hampers/IMG_7831.jpg',
                    icon: '🎁'
                },
                {
                    title: 'Bulk Orders',
                    href: '/bulk-order',
                    desc: 'Corporate events, weddings & parties',
                    image: '/assets/Hampers/IMG_7840.jpg',
                    icon: '📦'
                }
            ]
        },
        'Locations': {
            items: [
                {
                    title: 'Ashok Nagar',
                    href: '/ashok-nagar',
                    desc: 'Road No.3, Ranchi - 834002',
                    image: '/assets/Ashok Nagar/ashok-nagar-1.png',
                    icon: '📍'
                },
                {
                    title: 'Kanke Road',
                    href: '/kanke-road',
                    desc: 'Kanke Road, Ranchi - 834006',
                    image: '/assets/Kanke/kanke-1.png',
                    icon: '📍'
                },
                {
                    title: 'Ratu Road',
                    href: '/ratu-road',
                    desc: 'Ratu Road, Ranchi - 834005',
                    image: '/assets/Ratu Road/ratu-1.png',
                    icon: '📍'
                }
            ]
        }
    };

    const singleLinks = [
        { name: 'About Us', href: '/about' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Contact', href: '/contact' }
    ];

    return (
        <nav className="hidden lg:flex items-center gap-1 ml-auto">
            {/* Mega Menu Items */}
            {Object.entries(menuItems).map(([category, data]) => (
                <div
                    key={category}
                    className="relative"
                    onMouseEnter={() => setActiveMenu(category)}
                    onMouseLeave={() => setActiveMenu(null)}
                >
                    <button className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-stone-700 hover:text-[#d4af37] transition-colors flex items-center gap-1">
                        {category}
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {/* Dropdown */}
                    {activeMenu === category && (
                        <div className="absolute top-full left-0 pt-2 z-50 animate-fade-in">
                            <div className="bg-white rounded-2xl shadow-2xl border border-stone-100 overflow-hidden min-w-[280px]">
                                <div className="p-2">
                                    {data.items.map((item, idx) => (
                                        <Link
                                            key={idx}
                                            href={item.href}
                                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-amber-50 transition-all group"
                                        >
                                            {/* Image */}
                                            <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0 shadow-sm">
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                                                />
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-xl">{item.icon}</span>
                                                    <h4 className="font-bold text-stone-900 text-sm group-hover:text-[#d4af37] transition-colors">
                                                        {item.title}
                                                    </h4>
                                                </div>
                                                <p className="text-xs text-stone-500 mt-0.5 line-clamp-1">
                                                    {item.desc}
                                                </p>
                                            </div>

                                            {/* Arrow */}
                                            <svg className="w-4 h-4 text-stone-400 group-hover:text-[#d4af37] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ))}

            {/* Single Links */}
            {singleLinks.map((link) => (
                <Link
                    key={link.name}
                    href={link.href}
                    className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-stone-700 hover:text-[#d4af37] transition-colors"
                >
                    {link.name}
                </Link>
            ))}

            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in {
                    animation: fade-in 0.2s ease-out;
                }
            `}</style>
        </nav>
    );
}
