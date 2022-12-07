import { FiAtSign, FiKey } from 'react-icons/fi'

import { Input } from '../../components/Input'

import { Button } from '../../components/Button'

import styles from './styles.module.css'

export default function SignInPage() {

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1 className={styles.title}>As Heavy as Possible</h1>
        <h2 className={styles.enter}>Entre</h2>

        <Input
          type='email'
          id='email'
          required
          placeholder='Nome@email.com'
          icon={<FiAtSign />}
        />

        <Input
          type='password'
          id='password'
          minLength={8}
          required
          icon={<FiKey />}
        />

        <Button type="submit">entrar</Button>
      </form>
    </div>
  )
}