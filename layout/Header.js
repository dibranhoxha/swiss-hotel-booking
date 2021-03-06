class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header id="header" class="top-fixed home-header no-shadow">
      <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light page-navbar">
              <div class="container-fluid mt-4">
                  <a class="navbar-brand" href="index.html">
                      <h3>SWISS STAR</h3>
                      <p>WELCOME HOME</p>
                  </a>
                  <button class="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-round" type="button" data-bs-toggle="collapse"
                      data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                      aria-label="Toggle navigation">
                      <span class="toggler-icon top-bar"></span>
                      <span class="toggler-icon middle-bar"></span>
                      <span class="toggler-icon bottom-bar"></span>
                      <!-- <i class="fa fa-solid fa-bars-staggered" aria-hidden="true"></i> -->
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                      <ul class="navbar-nav w-100">
  
                          <li class="nav-item ms-lg-auto">
                              <a class="nav-link" href="apartments.html">Apartments</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#">Services</a>
                          </li>
                          <!-- <li class="nav-item">
                              <a class="nav-link" href="#">Über uns</a>
                          </li> -->
                          <li class="nav-item">
                              <a class="nav-link">Kontakt</a>
                          </li>
                          <li class="nav-item ms-lg-auto">
                              <a id="btn-login" data-bs-toggle="modal" href="#tab-login"
                                  data-bs-target="#modal-login-register" class="nav-link">Login</a>
                          </li>
                          <li class="nav-item register-button">
                              <a id="btn-register" data-bs-toggle="modal" href="#tab-registrieren"
                                  data-bs-target="#modal-login-register" class="nav-link">Registrieren</a>
                          </li>
  
                          <!-- <div class="nav-item"> 
                              <div class="nav-link">   
                                  <img src="img/42_user.png" class="rounded-circle" style="width: 30px; height: 30px; object-fit: cover;" alt="Avatar" />
                              </div>    
                          </div>  -->
                          <!-- <div class="nav-item ms-lg-auto">    
                              <p class="nav-link user-name">Max Mustermann</p>
                          </div> 
  
                          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              <img src="img/42_user.png" class="rounded-circle" style="width: 30px; height: 30px; object-fit: cover;" alt="Avatar" />
                          </a>
                          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <li>
                              <a class="dropdown-item" href="#" style="background-color:#023E8A;   font-size:14px; color:white; font-weight: 300;">
                                  Mein Profile
                              </a>
                          </li>
                          <li>
                              <a class="dropdown-item" href="#" style="background-color:#023E8A;   font-size:14px; color:white; font-weight: 300;">
                                  Meine Buhungen
                              </a>
                          </li>
                          <li>
                              <a class="dropdown-item" href="#" style="background-color:#023E8A;   font-size:14px; color:white; font-weight: 300;">
                                  Meine Favoriten
                              </a>
                          </li>
                          <li>
                              <a class="dropdown-item" href="#" style="background-color:#023E8A;   font-size:14px; color:white; font-weight: 300;">
                                  Einstellungen
                              </a>
                          </li>
                          <li>
                              <a class="dropdown-item" href="#" style="background-color:#023E8A;   font-size:14px; color:white; font-weight: 300;">
                                  Ausloggen
                              </a>
                          </li>
                          </ul> -->
                      </ul>
                  </div>
              </div>
          </nav>
      </div>
  </header>
      `;
  }
}

customElements.define('main-header', Header);
