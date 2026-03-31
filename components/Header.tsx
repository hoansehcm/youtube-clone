'use client';

import React, { useState } from 'react';
import { Menu, Search, Mic, Video, Bell, User, SearchIcon, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [searchValue, setSearchValue] = useState('');
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const router = useRouter();

  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (searchValue.trim()) {
      // For now just redirect to home or a search page if we had one
      router.push(`/?search=${encodeURIComponent(searchValue)}`);
      setShowMobileSearch(false);
    }
  };

  if (showMobileSearch) {
    return (
      <header className="fixed top-0 left-0 right-0 h-14 bg-white flex items-center px-4 z-50 gap-2">
        <button 
          onClick={() => setShowMobileSearch(false)}
          className="p-2 hover:bg-zinc-100 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <form onSubmit={handleSearch} className="flex-1 flex items-center bg-zinc-100 rounded-full px-4 py-1.5">
          <input
            type="text"
            placeholder="Search"
            autoFocus
            className="flex-1 bg-transparent outline-none text-base"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          {searchValue && (
            <button 
              type="button"
              onClick={() => setSearchValue('')}
              className="p-1 hover:bg-zinc-200 rounded-full"
            >
              <span className="text-xl leading-none">×</span>
            </button>
          )}
        </form>
        <button className="p-2.5 bg-zinc-100 hover:bg-zinc-200 rounded-full transition-colors">
          <Mic className="w-5 h-5" />
        </button>
      </header>
    );
  }

  return (
    <header className="fixed top-0 left-0 right-0 h-14 bg-white flex items-center justify-between px-4 z-50">
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-zinc-100 rounded-full transition-colors">
          <Menu className="w-6 h-6" />
        </button>
        <Link href="/" className="flex items-center gap-1">
          <div className="w-8 h-6 bg-red-600 rounded-lg flex items-center justify-center">
            <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[7px] border-l-white border-b-[4px] border-b-transparent ml-0.5"></div>
          </div>
          <span className="font-bold text-xl tracking-tighter hidden xs:block">YouTube</span>
          <span className="text-[10px] text-zinc-500 self-start mt-1 ml-0.5 hidden xs:block">VN</span>
        </Link>
      </div>

      {/* Desktop Search */}
      <div className="hidden sm:flex flex-1 max-w-[720px] items-center gap-4 px-4">
        <form onSubmit={handleSearch} className="flex flex-1 items-center">
          <div className="flex flex-1 items-center border border-zinc-300 rounded-l-full px-4 py-1.5 focus-within:border-blue-500 focus-within:shadow-inner ml-4 lg:ml-10">
            <Search className="w-5 h-5 text-zinc-400 mr-2 hidden md:block" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none text-base"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
          <button type="submit" className="bg-zinc-50 border border-l-0 border-zinc-300 rounded-r-full px-5 py-1.5 hover:bg-zinc-100 transition-colors">
            <Search className="w-5 h-5 text-zinc-600" />
          </button>
        </form>
        <button className="p-2.5 bg-zinc-100 hover:bg-zinc-200 rounded-full transition-colors">
          <Mic className="w-5 h-5" />
        </button>
      </div>

      <div className="flex items-center gap-1 sm:gap-2">
        <button 
          onClick={() => setShowMobileSearch(true)}
          className="p-2 hover:bg-zinc-100 rounded-full transition-colors sm:hidden"
        >
          <Search className="w-6 h-6" />
        </button>
        <button className="p-2 hover:bg-zinc-100 rounded-full transition-colors hidden sm:block">
          <Video className="w-6 h-6" />
        </button>
        <button className="p-2 hover:bg-zinc-100 rounded-full transition-colors hidden sm:block">
          <Bell className="w-6 h-6" />
        </button>
        <button className="p-1 hover:bg-zinc-100 rounded-full transition-colors ml-1">
          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
            H
          </div>
        </button>
      </div>
    </header>
  );
}
