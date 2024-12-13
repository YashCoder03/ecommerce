import styles from "./Contact.module.css";

function Contact() {
  return (
    <>
    <div className={styles.contactpage}>
        <div className={styles.left}>
            <div className={styles.call}>
                <span>Call to Us</span>
                <span>We are available 24/7, 7 days a week.</span>
                <span>Phone: +919876543210</span>
            </div>
            <div className={styles.email}>
                <span>Write to US</span>
                <span>Fill out our form and we will contact you within 24 hours.</span>
                <span>Emails: customer@exclusive.com</span>
                <span>Emails: support@exclusive.com</span>
            </div>
        </div>
        <div className={styles.right}>
            <div className={styles.customerdetails}>
                <input type="text" className={styles.name} placeholder="Your Name"/>
                <input type="text" className={styles.email} placeholder="Your Email"/>
                <input type="text" className={styles.phone} placeholder="Your Phone"/>
            </div>
            <div className={styles.message}>
                <textarea type="text" className={styles.messageinput} placeholder="Your Message"/>
            </div>
            <div className={styles.button}>
                <button className={styles.subbtn}>Send Message</button>
            </div>
        </div>

    </div>
    </>
  )
}

export default Contact