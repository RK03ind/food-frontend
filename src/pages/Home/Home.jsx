import styles from "./HomePage.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <h1>Food4All</h1>
          </div>
          <ul className={styles.navLinks}>
            <li>
              <a href="#contact">All Lisitings</a>
            </li>
          </ul>
          <div className={styles.btnWrapper}>
            <a href="#donate" className={styles.btn}>
              Login
            </a>
            <a href="#donate" className={styles.btn}>
              Contact Us
            </a>
          </div>
        </nav>
      </header>

      <section id="home" className={styles.hero}>
        <div className={styles.heroContent}>
          <h2>Stop Wasting Food and Mitigate Hunger</h2>
          <p>
            Together, we can make a difference in the lives of those in need.
          </p>
          <a href="#donate" className={styles.heroBtn}>
            Donate Now
          </a>
        </div>
      </section>

      <section id="stats" className={styles.stats}>
        <div className={styles.stat}>
          <h3>5000+</h3>
          <p>Meals Donated</p>
        </div>
        <div className={styles.stat}>
          <h3>200+</h3>
          <p>Restaurants Participating</p>
        </div>
        <div className={styles.stat}>
          <h3>100+</h3>
          <p>NGOs Supported</p>
        </div>
      </section>

      <section id="how-it-works" className={styles.howItWorks}>
        <h2>How It Works</h2>
        <div className={styles.steps}>
          <div className={styles.step}>
            <h3>1. Register</h3>
            <p>Sign up as a restaurant or NGO.</p>
          </div>
          <div className={styles.step}>
            <h3>2. Donate or Request</h3>
            <p>Restaurants list surplus food, NGOs request donations.</p>
          </div>
          <div className={styles.step}>
            <h3>3. Connect</h3>
            <p>Coordinate and arrange for the food donation.</p>
          </div>
        </div>
      </section>

      <section id="partners" className={styles.partners}>
        <h2>Our Partners</h2>
        <div className={styles.partnerLogos}>
          {/* Replace these with actual partner logos */}
          <div className={styles.partnerLogo}>Partner 1</div>
          <div className={styles.partnerLogo}>Partner 2</div>
          <div className={styles.partnerLogo}>Partner 3</div>
          <div className={styles.partnerLogo}>Partner 4</div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2024 FoodDonate. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
