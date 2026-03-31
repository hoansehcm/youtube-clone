'use client';

import React from 'react';
import { Home, PlaySquare, Users, Library, History, Clock, ThumbsUp, ChevronDown, Flame, ShoppingBag, Music2, Film, Radio, Gamepad2, Newspaper, Trophy, Lightbulb, Shirt } from 'lucide-react';
import Link from 'next/link';

const sidebarItems = [
  { icon: Home, label: 'Home', active: true },
  { icon: PlaySquare, label: 'Shorts' },
  { icon: Users, label: 'Subscriptions' },
];

const miniSidebarItems = [
  { icon: Home, label: 'Home' },
  { icon: PlaySquare, label: 'Shorts' },
  { icon: Users, label: 'Subscriptions' },
  { icon: Library, label: 'You' },
];

const libraryItems = [
  { icon: Library, label: 'Library' },
  { icon: History, label: 'History' },
  { icon: Clock, label: 'Watch later' },
  { icon: ThumbsUp, label: 'Liked videos' },
];

const exploreItems = [
  { icon: Flame, label: 'Trending' },
  { icon: ShoppingBag, label: 'Shopping' },
  { icon: Music2, label: 'Music' },
  { icon: Film, label: 'Movies' },
  { icon: Radio, label: 'Live' },
  { icon: Gamepad2, label: 'Gaming' },
  { icon: Newspaper, label: 'News' },
  { icon: Trophy, label: 'Sports' },
  { icon: Lightbulb, label: 'Learning' },
  { icon: Shirt, label: 'Fashion & Beauty' },
];

export default function Sidebar() {
  return (
    <>
      {/* Mini Sidebar for Medium Screens */}
      <aside className="fixed top-14 left-0 bottom-0 w-20 bg-white hidden md:flex lg:hidden flex-col items-center py-2 z-40">
        {miniSidebarItems.map((item) => (
          <button
            key={item.label}
            className="w-full flex flex-col items-center gap-1.5 py-4 hover:bg-zinc-100 transition-colors rounded-lg mx-1"
          >
            <item.icon className="w-6 h-6" />
            <span className="text-[10px]">{item.label}</span>
          </button>
        ))}
      </aside>

      {/* Full Sidebar for Large Screens */}
      <aside className="fixed top-14 left-0 bottom-0 w-60 bg-white overflow-y-auto hidden lg:block scrollbar-hide hover:scrollbar-default z-40">
        <div className="p-3">
          {sidebarItems.map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-5 px-3 py-2 rounded-lg transition-colors ${
                item.active ? 'bg-zinc-100 font-medium' : 'hover:bg-zinc-100'
              }`}
            >
              <item.icon className={`w-6 h-6 ${item.active ? 'fill-zinc-900' : ''}`} />
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </div>

        <hr className="border-zinc-200 my-2 mx-3" />

        <div className="p-3">
          <h3 className="px-3 py-2 font-medium text-base">You</h3>
          {libraryItems.map((item) => (
            <button
              key={item.label}
              className="w-full flex items-center gap-5 px-3 py-2 rounded-lg hover:bg-zinc-100 transition-colors"
            >
              <item.icon className="w-6 h-6" />
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </div>

        <hr className="border-zinc-200 my-2 mx-3" />

        <div className="p-3">
          <h3 className="px-3 py-2 font-medium text-base">Explore</h3>
          {exploreItems.map((item) => (
            <button
              key={item.label}
              className="w-full flex items-center gap-5 px-3 py-2 rounded-lg hover:bg-zinc-100 transition-colors"
            >
              <item.icon className="w-6 h-6" />
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </div>

        <hr className="border-zinc-200 my-2 mx-3" />

        <div className="p-6 text-xs text-zinc-500 font-medium space-y-4">
          <div className="flex flex-wrap gap-x-2">
            <span>About</span><span>Press</span><span>Copyright</span>
            <span>Contact us</span><span>Creators</span>
            <span>Advertise</span><span>Developers</span>
          </div>
          <div className="flex flex-wrap gap-x-2">
            <span>Terms</span><span>Privacy</span><span>Policy & Safety</span>
            <span>How YouTube works</span><span>Test new features</span>
          </div>
          <div className="text-zinc-400 font-normal">
            © 2026 Google LLC
          </div>
        </div>
      </aside>
    </>
  );
}
