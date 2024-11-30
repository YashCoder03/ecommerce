// import React from 'react'
import styles from "../TodayDeals/TodayDeals.module.css"
import ProductSlideShow from "../../ProductSlideShow/ProductSlideShow"
function TodayDeals() {
  return (
    <>
        <div className={styles.todaydeals}>
            <div className={styles.todaytitle}><span className={styles.titleblank}>&nbsp;</span>Today&apos;s</div>
            <div className={styles.flashsale}>
                <div className={styles.flashsaletitle}>Flash Sales</div>
                <div className={styles.countdown}>
                  <div className={styles.daystext}><span>Days</span> <span>Hours</span> <span>Minutes</span> <span>Seconds</span></div>
                  <div className={styles.daysnumber}><span>03</span>  <span className={styles.colon}>:</span> <span>23</span>  <span className={styles.colon}>:</span> <span>13</span> <span className={styles.colon}>:</span> <span>17</span> </div>
                </div>
            </div>
            <div className={styles.productslideshow}><ProductSlideShow></ProductSlideShow></div>
            <div className={styles.viewbutton}><button className={styles.viewbutton}>View All Products</button>
            </div>

        </div>

    </>
  )
}

export default TodayDeals