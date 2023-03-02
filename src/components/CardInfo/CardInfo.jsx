import useFormatCount from 'hooks/useFormatCount';
import styles from './CardInfo.module.css';

const CardInfo = ({ followersCount }) => {
  return (
    <>
      <p className={styles.text}>777 TWEETS</p>
      <p className={styles.text}>{useFormatCount(followersCount)} FOLLOWERS</p>
    </>
  );
};

export default CardInfo;
