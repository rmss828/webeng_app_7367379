/*
  main component of website
  renders overall layout of website
  i sadly didn't have a nice image for the meta data so you'll get the one vite provides
*/

import styles from "./style";
import { Navbar, Hero, RSSFeed, Signature, Footer } from "./components";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <Helmet>
        <title>7367379 - WebEngProject</title>
        <meta name="description" content="This is my web engineering project." />
      </Helmet>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <RSSFeed />
          <Signature />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
