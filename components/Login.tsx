
import React, { useState, useEffect } from 'react';

interface Props {
  onLogin: (phone: string) => void;
}

const SUCCESS_STORIES = [
  { name: 'আরিফ হোসেন', location: 'ঢাকা', earned: '৳ ৫৪,২০০', rank: 'Gold VIP', avatar: 'https://i.pravatar.cc/150?u=1' },
  { name: 'সাদিয়া ইসলাম', location: 'চট্টগ্রাম', earned: '৳ ১২,৫০০', rank: 'Premium', avatar: 'https://i.pravatar.cc/150?u=2' },
  { name: 'মাহমুদ আলম', location: 'সিলেট', earned: '৳ ৮,৯০০', rank: 'Starter', avatar: 'https://i.pravatar.cc/150?u=3' },
];

const LIVE_FEEDS = [
  'রাকিব হাসান এইমাত্র ৳ ৫,০০০ উইথড্র করেছেন',
  'সিরাজগঞ্জ থেকে নতুন VIP মেম্বার জয়েন করেছেন',
  'আজকের মোট প্রফিট ডিস্ট্রিবিউশন: ৳ ২,৪৫,০০০+',
  'এজেন্ট #Elite_42 নতুন ৫টি একাউন্ট অ্যাপ্রুভ করেছেন',
];

const PROFIT_SAMPLES = [
  { plan: 'Starter', invest: 500, daily: '৳ ১০-১৫', total: '৳ ৮০০+', color: 'text-blue-400' },
  { plan: 'Premium', invest: 2000, daily: '৳ ৮০-১০০', total: '৳ ৪,৫০০+', color: 'text-purple-400' },
  { plan: 'Gold VIP', invest: 10000, daily: '৳ ৫০০-৮০০', total: '৳ ৩৬,০০০+', color: 'text-amber-400' },
];

const Login: React.FC<Props> = ({ onLogin }) => {
  const [phone, setPhone] = useState('');
  const [feedIndex, setFeedIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFeedIndex((prev) => (prev + 1) % LIVE_FEEDS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length >= 10) {
      onLogin(phone);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-start p-4 md:p-8 overflow-x-hidden">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-start relative z-10 py-10">
        
        {/* Left Side: Branding & Investment Info */}
        <div className="text-left space-y-8 order-2 lg:order-1">
          <div>
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span className="text-indigo-400 text-[10px] font-bold uppercase tracking-wider">Live Network Status</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
              আপনার সফলতার <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">নতুন দিগন্ত</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-md">
              আমাদের এক্সক্লুসিভ নেটওয়ার্কে যোগ দিন যেখানে ইনভেস্টমেন্ট মানেই নিশ্চিত প্রফিট এবং রিয়েল টাইম ট্র্যাকিং।
            </p>
          </div>

          {/* Investment Profit Table - New Section */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-widest opacity-60">ইনভেস্টমেন্ট রিটার্ন প্রিভিউ</h3>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/10 text-slate-300 uppercase text-[10px] font-bold tracking-wider">
                  <tr>
                    <th className="px-6 py-4">প্ল্যান</th>
                    <th className="px-6 py-4">ইনভেস্ট</th>
                    <th className="px-6 py-4">দৈনিক আয়</th>
                    <th className="px-6 py-4">মোট সম্ভাব্য আয়</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {PROFIT_SAMPLES.map((sample, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className={`px-6 py-4 font-bold ${sample.color}`}>{sample.plan}</td>
                      <td className="px-6 py-4 text-white font-medium">৳ {sample.invest.toLocaleString('bn-BD')}</td>
                      <td className="px-6 py-4 text-green-400 font-bold">{sample.daily}</td>
                      <td className="px-6 py-4 text-white font-bold">{sample.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="bg-indigo-600/20 p-3 text-center">
                <p className="text-[10px] text-indigo-300 font-bold uppercase tracking-widest">মার্কেট ভলিউম অনুযায়ী লাভ পরিবর্তিত হতে পারে</p>
              </div>
            </div>
          </div>

          {/* Investor Samples */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-widest opacity-60">টপ ইনভেস্টর নমুনা</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SUCCESS_STORIES.slice(0, 2).map((story, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-4 group hover:bg-white/10 transition-all">
                  <img src={story.avatar} alt={story.name} className="w-12 h-12 rounded-full border-2 border-indigo-500/50" />
                  <div>
                    <p className="text-white font-bold text-sm">{story.name}</p>
                    <p className="text-indigo-400 font-bold text-xs">{story.earned} আয় করেছেন</p>
                    <p className="text-[10px] text-slate-500 font-medium">{story.rank} মেম্বার</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Live Feed Ticker */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-4 overflow-hidden h-14 flex items-center">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <p className="text-slate-300 text-sm font-medium transition-all duration-500">
                {LIVE_FEEDS[feedIndex]}
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="order-1 lg:order-2 sticky top-10">
          <div className="w-full max-w-md mx-auto bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-indigo-600/40 transform -rotate-3 hover:rotate-0 transition-transform cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">এলিট ইনভেস্ট প্রো</h2>
              <p className="text-slate-400 text-sm">নিরাপদ লগইন পোর্টাল</p>
            </div>

            <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 mb-8">
              <div className="flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <p className="text-amber-200/80 text-[11px] leading-relaxed">
                  <strong>রেজিস্ট্রেশন বন্ধ:</strong> এটি একটি আমন্ত্রিত নেটওয়ার্ক। নতুন একাউন্টের জন্য আপনার নিকটস্থ ভেরিফাইড এজেন্টের সাহায্য নিন।
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative group">
                <label className="block text-slate-300 text-[10px] font-bold uppercase tracking-widest mb-2 ml-1">আপনার রেজিস্টার্ড নম্বর</label>
                <input 
                  type="tel" 
                  placeholder="01XXXXXXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all placeholder:text-slate-700"
                  required
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-2xl transition-all shadow-xl shadow-indigo-600/30 active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <span>ড্যাশবোর্ডে প্রবেশ করুন</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-white/5 text-center">
              <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-4">সহায়তার জন্য</p>
              <div className="flex justify-center gap-3">
                <button className="bg-green-500/10 hover:bg-green-500/20 text-green-500 px-4 py-2 rounded-xl text-xs font-bold transition-colors border border-green-500/20">হোয়াটসঅ্যাপ</button>
                <button className="bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 px-4 py-2 rounded-xl text-xs font-bold transition-colors border border-blue-500/20">টেলিগ্রাম</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="mt-auto py-10 flex flex-wrap justify-center gap-8 opacity-40 grayscale">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-slate-800 rounded-full"></div>
          <span className="text-white text-xs font-bold">Secure SSL</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-slate-800 rounded-full"></div>
          <span className="text-white text-xs font-bold">24/7 Support</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-slate-800 rounded-full"></div>
          <span className="text-white text-xs font-bold">Instant Payout</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
