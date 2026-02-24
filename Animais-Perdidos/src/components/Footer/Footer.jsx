import React from 'react';
import { Link } from 'react-router-dom';
import { 
  PawPrint, 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  Twitter,
  Heart,
  ChevronRight,
  Clock,
  Shield
} from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Início', path: '/' },
    { label: 'Animais Perdidos', path: '/perdidos' },
    { label: 'Animais Encontrados', path: '/encontrados' },
    { label: 'Adoção', path: '/adocao' },
    { label: 'Dicas', path: '/dicas' },
    { label: 'Sobre Nós', path: '/sobre' },
    { label: 'Contato', path: '/contato' },
  ];

  const supportLinks = [
    { label: 'Como Ajudar', path: '/como-ajudar' },
    { label: 'Seja Voluntário', path: '/voluntario' },
    { label: 'Parceiros', path: '/parceiros' },
    { label: 'Doações', path: '/doacoes' },
    { label: 'ONGs Parceiras', path: '/ongs' },
  ];

  const contactInfo = [
    { icon: <Phone size={18} />, text: '(62) 3333-9999', link: 'tel:+556233339999' },
    { icon: <Phone size={18} />, text: '(62) 99999-8888', link: 'tel:+5562999998888', label: 'WhatsApp' },
    { icon: <Mail size={18} />, text: 'contato@animaisperdidosgo.com', link: 'mailto:contato@animaisperdidosgo.com' },
    { icon: <MapPin size={18} />, text: 'PUC Goiânia - Campus II', link: 'https://maps.google.com' },
  ];

  return (
    <footer className={styles.footer}>
      {/* Newsletter / CTA Section */}
      <div className={styles.newsletter}>
        <div className={styles.container}>
          <div className={styles.newsletterContent}>
            <div className={styles.newsletterText}>
              <h3>Receba alertas de animais perdidos</h3>
              <p>Cadastre-se e ajude a reunir famílias em Goiânia</p>
            </div>
            <form className={styles.newsletterForm}>
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className={styles.newsletterInput}
              />
              <button type="submit" className={styles.newsletterButton}>
                Inscrever
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className={styles.mainFooter}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Logo e Descrição */}
            <div className={styles.brand}>
              <Link to="/" className={styles.logo}>
                <PawPrint size={32} className={styles.logoIcon} />
                <span className={styles.logoText}>Animais Perdidos</span>
              </Link>
              <p className={styles.brandDescription}>
                Plataforma gratuita desenvolvida por estudantes de Análise e Desenvolvimento de Sistemas da PUC-Goiânia. 
                Nosso propósito é usar a tecnologia para reunir famílias e seus animais de estimação.
              </p>
              <div className={styles.social}>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                  <Instagram size={20} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                  <Facebook size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            {/* Links Rápidos */}
            <div className={styles.links}>
              <h4>Navegação</h4>
              <ul>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>
                      <ChevronRight size={14} />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Apoie a Causa */}
            <div className={styles.links}>
              <h4>Apoie a Causa</h4>
              <ul>
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>
                      <ChevronRight size={14} />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className={styles.badge}>
                <Shield size={16} />
                <span>Site 100% gratuito</span>
              </div>
            </div>

            {/* Contato */}
            <div className={styles.contact}>
              <h4>Contato</h4>
              <ul>
                {contactInfo.map((item, index) => (
                  <li key={index}>
                    <a href={item.link} target={item.link.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
                      {item.icon}
                      <span>
                        {item.label && <span className={styles.contactLabel}>{item.label}: </span>}
                        {item.text}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className={styles.hours}>
                <Clock size={16} />
                <div>
                  <strong>Atendimento:</strong>
                  <p>Segunda a Sexta, 8h às 18h</p>
                  <p>Emergência: 24h todos os dias</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.copyright}>
        <div className={styles.container}>
          <div className={styles.copyrightContent}>
            <p>
              © {currentYear} Animais Perdidos Goiânia. Todos os direitos reservados.
            </p>
            <p className={styles.madeWith}>
              Feito com <Heart size={14} color="#FF6B35" fill="#FF6B35" /> por estudantes da PUC-Goiânia
            </p>
            <div className={styles.legal}>
              <Link to="/privacidade">Política de Privacidade</Link>
              <span className={styles.separator}>|</span>
              <Link to="/termos">Termos de Uso</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;