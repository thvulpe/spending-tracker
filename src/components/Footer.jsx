import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            © {new Date().getFullYear()} Theodor Vulpe
        </footer>
    );
}

export default Footer;