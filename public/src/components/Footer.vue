<script>
import Button from 'primevue/button';
import { ref, computed } from 'vue';

export default {
   setup() {
      const name = ref('');
      const email = ref('');
      const phone = ref('');
      const submitted = ref(false);
		
	  const formIsValid = computed(() => {
      	return name.value.trim() !== '' && email.value.trim() !== '' && phone.value.trim() !== '';
      });
	   
      const submitForm = () => {
		   console.log("sending");
		   const formData = new FormData();
		   formData.append('name', name.value);
		   formData.append('email', email.value);
		   formData.append('phone', phone.value);

		   fetch('https://kobra-marketing.com/submit_form.php', {
			  method: 'POST',
			  body: formData,
		   })	
		   .catch(error => {
			  console.error('Error:', error);
		   });
		};

      return {
          name,
		  email,
		  phone,
		  submitted,
		  formIsValid,
		  submitForm,
      };
   },
};

</script>
<template>
<div class="surface flex justify-content-center" style="background: transparent;border: none;">
<div style="margin-top:30px">
				<h2 class="text-900 font-normal mb-2 text-primary" style="text-align:center">
					Haz que los clientes te encuentren en cualquier momento
				</h2>
			</div>
	</div>	
<div class="surface flex justify-content-center">
			<div class="grid grid-nogutter text-800" style="max-width: 1140px;margin: 0px auto;align-items: center;">
                <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                    <img src="/images/asistencia-pagina-web.svg" alt="Image" class="md:ml-auto block md:h-full" style="width:100%; padding-top: 50px;" >
                </div>
                <div class="col-12 md:col-6 overflow-hidden">
                    <div class="card p-fluid">
                             <form>
                                  <h5>Causa impacto con tu nuevo sitio y crece tu negocio</h5>
                                  <div class="field">
                                    <label for="name">Nombre</label>
                                    <input v-model="name" id="name" class="p-inputtext p-component" type="text" required>
                                  </div>
                                  <div class="field">
                                    <label for="email">E-mail</label>
                                    <input v-model="email" id="email" class="p-inputtext p-component" type="text" required>
                                  </div>
                                  <div class="field">
                                    <label for="phone">Celular con whatsapp</label>
                                    <input v-model="phone" id="phone" class="p-inputtext p-component" type="text" required>
                                  </div>
                                  <Button v-if="submitted" label="Enviado" @click="addMessage('success')" class="p-button-success mr-2" />
                                  <!-- Do not show the button if the form has been submitted -->
                                  <Button v-if="!submitted" @click.prevent="submitForm" :disabled="!formIsValid">Quiero que me contacten</Button>
                            </form>
                        </div>
                </div>
             </div>
	</div>
<div class="surface flex justify-content-center">
<div class="py-4 px-4 mx-0 mt-8 lg:mx-8">
                <div class="grid justify-content-between">
                    <div class="col-12 md:col-2" style="margin-top: -1.5rem">
                        <a class="flex align-items-center" href="#"> <img src="/images/cobra-white.svg" alt="Sakai Logo" height="80" class="mr-0 lg:mr-2" style="transform: rotateY(180deg);" /><span class="text-900 font-medium text-2xl line-height-3 mr-8">Kobra Marketing</span> </a>
                    </div>
                    <div class="col-12 md:col-10 lg:col-9">
                        <div class="grid text-center md:text-left">
                            <div class="col-12 md:col-3">
                                <a href="https://api.whatsapp.com/send?phone=5215527926439&text=Quiero%20m%C3%A1s%20info%20sobre%20las%20p%C3%A1ginas%20web" class="font-medium line-height-3 text-2xl block cursor-pointer mb-2 text-900"><i class="pi pi-whatsapp"></i>55 2792 6439</a>
                            </div>

                            <div class="col-12 md:col-3 mt-4 md:mt-0">
                                <a href="tel:5527926439" class="font-medium line-height-3 text-2xl block cursor-pointer mb-2 text-900"><i class="pi pi-phone"></i>55 2792 6439</a>
                            </div>

                            <div class="col-12 md:col-6 mt-4 md:mt-0">
                                <a href="mailto:info@kobra-marketing.com" class="font-medium line-height-3 text-2xl block cursor-pointer mb-2 text-900"><i class="pi pi-envelope"></i>info@kobra-marketing.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
	</div>
<a href="https://api.whatsapp.com/send?phone=+525527926439&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sitios%20web" class="float" target="_blank">
	<i class="pi pi-whatsapp" style="font-size: 34px;line-height: 56px;"></i>
</a>      
</template>
	<style>
@media (max-width: 767px) {
	#home{max-width:95%;margin:0 auto;}
  .textkobra-6xl {
    font-size: 26px!important; 
  }
  .pi-check{
    font-size: 22px!important;
  }
  .mobile-hidden{display:none!important}	
}
@media (min-width: 768px) {
	.textkobra-6xl {
    font-size: 3rem!important; 
  }
  .pi-check{
    font-size: 26px!important;
  }
	.mobile-hidden{display:flex!important}
}
	.float{
	position:fixed;
	width:60px;
	height:60px;
	bottom:40px;
	right:40px;
	background-color:#25d366;
	color:#FFF;
	border-radius:50px;
	text-align:center;
  font-size:30px;
	box-shadow: 2px 2px 3px #999;
  z-index:100;
}

.my-float{
	margin-top:16px;
}		
</style>