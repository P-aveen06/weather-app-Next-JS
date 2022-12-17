import styles from './weather.module.css';
const weather=()=>{
    return (
        <div className={styles.weather}>
            <div className={styles.weatherHeader}>
                Weather Details
            </div>
            <div >
            <div className={styles.weatherDetails}>
                <span>
                    Degree
                </span>
                <span>
                    Description
                </span></div>
                <br/>
                <br/>
            <div className={styles.weatherDetails}>
                <span>
                    Humidity: range
                </span>
                <span>
                    Visiblity: value
                </span>
            </div>
        </div>
        </div>
    )
}
export default weather;