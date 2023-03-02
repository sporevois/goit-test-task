import logo from '../../assets/images/Logo.svg';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <>
      <img className={styles.logo} src={logo} alt={'Logo'} />
    </>
  );
};

export default Logo;
