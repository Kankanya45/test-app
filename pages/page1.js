import React, { useEffect } from 'react';
import styles from '../styles/Page1.module.css';
import Link from 'next/link';
import liff from '@line/liff'; // นำเข้าไลบรารี LIFF

function Page1() {
  useEffect(() => {
    // Function to initialize LIFF and fetch user's profile
    const initializeLIFF = async () => {
      try {
        await liff.init({ liffId: '2004262428-48zE5e2m' }); // Initialize LIFF with your LIFF ID
        if (liff.isLoggedIn()) {
          // If user is logged in, get profile data
          const profile = await liff.getProfile();
          const imageUrl = profile.pictureUrl;
          const name = profile.displayName;

          // Update profile picture and user name in the UI
          document.getElementById('profileImage').src = imageUrl;
          document.getElementById('userName').innerText = name;
        } else {
          // If user is not logged in, prompt for login
          liff.login();
        }
      } catch (error) {
        // Handle initialization errors
        console.error('Error initializing LIFF:', error);
      }
    };

    initializeLIFF(); // Call the function to initialize LIFF when component mounts
  }, []); // Empty dependency array ensures useEffect only runs once after initial render

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Page 1</h2>
      <div className={styles.profile}>
        <img id="profileImage" alt="Profile" className={styles.profilePicture} />
        <p id="userName" className={styles.userName}></p>
      </div>
      <Link href="/">Go Back</Link>
    </div>
  );
}

export default Page1;
