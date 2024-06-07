<script>
export default {
    name: "FooterComponent"
};
</script>

<template>
    <footer class="footer mt-5">
      <div class="footer-content">
        <div class="footer-section social-media">
          <h3>Síguenos en</h3>
          <div class="social-icons">
            <a href="https://www.instagram.com" target="_blank" aria-label="Instagram">
              <i class="pi pi-instagram"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn">
              <i class="pi pi-linkedin"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" aria-label="Twitter">
              <i class="pi pi-twitter"></i>
            </a>
          </div>
          <img src="../assets/logo.png" style="width: 100px">
        </div>
        <div class="footer-section links">
          <h3>Enlaces Útiles</h3>
          <ul>
            <li><RouterLink to="/catalog"><a>Catálogo</a></RouterLink></li>
            <li><RouterLink to="/supermarket"><a>Supermercados</a></RouterLink></li>
            <li><RouterLink to="/map"><a>Consultar Ubicaciones</a></RouterLink></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 CheapCheese. Todos los derechos reservados.</p>
      </div>
    </footer>
</template>

<style scoped>
.footer {
  background-color: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.footer-section {
  flex: 1;
  min-width: 200px;
  margin: 0.5rem;
}

.footer-section h3 {
  margin-bottom: 1rem;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-icons a {
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.3s;
}

.social-icons a:hover {
  color: #ffcc00;
}

.links ul {
  list-style: none;
  padding:0;
}

.links ul li {
  margin: 0.5rem 0;
}

.links ul li a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
}

.links ul li a:hover {
  color: #ffcc00;
}

.footer-bottom {
  border-top: 1px solid #f6b33f;
  padding-top: 1rem;
  font-size: 0.875rem;
}
</style>