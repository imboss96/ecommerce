import React, { useState } from 'react';
import { FiUser, FiLock, FiSettings, FiShield, FiCheck } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import AccountSettings from '../components/user/Profile/AccountSettings';
import PasswordChange from '../components/user/Profile/PasswordChange';
import PreferencesSettings from '../components/user/Profile/PreferencesSettings';
import SecuritySettings from '../components/user/Profile/SecuritySettings';

export const ProfilePage = () => {
  const { user, userData } = useAuth();
  const [activeTab, setActiveTab] = useState('account');

  const tabs = [
    { id: 'account', label: 'Account', icon: FiUser, component: AccountSettings },
    { id: 'password', label: 'Password', icon: FiLock, component: PasswordChange },
    { id: 'preferences', label: 'Preferences', icon: FiSettings, component: PreferencesSettings },
    { id: 'security', label: 'Security', icon: FiShield, component: SecuritySettings }
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || AccountSettings;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center gap-6">
            {userData?.photoURL ? (
              <img 
                src={userData.photoURL} 
                alt="Profile" 
                className="w-24 h-24 rounded-full object-cover shadow-lg"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-4xl font-bold text-white shadow-lg">
                {userData?.displayName?.charAt(0) || 'U'}
              </div>
            )}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-gray-800">
                  {userData?.displayName || 'User'}
                </h1>
                {userData?.verified && (
                  <div className="relative group">
                    <div className="flex items-center justify-center w-7 h-7 bg-blue-500 rounded-full border-2 border-white shadow-md">
                      <FiCheck className="w-4 h-4 text-white" />
                    </div>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-10">
                      Verified Member
                    </div>
                  </div>
                )}
              </div>
              <p className="text-gray-600 text-lg mb-2">
                {userData?.email}
              </p>
              <div className="flex items-center gap-4">
                <p className="text-sm text-gray-500">
                  Member since {userData?.createdAt ? new Date(userData.createdAt).toLocaleDateString() : 'Recently'}
                </p>
                {userData?.verified && userData?.verifiedAt && (
                  <p className="text-sm text-blue-600 font-medium">
                    ✓ Verified on {new Date(userData.verifiedAt).toLocaleDateString()}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="flex overflow-x-auto border-b">
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 font-semibold transition whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'text-orange-600 border-b-2 border-orange-600 bg-orange-50'
                      : 'text-gray-600 hover:text-orange-500'
                  }`}
                >
                  <Icon size={20} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mb-8">
          <ActiveComponent />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
