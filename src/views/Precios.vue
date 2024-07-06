<script setup>
	import Button from 'primevue/button';
</script>
<template>
<div class="surface flex justify-content-center">
<div id="pricing" style="max-width: 1140px;margin: 0 auto;">
                <div class="text-center">
                    <h2 class="text-900 font-normal mb-2">Precios</h2>
                    <span class="text-600 text-2xl">Esto es lo que pagas:</span>
                </div>

                <div class="grid justify-content-between mt-8 md:mt-0">
                    <div class="col-12 lg:col-4 p-0 md:p-3">
						<a href="https://api.whatsapp.com/send?phone=5215527926439&text=Quiero%20m%C3%A1s%20info%20sobre%20los%20web%20starter" class="font-medium line-height-3 text-2xl block cursor-pointer mb-2 text-900">
                        <div class="p-3 flex flex-column border-200 pricing-card cursor-pointer border-2 hover:border-primary transition-duration-300 transition-all" style="border-radius: 10px">
                            <h3 class="text-900 text-center my-5"> Web starter</h3>
                            <img src="/images/free.svg" class="w-10 h-10 mx-auto" alt="free" />
                            <div class="my-5 text-center">
                                <span class="text-5xl font-bold mr-2 text-900">$2,500</span>
                                <span class="text-600">en dos pagos</span>
                                <Button label="Saber Más"/>
                            </div>
                            <Divider class="w-full bg-surface-200"></Divider>
                            <ul class="my-5 list-none p-0 flex text-900 flex-column">
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Instalación en servidor.</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Menú y páginas interiores (promociones, aviso de privacidad, términos y condiciones).</span>
                                </li>
								<li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Imágenes de Stock</span>
                                </li>
								
								
								<li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Adaptable en los buscadores móviles</span>
                                </li>
								
								
								<li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">1 año de Hosting</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">2 a 3 opciones de diseño (UX/UI) autoadministrable.</span>
                                </li>
                                
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Formulario para leads, whatsapp o chat widget.</span>
                                </li>
                            </ul>
                        </div>
							</a>
                    </div>
                    <div class="col-12 lg:col-4 p-0 md:p-3">
                        <a href="https://api.whatsapp.com/send?phone=5215527926439&text=Quiero%20m%C3%A1s%20info%20sobre%20los%20sitios%20web" class="font-medium line-height-3 text-2xl block cursor-pointer mb-2 text-900">
                        <div class="p-3 flex flex-column border-200 pricing-card cursor-pointer border-2 hover:border-primary transition-duration-300 transition-all" style="border-radius: 10px">
                            <h3 class="text-900 text-center my-5">Sitio web</h3>
                            <img src="/images/startup.svg" class="w-10 h-10 mx-auto" alt="free" />
                            <div class="my-5 text-center">
                                <span class="text-5xl font-bold mr-2 text-900">$4,500</span>
                                <span class="text-600">en dos pagos</span>
                                <Button label="Saber Más"/>
                            </div>
                            <Divider class="w-full bg-surface-200"></Divider>
                            <ul class="my-5 list-none p-0 flex text-900 flex-column">
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Instalación en servidor.</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Menú y páginas interiores (promociones, aviso de privacidad, términos y condiciones).</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Imágenes de Stock</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">2 Objetivos Analytics</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Integración en Google Maps</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Adaptable en los buscadores móviles</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Configuración Google Analytics</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Configuración Antihackeo</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Respaldo Automatico</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Integración con las Redes Sociales</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">1 año de Hosting</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">2 a 3 opciones de diseño (UX/UI) autoadministrable.</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Carga de 5 servicios diferentes que su negocio ofrezca.</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Formulario para leads, whatsapp o chat widget.</span>
                                </li>
                            </ul>
                        </div>
                            </a>
                    </div>
                    <div class="col-12 lg:col-4 p-0 md:p-3 mt-4 md:mt-0">
						<a href="https://api.whatsapp.com/send?phone=5215527926439&text=Quiero%20m%C3%A1s%20info%20sobre%20las%20tiendas%20online" class="font-medium line-height-3 text-2xl block cursor-pointer mb-2 text-900">
                        <div class="p-3 flex flex-column border-200 pricing-card cursor-pointer border-2 hover:border-primary transition-duration-300 transition-all" style="border-radius: 10px">
                            <h3 class="text-900 text-center my-5">Tienda Online</h3>
                            <img src="/images/enterprise.svg" class="w-10 h-10 mx-auto" alt="startup" />
                            <div class="my-5 text-center">
                                <span class="text-5xl font-bold mr-2 text-900">$7,500</span>
                                <span class="text-600"> en dos pagos</span>
                                <Button label="Saber Más"/>
                            </div>
                            <Divider class="w-full bg-surface-200"></Divider>
                            <ul class="my-5 list-none p-0 flex text-900 flex-column">
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Instalación en servidor.</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Menú y páginas interiores (promociones, aviso de privacidad, términos y condiciones).</span>
                                </li>
								<li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Imágenes de Stock</span>
                                </li>
								<li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">2 Objetivos Analytics</span>
                                </li>
								<li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Integración en Google Maps</span>
                                </li>
								<li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Adaptable en los buscadores móviles</span>
                                </li>
								<li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Configuración Google Analytics</span>
                                </li>
								<li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Configuración Antihackeo</span>
                                </li>
								<li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Respaldo Automatico</span>
                                </li>
								<li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Integración con las Redes Sociales</span>
                                </li>
								<li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">1 año de Hosting</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">2 a 3 opciones de diseño (UX/UI) autoadministrable.</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Carga de 15 productos con imagen y texto.</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3"> Carrito, mi cuenta y 1 pasarela de pago.</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Formulario para leads, whatsapp o chat widget.</span>
                                </li>
                            </ul>
                        </div>
							</a>
                    </div>

                    <div class="col-12 lg:col-4 p-0 md:p-3 mt-4 md:mt-0" style="display:none">
						<a href="https://api.whatsapp.com/send?phone=5215527926439&text=Quiero%20m%C3%A1s%20info%20sobre%20emprende%20ahora%20online" class="font-medium line-height-3 text-2xl block cursor-pointer mb-2 text-900">
                        <div class="p-3 flex flex-column border-200 pricing-card cursor-pointer border-2 hover:border-primary transition-duration-300 transition-all" style="border-radius: 10px">
                            <h3 class="text-900 text-center my-5">Emprende ahora</h3>
                            <img src="/images/enterprise.svg" class="w-10 h-10 mx-auto" alt="enterprise" />
                            <div class="my-5 text-center">
                                <span class="text-5xl font-bold mr-2 text-900">$10,999</span>
                                <span class="text-600">en dos pagos</span>
                                <Button label="Saber Más"/>
                            </div>
                            <Divider class="w-full bg-surface-200"></Divider>
                            <ul class="my-5 list-none p-0 flex text-900 flex-column">
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Instalación en servidor.</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Menú y páginas interiores (promociones, aviso de privacidad, términos y condiciones).</span>
                                </li>
								<li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Imágenes de Stock</span>
                                </li>
								<li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">2 Objetivos Analytics</span>
                                </li>
								<li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Integración en Google Maps</span>
                                </li>
								<li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Adaptable en los buscadores móviles</span>
                                </li>
								<li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Configuración Google Analytics</span>
                                </li>
								<li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Configuración Antihackeo</span>
                                </li>
								<li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Respaldo Automatico</span>
                                </li>
								<li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Integración con las Redes Sociales</span>
                                </li>
								<li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">1 año de Hosting</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">2 a 3 opciones de diseño (UX/UI) autoadministrable.</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Carga de 5 servicios diferentes que su negocio ofrezca o 20 productos.</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Campañas de google ads para empezar a obtener leads.</span>
                                </li>
                            </ul>
                        </div>
							</a>
                    </div>
                </div>
            </div>
	</div>
</template>