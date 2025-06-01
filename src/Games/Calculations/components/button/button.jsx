import styles from './button.module.css';


export const Button = ({children, onClick, disabled}) => {
  return (
    <button className={styles.btn}
      onClick={onClick? onClick: ()=>{}}
      disabled={disabled||false}
    >
      {children}
    </button>
  )
};