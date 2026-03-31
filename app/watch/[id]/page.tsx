'use client';

import React, { use } from 'react';
import Header from '@/components/Header';
import { MOCK_VIDEOS } from '@/lib/mock-data';
import SafeReactPlayer from '@/components/SafeReactPlayer';
import Image from 'next/image';
import Link from 'next/link';
import { ThumbsUp, ThumbsDown, Share2, Download, MoreHorizontal, Bell } from 'lucide-react';

export default function WatchPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const video = MOCK_VIDEOS.find((v) => v.id === id) || MOCK_VIDEOS[0];
  const relatedVideos = MOCK_VIDEOS.filter((v) => v.id !== id);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-14 px-4 sm:px-6 lg:px-10 max-w-[1700px] mx-auto flex flex-col lg:flex-row gap-6">
        {/* Left Column: Video and Info */}
        <div className="flex-1 lg:max-w-[calc(100%-400px)]">
          <div className="aspect-video w-full rounded-xl overflow-hidden bg-black mt-4">
            <SafeReactPlayer
              url={video.videoUrl}
              width="100%"
              height="100%"
              controls
              playing
              light={video.thumbnail}
            />
          </div>
          
          <div className="mt-4 space-y-4">
            <h1 className="text-xl font-bold leading-tight">{video.title}</h1>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-zinc-200">
                  <Image
                    src={video.channelAvatar}
                    alt={video.channelName}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-base leading-tight">{video.channelName}</span>
                  <span className="text-xs text-zinc-600">{video.subscribers} subscribers</span>
                </div>
                <button className="ml-4 bg-zinc-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors">
                  Subscribe
                </button>
              </div>
              
              <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
                <div className="flex items-center bg-zinc-100 rounded-full">
                  <button className="flex items-center gap-2 px-4 py-2 hover:bg-zinc-200 rounded-l-full border-r border-zinc-300 transition-colors">
                    <ThumbsUp className="w-5 h-5" />
                    <span className="text-sm font-medium">125K</span>
                  </button>
                  <button className="px-4 py-2 hover:bg-zinc-200 rounded-r-full transition-colors">
                    <ThumbsDown className="w-5 h-5" />
                  </button>
                </div>
                
                <button className="flex items-center gap-2 bg-zinc-100 px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span className="text-sm font-medium">Share</span>
                </button>
                
                <button className="flex items-center gap-2 bg-zinc-100 px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors">
                  <Download className="w-5 h-5" />
                  <span className="text-sm font-medium">Download</span>
                </button>
                
                <button className="p-2 bg-zinc-100 rounded-full hover:bg-zinc-200 transition-colors">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="bg-zinc-100 p-3 rounded-xl hover:bg-zinc-200 transition-colors cursor-pointer">
              <div className="flex gap-2 text-sm font-bold">
                <span>{video.views}</span>
                <span>{video.postedAt}</span>
              </div>
              <p className="text-sm mt-1 whitespace-pre-wrap line-clamp-3">
                {video.description}
              </p>
              <button className="text-sm font-bold mt-2">Show more</button>
            </div>
          </div>
          
          {/* Comments Section Placeholder */}
          <div className="mt-6">
            <h3 className="text-lg font-bold mb-4">4,250 Comments</h3>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-medium">H</div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="w-full border-b border-zinc-300 py-1 outline-none focus:border-zinc-900 transition-colors"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Column: Related Videos */}
        <div className="w-full lg:w-[400px] flex flex-col gap-3 mt-4">
          {relatedVideos.map((v) => (
            <Link key={v.id} href={`/watch/${v.id}`} className="flex gap-2 group">
              <div className="relative w-40 aspect-video rounded-lg overflow-hidden flex-shrink-0 bg-zinc-100">
                <Image
                  src={v.thumbnail}
                  alt={v.title}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] font-medium px-1 py-0.5 rounded">
                  {v.duration}
                </div>
              </div>
              <div className="flex flex-col min-w-0">
                <h4 className="text-sm font-bold line-clamp-2 leading-tight group-hover:text-zinc-900">
                  {v.title}
                </h4>
                <span className="text-xs text-zinc-600 mt-1 hover:text-zinc-900">{v.channelName}</span>
                <div className="text-xs text-zinc-600 flex items-center gap-1">
                  <span>{v.views}</span>
                  <span className="w-0.5 h-0.5 bg-zinc-600 rounded-full"></span>
                  <span>{v.postedAt}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
