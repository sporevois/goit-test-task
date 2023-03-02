import styles from './Button.module.css';

const Button = ({ isFollowing, followingStatus, onClick }) => {
  return (
    <button
      className={styles.btn}
      style={isFollowing ? { backgroundColor: '#5CD3A8' } : {}}
      type="button"
      onClick={onClick}
    >
      {followingStatus.toUpperCase()}
    </button>
  );
};

export default Button;
