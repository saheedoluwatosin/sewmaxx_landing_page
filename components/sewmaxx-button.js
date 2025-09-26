// sewmaxx-button.js
class SewmaxxButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['type', 'size', 'disabled', 'icon', 'href'];
    }

    connectedCallback() {
        this.render();
        this.addEventListeners();
    }

    attributeChangedCallback() {
        if (this.shadowRoot) {
            this.render();
            this.addEventListeners();
        }
    }

    get type() {
        return this.getAttribute('type') || 'primary';
    }

    get size() {
        return this.getAttribute('size') || 'medium';
    }

    get disabled() {
        return this.hasAttribute('disabled');
    }

    get icon() {
        return this.getAttribute('icon');
    }

    get href() {
        return this.getAttribute('href');
    }

    render() {
        const buttonText = this.textContent;
        const isLink = this.href;
        const tag = isLink ? 'a' : 'button';
        
        this.shadowRoot.innerHTML = `
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                button, a {
                    font-family: 'Poppins', sans-serif;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    transition: all 0.3s ease;
                    font-weight: 600;
                    text-decoration: none;
                    position: relative;
                    overflow: hidden;
                    outline: none;
                }

                button:disabled, a.disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                    pointer-events: none;
                }

                button::before, a::before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 0;
                    height: 0;
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 50%;
                    transform: translate(-50%, -50%);
                    transition: width 0.6s, height 0.6s;
                }

                button:not(:disabled):hover::before, a:not(.disabled):hover::before {
                    width: 300px;
                    height: 300px;
                }

                button:focus, a:focus {
                    outline: 3px solid rgba(220, 53, 69, 0.3);
                    outline-offset: 2px;
                }

                /* Button Types */
                .primary {
                    background: #DA0301;
                    color: white;
                    box-shadow: 0 4px 15px rgba(220, 53, 69, 0.3);
                }

                .primary:not(:disabled):not(.disabled):hover {
                    background: #c82333;
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(220, 53, 69, 0.4);
                }

                .primary:not(:disabled):not(.disabled):active {
                    transform: translateY(0);
                    box-shadow: 0 2px 8px rgba(220, 53, 69, 0.4);
                }

                .secondary {
                    background: transparent;
                    color: #dc3545;
                    border: 2px solid #dc3545;
                }

                .secondary:not(:disabled):not(.disabled):hover {
                    background: #dc3545;
                    color: white;
                    transform: translateY(-2px);
                    box-shadow: 0 4px 15px rgba(220, 53, 69, 0.3);
                }

                .outline {
                    background: transparent;
                    color: #2c3e50;
                    border: 2px solid #2c3e50;
                }

                .outline:not(:disabled):not(.disabled):hover {
                    background: #2c3e50;
                    color: white;
                    transform: translateY(-2px);
                    box-shadow: 0 4px 15px rgba(44, 62, 80, 0.3);
                }

                .ghost {
                    background: transparent;
                    color: #6c757d;
                    border: 1px solid #dee2e6;
                }

                .ghost:not(:disabled):not(.disabled):hover {
                    background: #f8f9fa;
                    color: #2c3e50;
                    border-color: #2c3e50;
                    transform: translateY(-1px);
                }

                .success {
                    background: #28a745;
                    color: white;
                    box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);
                }

                .success:not(:disabled):not(.disabled):hover {
                    background: #218838;
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(40, 167, 69, 0.4);
                }

                .warning {
                    background: #ffc107;
                    color: #212529;
                    box-shadow: 0 4px 15px rgba(255, 193, 7, 0.3);
                }

                .warning:not(:disabled):not(.disabled):hover {
                    background: #e0a800;
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(255, 193, 7, 0.4);
                }

                .danger {
                    background: #dc3545;
                    color: white;
                    box-shadow: 0 4px 15px rgba(220, 53, 69, 0.3);
                }

                .danger:not(:disabled):not(.disabled):hover {
                    background: #c82333;
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(220, 53, 69, 0.4);
                }

                .info {
                    background: #17a2b8;
                    color: white;
                    box-shadow: 0 4px 15px rgba(23, 162, 184, 0.3);
                }

                .info:not(:disabled):not(.disabled):hover {
                    background: #138496;
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(23, 162, 184, 0.4);
                }

                .dark {
                    background: #343a40;
                    color: white;
                    box-shadow: 0 4px 15px rgba(52, 58, 64, 0.3);
                }

                .dark:not(:disabled):not(.disabled):hover {
                    background: #23272b;
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(52, 58, 64, 0.4);
                }

                /* Button Sizes */
                .small {
                    padding: 8px 16px;
                    font-size: 14px;
                    min-height: 36px;
                    border-radius: 6px;
                }

                .medium {
                    padding: 12px 24px;
                    font-size: 16px;
                    min-height: 44px;
                    border-radius: 8px;
                }

                .large {
                    padding: 16px 32px;
                    font-size: 18px;
                    min-height: 52px;
                    border-radius: 50px;
                }

                .xlarge {
                    padding: 20px 40px;
                    font-size: 20px;
                    min-height: 60px;
                    border-radius: 12px;
                }

                /* Icon styles */
                .icon {
                    font-size: 1.1em;
                    transition: transform 0.3s ease;
                }

                .content {
                    position: relative;
                    z-index: 1;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                /* Loading state */
                .loading {
                    pointer-events: none;
                    opacity: 0.8;
                }

                .loading .icon {
                    animation: spin 1s linear infinite;
                }

                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                /* Full width variant */
                .full-width {
                    width: 100%;
                }

                /* Rounded variant */
                .rounded {
                    border-radius: 50px;
                }

                /* Responsive styles */
                @media (max-width: 768px) {
                    .xlarge {
                        padding: 16px 28px;
                        font-size: 18px;
                        min-height: 52px;
                    }
                    
                    .large {
                        padding: 14px 24px;
                        font-size: 16px;
                        min-height: 48px;
                    }
                    
                    .medium {
                        padding: 10px 20px;
                        font-size: 14px;
                        min-height: 40px;
                    }
                    
                    .small {
                        padding: 6px 12px;
                        font-size: 12px;
                        min-height: 32px;
                    }
                }

                /* Animation for icon on hover */
                button:not(:disabled):hover .icon, a:not(.disabled):hover .icon {
                    transform: scale(1.1);
                }
            </style>

            <${tag} 
                class="${this.type} ${this.size} ${this.disabled ? 'disabled' : ''}" 
                ${this.disabled ? 'disabled' : ''}
                ${this.href ? `href="${this.href}"` : ''}
                ${this.href && this.getAttribute('target') ? `target="${this.getAttribute('target')}"` : ''}
                role="${isLink ? 'link' : 'button'}"
                tabindex="0"
            >
                <span class="content">
                    ${buttonText}
                    ${this.icon ? (this.icon.includes('.png') || this.icon.includes('.jpg') || this.icon.includes('.svg') ? 
                        `<img src="${this.icon}" alt="icon" class="icon-img">` : 
                        `<i class="fas fa-${this.icon} icon"></i>`) : ''}
                    
                </span>
            </${tag}>
        `;
    }

    addEventListeners() {
        const element = this.shadowRoot.querySelector(this.href ? 'a' : 'button');
        
        // Click event
        element.addEventListener('click', (e) => {
            if (this.disabled) {
                e.preventDefault();
                e.stopPropagation();
                return;
            }

            // Dispatch custom event
            this.dispatchEvent(new CustomEvent('sewmaxx-click', {
                bubbles: true,
                composed: true,
                detail: {
                    type: this.type,
                    size: this.size,
                    href: this.href,
                    originalEvent: e
                }
            }));
        });

        // Keyboard support
        element.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                if (this.disabled) {
                    e.preventDefault();
                    return;
                }
                
                e.preventDefault();
                element.click();
            }
        });

        // Touch support for better mobile experience
        element.addEventListener('touchstart', () => {
            if (!this.disabled) {
                element.style.transform = 'scale(0.98)';
            }
        });

        element.addEventListener('touchend', () => {
            if (!this.disabled) {
                setTimeout(() => {
                    element.style.transform = '';
                }, 100);
            }
        });
    }

    // Public methods
    setLoading(loading = true) {
        const element = this.shadowRoot.querySelector(this.href ? 'a' : 'button');
        if (loading) {
            element.classList.add('loading');
            const icon = element.querySelector('.icon');
            if (icon) {
                icon.className = 'fas fa-spinner icon';
            }
        } else {
            element.classList.remove('loading');
            if (this.icon) {
                const icon = element.querySelector('.icon');
                if (icon) {
                    icon.className = `fas fa-${this.icon} icon`;
                }
            }
        }
    }

    setDisabled(disabled = true) {
        if (disabled) {
            this.setAttribute('disabled', '');
        } else {
            this.removeAttribute('disabled');
        }
    }
}

customElements.define('sewmaxx-button', SewmaxxButton);