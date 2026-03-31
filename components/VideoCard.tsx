'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Video } from '@/lib/mock-data';
import { MoreVertical } from 'lucide-react';

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <div className="flex flex-col gap-3 group cursor-pointer">
      <Link href={`/watch/${video.id}`} className="relative aspect-video rounded-xl overflow-hidden bg-zinc-100">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          referrerPolicy="no-referrer"
        />
        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-[12px] font-medium px-1.5 py-0.5 rounded">
          {video.duration}
        </div>
      </Link>
      
      <div className="flex gap-3">
        <div className="flex-shrink-0 mt-1">
          <div className="relative w-9 h-9 rounded-full overflow-hidden bg-zinc-200">
            <Image
              src={video.channelAvatar}
              alt={video.channelName}
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        
        <div className="flex flex-col flex-1 min-w-0">
          <h3 className="text-base font-semibold leading-tight line-clamp-2 group-hover:text-zinc-900">
            {video.title}
          </h3>
          <div className="mt-1 flex flex-col">
            <span className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
              {video.channelName}
            </span>
            <div className="text-sm text-zinc-600 flex items-center gap-1">
              <span>{video.views}</span>
              <span className="w-0.5 h-0.5 bg-zinc-600 rounded-full"></span>
              <span>{video.postedAt}</span>
            </div>
          </div>
        </div>
        
        <button className="flex-shrink-0 p-1 h-fit opacity-0 group-hover:opacity-100 transition-opacity">
          <MoreVertical className="w-5 h-5 text-zinc-600" />
        </button>
      </div>
    </div>
  );
}
