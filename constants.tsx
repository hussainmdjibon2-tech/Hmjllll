
import React from 'react';
import { InvestmentPlan, Task } from './types';

export const INVESTMENT_PLANS: InvestmentPlan[] = [
  { 
    id: 1, 
    name: 'Starter Plan', 
    minAmount: 500, 
    dailyProfit: '২-৩%', 
    dailyProfitDetail: 'আপনার মূল ইনভেস্টের ওপর প্রতিদিন ২% থেকে ৩% পর্যন্ত লভ্যাংশ যোগ হবে। এটি মার্কেট ভলিউমের ওপর নির্ভর করে।',
    duration: '৩০ দিন', 
    durationDetail: '৩০ দিন পর আপনার চুক্তির মেয়াদ শেষ হবে এবং আপনি আপনার মূল ব্যালেন্স উত্তোলনের সুযোগ পাবেন।',
    color: 'bg-blue-500',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  { 
    id: 2, 
    name: 'Premium Plan', 
    minAmount: 2000, 
    dailyProfit: '৩-৫%', 
    dailyProfitDetail: 'পার্থক্য গড়ে দেয় উন্নত অ্যালগরিদম। প্রতিদিন ৩% থেকে ৫% নিশ্চিত মুনাফা যা আপনার পোর্টফোলিওকে দ্রুত বৃদ্ধি করবে।',
    duration: '৪৫ দিন', 
    durationDetail: 'দীর্ঘমেয়াদী চুক্তিতে অধিক লভ্যাংশ নিশ্চিত করা হয়। ৪৫ দিন পর ক্যাপিটাল রিফান্ড বা পুনরায় ইনভেস্ট করা সম্ভব।',
    color: 'bg-purple-600',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 21a11.955 11.955 0 01-9.618-7.016m19.236 0A11.955 11.955 0 0012 3a11.955 11.955 0 00-9.618 7.016" />
      </svg>
    )
  },
  { 
    id: 3, 
    name: 'Gold VIP Plan', 
    minAmount: 10000, 
    dailyProfit: '৫-৮%', 
    dailyProfitDetail: 'সবচেয়ে উচ্চহারের লভ্যাংশ। এক্সক্লুসিভ ট্রেডিং পুলের সুবিধা পান। ৫% থেকে ৮% প্রতিদিনের ক্রেডিট।',
    duration: '৬০ দিন', 
    durationDetail: 'সবচেয়ে লাভজনক পিরিয়ড। ৬০ দিনের মেয়াদ শেষে আপনি বড় অংকের প্রফিটসহ মূল টাকা ফেরত পাবেন।',
    color: 'bg-amber-500',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  },
];

export const MOCK_TASKS: Task[] = [
  { id: 1, title: 'নতুন ভিডিও প্রমোশন দেখুন', reward: 10, completed: false },
  { id: 2, title: 'ফেসবুক গ্রুপে শেয়ার করুন', reward: 5, completed: false },
  { id: 3, title: '৫ জন বন্ধুকে ইনভাইট করুন', reward: 50, completed: false },
];

export const CHART_DATA = [
  { name: 'Day 1', profit: 400 },
  { name: 'Day 2', profit: 700 },
  { name: 'Day 3', profit: 1200 },
  { name: 'Day 4', profit: 1100 },
  { name: 'Day 5', profit: 1800 },
  { name: 'Day 6', profit: 2400 },
  { name: 'Day 7', profit: 3200 },
];
