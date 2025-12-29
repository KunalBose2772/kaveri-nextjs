'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useModal } from '../context/ModalContext';
import { useShop } from '../context/ShopContext';

export default function MobileBottomNav() {
    const pathname = usePathname();
    const { openWishlist, openCart } = useModal();
    const { wishlistCount, cartCount } = useShop();

    if (pathname === '/') return null;

    const navItems = [
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
            name: 'Cart',
            action: openCart,
            badge: cartCount,
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            activeIcon: (
                <svg className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
            )
        },
        {
            name: 'Wishlist',
            action: openWishlist,
            badge: wishlistCount,
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
                            {/* Badge */}
                            {item.badge > 0 && (
                                <div className="absolute -top-1 -right-1 z-10">
                                    <span className="flex items-center justify-center min-w-[18px] h-[18px] px-1 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-white text-[9px] font-bold rounded-full shadow-lg">
                                        {item.badge > 99 ? '99+' : item.badge}
                                    </span>
                                </div>
                            )}

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
