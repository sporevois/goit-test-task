import React, { useState, useEffect } from 'react';
import CardAvatar from './CardAvatar/CardAvatar';
import CardInfo from './CardInfo/CardInfo';
import Button from './Button/Button';
import Logo from './Logo/Logo';
import styles from '../components/App.module.css';

export const App = () => {
  const storedSettings = JSON.parse(localStorage.getItem('settings'));

  const [followersCount, setFollowersCount] = useState(() =>
    storedSettings ? storedSettings.followersCount : 100500
  );
  const [followingStatus, setFollowingStatus] = useState(() =>
    storedSettings ? storedSettings.followingStatus : 'follow'
  );
  const [isFollowing, setIsFollow] = useState(() =>
    storedSettings ? storedSettings.isFollowing : false
  );

  useEffect(() => {
    const settings = {
      followersCount,
      followingStatus,
      isFollowing,
    };

    localStorage.setItem('settings', JSON.stringify(settings));
  }, [isFollowing, followersCount, followingStatus]);

  const toggleFollowingStatus = () => {
    if (isFollowing === false) {
      setIsFollow(true);
      setFollowingStatus('following');
      setFollowersCount(prev => prev + 1);
    } else if (isFollowing === true) {
      setIsFollow(false);
      setFollowingStatus('follow');
      setFollowersCount(prev => prev - 1);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.card}>
          <Logo />
          <CardAvatar />
          <CardInfo followersCount={followersCount} />
          <Button
            isFollowing={isFollowing}
            followingStatus={followingStatus}
            onClick={() => toggleFollowingStatus()}
          />
        </div>
      </div>
    </div>
  );
};
