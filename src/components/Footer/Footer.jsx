import styles from './Footer.module.css';

export const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <a href='https://twitter.com/' target='_blank' className={styles.twitter}></a>
            <a href='https://www.facebook.com/' target='_blank' className={styles.facebook}></a>
            <a href='https://www.instagram.com/' target='_blank' className={styles.instagram}></a>
            <a href='https://www.instagram.com/' target='_blank' className={styles.github}></a>
        </div>
    )
}