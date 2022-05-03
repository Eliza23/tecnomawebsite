Vue.component('seccion-contacto', {
    props:['url'],
    data () {
        return {
            nombre:'',
            email:'',
            asunto:'',
            mensaje:'',
            telefono:'',
            data:[],
            men:'', men1:''
        }
    },
    methods: { 
        enviar:function(){
           // const baseURL = "http://127.0.0.1:8000/correoelectronico";
            let requestOptions = {
                method: "POST",
                headers: { 'X-CSRFToken': '{{csrf_token }}' ,"Content-Type": "application/json" },
                body: JSON.stringify({nombre:this.nombre,email:this.email,asunto:this.asunto, mensaje:this.mensaje, telefono:this.telefono})
            };
            fetch(this.url, requestOptions)
            .then(response => response.json())
            .then(resp => {
                if(resp.data == 'OK'){    
                    this.men1 = 'OK';               
                    this.men = 'Mensaje enviado correctamente';
                }else{
                    this.men1 = 'ERROR';
                    this.men = 'Mensaje no pudo ser enviado' 
                }
                $("#modalmensaje").modal("show");
             }); 
        }
    },
    template: `
   <div id="app">
    <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=1fc38c8f9282e6a2b6416a00c8e5726792c2c4ad'></script>
    <section id="contacto">
        <div class="row px-5" style="margin-top:5%;">
            <div class="col-md-6">
                <h3 class="text-center">CONTACTO</h3>
                <span style="bottom: 40%; display: flex;height: 2px; left: 0; margin-bottom: 2%; margin: 0 auto; position: initial; right: 50; width: 20%; background-color: #8BCE45;"></span>
                <form class="mt-6">
                    <div class="row" style="margin-top:6%">
                        <div class="col-md-6">
                                <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1" style="background-color:#096868; color:white; border-color:#096868"><i class="fas fa-user-alt"></i></span>
                                <input type="text" v-model='nombre' class="form-control" placeholder="Nombre"  aria-describedby="basic-addon1">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1" style="background-color:#096868; color:white; border-color:#096868"><i class="fas fa-align-right"></i></span>
                                <input type="text" v-model='asunto' class="form-control" placeholder="Asunto"  aria-describedby="basic-addon1">
                            </div>
                        </div>
                    </div>
                    <div class="row" style="margin-top:2%">
                        <div class="col-md-6">
                                <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1" style="background-color:#096868; color:white; border-color:#096868"><i class="fas fa-envelope-open-text"></i></span>
                                <input type="text" v-model='email' class="form-control" placeholder="Email"  aria-describedby="basic-addon1">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1" style="background-color:#096868; color:white; border-color:#096868"><i class="fas fa-phone"></i></span>
                                <input type="number" v-model='telefono' class="form-control" placeholder="Teléfono" aria-label="Username" aria-describedby="basic-addon1">
                            </div>
                        </div>
                    </div>
                    <div class="row" style="margin-top:2%">
                        <div class="col-md-12">
                            <div class="form-floating">
                                <textarea class="form-control" v-model='mensaje' style="height: 200px" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                <label for="floatingTextarea">Mensaje</label>
                            </div>
                        </div>
                    </div>
                    <div class="form-check mt-4">
                        <input class="form-check-input" type="checkbox" style="background-color: black">
                        <label class="form-check-label" for="flexCheckChecked">
                            <strong class="fst-italic">Acepta condición de uso de datos.</strong>
                        </label>
                    </div>
                    <div class="mt-4 text-center">
                        <button type="button" @click="enviar()" class="btn" style="background-color:#096868; color:white; border-color:#096868"><strong><i class="fas fa-share-square"></i> Enviar</strong></button>
                    </div>
                </form>
            </div>
            <div class="col-md-6 mt-2">
                    <iframe class="iframe" style="border:0" width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=20%&height=60%&hl=en&q=17%20Pasto+(mapa)&t=&z=12&ie=UTF8&iwloc=B&output=embed" allowfullscreen></iframe><a href='https://www.acadoo.es/'>Acadoo.es</a> 
            </div>
        </div>

        <div class="row p-5"> 
            <hr>
            <div class="col-md-4">
                <span class="fst-italic"><strong>Comuniquese al: </strong></span><br>
                <span class="fst-italic"><i class="fas fa-mobile-alt"></i>  (+57) 318 539 6461</span> <br>
                <span class="fst-italic"><i class="fas fa-mobile-alt"></i>  (+57) 321 261 8806</span>
            </div>       
            <div class="col-md-4">
                <span class="fst-italic"><strong>Escribanos a: </strong></span><br>
                <span class="fst-italic"><i class="fas fa-mail-bulk"></i>  estrategiasyproyectosmvar@gmail.com</span> <br>
                <a href="https://www.facebook.com/ESTRATEGIASYPROYECTOS" target="_black" style="color:black; text-decoration: none;" class="fst-italic"><i class="fab fa-facebook-square"></i>   Siganos en Facebook</a>
            </div>   
            <div class="col-md-4">
                <span class="fst-italic"><strong>Encuentrenos en: </strong></span><br>
                <span class="fst-italic"><i class="fas fa-route"></i>  Cra. 31C # 21-41</span> <br>
                <span class="fst-italic"><i class="fas fa-map-marker-alt"></i>  B/Las Cuadras - Zona Norte, Pasto- Nariño</span>
            </div> 
        </div>  
    </section>

    <div class="modal" tabindex="-1" id="modalmensaje">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-center">
                    <h5 style="font-weight: bolder">{{men1}}</h5>
                    <h5>{{men}}</h5>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" style="background-color:#096868; color:white; border-color:#096868"><strong>Cerrar</button>
                </div>
            </div>
        </div>
    </div>
</div>



    `
})

/* <iframe width="568" height="599" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" 
                                           src="https://maps.google.com/maps?width=568&height=599&hl=en&q=17%20Pasto+(mapa)&t=&z=12&ie=UTF8&iwloc=B&output=embed"></iframe> <a href='https://www.acadoo.es/'>Acadoo.es</a>  */