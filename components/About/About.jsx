import styles from './About.module.css';

export const About = () => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>
                About
            </h2>
            <p className={styles.text}>
                I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
            </p>
        </div>
    );
};