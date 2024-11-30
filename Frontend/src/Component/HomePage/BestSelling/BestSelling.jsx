import styles from "../BestSelling/BestSelling.module.css"
import ProductSlideShow from "../../ProductSlideShow/ProductSlideShow"
function BestSelling() {
  return (
    <>
        <div className={styles.bestselling}>
            <div className={styles.title}><span className={styles.titleblank}>&nbsp;</span>BestSelling&apos;s</div>
            <div className={styles.bsbigtitle}>Best Selling Products <button className={styles.viewall}>View All</button></div>
            <div className={styles.productslideshow}><ProductSlideShow></ProductSlideShow></div>

        </div>
    </>
  )
}

export default BestSelling