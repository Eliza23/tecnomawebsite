Vue.component('seccion-servicios', {
    template: `
<div>
    <section id="servicios">
    <div class="row" style="margin-top:5%">
        <h3 class="text-center">Nuestros Servicios</h3>
        <h3 class="text-center" id="guion"></h3>
        <div class="col" style="margin-top:5%">
            <ul class="nav nav-tabs justify-content-center" id="opc">
                <li class="nav-item active" id="test">
                    <button class="nav-link active" id="tecnologia_tab" data-bs-toggle="tab" data-bs-target="#tecnologia" type="button" role="tab" aria-controls="tecnologia" aria-selected="true"><i class="fas fa-cogs"></i> Tecnologia</button>
                </li>
                <li class="nav-item" id="test">
                    <button class="nav-link" id="hardware-tab" data-bs-toggle="tab" data-bs-target="#hardware" type="button" role="tab" aria-controls="hardware" aria-selected="false"><i class="fas fa-laptop-code"></i> Hardware</button>
                </li>
                <li class="nav-item" id="test">
                    <button class="nav-link" id="asesoria-tab" data-bs-toggle="tab" data-bs-target="#asesoria" type="button" role="tab" aria-controls="asesoria" aria-selected="false"><i class="far fa-edit"></i> Asesoria y Dotación</button>
                </li>
            </ul>
            <div class="tab-content border" id="myTabContent" style="padding:5%">
                <div class="tab-pane fade show active" role="tabpanel" id="tecnologia" aria-labelledby="tecnologia-tab">
                    <div class="row">
                       <div class="col-md-6">
                           <h5 style="color: #64A71F"><i class="fas fa-award"></i>  Comercialización de Hardware y Software</h5>                                
                           <div style="margin-top:4%; text-align: justify;">
                                <p> Contamos con equipos informáticos para nuestros clientes que requieran de este servicio, garantizamos el óptimo funcionamiento y respaldo para su uso. 
                                </p>
                                <p>Ofrecemos soluciones de hardware y software de última generación para equipar sus Sistemas de Información con Infraestructura tecnológica ajustada a sus necesidades,
                                    con la particularidad de hacerlo desde un punto de vista profesional, donde lo importante es el valor agregado que puede proporcionar ese equipamiento a su empresa. 
                                </p> 
                                <p>En todos nuestros proyectos, incorporamos productos innovadores del sector informático. <br>
                                    • Computadores de uso general para el hogar, oficina o pequeña empresa. <br>  • Computadores para usos especiales: diseño, animación, etc. <br>
                                    • Servidores para grandes empresas con gran flujo de información. <br> • Soluciones completas en sistemas para usos específicos: vigilancia, edición de video, música, etc.
                                </p>
                           </div>
                           <h5 style="color: #64A71F"><i class="fas fa-award"></i> Diseño Web</h5>
                           <div style="margin-top:4%; text-align: justify;">
                                <p>
                                Contamos con habilidades y conocimientos necesarios para la creación, diseño y
                                estructuración de los elementos gráficos de un sitio web, que expresen 
                                la identidad corporativa de una empresa.
                                </p>
                                <p>
                                    En este sentido, nuestro objetivo principal, es destacar su imagen 
                                    corporativa a través de elementos gráficos de vanguardia proporcionando credibilidad y posicionamiento de su empresa
                                    en una presentación simple y sencilla pero sobre todo impactante, permitiendo que los usuarios encontren lo que buscan.
                                </p>
                           </div>                           
                        </div>
                        <div class="col-md-6">
                            <h5 style=" color: #64A71F"><i class="fas fa-award"></i>  Software a la medida</h5>
                            <div style="margin-top:4%; text-align: justify;">
                                <p>
                                Nos enfocamos en desarrollar aplicaciones de software adaptadas a las necesidades de nuestros clientes.
                                Aportamos soluciones tecnológicas personalizadas, brindado la capacidad y el conocimiento requerido 
                                en el despliegue y soporte de los sistemas necesarios para cumplir con sus expectativas. 
                                </p>
                                <p>
                                Trabajamos con tecnologías de vanguardia que nos permiten ofrecer soluciones robustas y escalables, que perduran en el tiempo. Establecemos procesos de planeación con modelos que permiten: 
                                </p>
                                <p>
                                • Análisis del Sistema <br> • Toma de Requerimientos <br> • Diseño <br> • Codificación <br> • Pruebas (Mantenimiento y Soporte técnico)  <br> • Implementación de soluciones de calidad <br>
                                </p>
                            </div>
                            <h5 style="margin-top:5%; color: #64A71F"> <i class="fas fa-award"></i> Administración de Base de Datos</h5>
                            <div style="margin-top:4%; text-align: justify;">
                                <p>Trabajamos con bases de datos corporativas y realizamos procesos de: <br>
                                Diseño, creación , gestión, implementación, configuración y oporte                           
                                </p>  
                                <p>
                                Garantizamos la seguridad por medio de monitoreo a los servidores, toma de medidas en la distribución de los datos y las soluciones de almacenamiento, incluyendo back-up y recuperación de desastres.
                                </p>
                                <p>
                                Ejecutamos procesos de planeación e implementación del aprovisionamiento de los datos y aplicaciones,
                                empleamos planes de contingencia respaldados con personal profesional y calificado con experiencia y
                                capacidades en uno o más sistemas de gestión de bases de datos.
                                </p>
                            </div>
                        </div>                            
                    </div>
                </div>

                <div class="tab-pane fade" role="tabpanel" id="hardware" aria-labelledby="hardware-tab">
                     <div class="row">
                        <div class="col-md-6">
                            <h5 style="color: #64A71F"><i class="fas fa-award"></i>  Productos, Redes y Sistema de Cableado Estructurado</h5>
                            <div style="margin-top:4%; text-align: justify;">
                                <p> Ofrecemos a nuestros cliente: <br>
                                    • Instalación de redes para el hogar, negocio o empresa. <br> • Garantizamos la seguridad de sus datos en redes estructuradas.<br>
                                    • Soluciones completas en redes para usos específicos. <br> • Tarjetas, y componentes para redes en general. <br>
                                    • Mantenimiento preventivo y correctivo para equipos de hogar, oficina y especializado para equipos en empresas. <br>
                                    • Accesorios, partes y soluciones informáticas, para su hogar y oficina. <br> 
                                    • Actualizaciones de software y hardware.<br> • Soluciones técnicas en informática, sea cual sea su necesidad.<br>
                                </p>
                            </div>

                            <h5 style="margin-top:5%; color: #64A71F"><i class="fas fa-award"></i>  Seguridad Electrónica</h5>
                            <div style="margin-top:4%; text-align: justify;">
                                <p>
                                    Garantizamos a nuestros clientes trabajos óptimos, oportunos y confiables. 
                                    Ademas contamos con personal idóneo y con amplia experiencia en Seguridad Electrónica. 
                                    La mayoría de nuestros sistemas tienen la posibilidad de ser monitoreados a través de internet, para un mayor control. 
                                </p>
                                <p>
                                CCTV (Circuitos Cerrados de TV) Cámaras: <br>
                                • Profesionales  • DIA y noche  • Infrarrojas <br>
                                • Color  • Domo y cyber-domo  • Ocultas y espías <br>                           
                                • Sistema de grabación digital. <br>  
                                CONTROL DE ACCESO <br> 
                                • Digital, Manual y Biométrico. <br>                           
                                ALARMAS <br> 
                                • Sistemas de alta seguridad para áreas: Residencial, industrial y vehicular.<br> 
                                • Barreras fotoeléctricas. • Sensores de movimiento. • Detención de incendios.<br> 
                                PUERTAS DE SEGURIDAD <br> 
                                • Residencial y comercial con láminas de diferentes calibres.<br> 
                                • Referencias variadas en cerraduras. • Diseños según gusto del cliente.<br> 
                                </p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <h5 style="color: #64A71F"><i class="fas fa-award"></i>  Servicios Alojamiento y Administración de Sitios Web.</h5>
                            <div style="margin-top:4%;text-align: justify;">
                                <p>
                                Estamos interesados en que su presencia atraves de Internet, sea un proceso sencillo. <br>
                                Entre nuestros servicios Web se encuentran: <br> 
                                Hosting o alojamiento de páginas Web. <br>
                                • Garantizamos que los datos de su sitio estén siempre disponibles. <br>
                                • contamos con un sistema de soporte eléctrico que le proporciona 24 horas en ausencia total de luz. <br>
                                    Diseño de sitios Web: <br>
                                • Páginas Web estáticas y dinámicas, con formatos, formularios y módulos especiales para funciones específicas. <br>
                                • Brindamos asesorías en el diseño y construcción de su sitio Web, además de todo el proceso de alojamiento y administración. <br>

                                    Mantenimiento y Administración de Páginas Web: <br>
                                    • Puede realizar cambios y actualizacion en su página. <br>
                                    • Contamos con personal calificado para realizar estos cambios por usted, lo más rápido posible. <br>
                                    Correo Electrónico Corporativo: <br>
                                    • Dependiendo del plan que elija puede tener un determinado número de cuentas de correo electrónico.<br>
                                    Web mail: <br>                      
                                    • Servidor de correo utilizable desde cualquier navegador y desde cualquier parte del mundo, sin configuraciones especiales, entra directamente desde su página Web, incluye libreta de direcciones, contactos y notas. Dominios, servidor FTP, entre otros.
                                </p>
                            </div>

                            <h5 style="margin-top:5%; color: #64A71F"><i class="fas fa-award"></i>  Sistemas Digitales de Video</h5>
                            <div style="margin-top:4%; text-align: justify;">
                                <p>
                                    Contamos con soluciones con precios accesibles dependiendo de su necesidad y presupuesto: <br>
                                    • Soluciones digitales en video para hogar o pequeña empresa. <br> • Soluciones de edición de video para aficionados. <br>
                                    • Soluciones digitales de edición de video profesional. <br>
                                </p>
                                <p>
                                Ademas ofrecemos: <br>
                                • Tarjetas de edición de video caseras, semi-profesionales y profesionales. <br>
                                • Accesorios para la edición de video profesional. <br>
                                • Cámaras de video semi-profesionales y profesionales.<br>
                                </p>
                            </div>
                        </div>                            
                   </div>
               </div>
               <div class="tab-pane fade" role="tabpanel" id="asesoria" aria-labelledby="asesoria-tab">
                   <div class="row">
                        <div class="col-md-6">
                            <h5 style="color: #64A71F"><i class="fas fa-award"></i>  Dotaciones de Muebles Oficina</h5>
                            <div style="margin-top:4%; text-align: justify;">
                            Ponemos a su disposición nuestras dotaciones para oficina: <br>
                                • Sillas giratorias y de espera. <br> • Mesas. <br> • Equipos de cómputo. <br>
                                • Archivadores. <br> • Bibliotecas. <br> 
                            </div>
                            <h5 style="margin-top:5%; color: #64A71F"><i class="fas fa-award"></i>  Elementos Visuales</h5>
                            <div style="margin-top:4%; text-align: justify;">
                                Comercialización de televisores, pantallas y proyectores en las mejores marcas y en diferentes tamaños, satisfaciendo principalmente los requerimientos del cliente.
                            </div>                            
                        </div>

                        <div class="col-md-6">
                            <h5 style=" color: #64A71F"><i class="fas fa-award"></i>  Dotación de Papelería</h5>
                            <div style="margin-top:4%; text-align: justify;">
                                <p>
                                Ofrecemos variedad de elementos de papeleria, al por mayor y al detal: <br>
                                    • Carpetas. <br> • Hojas tamaño oficio y tamaño carta. <br>
                                    • Elementos de oficina (cosedora, perforadoras, AZ entre otros). <br>
                                    • Lapices, lapiceros, correctores y borradores. <br> • Clips. <br>
                                </p>
                            </div>

                            <h5 style="margin-top:5%; color: #64A71F"><i class="fas fa-award"></i>  Elaboración de Planes Estrategicos y Proyectos</h5>
                            <div style="margin-top:4%; text-align: justify;">
                                Formulación y desarrollo de proyectos y planes estratégicos con estándares de calidad y competitivos.
                            </div>
                        </div>                            
                   </div>
               </div>
           </div>
       </div>
   </div>
</section>
   
   </div>
    `
})

