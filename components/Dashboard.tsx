
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { User } from '../types';
import { CHART_DATA } from '../constants';

interface Props {
  user: User;
}

const Dashboard: React.FC<Props> = ({ user }) => {
  return (
    <>
      {/* Balance Card */}
      <div className="bg-indigo-600 rounded-3xl p-6 text-white shadow-xl shadow-indigo-600/30 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="relative z-10">
          <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">মোট ব্যালেন্স</p>
          <h2 className="text-4xl font-extrabold mb-4">৳ {user.balance.toLocaleString('bn-BD')}</h2>
          
          <div className="flex gap-4">
            <div className="bg-white/10 rounded-2xl p-3 flex-1 border border-white/10">
              <p className="text-white/60 text-[10px] font-bold uppercase mb-1">আজকের প্রফিট</p>
              <p className="text-lg font-bold">৳ ৪৫.৫০</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-3 flex-1 border border-white/10">
              <p className="text-white/60 text-[10px] font-bold uppercase mb-1">মোট প্রফিট</p>
              <p className="text-lg font-bold">৳ {user.totalProfit.toLocaleString('bn-BD')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Quick Links */}
      <div className="grid grid-cols-2 gap-4">
        <button className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3 active:scale-95 transition-all">
          <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="font-bold text-slate-700 text-sm">ডিপোজিট</span>
        </button>
        <button className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3 active:scale-95 transition-all">
          <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center text-rose-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="font-bold text-slate-700 text-sm">উইথড্র</span>
        </button>
      </div>

      {/* Profit Chart */}
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
        <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
          <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
          প্রফিট গ্রাফ (৭ দিন)
        </h3>
        <div className="h-48 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={CHART_DATA}>
              <defs>
                <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="name" hide />
              <YAxis hide />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                labelStyle={{ fontWeight: 'bold' }}
              />
              <Area type="monotone" dataKey="profit" stroke="#4f46e5" strokeWidth={3} fillOpacity={1} fill="url(#colorProfit)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-slate-800">সাম্প্রতিক কার্যক্রম</h3>
          <button className="text-xs text-indigo-600 font-bold">সব দেখুন</button>
        </div>
        <div className="space-y-4">
          {[
            { title: 'ডেইলি প্রফিট ক্রেডিট', amount: '+ ৳ ১০.০৫', date: '১২ মিনিট আগে', type: 'profit' },
            { title: 'উইথড্র রিকোয়েস্ট', amount: '- ৳ ৫০০.০০', date: '৩ ঘন্টা আগে', type: 'withdraw' },
            { title: 'টাস্ক বোনাস', amount: '+ ৳ ৫০.০০', date: 'গতকাল', type: 'profit' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-between py-1">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  item.type === 'profit' ? 'bg-green-50 text-green-600' : 'bg-rose-50 text-rose-600'
                }`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                    <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-slate-700 text-sm">{item.title}</p>
                  <p className="text-[10px] text-slate-400 font-medium">{item.date}</p>
                </div>
              </div>
              <p className={`font-bold text-sm ${
                item.type === 'profit' ? 'text-green-600' : 'text-slate-800'
              }`}>{item.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
