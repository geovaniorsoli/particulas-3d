//styles
import styles from '@/styles/particle.module.css'
//componentes
import Particula from '@/components/Particula'

export default function app() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Particulas</h1>
        </div>

        <div className={styles.subtitle}>
          <h1>Movimente o mouse</h1>
        </div>
      </div>

      <div className={styles.containerMobile}>
        <h2>  Seu dispositivo não suporta essa aplicação, <spam className={styles.spam}> acesse por um computador.</spam> </h2>
      </div>

      <div className={styles.particula}>
        <Particula />
      </div>
    </>
  )
}