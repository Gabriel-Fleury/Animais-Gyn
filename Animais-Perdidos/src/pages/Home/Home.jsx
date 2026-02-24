// src/pages/Home/Home.jsx
import React from 'react';
import Header from '../../components/Header/Header';
import styles from './Home.module.css';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>Encontre seu animal perdido em Goiânia</h1>
          <p>Plataforma criada por estudantes da PUC-GO para reunir famílias e seus pets</p>
          <button className={styles.ctaButton}>Buscar Animal</button>
        </section>
        
        <section className={styles.features}>
          <h2>Como Funciona</h2>
          <div className={styles.featureGrid}>
            <div className={styles.feature}>
              <h3>📋 Cadastre</h3>
              <p>Registre seu animal perdido ou encontrado</p>
            </div>
            <div className={styles.feature}>
              <h3>🔍 Busque</h3>
              <p>Procure animais por região, raça ou características</p>
            </div>
            <div className={styles.feature}>
              <h3>🤝 Conecte</h3>
              <p>Entre em contato com quem encontrou seu pet</p>
            </div>
          </div>
        </section>

        {/* Seção de Estatísticas */}
        <section className={styles.stats}>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>1.200+</span>
            <span className={styles.statLabel}>Animais Reencontrados</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>2.500+</span>
            <span className={styles.statLabel}>Cadastros Realizados</span>
          </div>

          <div className={styles.statCard}>
            <span className={styles.statNumber}>24/7</span>
            <span className={styles.statLabel}>Atendimento</span>
          </div>

          <div className={styles.statCard}>
            <span className={styles.statNumber}>6</span>
            <span className={styles.statLabel}>Estudantes</span>
          </div>
        </section>

        {/* Seção de Depoimentos */}
        <section className={styles.testimonials}>
          <h2>Quem já reencontrou seu pet</h2>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonial}>
              <div className={styles.quote}>"</div>
              <p>Encontrei meu cachorro Bob em menos de 2 horas. Serviço incrível!</p>
              <span className={styles.author}>- Maria Silva</span>
              <span className={styles.location}>Setor Bueno</span>
            </div>
            <div className={styles.testimonial}>
              <div className={styles.quote}>"</div>
              <p>Achei uma gatinha perdida e localizamos a dona no mesmo dia.</p>
              <span className={styles.author}>- João Santos</span>
              <span className={styles.location}>Setor Marista</span>
            </div>
          </div>
        </section>

        {/* Seção de Chamada para Ação */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>Ajude um animal a voltar para casa</h2>
            <p>Faça parte dessa corrente do bem</p>
            <div className={styles.ctaButtons}>
              <button className={styles.ctaPrimary}>Quero Ajudar</button>
              <button className={styles.ctaSecondary}>Preciso de Ajuda</button>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>

    
  );
};

export default Home;