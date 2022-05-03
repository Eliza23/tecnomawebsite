Vue.component('seccion-menu', {
    template: `
    <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">
            <img src="../images/logo.png" width="70px"> 
         </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#" style="color:black"><strong><i class="fas fa-home"></i> Inicio</strong></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" style="color:black"><strong><i class="fas fa-building"></i> Nosotros </strong></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" style="color:black"><strong><i class="fas fa-users"></i> Clientes </strong></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" style="color:black"><strong><i class="fas fa-cogs"></i> Servicios</strong></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" style="color:black"><strong><i class="fas fa-users-cog"></i> Equipo</strong></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" style="color:black"><strong><i class="fas fa-sms"></i> Contacto</strong></a>
                </li>
                 <li class="nav-item">
                   
                </li>
            </ul>
        </div>
    </div>
</nav>
    `
})
