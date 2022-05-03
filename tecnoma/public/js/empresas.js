Vue.component('seccion-empresas', {
    template: `
   <div>
    <section id="confianza">
        <h3 class="text-center" style="margin-top:5%">Empresas que confian en nosotros</h3>
        <h3 class="text-center" id="guion"></h3>
        <div class="row d-flex" style="margin-top:5%" >
            <div class="col">
                <img id="imagen" src="../images/alcaldiapasto.png" class="img-fluid" width="100%">
            </div>
            <div class="col" >
                <img id="imagen" src="../images/gobernacionnarinio.png" class="img-fluid" width="100%">
            </div>
            <div class="col" >
                <img id="imagen" src="../images/concejopasto.png" class="img-fluid" width="100%">
            </div>
            <div class="col" >
                <img id="imagen" src="../images/alcaldiaconsaca.png" class="img-fluid" width="100%">
            </div>
            <div class="col">
                <img id="imagen" src="../images/universidad.jpg" class="img-fluid" width="80%">
            </div>
        </div>
    </section>
   </div>
    `
})
