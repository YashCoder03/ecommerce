import React from 'react'
import styles from "./Feature.module.css"
import img1 from "../../../assets/Feature/Frame 684.png"
import img2 from "../../../assets/Feature/Frame 685.png"
import img3 from "../../../assets/Feature/Frame 686.png"
import img4 from "../../../assets/Feature/Frame 687.png"


function Feature() {
  return (
    <>
        <div className={styles.feature}>
            <div className={styles.featuretitle}><span className={styles.titleblank}>&nbsp;</span>Feature</div>
            <div className={styles.bsbigtitle}>New Arrival</div>
            <div className={styles.banner}>
                <div className={styles.leftbanner}><img src={img1}></img></div>
                <div className={styles.rightbanner}>
                    <div className={styles.upbanner}><img src={img2}></img></div>
                    <div className={styles.downbanner}>
                        <div className={styles.speaker}><img src={img3}></img></div>
                        <div className={styles.perfume}><img src={img4}></img></div>
                    </div>

                </div>
            </div>
        </div>
           
    </>
  )
}

export default Feature