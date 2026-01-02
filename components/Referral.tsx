
import React from 'react';
import { User } from '../types';

interface Props {
  user: User;
}

const Referral: React.FC<Props> = ({ user }) => {
  const referralLink = `https://eliteinvest.pro/ref/${user.id}`;

  const copyLink = () => {
    navigator.clipboard.writeText(referralLink);
    alert('লিঙ্ক কপি করা হয়েছে!');
  };

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 text-center">
          <p className="text-slate-400 text-[10px] font-bold uppercase mb-1">সক্রিয় সদস্য</p>
          <p className="text-2xl font-bold text-slate-800">{user.referrals}</p>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 text-center">
          <p className="text-slate-400 text-[10px] font-bold uppercase mb-1">টিম প্রফিট</p>
          <p className="text-2xl font-bold text-green-600">৳ ৪৫০.০৫</p>
        </div>
      </div>

      {/* Share Box */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
        <h3 className="font-bold text-slate-800 mb-4">আপনার রেফারেল লিঙ্ক</h3>
        <p className="text-slate-400 text-xs mb-6 leading-relaxed">
          আপনার লিঙ্কটি বন্ধুদের সাথে শেয়ার করুন এবং প্রতিটি সফল অনুমোদনের পর পান আকর্ষণীয় বোনাস।
        </p>
        
        <div className="bg-slate-50 border border-dashed border-slate-200 rounded-2xl p-4 flex items-center justify-between gap-4 mb-4">
          <p className="text-xs text-slate-600 font-medium truncate">{referralLink}</p>
          <button 
            onClick={copyLink}
            className="shrink-0 bg-white p-2 rounded-xl shadow-sm border border-slate-100 hover:bg-slate-50 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
            </svg>
          </button>
        </div>

        <div className="flex gap-2">
          <button className="flex-1 bg-[#25D366] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-lg shadow-green-500/20">
            WhatsApp
          </button>
          <button className="flex-1 bg-[#0088cc] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-lg shadow-blue-500/20">
            Telegram
          </button>
        </div>
      </div>

      {/* Levels Info */}
      <div className="bg-slate-900 rounded-3xl p-6 text-white">
        <h3 className="font-bold mb-4">টিম লেভেল বোনাস</h3>
        <div className="space-y-4">
          {[
            { level: 'Level 1', commission: '১০%', color: 'bg-indigo-500' },
            { level: 'Level 2', commission: '৫%', color: 'bg-indigo-700' },
            { level: 'Level 3', commission: '২%', color: 'bg-indigo-900' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 ${item.color} rounded-lg flex items-center justify-center font-bold text-xs`}>
                  {idx + 1}
                </div>
                <p className="text-sm font-medium">{item.level}</p>
              </div>
              <p className="font-bold text-indigo-400">{item.commission}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Referral;
