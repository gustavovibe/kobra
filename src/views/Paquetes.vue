<script setup>
	import Button from 'primevue/button';
</script>
<style scoped>
	.surface-card p{color:white}
</style>	
<template>
    <div class="surface flex justify-content-center">
        <section id="features" style="max-width:1140px;margin:0 auto">
                <div class="grid justify-content-center">
                    <div class="col-12 text-center mt-8 mb-4">
                        <h2 class="text-900 font-normal mb-2 text-primary">Paquetes Web</h2>
                        <span class="text-600 text-2xl">Ahorra dinero con nuestros paquetes:</span>
                    </div>

                    <div class="col-12 md:col-12 lg:col-6 ">
                        <div
                            style="padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2))"
                        >
                            <div class="p-3 surface-card h-full" style="border-radius: 8px">
                                <img src="/images/ecommerce.jpg" alt="Image" style="width:100%" > 
                                <h5 class="mb-2 text-900">Paquete Ecommerce</h5>
                                <p>Empieza a vender tus productos online.</p>
                                <a target="new_blank" href="https://kobra-marketing.com/ecommerce.pdf"><Button label="Ver Paquete" type="button" class="p-button-outlined"></Button></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 md:col-12 lg:col-6 ">
                        <div
                            style="padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(145, 226, 237, 0.2), rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(172, 180, 223, 0.2))"
                        >
                            <div class="p-3 surface-card h-full" style="border-radius: 8px">
                                <img src="/images/plataforma.jpg" alt="Image" style="width:100%" > 
                                <h5 class="mb-2 text-900">Paquete Plataforma</h5>
                                <p>Lo mejor para cursos, estudiantes y profesores.</p>
                                <a target="new_blank" href="https://kobra-marketing.com/plataforma.pdf"><Button label="Ver Paquete" type="button" class="p-button-outlined"></Button></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 md:col-12 lg:col-6 ">
                        <div
                            style="padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(187, 199, 205, 0.2), rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(145, 226, 237, 0.2), rgba(160, 210, 250, 0.2))"
                        >
                            <div class="p-3 surface-card h-full" style="border-radius: 8px">
                                <img src="/images/gads.jpg" alt="Image" style="width:100%" > 
                                <h5 class="mb-2 text-900">Paquete Google Ads</h5>
                                <p>Empieza a ganar clientes con tu web y G Ads.</p>
                                <a target="new_blank" href="https://kobra-marketing.com/gads.pdf"><Button label="Ver Paquete" type="button" class="p-button-outlined"></Button></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-12 lg:col-6 ">
                        <div
                            style="padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(187, 199, 205, 0.2), rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(145, 226, 237, 0.2), rgba(160, 210, 250, 0.2))"
                        >
                            <div class="p-3 surface-card h-full" style="border-radius: 8px">
                                <img src="/images/arma.jpg" alt="Image" style="width:100%" > 
                                <h5 class="mb-2 text-900">Arma tu paquete</h5>
                                <p>Tienes algo en mente pero no sabes si es posible?</p>
                                <a target="new_blank" href="https://kobra-marketing.com/arma.pdf"><Button label="Ver Paquete" type="button" class="p-button-outlined"></Button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>                
</template>