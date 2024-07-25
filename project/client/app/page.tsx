

import styles from "./page.module.css"  
import Image from "next/image"

export default function Home() 
{
  return (
    <main className={styles.main}>

      <div className={styles.header}>
        <p className={styles.h_name}> KANBAN ONLINE </p>
        <button className={styles.h_button}>LOGAR</button>
      </div>

      <div className={styles.body}>
        <div className={styles.b_box}>
          <h2 className={styles.b_text}>Gerencie seu trabalho,</h2>
          <h2 className={styles.b_text}>organize sua equipe!</h2>
          <button className={styles.b_button}>COMEÇAR AGORA</button>
        </div>
        <div className={styles.b_icontainer}>
          <Image className={styles.image} src="/premium_photo.jpg" alt="Imagem" width={580} height={790}/>
        </div>
      </div>
      
    </main>
  )
}
