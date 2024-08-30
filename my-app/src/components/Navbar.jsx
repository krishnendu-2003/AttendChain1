import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';


const Navbar = () => {
  const [account, setAccount] = useState(null);

  useEffect(() => {
    const loadGoogleFonts = () => {
      const link = document.createElement('link');
      link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Poppins:wght@400;600&display=swap';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    };

    loadGoogleFonts();

    gsap.fromTo(
      '.navbar',
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power4.out' }
    );

    gsap.fromTo(
      '.navbar-logo',
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 1, ease: 'bounce.out' }
    );

    gsap.fromTo(
      '.connect-button',
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.7)', delay: 0.5 }
    );

    gsap.fromTo(
      '.claim-button',
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.7)', delay: 0.7 }
    );
  }, []);

  const connectMetaMask = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
      } catch (error) {
        console.error("User denied account access or there was an error");
      }
    } else {
      alert("MetaMask not detected. Please install MetaMask extension.");
    }
  };

  const handleClaimPrize = () => {
    alert('Prize claimed successfully!'); 
  };

  return (
    <nav className="navbar p-4 shadow-lg relative flex items-center justify-between bg-transparent">
      <Link to="/" className="navbar-logo flex items-center">
        <span
          className="ml-3 text-3xl font-extrabold tracking-wide text-white"
          style={{
            fontFamily: 'Poppins, sans-serif', 
          }}
        >
          AttendChain
        </span>
      </Link>
      <div className="flex items-center gap-4">
        {account ? (
          <span
            className="font-semibold px-5 py-2 rounded-lg shadow-md transform transition-transform hover:scale-105"
            style={{
              fontFamily: 'Poppins, sans-serif',
              backgroundColor: '#6B21A8', 
              color: '#FFFFFF', 
            }}
          >
            Connected: {account.substring(0, 6)}...{account.substring(account.length - 4)}
          </span>
        ) : (
          <button
            onClick={connectMetaMask}
            className="connect-button font-semibold px-6 py-3 rounded-lg shadow-xl transition-all duration-300 ease-in-out hover:scale-105"
            style={{
              fontFamily: 'Poppins, sans-serif',
              backgroundColor: '#FFFFFF', 
              color: '#7C3AED', 
              borderColor: '#7C3AED', 
              borderWidth: '2px',
            }}
          >
            Connect MetaMask
          </button>
        )}
        <button
          onClick={handleClaimPrize}
          className="claim-button font-semibold px-6 py-3 rounded-lg shadow-xl transition-all duration-300 ease-in-out hover:scale-105"
          style={{
            fontFamily: 'Poppins, sans-serif',
            backgroundColor: '#F59E0B', 
            color: '#FFFFFF', 
          }}
        >
          Claim Prize
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
