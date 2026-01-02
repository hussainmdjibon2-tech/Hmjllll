
import React, { useState, useEffect } from 'react';
import { User, UserStatus } from './types';
import Login from './components/Login';
import Pending from './components/Pending';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Invest from './components/Invest';
import Tasks from './components/Tasks';
import Referral from './components/Referral';
import AdminMockup from './components/AdminMockup';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [currentPage, setCurrentPage] = useState<'dashboard' | 'invest' | 'tasks' | 'referral'>('dashboard');
  const [showAdmin, setShowAdmin] = useState(false);

  const handleLogin = (phone: string) => {
    // In a real app, this would check the backend
    setUser({
      id: '1',
      name: 'User Name',
      phone: phone,
      status: UserStatus.PENDING_APPROVAL,
      balance: 1250,
      totalProfit: 320,
      referrals: 5,
    });
  };

  const approveUser = () => {
    if (user) {
      setUser({ ...user, status: UserStatus.APPROVED });
    }
  };

  const resetUser = () => {
    setUser(null);
    setCurrentPage('dashboard');
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  if (user.status === UserStatus.PENDING_APPROVAL) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <Pending onLogout={resetUser} />
        {/* Hidden Admin Toggle for Demo Purposes */}
        <button 
          onClick={() => setShowAdmin(!showAdmin)}
          className="fixed bottom-4 right-4 text-[10px] text-slate-300 opacity-20 hover:opacity-100"
        >
          Toggle Admin
        </button>
        {showAdmin && <AdminMockup onApprove={approveUser} />}
      </div>
    );
  }

  return (
    <Layout 
      user={user} 
      activeTab={currentPage} 
      setTab={setCurrentPage}
      onLogout={resetUser}
    >
      {currentPage === 'dashboard' && <Dashboard user={user} />}
      {currentPage === 'invest' && <Invest />}
      {currentPage === 'tasks' && <Tasks />}
      {currentPage === 'referral' && <Referral user={user} />}
    </Layout>
  );
};

export default App;
