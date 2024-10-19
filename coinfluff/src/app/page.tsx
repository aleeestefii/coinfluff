'use client';

import Link from 'next/link';
import './Page.css'; 
import videoSrc from './crypto.mp4'; 

const Page = () => {
  return (
    <div className="welcome-container">
      <video autoPlay loop muted className="background-video">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="centered-box">
        <h1>Welcome to the Crypto Dashboard</h1>
        <Link href="/components/dashboard">
          <button className="dashboard-button">Go to Dashboard</button>
        </Link>
      </div>
    </div>
  );
};

export default Page;