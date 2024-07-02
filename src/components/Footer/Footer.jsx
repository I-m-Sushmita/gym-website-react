import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer-container">
            <hr />
            <div className="footer">
                <div className="socials">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-whatsapp"></i>
                </div>
                <div className="logo-f">
                    <img src="https://i.ibb.co/pjfPpMw/icon.png" alt="icon"></img>
                </div>
                <div className="copy-text">© 2024 Company, Inc. All rights reserved.</div>
            </div>
        </div>
    )
}

export default Footer
