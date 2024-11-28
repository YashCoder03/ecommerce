// import React from 'react'
import Slidebar from '../slidebar/Slidebar'
import styles from "../Home/Home.module.css"

function Home() {
  return (
    <>
      <div className={styles.tophome}>
        <div className={styles.catgories}>
          <ul className={styles.catgorieslist}>
            <li>Woman&apos;s Fashion</li>
            <li>Men&apos;s Fashion</li>
            <li>Electrions</li>
            <li>Home & LifeStyle</li>
            <li>Sport&apos;s & outdoor&apos;s</li>
            <li>Baby&apos;s and Toy&apos;s</li>
            <li>Groceries & Pets</li>
            <li>Health and Beauty</li>
          </ul>
        </div>
        <div className={styles.slideshow}>
          <Slidebar className={styles.slideshowtile}></Slidebar></div>
      </div>
    </>
  )
}

export default Home