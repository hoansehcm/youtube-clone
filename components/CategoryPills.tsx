'use client';

import React, { useState } from 'react';
import { CATEGORIES } from '@/lib/mock-data';

export default function CategoryPills() {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div className="sticky top-14 bg-white z-40 py-3 px-4 flex gap-3 overflow-x-auto scrollbar-hide">
      {CATEGORIES.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
            activeCategory === category
              ? 'bg-zinc-900 text-white'
              : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
