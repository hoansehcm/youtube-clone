export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  channelName: string;
  channelAvatar: string;
  views: string;
  postedAt: string;
  duration: string;
  videoUrl: string;
  description: string;
  subscribers: string;
}

export const MOCK_VIDEOS: Video[] = [
  {
    id: '1',
    title: 'Building a YouTube Clone with Next.js 15 and Tailwind CSS',
    thumbnail: 'https://picsum.photos/seed/yt1/1280/720',
    channelName: 'CodeWithMe',
    channelAvatar: 'https://picsum.photos/seed/avatar1/100/100',
    views: '1.2M views',
    postedAt: '2 days ago',
    duration: '15:24',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    description: 'In this video, we will build a full-stack YouTube clone using the latest Next.js features and Tailwind CSS for styling.',
    subscribers: '500K'
  },
  {
    id: '2',
    title: 'The Future of Web Development in 2026',
    thumbnail: 'https://picsum.photos/seed/yt2/1280/720',
    channelName: 'TechInsights',
    channelAvatar: 'https://picsum.photos/seed/avatar2/100/100',
    views: '850K views',
    postedAt: '5 hours ago',
    duration: '10:05',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    description: 'Exploring the upcoming trends in web development, from AI-driven coding to new framework paradigms.',
    subscribers: '1.2M'
  },
  {
    id: '3',
    title: '10 Tips for Better UI Design',
    thumbnail: 'https://picsum.photos/seed/yt3/1280/720',
    channelName: 'DesignPro',
    channelAvatar: 'https://picsum.photos/seed/avatar3/100/100',
    views: '2.5M views',
    postedAt: '1 week ago',
    duration: '12:45',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    description: 'Improve your design skills with these 10 practical tips that you can apply to any project.',
    subscribers: '800K'
  },
  {
    id: '4',
    title: 'Exploring the Mountains of Switzerland',
    thumbnail: 'https://picsum.photos/seed/yt4/1280/720',
    channelName: 'TravelVibes',
    channelAvatar: 'https://picsum.photos/seed/avatar4/100/100',
    views: '450K views',
    postedAt: '3 days ago',
    duration: '22:10',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    description: 'Join us on a breathtaking journey through the Swiss Alps, capturing the beauty of nature in 4K.',
    subscribers: '300K'
  },
  {
    id: '5',
    title: 'How to Cook the Perfect Steak',
    thumbnail: 'https://picsum.photos/seed/yt5/1280/720',
    channelName: 'ChefMaster',
    channelAvatar: 'https://picsum.photos/seed/avatar5/100/100',
    views: '3.1M views',
    postedAt: '2 weeks ago',
    duration: '08:30',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    description: 'Learn the secrets to cooking a restaurant-quality steak at home every single time.',
    subscribers: '2.1M'
  },
  {
    id: '6',
    title: 'Space Exploration: The Next Frontier',
    thumbnail: 'https://picsum.photos/seed/yt6/1280/720',
    channelName: 'CosmosDaily',
    channelAvatar: 'https://picsum.photos/seed/avatar6/100/100',
    views: '1.8M views',
    postedAt: '1 month ago',
    duration: '18:50',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    description: 'A deep dive into the current state of space exploration and what the future holds for humanity.',
    subscribers: '950K'
  },
  {
    id: '7',
    title: 'The Art of Minimalist Living',
    thumbnail: 'https://picsum.photos/seed/yt7/1280/720',
    channelName: 'SimpleLife',
    channelAvatar: 'https://picsum.photos/seed/avatar7/100/100',
    views: '600K views',
    postedAt: '4 days ago',
    duration: '14:15',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    description: 'How simplifying your life can lead to more happiness and less stress.',
    subscribers: '400K'
  },
  {
    id: '8',
    title: 'Top 10 Gadgets of 2026',
    thumbnail: 'https://picsum.photos/seed/yt8/1280/720',
    channelName: 'GadgetGuru',
    channelAvatar: 'https://picsum.photos/seed/avatar8/100/100',
    views: '1.5M views',
    postedAt: '6 days ago',
    duration: '11:40',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    description: 'Reviewing the most innovative gadgets that have hit the market this year.',
    subscribers: '1.5M'
  }
];

export const CATEGORIES = [
  'All',
  'Music',
  'Gaming',
  'News',
  'Live',
  'Coding',
  'Design',
  'Travel',
  'Cooking',
  'Space',
  'Minimalism',
  'Gadgets',
  'React',
  'Next.js',
  'Tailwind CSS'
];
