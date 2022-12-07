import { useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import styles from './styles.module.css'

export function Input({
  icon,
  type = 'text',
  required = false,
  placeholder,
  minLength,
  value,
  onChange,
}) {
  const [showPassword, setShowPassword] = useState(false)

  function handleTogglePassword() {
    setShowPassword(!showPassword)
  }

  return (
    <div className={styles.inputContainer}>
      <div className={styles.iconBox}>
        {icon}
      </div>

      <input
        type={showPassword ? 'text' : type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        minLength={minLength}
        className={styles.input}
      />

      {type === 'password' && (
        <button
          type="button"
          className={styles.togglePassword}
          onClick={handleTogglePassword}
        >
          {showPassword ? (
            <FiEyeOff />
          ) : (
            <FiEye />
          )}
        </button>
      )}
    </div>
  )
}