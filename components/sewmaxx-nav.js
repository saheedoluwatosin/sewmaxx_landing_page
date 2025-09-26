// sewmaxx-nav.js
class SewmaxxNav extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.addEventListeners();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                nav {
                    
                    color: white;
                    padding: 15px 0;
                    position: sticky;
                    top: 0;
                    z-index: 1000;

                }

                .nav-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .logo {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .logo-icon {
                    width: 95px;
                    height: 35px;
                    border-radius: 8px;
                    object-fit: contain; /* This ensures the image scales properly */
                    background: transparent; /* Remove the red background */
                }

                .logo-text {
                    font-family: 'Poppins', sans-serif;
                    font-size: 24px;
                    font-weight: 700;
                    color: white;
                    letter-spacing: -0.5px;
                }

                .nav-links {
                    display: flex;
                    list-style: none;
                    gap: 30px;
                    align-items: center;
                }

                .nav-links a {
                    color: white;
                    text-decoration: none;
                    font-family: 'Poppins', sans-serif;
                    font-weight: 500;
                    transition: color 0.3s ease;
                    position: relative;
                }

                .nav-links a:hover {
                    color: #dc3545;
                }

                .nav-links a::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    bottom: -5px;
                    left: 0;
                    background: #dc3545;
                    transition: width 0.3s ease;
                }

                .nav-links a:hover::after {
                    width: 100%;
                }

                .mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    color: white;
                    font-size: 24px;
                    cursor: pointer;
                    padding: 5px;
                }

                .mobile-menu {
                    display: none;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: #2c3e50;
                    border-top: 1px solid #34495e;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                }

                .mobile-menu.active {
                    display: block;
                }

                .mobile-menu ul {
                    list-style: none;
                    padding: 20px;
                }

                .mobile-menu li {
                    margin-bottom: 15px;
                }

                .mobile-menu a {
                    color: white;
                    text-decoration: none;
                    font-family: 'Poppins', sans-serif;
                    font-weight: 500;
                    padding: 10px 0;
                    display: block;
                    border-bottom: 1px solid #34495e;
                }

                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                    }

                    .mobile-menu-btn {
                        display: block;
                    }

                    .nav-container {
                        padding: 0 15px;
                    }

                    .logo-text {
                        font-size: 20px;
                    }

                    .logo-icon {
                        width: 95px;
                        height: 30px;
                    }
                }
            </style>

            <nav>
                <div class="nav-container">
                    <div class="logo">
                        <img src="images/sewmaxx_logo.png" alt="SewMaxx Logo" class="logo-icon">
                    </div>
                    
                    <ul class="nav-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#login" class="login-link">Login</a></li>
                    </ul>

                    <button class="mobile-menu-btn" id="mobileMenuBtn">
                        <i class="fas fa-bars"></i>
                    </button>

                    <div class="mobile-menu" id="mobileMenu">
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#pricing">Pricing</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="#login">Login</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        `;
    }

    addEventListeners() {
        const mobileMenuBtn = this.shadowRoot.getElementById('mobileMenuBtn');
        const mobileMenu = this.shadowRoot.getElementById('mobileMenu');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.contains(e.target)) {
                mobileMenu.classList.remove('active');
            }
        });

        // Close mobile menu when clicking on a link
        const mobileLinks = this.shadowRoot.querySelectorAll('.mobile-menu a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });
    }
}

customElements.define('sewmaxx-nav', SewmaxxNav);