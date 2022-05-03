Vue.component('seccion-inicio', {
    template: `
   <div>
   <section id="carrusel">
   <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
       <div class="carousel-inner">
           <div class="carousel-item active">
               <img src="../images/banner1.jpg" width="100%">
               <div class="carousel-caption" style="margin:10%">
                   <h1>Equipo</h1>
                   <h4>Altamente calificado y con experiencia. </h4>
               </div>
           </div>
           <div class="carousel-item">
               <img src="../images/banner2.jpg" width="100%">
                <div class="carousel-caption" style="margin:10%">
                   <h1>Innovación</h1>
                   <h4>Creamos planes estrategicos de acuerdo a tus necesidades.</h4>
               </div>
           </div>
           <div class="carousel-item">
               <img src="../images/banner3.jpg" width="100%">
               <div class="carousel-caption" style="margin:10%">
                   <h1>Software</h1>
                   <h4>Nos ajustamos a tus necesidades.</h4>
               </div>
           </div>
               <div class="carousel-item">
               <img src="../images/banner4.jpg" width="100%">
               <div class="carousel-caption" style="margin:10%">
                   <h1>Estrategias y Proyectos MVAR</h1>
                   <h4>Una solución empresarial para ti.</h4>
               </div>
           </div>
       </div>
       <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
           <span aria-hidden="true"><i class="far fa-circle fa-3x"></i></span>
       </button>
       <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
           <span  aria-hidden="true"><i class="far fa-circle fa-3x"></i></span>
       </button>
   </div> 
</section>

   </div>
    `
})

