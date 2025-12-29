'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useModal } from '../context/ModalContext';

export default function MobileBottomNav() {
    const pathname = usePathname();
    const { openWishlist } = useModal();

    if (pathname === '/') return null;

    const navItems = [
        {
            name: 'Home',
            href: '/',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            ),
            activeIcon: (
                <svg className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
            )
        },
        {
            name: 'Menu',
            href: '/menu',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            activeIcon: (
                <svg className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
            )
        },
        {
            name: 'Wishlist',
            action: openWishlist,
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
            activeIcon: (
                <svg className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
            )
        },
        {
            name: 'Account',
            href: '/account',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            ),
            activeIcon: (
                <svg className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
            )
        }
    ];

    return (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[60]">
            <nav className="bg-white/90 backdrop-blur-xl border-t border-stone-200 px-6 py-3 pb-safe flex items-center justify-between shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
                {navItems.map((item) => {
                    const isActive = item.href ? (pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))) : false;

                    const content = (
                        <>
                            <div className={`transition-transform duration-300 ${isActive ? '-translate-y-1' : ''}`}>
                                {isActive ? item.activeIcon : item.icon}
                            </div>

                            <span className={`text-[9px] font-bold uppercase tracking-wider transition-all duration-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-100'
                                }`}>
                                {item.name}
                            </span>

                            {/* Active Indicator Dot */}
                            {isActive && (
                                <div className="absolute -top-3 w-8 h-0.5 bg-amber-500 rounded-b-full shadow-[0_2px_5px_rgba(245,158,11,0.5)]" />
                            )}
                        </>
                    );

                    const commonClasses = `flex flex-col items-center gap-1 transition-all duration-300 relative group ${isActive ? 'text-amber-600' : 'text-stone-400 hover:text-stone-600'}`;

                    if (item.action) {
                        return (
                            <button
                                key={item.name}
                                onClick={item.action}
                                className={commonClasses}
                            >
                                {content}
                            </button>
                        );
                    }

                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={commonClasses}
                        >
                            {content}
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}
