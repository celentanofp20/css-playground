import styles from './photoHub.module.css';

export default function Photo() {
  return (
    <>
      <title>PhotoHub</title>
      <header className={styles.header}>
        <img className={styles.logo} src="/logo.png" alt="Estate Frame Media" />
        <p className={styles.logoText}>Estate Frame Media</p>
      </header>
      <div className={styles.wrapper}>
        {/* coupon banner */}
        <div className={styles.coupon}>
          <p className={styles.text}>
            Use code <strong>FIRST15</strong> for 15% off your first order!
          </p>
        </div>

        {/* Welcome */}
        <section className={`${styles.welcomeSection}`}>
          <div className={styles.textImageSection}>
            <div className={styles.textContent}>
              <h2>Welcome to Estate Frame Media</h2>
              <p>
                Capture Your Properties in Stunning Detail
              </p>
              <div className={styles.buttonGroup}>
                <a href="/order" className={styles.scrollButton}>Book Now</a>
                <a href="#services" className={styles.scrollButton}>Learn More</a>
              </div>
            </div>
            <div className={styles.imageContent}>
              <img src="/interior-kitchen.jpg" alt="Interior Kitchen" />
            </div>
          </div>
        </section>

        {/* about section */}
        <section className={styles.aboutSection}>
          <h2>About Us</h2>
          <p>
            Welcome to <strong>Estate Frame Media</strong>, where we specialize in premium real estate photography and videography. Serving real estate agents, brokerages, and commercial businesses, we deliver high-quality images and videos that showcase your properties in the best light. From striking interior HDR photos to breathtaking aerial drone footage, our professional and friendly team ensures your listings stand out.
          </p>
          <h3>Our Expertise Includes:</h3>
          <ul className={styles.expertiseList}>
            <li>
              <strong>Interior and Exterior HDR Photography:</strong>
              <p>Show every detail of your property with our high dynamic range (HDR) imaging that highlights both the interior and exterior.</p>
            </li>
            <li>
              <strong>Aerial Drone Footage:</strong>
              <p>Capture the full scope of your property with stunning drone images and videos that provide a unique perspective.</p>
            </li>
            <li>
              <strong>Interior Video Tours:</strong>
              <p>Engage potential buyers with immersive video tours that bring your property to life.</p>
            </li>
          </ul>
          <p>
            Explore our services and discover how we can help you present your properties with unparalleled clarity and appeal.
          </p>
        </section>

        {/* Services */}
        <section id='services' className={styles.servicesSection}>
          <h2>Services</h2>
          <div className={styles.gridContainer}>
            <div className={styles.gridItem}>
              <img className='space-s' src="/interior-bathroom.jpg" alt="Interior Bathroom" />
              <strong>Interior and Exterior HDR Photography</strong>
              <p className='space-n space-ew'>Our HDR photography captures every detail of your property, from the grandeur of the living room to the charm of the exterior. With our professional-grade equipment and techniques, your property will shine in every shot.</p>
            </div>
            <div className={styles.gridItem}>
              <img className='space-s' src="/aerial-pool.jpg" alt="Aerial Pool" />
              <strong>Aerial Drone Photography and Videography</strong>
              <p className='space-n space-ew'>Elevate your property listings with our drone services. We provide high-resolution aerial images and dynamic video footage that offer a comprehensive view of your property and its surroundings.</p>
            </div>
            <div className={styles.gridItem}>
              <img className='space-s' src="/interior-living-room.jpg" alt="Interior Living Room" />
              <strong>Interior Video Tours</strong>
              <p className='space-n space-ew'>Give potential buyers an immersive experience with our interior video tours. These professionally crafted videos allow viewers to explore your property as if they were there, enhancing their connection and interest.
              </p>
            </div>
          </div>
        </section>

        {/* social media kit */}
        <section className={styles.marketingKitSection}>
          <div className={styles.content}>
            <img src="/marketing-kit.jpg" alt="Social Media Kit" className={styles.kitImage} />
            <div className={styles.text}>
              <h2>Social Media Kit</h2>
              <p>
                Our <strong>Social Media Kit</strong> offers a comprehensive solution for real estate professionals looking to elevate their marketing efforts. With high-resolution images, custom branding, and expert consultation, you’ll have everything you need to create compelling property listings that attract attention and drive results.
              </p>
              <div className={styles.svgContainer}>
                <svg preserveAspectRatio="xMidYMid meet" data-bbox="27.5 20 144.9 160" viewBox="27.5 20 144.9 160" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img" aria-label="Branded &amp; Unbranded Property Websites">
                  <g>
                    <path d="M125.1 69.6c.2.1.2.1 0 0 .3 1.1.7 2.1 1 3.1 0 .1.1.2.1.3.3.9.6 1.9.8 2.9 0 .2.1.3.1.6.3 1.1.6 2.3.8 3.4h23c-2.7-7.2-6.9-13.8-12.1-19.3-4.2 2.5-9.1 4.3-15 5.7.7 1.2 1 2.3 1.3 3.3z" fill="#9AB6B1" data-color="1"></path>
                    <path d="M108.1 45c.5.3.9.6 1.4.9.1.1.2.1.2.2.6.3 1 .8 1.5 1.3.1.1.2.2.5.3.3.3.8.7 1.1 1.1l.3.3c.5.5.9 1 1.4 1.5.1.1.2.3.5.5.3.5.7.8 1 1.3.1.2.3.3.5.6.5.6.8 1.1 1.3 1.7.1.2.2.3.3.6.3.5.6.9.9 1.4.1.2.3.6.5.8.3.6.7 1 .9 1.6.1.3.3.6.5.9.2.6.6 1 .8 1.6.1.3.3.6.5.9.2.5.5 1 .7 1.5.1.2.2.6.3.8 5.6-1.3 10.4-3.1 14.4-5.5-8.5-8.3-19.5-14.2-31.9-15.9.6.2 1.1.6 1.6.9.5.5.7.6.8.7z" fill="#9AB6B1" data-color="1"></path>
                    <path d="M97.3 156.8v-24.5c-8.9 0-16.6.7-23.2 2.2 5.3 12.6 13.6 21.8 23.2 22.3z" fill="#9AB6B1" data-color="1"></path>
                    <path d="M73.4 133.1c6.9-1.5 14.7-2.2 23.8-2.2v-30.2H67c.1 11.1 2.5 22.7 6.4 32.4z" fill="#9AB6B1" data-color="1"></path>
                    <path d="M98.6 131c9 0 17 .8 23.8 2.2.3-1 .8-1.9 1.1-3v-.1c.3-1 .7-1.9 1-3 0-.1 0-.1.1-.2.3-1 .6-2.1.9-3 0-.1 0-.2.1-.2.2-1 .6-2.1.8-3.2H121c-6.4 0-11.5-5.1-11.5-11.5v-8.1H98.7V131h-.1z" fill="#9AB6B1" data-color="1"></path>
                    <path d="M115.9 145.3c0-.1.1-.1.1-.2.8-1.1 1.6-2.4 2.4-3.8 0-.1.1-.2.1-.2.8-1.3 1.5-2.6 2.2-4.1 0-.1.1-.2.1-.3.3-.7.7-1.4.9-2.2-6.6-1.4-14.4-2.1-23.2-2.2v24.5c5.4-.2 10.3-3.2 14.6-8.1l.1-.1c1-1.1 1.9-2.1 2.7-3.3z" fill="#9AB6B1" data-color="1"></path>
                    <path d="M65.6 100.7H47.7c.1 13.8 5.3 26.5 13.5 36.3 3.2-1.5 6.7-2.6 10.7-3.5-3.9-9.4-6.2-20.8-6.3-32.8z" fill="#9AB6B1" data-color="1"></path>
                    <path d="M72.3 134.9c-3.8.9-7.2 1.9-10.3 3.3 6.6 7.5 15.3 13.3 25 16.5-5.6-4.1-10.8-11-14.7-19.8z" fill="#9AB6B1" data-color="1"></path>
                    <path d="M97.3 43.2c-9.6.5-17.8 9.6-23.2 22.3 6.6 1.4 14.4 2.1 23.2 2.2V43.2z" fill="#9AB6B1" data-color="1"></path>
                    <path d="M87.1 45.4c-9.7 3.2-18.3 8.9-24.9 16.5 3.1 1.4 6.5 2.5 10.3 3.3 3.7-8.9 8.9-15.8 14.6-19.8z" fill="#9AB6B1" data-color="1"></path>
                    <path d="M125.7 76.6c-.3-1-.6-2.2-.9-3.2v-.1c-.3-1-.7-2.2-1-3.2V70c-.3-1-.8-2.1-1.1-3.1-6.9 1.5-14.7 2.2-23.8 2.2v30.2h10.7v-7.8c0-6.4 5.1-11.5 11.5-11.5h5.6c-.2-1.1-.6-2.2-.8-3.3-.2 0-.2-.1-.2-.1z" fill="#9AB6B1" data-color="1"></path>
                    <path d="M73.4 66.9c-4 9.7-6.3 21.4-6.4 32.5h30.2V69c-9.1 0-17-.7-23.8-2.1z" fill="#9AB6B1" data-color="1"></path>
                    <path d="M71.9 66.5c-3.9-.9-7.5-2.1-10.7-3.5-8.3 9.8-13.4 22.5-13.5 36.3h17.9c.1-12 2.4-23.4 6.3-32.8z" fill="#9AB6B1" data-color="1"></path>
                    <path d="M118.5 58.9s0-.2 0 0c-.8-1.5-1.7-2.7-2.5-4 0 0 0-.1-.1-.1-.9-1.3-1.7-2.4-2.7-3.4-4.2-4.8-9.3-7.9-14.6-8.1v24.5c8.9 0 16.6-.8 23.2-2.2-.3-.8-.7-1.6-1-2.3-.7-1.6-1.5-3.1-2.3-4.4z" fill="#9AB6B1" data-color="1"></path>
                    <path d="M152.7 80h6.4c-7.9-21.3-27.9-36.6-51.8-37.5 21 3.4 38.2 18.1 45.4 37.5z" fill="#9AB6B1" data-color="1"></path>
                    <path d="M107.3 157.5c23.7-.9 43.7-16.1 51.5-37.1h-6.4c-7.1 19.1-24.3 33.7-45.1 37.1z" fill="#9AB6B1" data-color="1"></path>
                    <path d="M127.1 124.2c-.2.9-.6 1.9-.8 2.9 0 .1-.1.2-.1.2-.3 1-.7 2.1-1 3-.3 1-.8 2.1-1.1 3.1 5.8 1.4 10.7 3.3 15 5.7 5.1-5.4 9.3-11.8 12-18.9h-22.9c-.2 1.1-.6 2.3-.8 3.4-.2.3-.2.4-.3.6z" fill="#9AB6B1" data-color="1"></path>
                    <path d="M123.4 134.9c-.2.5-.3.9-.6 1.3-.1.3-.3.7-.5 1-.2.5-.5.8-.6 1.3-.2.3-.3.7-.6 1.1-.3.6-.7 1.1-1 1.8-.2.3-.3.7-.6 1-.2.3-.5.7-.6 1-.2.3-.5.8-.7 1.1s-.5.8-.8 1.1c-.3.5-.6.9-.9 1.3-.2.2-.3.5-.6.7-.3.3-.6.8-.9 1.1-.1.2-.3.3-.5.6-.5.5-.9 1-1.4 1.5l-.5.5c-.3.3-.7.7-1.1 1-.1.1-.3.2-.5.5-.5.5-1 .8-1.5 1.3-.1.1-.2.1-.3.2-.5.3-.9.6-1.4.9-.1.1-.3.2-.5.2-.6.3-1 .7-1.6.9 12.3-1.7 23.4-7.5 31.9-15.9-3.8-2.5-8.6-4.3-14.2-5.5z" fill="#9AB6B1" data-color="1"></path>
                    <path d="M28.8 60.1l-1.3-.7C39.7 38.5 60.1 24.1 83.8 20l.2 1.4c-23.2 4.1-43.3 18.1-55.2 38.7z" fill="#333941" data-color="2"></path>
                    <path d="M112 180l-.2-1.4c23.2-4.1 43.4-18.2 55.2-38.6l1.3.7c-12.1 20.8-32.6 35.2-56.3 39.3z" fill="#333941" data-color="2"></path>
                    <path fill="#333941" d="M152.9 35.5h-5v-5h-1.5v5h-5V37h5v5.1h1.5V37h5v-1.5z" data-color="2"></path>
                    <path fill="#333941" d="M167 49.5h-5.1v-5h-1.4v5h-5.1V51h5.1v5h1.4v-5h5.1v-1.5z" data-color="2"></path>
                    <path d="M106.1 156.2c-2.6.3-5.4.6-8.1.6-31.3 0-56.8-25.5-56.8-56.8S66.7 43.2 98 43.2c2.7 0 5.5.2 8.1.6 20.7 3 37.9 17.1 45 36.2h1.5c-7.1-19.4-24.3-34.1-45.3-37.5-3.1-.5-6.2-.8-9.5-.8-32.1 0-58.3 26.2-58.3 58.3s26.2 58.3 58.3 58.3c3.2 0 6.4-.2 9.5-.8 20.8-3.4 37.9-17.8 45.1-37.1h-1.6c-7.1 18.8-24.2 32.9-44.7 35.8z" fill="#333941" data-color="2"></path>
                    <path d="M118.6 94.7h1.5l2.6 8.9 3-8.9h1.3l3.2 8.9 2.5-8.9h1.4l-3.1 10.6h-1.4l-3.2-8.7-3 8.7H122l-3.4-10.6z" fill="#333941" data-color="2"></path>
                    <path d="M135.7 94.7h1.5l2.6 8.9 3-8.9h1.3l3.2 8.9 2.5-8.9h1.4l-3.1 10.6h-1.4l-3.2-8.7-3 8.7h-1.4l-3.4-10.6z" fill="#333941" data-color="2"></path>
                    <path d="M152.8 94.7h1.5l2.6 8.9 3-8.9h1.3l3.2 8.9 2.5-8.9h1.4l-3.1 10.6h-1.4l-3.2-8.7-3 8.7h-1.4l-3.4-10.6z" fill="#333941" data-color="2"></path>
                    <path d="M170.2 104.5c0-.3.1-.6.3-.8.2-.2.5-.3.8-.3.3 0 .6.1.8.3.2.2.3.5.3.8s-.1.6-.3.8c-.2.2-.5.3-.8.3-.3 0-.6-.1-.8-.3-.2-.3-.3-.5-.3-.8z" fill="#333941" data-color="2"></path>
                  </g>
                </svg>
                <svg preserveAspectRatio="xMidYMid meet" data-bbox="38.999 38.998 122.001 122.004" viewBox="38.999 38.998 122.001 122.004" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img" aria-label="Printable Flyers">
                  <g>
                    <path fill="#A9E1E9" d="M160.999 100c0 33.69-27.31 61.002-61 61.002s-61-27.312-61-61.002 27.31-61.002 61-61.002 61 27.312 61 61.002z" data-color="1"></path>
                    <path d="M161 100c0-5.76-.847-11.314-2.344-16.598l-36.918-21.458-57.108 62.403c18.828 10.937 37.651 21.885 56.479 32.827C144.377 148.576 161 126.257 161 100z" opacity=".05"></path>
                    <path d="M137.916 105.683V79.74c0-.778-.565-1.417-1.253-1.417H64.165c-.694 0-1.254.639-1.254 1.417v25.943c.001 0 75.005.02 75.005 0z" fill="#00658A" data-color="2"></path>
                    <path d="M137.916 105.683V79.74c0-.778-.565-1.417-1.253-1.417H64.165c-.694 0-1.254.639-1.254 1.417v25.943c.001 0 75.005.02 75.005 0z" opacity=".4"></path>
                    <path d="M137.916 105.683c0-.783-.565-1.42-1.253-1.42H64.165c-.694 0-1.254.637-1.254 1.42l.253 17.242c0 .79.55 1.422 1.244 1.422h72.23c.689 0 1.249-.632 1.249-1.422l.029-17.242z" fill="#00658A" data-color="2"></path>
                    <path d="M125.94 96.49c0 .476-.376.85-.842.85H75.73a.85.85 0 0 1-.852-.85c0-.463.387-.842.852-.842h49.369a.841.841 0 0 1 .841.842z" fill="#00658A" data-color="2"></path>
                    <path fill="#FFFFFF" d="M121.739 97.374H79.123V69.893l7.908-7.98h34.708v35.461z" data-color="3"></path>
                    <path d="M125.94 112.421a.845.845 0 0 1-.842.852H75.73a.853.853 0 0 1-.852-.852c0-.463.387-.842.852-.842h49.369c.465 0 .841.379.841.842z" opacity=".4"></path>
                    <path fill="#00658A" d="M79.123 69.86l7.997-.597-.109-7.372-7.888 7.969z" data-color="2"></path>
                    <path fill="#FFFFFF" d="M121.63 111.592v20.195H79.123v-20.195h42.507z" data-color="3"></path>
                    <path d="M70.72 109.441c0 1.179-.966 2.15-2.145 2.15a2.15 2.15 0 0 1 0-4.298c1.179 0 2.145.959 2.145 2.148z" opacity=".8"></path>
                    <path d="M69.799 114.307c0 .676-.55 1.224-1.224 1.224a1.214 1.214 0 0 1-1.219-1.224c0-.679.535-1.226 1.219-1.226a1.224 1.224 0 0 1 1.224 1.226z" opacity=".8"></path>
                  </g>
                </svg>
                <svg preserveAspectRatio="xMidYMid meet" data-bbox="43.5 62 113 76.001" viewBox="43.5 62 113 76.001" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img" aria-label="Slideshow YouTube Video">
                  <g>
                    <path d="M119.659 98.798l-32.41-20.173a1.43 1.43 0 0 0-1.446-.038c-.453.25-.735.725-.735 1.24v40.346a1.425 1.425 0 0 0 2.181 1.202l32.41-20.173a1.416 1.416 0 0 0 0-2.404z" fill="#E98866" data-color="1"></path>
                    <path d="M153.128 62H46.873a3.365 3.365 0 0 0-3.373 3.357v69.287a3.365 3.365 0 0 0 3.373 3.357h106.255a3.364 3.364 0 0 0 3.372-3.357V65.357A3.365 3.365 0 0 0 153.128 62zm-94.273 69.287h-8.61v-6.449h8.61v6.449zm0-13.162h-8.61v-7.609h8.61v7.609zm0-14.321h-8.61v-7.608h8.61v7.608zm0-14.321h-8.61v-7.608h8.61v7.608zm0-14.321h-8.61v-6.449h8.61v6.449zm75.545 56.125H65.6V68.713h68.8v62.574zm15.355 0h-8.61v-6.449h8.61v6.449zm0-13.162h-8.61v-7.609h8.61v7.609zm0-14.321h-8.61v-7.608h8.61v7.608zm0-14.321h-8.61v-7.608h8.61v7.608zm0-14.321h-8.61v-6.449h8.61v6.449z" fill="#0E4828" data-color="2"></path>
                  </g>
                </svg>
                <svg preserveAspectRatio="xMidYMid meet" data-bbox="30.501 29.5 139.002 141.001" viewBox="30.501 29.5 139.002 141.001" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img" aria-label="Social Media Flyer Tiles">
                  <g>
                    <path d="M166.124 83.089a17.198 17.198 0 0 0-11.34-6.844 17.39 17.39 0 0 0-2.749-.195h-33.669v-22.6c0-13.206-10.752-23.95-23.966-23.95-1.58 0-3.013.93-3.654 2.374L65.179 89.35H47.811c-9.545 0-17.31 7.761-17.31 17.3v46.55c0 9.539 7.766 17.3 17.31 17.3h94.995l.195.001c8.499 0 15.839-6.29 17.115-14.699l9.185-59.856a17.177 17.177 0 0 0-3.177-12.857zm-102.346 79.41H47.811c-5.134 0-9.31-4.172-9.31-9.3v-46.55c0-5.128 4.177-9.3 9.31-9.3h15.967v65.15zm97.615-67.761l-9.185 59.856c-.687 4.524-4.634 7.906-9.25 7.906h-71.18V94.2L96.91 37.697c7.616 1.206 13.456 7.811 13.456 15.753v26.6a4 4 0 0 0 4 4h37.715a8.958 8.958 0 0 1 1.503.105 9.249 9.249 0 0 1 6.1 3.681 9.226 9.226 0 0 1 1.709 6.902z" fill="#000001" data-color="1"></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </section>

        <footer id="contact" className={styles.footer}>
          <p>Contact place holder</p>
        </footer>
      </div></>
  );
}
