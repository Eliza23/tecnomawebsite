Vue.component('seccion-calidad', {
    template: `
   <div>
   <section id="calidad">
   <div class="card"  style="margin-top:10%">
       <div class="row mt-4 px-5 mb-5">
           <div class="col-md-12">
               <h3 class="text-center">Proceso de Calidad</h3>
                 <h3 class="text-center" id="guion"></h3>
               <div class="row mt-5 px-3">
                   <div class="col-md-4">
                   <h5><i class="fas fa-book-reader"></i> Planificar</h5> 
                   <div style="text-align: justify;font-style: italic; ">Planificamos nuestros proyectos para saber lo que el cliente necesita y espera.</div>
                   </div>
                   <div class="col-md-4">
                       <h5><i class="fas fa-tools"></i> Desarrollar</h5> 
                       <div style="text-align: justify; font-style: italic;">Desarrollamos el proyecto siguiendo los parametros de Planificación y Diseño.</div>
                   </div>
                   <div class="col-md-4">
                       <h5><i class="fas fa-arrows-alt"></i>  Release</h5> 
                       <div style="text-align: justify; font-style: italic;">Lanzamos nuestros proyectos mediante el ciclo de proceso.</div>
                   </div>
               </div>
               <div class="row mt-3 px-3">
                   <div class="col-md-4">
                   <h5 class="mt-2"> <i class="fas fa-pencil-alt"></i> Diseñar</h5> 
                   <div style="text-align: justify; font-style: italic;">Diseñamos y maquetamos para obtener lo planificado y lo que se desarrollara.</div>
                   </div>
                   <div class="col-md-4">
                   <h5 class="mt-2"><i class="fas fa-vial"></i> Test</h5> 
                   <div style="text-align: justify; font-style: italic;">Realizamos las pruebas necesarias para minimizar errores.</div>
                   </div>
                   <div class="col-md-4">
                   <h5 class="mt-2"><i class="fas fa-sync-alt"></i> Feedback</h5> 
                   <div style="text-align: justify; font-style: italic;">El ciclo es continuo y de mejora.</div>
                   </div>
               </div>
           </div>
       </div>
   </div>
</section>
   </div>
    `
})