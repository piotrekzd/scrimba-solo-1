import { Info } from './Info/Info';
import { About } from './About/About';
import { Interests } from './Interests/Interests';
import { Footer } from './Footer/Footer';
import styles from './App.module.css';

export const App = () => {
  return (
    <div className={styles.container_wrapper}>
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  )
};