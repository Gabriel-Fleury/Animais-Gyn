/* import styles from './Header.module.css'

const Header = () =>{
    return(
     <div className={styles.home}>
         <div className={styles.header}>
            <h1>ANIMAISPERDIDOS <br />Goainia</h1>
               
         </div>

        <div>
            <h1>teste</h1>
            <p>aaaaa</p>
            
        </div>
     </div>
    )
}

export default Header; */

import React, { useState } from 'react';
import { Search, Phone, MapPin, User, Menu, X, PawPrint } from 'lucide-react';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    { label: 'Início', href: '#' },
    { label: 'Animais Perdidos', href: '#' },
    { label: 'Animais Encontrados', href: '#' },
    { label: 'Adoção', href: '#' },
    { label: 'Dicas', href: '#' },
    { label: 'Contato', href: '#' },
  ];

  const emergencyContacts = [
    { label: 'Emergência 24h', number: '(62) 3333-9999' },
    { label: 'WhatsApp', number: '(62) 99999-8888' },
  ];

  return (
    <header className={styles.header}>
      {/* Top Bar - Contatos de emergência */}
      <div className={styles.topBar}>
        <div className={styles.container}>
          <div className={styles.emergencyContacts}>
            {emergencyContacts.map((contact, index) => (
              <div key={index} className={styles.contactItem}>
                <Phone size={16} />
                <span className={styles.contactLabel}>{contact.label}:</span>
                <span className={styles.contactNumber}>{contact.number}</span>
              </div>
            ))}
          </div>
          
          <div className={styles.topBarRight}>
            <div className={styles.location}>
              <MapPin size={16} />
              <span>Goiânia - GO</span>
            </div>
            <button className={styles.loginBtn}>
              <User size={18} />
              <span>Área do Cliente</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className={styles.mainHeader}>
        <div className={styles.container}>
          {/* Logo */}
          <div className={styles.logoSection}>
            <div className={styles.logo}>
              <PawPrint size={32} className={styles.logoIcon} />
              <div className={styles.logoText}>
                <h1 className={styles.logoTitle}>Animais Perdidos</h1>
                <span className={styles.logoSubtitle}>Goiânia</span>
              </div>
            </div>
            <p className={styles.tagline}>Reunindo famílias e seus melhores amigos</p>
          </div>

          {/* Search Bar */}
          <div className={`${styles.searchContainer} ${isSearchOpen ? styles.searchOpen : ''}`}>
            <div className={styles.searchWrapper}>
              <Search size={20} className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Buscar animal perdido por raça, cor, local..."
                className={styles.searchInput}
              />
              <button className={styles.searchButton}>Buscar</button>
            </div>
          </div>

          {/* CTA Button */}
          <div className={styles.ctaSection}>
            <button className={styles.emergencyCta}>
              <Phone size={20} />
              <div>
                <span className={styles.ctaText}>Perdeu um animal?</span>
                <span className={styles.ctaSubtext}>Clique para ajuda imediata</span>
              </div>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={styles.menuToggle}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`${styles.navigation} ${isMenuOpen ? styles.menuOpen : ''}`}>
        <div className={styles.container}>
          <ul className={styles.navList}>
            {navItems.map((item, index) => (
              <li key={index} className={styles.navItem}>
                <a href={item.href} className={styles.navLink}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Mobile Search */}
          <div className={styles.mobileSearch}>
            <div className={styles.mobileSearchWrapper}>
              <input
                type="text"
                placeholder="Buscar animal..."
                className={styles.mobileSearchInput}
              />
              <button className={styles.mobileSearchButton}>
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Banner de alerta */}
      <div className={styles.alertBanner}>
        <div className={styles.container}>
          <span className={styles.alertIcon}>⚠️</span>
          <p>
            <strong>ALERTA:</strong> Viu um animal perdido ou precisa de ajuda? 
            Entre em contato imediatamente pelos números acima.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;