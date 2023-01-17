import { Info } from './components/Info/Info';
import { About } from './components/About/About';
import { Interests } from './components/Interests/Interests';
import { Footer } from './components/Footer/Footer';
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