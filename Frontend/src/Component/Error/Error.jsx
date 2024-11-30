import styles from "./Error.module.css";

function Error() {
  return (
    <>
    <div className={styles.errorpage}>
        <div className={styles.errorHead}>
            <h1>404 Not Found</h1>
            Your visited page not found you may go to home page
            <br/>
            <button className={styles.homebtn}>Back to Homepage</button>
        </div>
    </div>
    </>
  )
}

export default Error