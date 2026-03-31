'use client';

import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import CategoryPills from '@/components/CategoryPills';
import VideoCard from '@/components/VideoCard';
import { MOCK_VIDEOS } from '@/lib/mock-data';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="flex pt-14">
        <Sidebar />
        
        <main className="flex-1 md:ml-20 lg:ml-60">
          <CategoryPills />
          
          <div className="p-4 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-4 gap-y-10">
              {MOCK_VIDEOS.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
              {/* Duplicate for more content */}
              {MOCK_VIDEOS.map((video) => (
                <VideoCard key={`dup-${video.id}`} video={video} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
