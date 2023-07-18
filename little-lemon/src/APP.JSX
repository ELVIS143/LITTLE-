/ import { useState } from 'react'
import "./App.css";

function App() {
  return (
    <>
      <header>
        <img
          className="header-logo"
          src="./images/headerLogo.png"
          alt="Little Lemon Logo"
        />
      </header>
      <nav>
        <a className="nav-link" href="">
          Home
        </a>
        <a className="nav-link" href="">
          Menu
        </a>
        <a className="nav-link" href="">
          Book
        </a>
        <a className="nav-link" href="">
          About
        </a>
      </nav>
      <main>
        <div className="discount-banner">
          <h1>30% OFF THIS WEEKEND</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
            doloremque iure quisquam quas quasi ex provident omnis laborum
            quibusdam unde quod autem, est ipsa aspernatur recusandae cum
            veritatis? Optio, non!
          </p>
        </div>

        <section className="articles">
          <article>
            <h2>Our New Menu</h2>
            <img
              src="./images/article-placeholder.jpg"
              alt="A dish"
              className="article-image"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
              consequatur assumenda officiis esse fugiat tenetur odit quod
              deserunt perspiciatis porro? Labore corrupti enim error minus
              aliquid, numquam vel expedita ad?
            </p>
            <a href="">See our menu </a>
          </article>
          <article>
            <h2>Our New Menu</h2>
            <img
              src="./images/article-placeholder.jpg"
              alt="A dish"
              className="article-image"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
              consequatur assumenda officiis esse fugiat tenetur odit quod
              deserunt perspiciatis porro? Labore corrupti enim error minus
              aliquid, numquam vel expedita ad?
            </p>
            <a href="">See our menu </a>
          </article>
          <article>
            <h2>Our New Menu</h2>
            <img
              src="./images/article-placeholder.jpg"
              alt="A dish"
              className="article-image"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
              consequatur assumenda officiis esse fugiat tenetur odit quod
              deserunt perspiciatis porro? Labore corrupti enim error minus
              aliquid, numquam vel expedita ad?
            </p>
            <a href="">See our menu </a>
          </article>
        </section>
      </main>
      <footer>
        <img
          src="./images/footer-logo.png"
          alt="logo"
          className="footer-logo"
        />
        <h2>LITTLE LEMON</h2>
        <span>Copyright LITTLE LEMON 2023</span>
      </footer>
    </>
  );
}

export default App;
