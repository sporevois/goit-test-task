import React, { useState } from 'react';
import styles from '../components/App.module.css';
import { ReactComponent as Logo } from './Logo.svg';

export const App = () => {
  const [followersCount, setFollowersCount] = useState(100500);
  const [followingStatus, setFollowingStatus] = useState('FOLLOW');
  const [isFollowing, setIsFollow] = useState(false);

  const toggleFollowingStatus = () => {
    if (isFollowing === false) {
      setIsFollow(true);
      setFollowingStatus('FOLLOWING');
      setFollowersCount(prev => prev + 1);
    } else if (isFollowing === true) {
      setIsFollow(false);
      setFollowingStatus('FOLLOW');
      setFollowersCount(prev => prev - 1);
    }
  };

  const formatCount = number => {
    const numberFormat = new Intl.NumberFormat('en-US');
    return numberFormat.format(number);
  };

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.card}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <p className={styles.text}>777 TWEETS</p>
          <p className={styles.text}>{formatCount(followersCount)} FOLLOWERS</p>
          <button
            className={styles.btn}
            style={isFollowing ? { backgroundColor: '#5CD3A8' } : {}}
            type="button"
            onClick={toggleFollowingStatus}
          >
            {followingStatus}
          </button>
        </div>
      </div>
    </div>
  );
};
