Vue.component('seccion-nosotros', {
    template: `
   <div>
   <section id="nosotros" style="margin-top:5%; margin-left:7%;" class="mb-4">
   <div class="row">
       <div class="col-md-3">
           <button class="btn" style="background-color: #096868; width: 150px;height: 150px; border-radius: 50%; border-color: #096868;"><i class="fas fa-laptop-code fa-3x" style="color: white"></i></button>
           <div style="margin-left:-45%">
               <div class="text-center mt-4">
                   <span> <strong>Hardware</strong></span>
                   <span style="bottom: 40%; display: flex;height: 2px; left: 0; margin-bottom: 2%; margin: 0 auto; position: initial; right: 50; width: 20%; background-color: #096868;"></span>
               </div>
               <div class="text-center mt-4">
                   <span  class="fst-italic">Infraestuctura tecnologica garantizada</span>
               </div>
           </div>
       </div>
       <div class="col-md-3">
           <button class="btn" style="background-color:  #096868; width: 150px;height: 150px; border-radius: 50%; border-color: #096868"><i class="far fa-chart-bar fa-3x" style="color: white"></i></button>
           <div style="margin-left:-40%">
               <div class="text-center mt-4">
                   <span><strong>Bussines Analitic</strong></span>
                   <span style="bottom: 40%; display: flex;height: 2px; left: 0; margin-bottom: 2%; margin: 0 auto; position: initial; right: 50; width: 20%; background-color: #096868;"></span>
               </div>
               <div class="text-center mt-4">
                   <span class="fst-italic">Analisis de datos de predicción</span>
               </div>
           </div>
       </div>
       <div class="col-md-3">
           <button class="btn" style="background-color:  #096868; width: 150px;height: 150px; border-radius: 50%; border-color: #096868 "><i class="fas fa-code fa-3x" style="color: white"></i></button>
           <div style="margin-left:-40%">
               <div class="text-center mt-4">
                   <span><strong>Software</strong></span>
                   <span style="bottom: 40%; display: flex;height: 2px; left: 0; margin-bottom: 2%; margin: 0 auto; position: initial; right: 50; width: 20%; background-color: #096868;"></span>
               </div>
               <div class="text-center mt-4">
                   <span class="fst-italic">Soluciones de Software Empresariales a su medida</span>
               </div>
            </div>
       </div>
        
       <div class="col-md-3">
           <button class="btn" style="background-color:  #096868; width: 150px;height: 150px; border-radius: 50%; border-color: #096868"><i class="far fa-lightbulb fa-3x" style="color: white"></i></button>
           <div style="margin-left:-40%">
               <div class="text-center mt-4">
                   <span> <strong>Innovacion</strong></span>
                   <span style="bottom: 40%; display: flex;height: 2px; left: 0; margin-bottom: 2%; margin: 0 auto; position: initial; right: 50; width: 20%; background-color: #096868;"></span>
               </div>
               <div class="text-center mt-4 mb-4">
                   <span  class="fst-italic">Planes Estrategicos y Proyectos</span>
               </div>
           </div>
       </div>
   </div>    
</section>

<!---Seccion Nosotros Parte 2-->   
<section id="nosotros" class="px-5">
   <div class="card " >
       <div class="row justify-content-center">
           <h3 class="text-center" style="margin-top: 3%">Nosotros</h3>
           <h3 class="text-center" id="guion"></h3>
           <div class="col justify-content-center px-5" style="margin-top:2%">
               <p style=" text-align: justify;" class="fs-6">
               Contamos con un activo de equipos informáticos dispuestos para los clientes
               que requieran de este servicio garantizando su óptimo funcionamiento y respaldo
               para su uso. Además ofrece a nuestros clientes soluciones de hardware y software
               de última generación para equipar sus Sistemas de Información con la Infraestructura 
               tecnológica más adecuada a sus necesidades, con la particularidad de hacerlo desde un punto 
               de vista profesional, donde lo importante es el valor añadido que puede proporcionar ese equipamiento
               a su empresa, incorporando en todos los proyectos productos innovadores del sector informático. 
               Computadores de uso general para el hogar, oficina o pequeña empresa. Computadores para usos 
               especiales: diseño, animación, etc. Servidores para grandes empresas con gran flujo de información. 
               Soluciones completas en sistemas para usos específicos: vigilancia, edición de video, música, etc.
               </p>
           </div>
       </div>
    </div>
</section>
   </div>
    `
})