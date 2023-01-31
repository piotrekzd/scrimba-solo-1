import styles from './Info.module.css';

export const Info = () => {
    return (
        <div className={styles.about_wrapper}>
            <img src='../src/images/avatar.png' className={styles.avatar} />
            <h1 className={styles.title}>Piotr Zdebski</h1>
            <h2 className={styles.subtitle}>Junior Frontend Developer</h2>
            <a href="_blank" className={styles.link}>laurasmith.website</a>
            <div className={styles.button_wrapper}>
                <button type="button" className={styles.btn_mail}>Email</button>
                <button type="button" className={styles.btn_linkedin}>LinkedIn</button>
            </div>
        </div>
    );
};
