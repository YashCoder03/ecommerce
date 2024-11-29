// import React from 'react'
import styles from "../TodayDeals/TodayDeals.module.css"
import ProductCard from "../ProductCard/ProductCard"

function TodayDeals() {
  return (
    <>
        <div className={styles.todaydeals}>
            <div className={styles.todaytitle}>Today's</div>
            <div className={styles.flashsale}>
                <div className={styles.flashsaletitle}>Flash Sale</div>
                <div className={styles.countdown}></div>
            </div>
            <div className={styles.slideshow}><ProductCard></ProductCard></div>
            <div className={styles.slideshow}><ProductCard></ProductCard></div>
            <div className={styles.slideshow}><ProductCard></ProductCard></div>
            <div className={styles.slideshow}><ProductCard></ProductCard></div>
            {/* <button className={styles.viewbutton}>View All Products</button> */}


        </div>

    </>
  )
}

export default TodayDeals