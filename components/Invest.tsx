
import React from 'react';
import { INVESTMENT_PLANS } from '../constants';

const InfoItem: React.FC<{ label: string; value: string; detail: string }> = ({ label, value, detail }) => (
  <div className="group/item relative p-4 text-center hover:bg-slate-50/80 transition-all duration-300 cursor-help rounded-xl">
    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1 flex items-center justify-center gap-1 group-hover/item:text-indigo-500 transition-colors">
      {label}
      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 opacity-50 group-hover/item:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </p>
    <p className="font-bold text-lg text-slate-700 transition-transform group-hover/item:scale-105">{value}</p>
    
    {/* World-class Tooltip Design */}
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 p-4 bg-slate-900/95 backdrop-blur-md text-white text-[11px] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] opacity-0 invisible translate-y-2 group-hover/item:opacity-100 group-hover/item:visible group-hover/item:translate-y-0 transition-all duration-300 ease-out z-50 pointer-events-none border border-white/10">
      <div className="relative">
        <div className="flex items-center gap-2 mb-2 border-b border-white/10 pb-2">
          <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse"></div>
          <span className="font-bold uppercase tracking-widest text-[9px] text-indigo-300">{label} বিস্তারিত</span>
        </div>
        <p className="leading-relaxed font-medium text-slate-200">
          {detail}
        </p>
        {/* Decorative elements for the tooltip */}
        <div className="absolute -top-1 -right-1 w-8 h-8 bg-indigo-500/10 blur-xl rounded-full"></div>
      </div>
      {/* Tooltip Arrow */}
      <div className="absolute top-[calc(100%-1px)] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-slate-900/95"></div>
    </div>
  </div>
);

const Invest: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-black rounded-[2.5rem] p-8 text-white text-center shadow-2xl relative overflow-hidden border border-white/5">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <pattern id="grid-invest" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
            <rect width="100" height="100" fill="url(#grid-invest)" />
          </svg>
        </div>
        <div className="relative z-10">
          <div className="bg-indigo-500/20 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-indigo-500/30">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <h2 className="text-2xl font-black mb-2 tracking-tight">ইনভেস্টমেন্ট পোর্টফোলিও</h2>
          <p className="text-slate-400 text-sm max-w-xs mx-auto">আপনার সম্পদের সঠিক ব্যবস্থাপনায় আমাদের এক্সক্লুসিভ প্ল্যানসমূহ</p>
        </div>
      </div>

      <div className="space-y-6">
        {INVESTMENT_PLANS.map((plan) => (
          <div 
            key={plan.id} 
            className="bg-white rounded-[2.5rem] p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 group hover:border-indigo-400/50 hover:shadow-[0_20px_40px_rgba(79,70,229,0.08)] transition-all duration-500 relative overflow-visible"
          >
            {/* Animated Glow on Hover */}
            <div className={`absolute -right-10 -top-10 w-40 h-40 rounded-full opacity-0 group-hover:opacity-[0.08] transition-all duration-700 blur-3xl ${plan.color}`}></div>
            
            <div className="flex items-start justify-between mb-8 relative z-10">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  {/* Distinct Icon Next to Name */}
                  <div className={`${plan.color} text-white flex items-center gap-2 px-3 py-1.5 rounded-full shadow-lg shadow-current/20 transition-transform group-hover:scale-105`}>
                    <div className="scale-75 shrink-0 opacity-90">
                      {plan.icon}
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-[0.15em]">
                      {plan.name}
                    </span>
                  </div>
                  
                  {plan.id === 3 && (
                    <span className="bg-amber-100 text-amber-700 text-[9px] font-black px-2 py-1.5 rounded-md flex items-center gap-1 uppercase tracking-wider animate-pulse shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      Most Popular
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-black text-slate-300">৳</span>
                  <h3 className="text-4xl font-black text-slate-900 tracking-tighter transition-colors group-hover:text-indigo-600">
                    {plan.minAmount.toLocaleString('bn-BD')}
                  </h3>
                </div>
              </div>
              
              <div className={`p-5 rounded-[1.5rem] ${plan.color} text-white shadow-2xl shadow-current/30 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 ease-out hidden sm:flex items-center justify-center`}>
                {plan.icon}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-0 border border-slate-100 rounded-3xl divide-x divide-slate-100 overflow-visible mb-8 relative z-10 bg-slate-50/30">
              <InfoItem 
                label="দৈনিক লভ্যাংশ" 
                value={plan.dailyProfit} 
                detail={plan.dailyProfitDetail}
              />
              <InfoItem 
                label="চুক্তির সময়কাল" 
                value={plan.duration} 
                detail={plan.durationDetail}
              />
            </div>

            <button className="w-full bg-slate-900 group-hover:bg-indigo-600 text-white font-black py-5 rounded-[1.5rem] transition-all duration-300 shadow-xl shadow-slate-900/10 group-hover:shadow-indigo-600/30 active:scale-[0.97] flex items-center justify-center gap-3 relative z-10">
              <span className="tracking-wide">বিনিয়োগ শুরু করুন</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        ))}
      </div>
      
      {/* Footer Info Box */}
      <div className="bg-white border border-slate-100 rounded-[2rem] p-6 shadow-sm flex items-center gap-5">
        <div className="bg-indigo-600 text-white p-3 rounded-2xl shrink-0 shadow-lg shadow-indigo-600/20">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <div className="space-y-1">
          <p className="text-xs font-black text-slate-800 uppercase tracking-wider">নিরাপত্তা ও স্বচ্ছতা</p>
          <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
            আপনার ইনভেস্টমেন্ট সরাসরি ভেরিফাইড প্রিমিয়াম পুলে যোগ করা হয়। যেকোনো প্রয়োজনে ২৪/৭ সাপোর্ট টিম আপনার পাশে আছে।
          </p>
        </div>
      </div>
    </div>
  );
};

export default Invest;
