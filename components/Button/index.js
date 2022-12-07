import styles from './styles.module.css'

export function Button({
  type = 'submit',
  children,
}) {
  return (
    <button className={styles.button}
      type={type}
    >
      {children}
    </button>
  )
}