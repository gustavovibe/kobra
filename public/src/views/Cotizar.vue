<script setup>
	import { ref, computed } from 'vue';
	import Button from 'primevue/button';
	import Checkbox from 'primevue/checkbox';
  
    const checkedNames = ref([]); 
    const name = ref('');
    const email = ref('');
    const phone = ref('');
    const submitted = ref(false);
	const hiddenInput = ref(document.getElementById("hiddenInput"));
	
    // Computed property to check if the form is valid
    const formIsValid = computed(() => {
      return name.value.trim() !== '' && email.value.trim() !== '' && phone.value.trim() !== '';
    });
	const handleButtonClick = () => {
         hiddenInput.value = document.getElementById("hiddenInput").value;
         submitForm();
      	};
    // Function to submit the form
    const submitForm = () => {
		  console.log("sending");
		  const formData = new FormData();
		  formData.append('name', name.value);
		  formData.append('email', email.value);
		  formData.append('phone', phone.value);
		  formData.append('hiddenInput', hiddenInput.value);	
		  console.log("hiddenInput", hiddenInput.value);	
			
		  fetch('https://kobra-marketing.com/submit_form.php', {
			method: 'POST',
			body: formData,
		  })
		  .then(response => {
			if (response.ok) {
			  submitted.value = true;
			  const urlToOpen = 'https://kobra-marketing.com/cotizacion/';
			  window.location.href = urlToOpen;
			} else {
			  // Handle error if needed
			}
		  })
		  .catch(error => {
			console.error('Error:', error);
		  });
		};

</script>
<template>
<div class="surface flex justify-content-center" style="border-radius: 5px;color: white;">
<section id="highlights" style="max-width:1140px;margin:50px auto">
                <div class="text-center">
                    <h2 class="text-900 font-normal mb-2 text-primary">Obtenga una cotización en 5 minutos</h2>
                </div>
                <div class="card" style="text-align: left">
                        <div class="grid">
                            <div class="col-12 md:col-7">
                                <div class="grid">
                                    <div class="col-12"><h5>Lo que incluimos siempre:</h5></div>
                                    <div class="col-6 md:col-6">
                                        <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>1 año de Hosting
                                    </div>
                                    <div class="col-6 md:col-6">
                                        <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>Menú, Privacidad y Términos
                                    </div>
                                    <div class="col-6 md:col-6">
                                        <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>Imágenes de Stock
                                    </div>
                                    <div class="col-6 md:col-6">
                                        <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>Imágenes de Stock
                                    </div>
                                    <div class="col-6 md:col-6">
                                        <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>Adaptable en los móviles
                                    </div>
                                    <div class="col-6 md:col-6">
                                        <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>Configuración Antihackeo
                                    </div>
                                    <div class="col-6 md:col-6">
                                        <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>Respaldo Automatico
                                    </div>
                                    <div class="col-6 md:col-6">
                                        <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>Integración con las Redes Sociales
                                    </div>
                                    <div class="col-6 md:col-6">
                                        <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>2 a 3 opciones de diseño.
                                    </div>
                                    <div class="col-6 md:col-6">
                                        <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>Whatsapp o chat widget.
                                    </div>
                                    <div class="col-12 mobile-hidden">
                                        <img src="/images/sitio-web-responsivo.jpg" style="width:80%;height:auto;margin:0 auto;border-radius:5px" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 md:col-5">
                                <div class="grid" >
                                     <div class="col-12"><h5>Opciones:</h5></div>
                                        
                                        <div class="col-6 md:col-4">
                                            <div class="field-checkbox mb-0">
                                            <Checkbox id="checkOption1" type="checkbox" value="Promociones" v-model="checkedNames" />
                                                <label for="checkOption1">Promociones</label>
                                            </div>
                                        </div>
                                        <div class="col-6 md:col-4">
                                            <div class="field-checkbox mb-0">
                                            <Checkbox id="checkOption2" type="checkbox" value="5 servicios" v-model="checkedNames" />
                                                <label for="checkOption2">5 servicios</label>
                                            </div>
                                        </div>
                                        <div class="col-6 md:col-4">
                                            <div class="field-checkbox mb-0">
                                            <Checkbox id="checkOption3" type="checkbox" value="Google maps" v-model="checkedNames" />
                                                <label for="checkOption3">Google maps</label>
                                            </div>
                                        </div>
                                        <div class="col-6 md:col-4">
                                            <div class="field-checkbox mb-0">
                                        <Checkbox id="checkOption4" type="checkbox" value="Catálogo online" v-model="checkedNames" />
                                                <label for="checkOption4">Catálogo online</label>
                                            </div>
                                        </div>
                                        <div class="col-6 md:col-4">
                                            <div class="field-checkbox mb-0">
                                    <Checkbox type="checkbox" id="checkOption5" value="Pagos online" v-model="checkedNames" />
                                                <label for="checkOption5">Pagos online</label>
                                            </div>
                                        </div>
                                        <div class="col-6 md:col-4">
                                            <div class="field-checkbox mb-0">
                                    <Checkbox type="checkbox" v-model="checkedNames" id="checkOption6" value="Google ads" />
                                                <label for="checkOption6">Google ads</label>
                                            </div>
                                        </div>
                                    
                                </div>
                            <form>
                                 <div class="card p-fluid" style="text-align:left">
                                         <div class="field">
                                            <label for="name">Nombre</label>
                                            <input v-model="name" id="name" class="p-inputtext p-component" type="text" required>
                                         </div>
                                         <div class="field">
                                            <label for="phone">Teléfono</label>
                                            <input v-model="phone" id="phone" class="p-inputtext p-component" type="text" required>
                                         </div>
                                         <div class="field">
                                            <label for="email">E-mail</label>
                                            <input v-model="email" id="email" class="p-inputtext p-component" type="text" required>
                                         </div>
                                 </div>
                               <div class="field" style="display:none">
                                    <input v-model="hiddenFieldValue" id="hiddenInput" class="p-inputtext p-component" type="text">
                               </div>    
                               <Button v-if="submitted" label="Enviando" @click="addMessage('success')" class="p-button-success mr-2" />
                               <!-- Do not show the button if the form has been submitted -->
                               <Button v-if="!submitted" @click.prevent="handleButtonClick" :disabled="!formIsValid">Cotizar</Button>
                            </form>
                            </div>
                        </div>  
                 </div>
            </section>
</div>
</template>