import React from 'react'
import styles from '../styles/Page2.module.css'
import Link from 'next/link'

function page2() {
  return (
    <div className={styles.container}>
        <h2 className={styles.title}> page 2</h2>
        <p className={styles.description}> 
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        

        <Link href="/">Go Back</Link>
    </div>
  )
}

export default page2