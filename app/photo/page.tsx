import styles from './photoHub.module.css';

export default function Home() {
  return (
    <>
      <title>PhotoHub</title>
      <div className={styles.wrapper}>
        <section>
          {/* coupon banner */}
          <div className={styles.banner}>
            <p className={styles.text}>
              Use code <strong>DISCOUNT20</strong> for 20% off!
            </p>
          </div>
        </section>

        {/* Section with Text, Image, and Buttons */}
        <div className={styles.textImageSection}>
          <div className={styles.textContent}>
            <h2>Welcome to Estate Frame Media</h2>
            <p>
              Capture Your Properties in Stunning Detail
            </p>
            <div className={styles.buttonGroup}>
              <a href="#contact" className={styles.scrollButton}>Contact Us</a>

              <button className={styles.button}>
                Learn More
              </button>
            </div>
          </div>
          <div className={styles.imageContent}>
            <img src="/interior-kitchen.jpg" alt="Interior Kitchen" />
          </div>
        </div>

        {/* Image Grid */}
        <section className={styles.servicesSection}>
          <h2>Services</h2>
          <div className={styles.gridContainer}>
            <div className={styles.gridItem}>
              <img src="/interior-bathroom.jpg" alt="Interior Bathroom" />
              <p>Interior and Exterior HDR Photography Our HDR photography captures every detail of your property, from the grandeur of the living room to the charm of the exterior. With our professional-grade equipment and techniques, your property will shine in every shot.</p>
            </div>
            <div className={styles.gridItem}>
              <img src="/aerial-pool.jpg" alt="Aerial Pool" />
              <p>Aerial Drone Photography and Videography Elevate your property listings with our drone services. We provide high-resolution aerial images and dynamic video footage that offer a comprehensive view of your property and its surroundings.</p>
            </div>
            <div className={styles.gridItem}>
              <img src="/interior-living-room.jpg" alt="Interior Living Room" />
              <p>Interior Video Tours Give potential buyers an immersive experience with our interior video tours. These professionally crafted videos allow viewers to explore your property as if they were there, enhancing their connection and interest.
              </p>
            </div>
          </div>
        </section>

        {/* about section */}
        <section className={styles.aboutSection}>
          <h2>About Us</h2>
          <p>
            Welcome to <strong>Esate Frame Media</strong>, where we specialize in premium real estate photography and videography. Serving real estate agents, brokerages, and commercial businesses, we deliver high-quality images and videos that showcase your properties in the best light. From striking interior HDR photos to breathtaking aerial drone footage, our professional and friendly team ensures your listings stand out.
          </p>
          <h3>Our Expertise Includes:</h3>
          <ul className={styles.expertiseList}>
            <li><strong>Interior and Exterior HDR Photography:</strong> Show every detail of your property with our high dynamic range (HDR) imaging that highlights both the interior and exterior.</li>
            <li><strong>Aerial Drone Footage:</strong> Capture the full scope of your property with stunning drone images and videos that provide a unique perspective.</li>
            <li><strong>Interior Video Tours:</strong> Engage potential buyers with immersive video tours that bring your property to life.</li>
          </ul>
          <p>
            Explore our services and discover how we can help you present your properties with unparalleled clarity and appeal.
          </p>
        </section>

        {/* social media kit */}
        <section className={styles.marketingKitSection}>
          <div className={styles.content}>
            <img src="/marketing-kit.jpg" alt="Social Media Kit" className={styles.kitImage} />
            <div className={styles.text}>
              <h2>HD Photo Hub Marketing Kit</h2>
              <p>
                Our HD Photo Hub Marketing Kit offers a comprehensive solution for real estate professionals looking to elevate their marketing efforts. With high-resolution images, custom branding, and expert consultation, you’ll have everything you need to create compelling property listings that attract attention and drive results.
              </p>
            </div>
          </div>
        </section>

        <footer id="contact" className={styles.footer}>
          <p>Contact place holder</p>
        </footer>
      </div></>
  );
}
