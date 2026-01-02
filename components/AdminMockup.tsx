
import React from 'react';

interface Props {
  onApprove: () => void;
}

const AdminMockup: React.FC<Props> = ({ onApprove }) => {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] w-72 bg-white rounded-3xl shadow-2xl border-2 border-indigo-600 p-6">
      <div className="flex items-center gap-2 mb-4 text-indigo-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
        <h4 className="font-bold text-sm uppercase">এজেন্ট কন্ট্রোল প্যানেল</h4>
      </div>
      <p className="text-slate-500 text-xs mb-4">
        (এটি শুধুমাত্র ডেমো পারপাস। রিয়েল অ্যাপে এজেন্ট এই প্যানেল থেকে পেন্ডিং রিকোয়েস্ট একসেপ্ট করবেন।)
      </p>
      <div className="p-3 bg-slate-50 rounded-xl mb-4 border border-slate-100">
        <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">ইউজার আইডি</p>
        <p className="text-xs font-bold text-slate-700">#EIP_USER_001</p>
      </div>
      <button 
        onClick={onApprove}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-indigo-600/30 transition-all active:scale-95"
      >
        একাউন্ট অ্যাপ্রুভ করুন
      </button>
    </div>
  );
};

export default AdminMockup;
