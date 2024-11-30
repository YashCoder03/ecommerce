import productimg from "../../assets/productmg/2.png"
import styles from "./ProductCard.module.css";
import wishlist from "../../assets/Cardimg/Wishlist.png"
import quickview from "../../assets/Cardimg/QuickView.png"
function ProductCard() {
    const rating = 4.5;
  return (
    <>
        <div className={styles.card}>
            <div className={styles.cardimg}>
                    <img src={productimg}></img>
                <div className={styles.imgitem}>
                    <span className={styles.discounttext}>-40%</span>
                    <div className={styles.cardbutton}>
                        <button className={styles.wishlist}><img src={wishlist}></img></button>
                        <button className={styles.quickview}><img src={quickview}></img></button>
                    </div>
                </div>
            </div>
            <br/>
            <span className={styles.productname}>LV bag</span>
            <br/>
            <span className={styles.productname}>$260</span>
            <br/>
            {Array.from({ length: 5 }, (_, index) => (
            <span
              key={index}
              style={{
                color: index < Math.floor(rating) ? "#FFD700" : "#ddd",
                fontSize: "20px",
                marginRight: "4px",
              }}
            >
              ★
            </span>
          ))}
          <span style={styles.ratingValue}>({rating})</span>


        </div>
        
    </>
    
  )
}

export default ProductCard