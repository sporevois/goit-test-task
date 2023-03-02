import styles from './CardAvatar.module.css';
import avatar from '../../assets/images/Boy.png';

const CardAvatar = () => {
  return (
    <div className={styles.imageContainer}>
      <div className={styles.stripe}></div>
      <img className={styles.image} src={avatar} alt={'Boy'} />
    </div>
  );
};
export default CardAvatar;
