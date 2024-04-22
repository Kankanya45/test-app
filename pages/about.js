import React from 'react'
import styles from '../styles/About.module.css'
import Link from 'next/link'

function about() {
  return (
    <div className={styles.container}>
        <h2 className={styles.title}> About Page</h2>
        <p className={styles.description}> 
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        
        <div className={styles.link}>
          <Link href="/" className="link">Go Back</Link>
        </div>
    </div>
  )
}

export default about
