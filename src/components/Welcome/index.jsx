import myImage from '../../assets/svg/EatingSvg.svg'
import styles from './Welcome.module.css'

export function Welcome() {
    return (
        <div className={styles.mainDiv}>
            <h1>Do you want to make your business more efficient?</h1>
            <p>Try our solutions!</p>
            <img src={myImage} alt="Description of the SVG"/>

        </div>
    )
}