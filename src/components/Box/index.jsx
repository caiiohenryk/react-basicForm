import styles from './Box.module.css'

export function Box() {
    return (
        <main className={styles.mainDiv}>
            <div className={styles.textsDiv}>
                <h1 className={styles.Texts}>Burger API</h1>
                <p className={styles.Texts}>Please, sign-in to continue</p>
            </div>
            <form className={styles.formContent}>
                <div className={styles.divInputs}>
                    <label className={styles.Texts}>Username:</label> <br/>
                    <input type="text" className={styles.formData}/>
                </div>
                <div className={styles.divInputs}>
                    <label className={styles.Texts}>Password:</label> <br/>
                    <input type="password" className={styles.formData}/>
                </div>
                <input type="submit" className={styles.submitButton} value="Submit"/>
            </form>
        </main>
    )
}