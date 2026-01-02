
import React, { useState } from 'react';
import { MOCK_TASKS } from '../constants';

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState(MOCK_TASKS);

  const completeTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: true } : t));
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex items-center justify-between">
        <div>
          <p className="text-slate-400 text-[10px] font-bold uppercase mb-1">আজকের টাস্ক রিওয়ার্ড</p>
          <h2 className="text-2xl font-bold text-slate-800">৳ ১০০.০০ পর্যন্ত</h2>
        </div>
        <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
      </div>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                task.completed ? 'bg-green-100 text-green-600' : 'bg-indigo-50 text-indigo-600'
              }`}>
                {task.completed ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
              </div>
              <div>
                <p className="font-bold text-slate-700 text-sm">{task.title}</p>
                <p className="text-[10px] font-bold text-indigo-600">+ ৳ {task.reward}</p>
              </div>
            </div>
            
            {!task.completed && (
              <button 
                onClick={() => completeTask(task.id)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white text-[10px] font-bold px-4 py-2 rounded-xl transition-all shadow-md shadow-indigo-600/20"
              >
                শুরু করুন
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
