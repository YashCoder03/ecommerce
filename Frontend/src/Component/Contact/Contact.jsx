import styles from "./Contact.module.css";

function Contact() {
  return (
    <>
    <div className={styles.contactpage}>
        <div className={styles.left}>
            <div className={styles.call}>
                <span>Call to Us</span>
                We are available 24/7, 7 days a week.
                <br/>
                Phone: +919876543210
            </div>
            <div className={styles.email}>
            Fill out our form and we will contact you within 24 hours.
            <br />
            Emails: customer@exclusive.com
            <br />
            Emails: support@exclusive.com
            </div>
        </div>
        <div className={styles.right}>
            <div className={styles.customerdetails}>
                <input type="text" className={styles.name} />
                <input type="text" className={styles.email} />
                <input type="text" className={styles.phone} />
            </div>
            <div className={styles.message}>
                <input type="text" className={styles.messageinput} />
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