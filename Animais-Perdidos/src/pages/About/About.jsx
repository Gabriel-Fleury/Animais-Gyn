import React from 'react';
import Header from '../../components/Header/Header';
import styles from './About.module.css';

function About() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <h1>Sobre Nós</h1>
        <p>Conteúdo em construção...</p>
      </main>
    </>
  );
}

export default About;