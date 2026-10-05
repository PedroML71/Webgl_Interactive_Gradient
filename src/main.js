import "./style.css";
import logo from "./assets/logo.png";
import "./simulation.js";

document.querySelector("#app").innerHTML = `
<nav>
  <div class="logo">
    <p>Orbit controls</p>
  </div>

  <div class="nav-items">
    <p>Index</p>
    <p>Portfolio</p>
    <p>Info</p>
    <p>Contact</p>
  </div>
</nav>

<section class="hero">
  <div class="gradient-canvas"></div>

  <div class="hero-logo">
    <img src="${logo}" alt="" />
  </div>

  <div class="hero-footer">
    <p>Experiment 0469</p>
    <p>Built by PedroML</p>
  </div>
</section>
`;
