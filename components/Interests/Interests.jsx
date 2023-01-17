import styles from './Interests.module.css';

export const Interests = () => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>
                Interests
            </h2>
            <p className={styles.text}>
                Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
            </p>
        </div>
    )
}