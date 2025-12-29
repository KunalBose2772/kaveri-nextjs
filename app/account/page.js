'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AccountPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [activeTab, setActiveTab] = useState('profile');

    // Mock user data
    const user = {
        name: 'Rahul Sharma',
        email: 'rahul.sharma@email.com',
        phone: '+91 98765 43210',
        avatar: '/assets/main_logo.png',
        memberSince: 'January 2024',
        totalOrders: 24,
        points: 1250
    };

    const orders = [
        { id: '#ORD-2024-001', date: '28 Dec 2024', items: 3, total: 1245, status: 'Delivered' },
        { id: '#ORD-2024-002', date: '25 Dec 2024', items: 5, total: 2150, status: 'Delivered' },
        { id: '#ORD-2024-003', date: '20 Dec 2024', items: 2, total: 890, status: 'Cancelled' }
    ];

    const addresses = [
        { id: 1, label: 'Home', address: '123, Street Name, Ashok Nagar, Ranchi - 834002', default: true },
        { id: 2, label: 'Office', address: '456, Building Name, Kanke Road, Ranchi - 834008', default: false }
    ];

    if (!isLoggedIn) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100 pt-24 pb-32 px-4">
                <div className="max-w-md mx-auto">
                    {/* Logo Section */}
                    <div className="text-center mb-8">
                        <div className="w-24 h-24 mx-auto mb-4 relative">
                            <Image
                                src="/assets/main_logo.png"
                                alt="Kaveri"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <h1 className="text-3xl font-serif italic text-stone-900 mb-2">Welcome to Kaveri</h1>
                        <p className="text-stone-500 text-sm">Sign in to continue your culinary journey</p>
                    </div>

                    {/* Login Form */}
                    <div className="bg-white rounded-3xl shadow-2xl p-8 border border-stone-100">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-stone-700 mb-2 uppercase tracking-wider">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    placeholder="+91 98765 43210"
                                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-stone-700 mb-2 uppercase tracking-wider">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all"
                                />
                            </div>

                            <button
                                onClick={() => setIsLoggedIn(true)}
                                className="w-full py-4 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-white font-bold uppercase text-sm tracking-widest rounded-xl hover:shadow-xl hover:scale-[1.02] transition-all"
                            >
                                Sign In
                            </button>

                            <div className="text-center">
                                <button className="text-sm text-stone-500 hover:text-[#d4af37] transition-colors">
                                    Forgot Password?
                                </button>
                            </div>

                            <div className="relative my-6">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-stone-200"></div>
                                </div>
                                <div className="relative flex justify-center text-xs uppercase">
                                    <span className="bg-white px-2 text-stone-400 font-bold">Or</span>
                                </div>
                            </div>

                            <button className="w-full py-3 border-2 border-stone-200 text-stone-700 font-bold uppercase text-sm tracking-widest rounded-xl hover:bg-stone-50 transition-all">
                                Create New Account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-stone-50 pt-24 pb-32">
            <div className="max-w-5xl mx-auto px-4">
                {/* Profile Header */}
                <div className="bg-gradient-to-r from-[#d4af37] to-[#b8860b] rounded-3xl p-8 mb-6 shadow-2xl">
                    <div className="flex items-center gap-6">
                        <div className="w-24 h-24 rounded-full bg-white p-2 shadow-xl">
                            <Image
                                src={user.avatar}
                                alt={user.name}
                                width={88}
                                height={88}
                                className="rounded-full object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <h1 className="text-3xl font-serif italic text-white mb-1">{user.name}</h1>
                            <p className="text-white/80 text-sm mb-3">Member since {user.memberSince}</p>
                            <div className="flex gap-6">
                                <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2">
                                    <div className="text-2xl font-bold text-white">{user.totalOrders}</div>
                                    <div className="text-xs text-white/80 uppercase tracking-wider">Orders</div>
                                </div>
                                <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2">
                                    <div className="text-2xl font-bold text-white">{user.points}</div>
                                    <div className="text-xs text-white/80 uppercase tracking-wider">Points</div>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsLoggedIn(false)}
                            className="px-6 py-2 bg-white text-stone-900 rounded-xl font-bold text-sm hover:bg-stone-100 transition-all"
                        >
                            Logout
                        </button>
                    </div>
                </div>

                {/* Tabs */}
                <div className="bg-white rounded-2xl shadow-lg mb-6 p-2 flex gap-2 overflow-x-auto">
                    {[
                        { id: 'profile', label: 'Profile', icon: '👤' },
                        { id: 'orders', label: 'Orders', icon: '📦' },
                        { id: 'addresses', label: 'Addresses', icon: '📍' },
                        { id: 'settings', label: 'Settings', icon: '⚙️' }
                    ].map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-1 min-w-[120px] px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all ${activeTab === tab.id
                                    ? 'bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-white shadow-lg'
                                    : 'text-stone-500 hover:bg-stone-50'
                                }`}
                        >
                            <span className="mr-2">{tab.icon}</span>
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                    {/* Profile Tab */}
                    {activeTab === 'profile' && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6">Personal Information</h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-stone-700 mb-2 uppercase tracking-wider">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        defaultValue={user.name}
                                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-stone-700 mb-2 uppercase tracking-wider">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        defaultValue={user.email}
                                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-stone-700 mb-2 uppercase tracking-wider">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        defaultValue={user.phone}
                                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-stone-700 mb-2 uppercase tracking-wider">
                                        Date of Birth
                                    </label>
                                    <input
                                        type="date"
                                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <button className="px-8 py-3 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-white font-bold uppercase text-sm tracking-widest rounded-xl hover:shadow-xl transition-all">
                                Save Changes
                            </button>
                        </div>
                    )}

                    {/* Orders Tab */}
                    {activeTab === 'orders' && (
                        <div className="space-y-4">
                            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6">Order History</h2>

                            {orders.map(order => (
                                <div key={order.id} className="border border-stone-200 rounded-2xl p-6 hover:shadow-lg transition-all">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="font-bold text-stone-900 text-lg">{order.id}</h3>
                                            <p className="text-sm text-stone-500">{order.date}</p>
                                        </div>
                                        <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase ${order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                                                order.status === 'Cancelled' ? 'bg-red-100 text-red-700' :
                                                    'bg-amber-100 text-amber-700'
                                            }`}>
                                            {order.status}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="text-sm text-stone-600">
                                            {order.items} items • ₹{order.total}
                                        </div>
                                        <Link href={`/orders/${order.id}`} className="text-[#d4af37] hover:text-[#b8860b] font-bold text-sm">
                                            View Details →
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Addresses Tab */}
                    {activeTab === 'addresses' && (
                        <div className="space-y-4">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-serif font-bold text-stone-900">Saved Addresses</h2>
                                <button className="px-6 py-2 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-white font-bold text-sm rounded-xl hover:shadow-lg transition-all">
                                    + Add New
                                </button>
                            </div>

                            {addresses.map(address => (
                                <div key={address.id} className="border border-stone-200 rounded-2xl p-6 hover:shadow-lg transition-all">
                                    <div className="flex justify-between items-start">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <h3 className="font-bold text-stone-900">{address.label}</h3>
                                                {address.default && (
                                                    <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-bold rounded-full">
                                                        Default
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-sm text-stone-600">{address.address}</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <button className="p-2 text-stone-400 hover:text-[#d4af37] transition-colors">
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg>
                                            </button>
                                            <button className="p-2 text-stone-400 hover:text-red-500 transition-colors">
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Settings Tab */}
                    {activeTab === 'settings' && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6">Account Settings</h2>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center p-4 border border-stone-200 rounded-xl hover:shadow-md transition-all">
                                    <div>
                                        <h3 className="font-bold text-stone-900">Email Notifications</h3>
                                        <p className="text-sm text-stone-500">Receive order updates via email</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" defaultChecked />
                                        <div className="w-11 h-6 bg-stone-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#d4af37]"></div>
                                    </label>
                                </div>

                                <div className="flex justify-between items-center p-4 border border-stone-200 rounded-xl hover:shadow-md transition-all">
                                    <div>
                                        <h3 className="font-bold text-stone-900">SMS Notifications</h3>
                                        <p className="text-sm text-stone-500">Get delivery alerts on your phone</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" defaultChecked />
                                        <div className="w-11 h-6 bg-stone-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#d4af37]"></div>
                                    </label>
                                </div>

                                <div className="flex justify-between items-center p-4 border border-stone-200 rounded-xl hover:shadow-md transition-all">
                                    <div>
                                        <h3 className="font-bold text-stone-900">Promotional Offers</h3>
                                        <p className="text-sm text-stone-500">Receive special deals and offers</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" />
                                        <div className="w-11 h-6 bg-stone-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#d4af37]"></div>
                                    </label>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-stone-200">
                                <button className="text-red-500 hover:text-red-600 font-bold text-sm transition-colors">
                                    Delete Account
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
