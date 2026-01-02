
import React from 'react';

interface Props {
  onLogout: () => void;
}

const Pending: React.FC<Props> = ({ onLogout }) => {
  return (
    <div className="flex-1 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 text-center border border-slate-100">
        <div className="relative w-24 h-24 mx-auto mb-6">
          <div className="absolute inset-0 bg-amber-100 rounded-full animate-ping opacity-75"></div>
          <div className="relative bg-amber-500 rounded-full w-24 h-24 flex items-center justify-center shadow-lg shadow-amber-500/30">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-800 mb-3">ভেরিফিকেশন পেন্ডিং</h2>
        <p className="text-slate-500 text-sm leading-relaxed mb-8">
          আপনার একাউন্টটি বর্তমানে অ্যাডমিন রিভিউতে আছে। এজেন্টের অনুমোদনের পর আপনি আপনার ড্যাশবোর্ড অ্যাক্সেস করতে পারবেন। সাধারণত এটি ২-২৪ ঘন্টা সময় নেয়।
        </p>

        <div className="space-y-4">
          <div className="bg-slate-50 p-4 rounded-2xl flex items-center gap-4 border border-slate-100">
            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">অ্যাসাইনড এজেন্ট</p>
              <p className="text-sm font-semibold text-slate-700">এজেন্ট আইডি: #Elite_99</p>
            </div>
          </div>

          <button 
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition-all shadow-md shadow-green-500/20"
            onClick={() => window.open('https://wa.me/your_number', '_blank')}
          >
            এজেন্টকে নক দিন
          </button>
          
          <button 
            onClick={onLogout}
            className="w-full bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold py-3 rounded-xl transition-all"
          >
            লগ আউট
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pending;
