import Image from "next/image"
import styles from '@/styles/Card.module.css'

export default function Card({id,name, image, clickHandle}) {
  const handleClick = () => {
    clickHandle(id)
  }

  return (
    <div className={styles.card} onClick={handleClick}>
      <Image className={styles.image} src={image} width={200} height={300} alt={name}/>
    </div>
  )
}