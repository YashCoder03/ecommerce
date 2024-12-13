import styles from "../ProductDetails/ProductDetails.module.css"
import img1 from "../../assets/ProductDetails/image 57.png"
import img2 from "../../assets/ProductDetails/image 58.png"
import img3 from "../../assets/ProductDetails/image 59.png"
import img4 from "../../assets/ProductDetails/image 61.png"
import img5 from "../../assets/ProductDetails/image 63.png"
function ProductDetails() {
  return (
    <>
        <div className={styles.productdetails}>
            <div className={styles.subdiv}>
                <div className={styles.productimages}>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />

                </div>
                <div className={styles.productbigimage}>
                    <img src={img5} alt="" />
                </div>
                <div className={styles.details}>
                    <div className={styles.textdetails}>
                        <span>Havic HV G-92 Gamepad</span>
                        <span></span>
                        <span>Rs. 192</span>
                        <span>PlayStation 5 Controller Skin High quality vinyl with air <br></br> channel adhesive for easy bubble free install & mess<br></br> free removal Pressure sensitive.</span>
                    </div>
                    <div className={styles.btn}>
                        <button className={styles.buy}>Buy Now</button>
                        <button className={styles.wishlist}>like</button>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.freedelivery}>
                            Free Delivery
                        </div>
                        <div className={styles.return}>
                            30 Days Return
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default ProductDetails