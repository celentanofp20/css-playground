import styles from './about.module.css';

export default function About() {
    return (
        <>
            <title>About</title>
            <header className={styles.header}>
                <img className={styles.logo} src="/logo.png" alt="Estate Frame Media" />
                <p className={styles.logoText}>Estate Frame Media</p>
            </header>
            <div className={styles.container}>
                <h1 className={styles.title}>About Us</h1>
                <div className={styles.textBox}>
                    <p className={styles.text}>
                        Welcome to Estate Frame Media, your trusted partner for premium real estate photography and
                        videography. We cater to real estate agents, brokerages, and commercial businesses, delivering
                        professional images and videos that bring your properties to life. Whether it’s detailed HDR
                        photography or captivating aerial drone shots, we ensure every listing makes a lasting impression.
                    </p>
                </div>

                <p className={styles.exploreText}>
                    Explore our portfolio and discover how Estate Frame Media can elevate the presentation of your properties
                    with unparalleled quality and creativity.
                </p>


                {/* our services section - with style */}
                <h2 className={styles.sectionTitle}>Our Services</h2>
                <div className={styles.servicesSection}>
                    <div className={styles.serviceCard}>
                        {/* <img className={styles.serviceIcon} src="/hdr-boxed-svgrepo-com.svg" alt="HDR Photography" /> */}
                        <div className={styles.hdrIcon} />
                        <h3 className={styles.serviceTitle}>HDR Photography</h3>
                        <p className={styles.serviceDescription}>
                            Showcase your property’s finest details with high dynamic range imaging that captures both the interior and exterior in perfect balance.
                        </p>
                    </div>
                    <div className={styles.serviceCard}>
                        {/* <img className={styles.serviceIcon} src="/drone-svgrepo-com.svg" alt="Aerial Drone Footage" /> */}
                        <div className={styles.droneIcon} />
                        <h3 className={styles.serviceTitle}>Aerial Drone Footage</h3>
                        <p className={styles.serviceDescription}>
                            Offer a fresh perspective on your properties with breathtaking drone visuals that highlight the full scope of the space.
                        </p>
                    </div>
                    <div className={styles.serviceCard}>
                        {/* <img className={styles.serviceIcon} src="/video-svgrepo-com.svg" alt="Interior Video Tours" /> */}
                        <div className={styles.videoIcon} />
                        <h3 className={styles.serviceTitle}>Interior Video Tours</h3>
                        <p className={styles.serviceDescription}>
                            Engage potential buyers with immersive video tours that guide them through your property like never before.
                        </p>
                    </div>
                </div>

                {/* why choose section - with duplicate styling */}
                <h2 className={styles.sectionTitle}>Why Choose Estate Frame Media?</h2>
                <div className={styles.servicesSection}>
                    <div className={styles.serviceCard}>
                        {/* <img className={styles.serviceIcon} src="/quality-premium-certificate-svgrepo-com.svg" alt="Precision and Quality" /> */}
                        <div className={styles.qualityIcon} />
                        <h3 className={styles.serviceTitle}>Precision and Quality</h3>
                        <p className={styles.serviceDescription}>
                            Our HDR photos and videos bring out the best in every corner of your property, ensuring
                            high-resolution content that enhances your listings.
                        </p>
                    </div>
                    <div className={styles.serviceCard}>
                        {/* <img className={styles.serviceIcon} src="/idea-svgrepo-com.svg" alt="Innovative Approach" /> */}
                        <div className={styles.innovativeIcon} />
                        <h3 className={styles.serviceTitle}>Innovative Approach</h3>
                        <p className={styles.serviceDescription}>
                            By integrating the latest in photography and drone technology, we provide unique perspectives
                            and visually stunning results for all your real estate needs.
                        </p>
                    </div>
                    <div className={styles.serviceCard}>
                        {/* <img className={styles.serviceIcon} src="/rating-svgrepo-com.svg" alt="Exceptional Service" /> */}
                        <div className={styles.exceptionalServiceIcon} />
                        <h3 className={styles.serviceTitle}>Exceptional Service</h3>
                        <p className={styles.serviceDescription}>
                            From the initial consultation to final delivery, we are committed to providing a professional,
                            friendly, and efficient service that exceeds expectations.
                        </p>
                    </div>
                </div>

                {/* why choose section - with unique styling */}
                {/* <h2 className={styles.sectionTitle}>Why Choose Estate Frame Media?</h2>
    <div className={styles.whyChooseContainer}>
        <div className={styles.whyChooseCard}>
            <img className={styles.cardIcon} src="/quality-premium-certificate-svgrepo-com.svg" alt="Precision and Quality" />
            <div className={styles.cardTitle}>Precision and Quality</div>
            <p className={styles.cardDescription}>
                Our HDR photos and videos bring out the best in every corner of your property, ensuring
                high-resolution content that enhances your listings.
            </p>
        </div>
        <div className={styles.whyChooseCard}>
            <img className={styles.cardIcon} src="/idea-svgrepo-com.svg" alt="Innovative Approach" />
            <div className={styles.cardTitle}>Innovative Approach</div>
            <p className={styles.cardDescription}>
                By integrating the latest in photography and drone technology, we provide unique perspectives
                and visually stunning results for all your real estate needs.
            </p>
        </div>
        <div className={styles.whyChooseCard}>
            <img className={styles.cardIcon} src="/rating-svgrepo-com.svg" alt="Exceptional Service" />
            <div className={styles.cardTitle}>Exceptional Service</div>
            <p className={styles.cardDescription}>
                From the initial consultation to final delivery, we are committed to providing a professional,
                friendly, and efficient service that exceeds expectations.
            </p>
        </div>
    </div> */}

                {/* service areas */}
                <h2 className={styles.sectionTitle}>Service Areas</h2>
                <p className={styles.text}>
                    Estate Frame Media proudly serves Southeastern Pennsylvania and South Jersey, providing top-tier real estate
                    photography and videography. Our deep understanding of the local market allows us to tailor our services to
                    fit your specific needs, ensuring every property is showcased in the best possible light. Whether you are in a
                    nearby suburb or on the Wildwood beach, we are committed to delivering high-quality content that helps you
                    stand out in the competitive real estate market.
                </p>
                <div className={styles.serviceAreasContainer}>
                    <div className={styles.serviceArea}>
                        <p className={styles.serviceAreaTitle}>PA Service Area</p>
                        <img src="/service-area-1.png" alt="PA Service Area Map" />
                    </div>
                    <div className={styles.serviceArea}>
                        <p className={styles.serviceAreaTitle}>NJ Service Area</p>
                        <img src="/service-area-2.png" alt="PA Service Area Map" />
                    </div>
                </div>

                <p className={styles.text}>
                    Contact us today to learn more about our services and schedule a session with our expert team!
                </p>

                <div className={styles.callToAction}>
                    <a href="/order" className={styles.bookButton}>Book Now</a>
                </div>
            </div></>

    )
}