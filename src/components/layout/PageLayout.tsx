import React from 'react';
import Header from './Header';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="w-full min-h-screen text-slate-900 bg-[#F9F9F9]">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default PageLayout;
