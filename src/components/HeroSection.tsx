import React from 'react';
import 'primereact/resources/themes/lara-light-indigo/theme.css';  // Import PrimeReact theme
import 'primereact/resources/primereact.min.css';                  // Import PrimeReact core CSS
import 'primeflex/primeflex.css';                                  // Import PrimeFlex grid system

const HeroSection = () => {
    return (
        <div className="p-pt-5 p-pb-5" style={styles.heroSection}>
            <div className="p-text-center p-px-3">
                <h1 className="p-mb-3" style={styles.title}>Welcome to Our Platform</h1>
                <p className="p-mb-4" style={styles.subtitle}>Empowering you to achieve your goals with ease and efficiency.</p>
                <button className="p-button p-button-lg p-button-rounded" style={styles.button}>Get Started</button>
            </div>
        </div>
    );
}

const styles = {
    heroSection: {
        backgroundImage: 'url("../../images/image1.jpg")', // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: '3rem',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: '1.5rem',
    },
    button: {
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        color: '#fff',
    }
};

export default HeroSection;
