/**
 * Main Layout Component
 * Includes SkipToContent, Header, Footer, and main content wrapper
 */
import React from 'react';
import SkipToContent from './SkipToContent';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <SkipToContent />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;