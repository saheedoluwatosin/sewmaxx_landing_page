// sewmaxx-footer.js
class SewmaxxFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                footer {
                    background: #f8f9fa;
                    padding: 60px 0 40px;
                    border-top: 1px solid #e9ecef;
                }

                .footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 20px;
                }

                .footer-content {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    gap: 80px;
                    margin-bottom: 40px;
                }

                .footer-section h3 {
                    font-family: 'Poppins', sans-serif;
                    font-weight: 600;
                    font-size: 20px;
                    color: #2c3e50;
                    margin-bottom: 20px;
                }

                .footer-section p, .footer-section li {
                    font-family: 'Poppins', sans-serif;
                    font-weight: 400;
                    font-size: 16px;
                    color: #6c757d;
                    line-height: 1.6;
                    margin-bottom: 12px;
                }

                .brand-section .logo {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 15px;
                }

                .brand-section .logo img {
                    width: 90px;
                    height: 40px;
                    object-fit: contain;
                }

                .brand-section .logo-text {
                    font-family: 'Poppins', sans-serif;
                    font-size: 24px;
                    font-weight: 700;
                    color: #2c3e50;
                    letter-spacing: -0.5px;
                }

                .brand-section .tagline {
                    font-weight: 600;
                    color: #2c3e50;
                    margin-bottom: 20px;
                }

                .social-links {
                    display: flex;
                    gap: 15px;
                    margin-top: 20px;
                }

                .social-link {
                    width: 40px;
                    height: 40px;
                    background: #dc3545;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                    text-decoration: none;
                }

                .social-link:hover {
                    background: #c82333;
                    transform: translateY(-2px);
                }

                .social-link img {
                    width: 20px;
                    height: 20px;
                    object-fit: contain;
                    filter: brightness(0) invert(1); /* Makes icons white */
                }

                .links-list {
                    list-style: none;
                }

                .links-list li {
                    margin-bottom: 12px;
                }

                .links-list a {
                    color: #6c757d;
                    text-decoration: none;
                    font-size: 16px;
                    transition: color 0.3s ease;
                }

                .links-list a:hover {
                    color: #dc3545;
                }

                .contact-item {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 15px;
                }

                .contact-icon {
                    width: 20px;
                    height: 20px;
                    object-fit: contain;
                }

                .contact-text {
                    font-size: 16px;
                    color: #6c757d;
                }

                .footer-bottom {
                    border-top: 1px solid #e9ecef;
                    padding-top: 30px;
                    text-align: center;
                }

                .copyright {
                    font-family: 'Poppins', sans-serif;
                    font-size: 14px;
                    color: #6c757d;
                }

                /* Responsive Design */
                @media (max-width: 768px) {
                    .footer-content {
                        grid-template-columns: 1fr;
                        gap: 40px;
                        text-align: center;
                    }

                    .social-links {
                        justify-content: center;
                    }

                    .contact-item {
                        justify-content: center;
                    }

                    .footer-container {
                        padding: 0 15px;
                    }

                    footer {
                        padding: 40px 0 30px;
                    }
                }

                @media (max-width: 480px) {
                    .brand-section .logo-text {
                        font-size: 20px;
                    }

                    .footer-section h3 {
                        font-size: 18px;
                    }

                    .footer-section p, .footer-section li, .links-list a, .contact-text {
                        font-size: 14px;
                    }
                }
            </style>

            <footer>
                <div class="footer-container">
                    <div class="footer-content">
                        <!-- Brand Section -->
                        <div class="footer-section brand-section">
                            <div class="logo">
                                <img src="images/sewmaxx_logo.png" alt="Sewmaxx Logo">
                            </div>
                            <p class="tagline">Connecting Clients to Africa's Best Tailors</p>
                            <p>Sewmaxx is a platform where clients discover professional tailors and affiliates earn by promoting them</p>
                            
                            <div class="social-links">
                                <a href="#" class="social-link" aria-label="Twitter">
                                    <img src="images/twitter.png" alt="Twitter">
                                </a>
                                <a href="#" class="social-link" aria-label="Instagram">
                                    <img src="images/instagram.png" alt="Instagram">
                                </a>
                                <a href="#" class="social-link" aria-label="Facebook">
                                    <img src="images/facebook.png" alt="Facebook">
                                </a>
                            </div>
                        </div>

                        <!-- Quick Links Section -->
                        <div class="footer-section">
                            <h3>Quick Links</h3>
                            <ul class="links-list">
                                <li><a href="#faqs">FAQS</a></li>
                                <li><a href="#onboarding">Onboarding Requirements</a></li>
                                <li><a href="#terms">Terms & Conditions</a></li>
                                <li><a href="#privacy">Privacy Policy</a></li>
                            </ul>
                        </div>

                        <!-- Get In Touch Section -->
                        <div class="footer-section">
                            <h3>Get In Touch</h3>
                            
                            <div class="contact-item">
                                <img src="images/phone.png" alt="Phone" class="contact-icon">
                                <span class="contact-text">+233 205 245 619</span>
                            </div>
                            
                            <div class="contact-item">
                                <img src="images/email.png" alt="Email" class="contact-icon">
                                <span class="contact-text">sewmmarkets@gmail.com</span>
                            </div>
                            
                            <div class="contact-item">
                                <img src="images/location.png" alt="Location" class="contact-icon">
                                <span class="contact-text">Accra, Ghana</span>
                            </div>
                        </div>
                    </div>

                    <div class="footer-bottom">
                        <p class="copyright">Copyright © 2025. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('sewmaxx-footer', SewmaxxFooter);