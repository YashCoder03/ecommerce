import styles from "../Products/Product.module.css"
import ProductSlideShow from '../../ProductSlideShow/ProductSlideShow'

function Product() {
  return (
    <>
        <div className={styles.product}>
            <div className={styles.producttitle}><span className={styles.titleblank}>&nbsp;</span>Our Product</div>
            <div className={styles.bgtitle}>Explore Our Products</div>
            <div className={styles.productslideshow}><ProductSlideShow></ProductSlideShow></div>
            <div className={styles.productslideshow}><ProductSlideShow></ProductSlideShow></div>
            <div className={styles.viewbutton}><button className={styles.viewbutton}>View All Products</button></div>
            
        </div>
    </>
  )
}

export default Product