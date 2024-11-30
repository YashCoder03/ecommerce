import styles from "./Footer.module.css"

function Footer() {
  return (
    <>
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.logo}>
                        <h4>Yash Mart</h4>
                        <ul className={styles.Exclusivelist}>
                            <li>Subscribe</li>
                            <li>Get 10% off your first order</li>
                        </ul>
                    </div>
                    <div className={styles.support}>
                        <h4>Support</h4>
                        <ul>
                            <li>Park Connect, Hinjewadi</li>
                            <li>Pune, Maharashtra</li>
                            <li>yashdeshmukh40@gmail.com</li>
                            <li>+919876543210</li>
                        </ul>
                    </div>
                    <div className={styles.Account}>
                        <h4>Account</h4>
                        <ul>
                            <li>My Account</li>
                            <li>Login / Register</li>
                            <li>Cart</li>
                            <li>Wishlist</li>
                            <li>Shop</li>
                        </ul>

                    </div>
                    <div className={styles.quicklink}>
                        <h4>Quick Link</h4>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms of use</li>
                            <li>FAQ</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className={styles.download}>
                        <h4>Download</h4>

                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer