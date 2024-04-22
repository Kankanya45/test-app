import React from 'react'
import styles from '../styles/Contact.module.css'
import Link from 'next/link'

function contect() {
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>Contect Page</h2>
        <ul className={styles.details}>
            <li className={styles.list} >
                <label className={styles.label}>Name :</label>
                <p className={styles.value}>Kanyarat Meewan</p>
            </li>
            <li className={styles.list}>
                <label className={styles.label} >E-mail :</label>
                <p className={styles.value} >kanyaratmeewan45@gmail.com</p>
            </li>
            <li className={styles.list}>
                <label className={styles.label} >Tel :</label>
                <p className={styles.value} >062-769-9324</p>
            </li>
        </ul>

        <Link href="/">Go Back</Link>
    </div>
    
  )
}

export default contect