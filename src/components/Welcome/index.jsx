import myImage from '../../assets/svg/EatingSvg.svg'
import styles from './Welcome.module.css'

export function Welcome() {
    return (
        <div className={styles.mainDiv}>
            <h1>Want to make your commerce faster?</h1>
            <img src={myImage} alt="Description of the SVG"/>
        </div>
    )
}