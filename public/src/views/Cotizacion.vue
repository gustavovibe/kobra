<template>
  <div>
    <embed style="display:none" :src="pdfPath" type="application/pdf" width="100%" height="600px" />
	  <div class="surface flex justify-content-center">
      	<h2 class="text-900 font-normal mb-2 text-primary" style="margin:30px 0px">Muy pronto te contactaremos para crear tu sitio web</h2>
      </div>
	  <div class="surface flex justify-content-center">
	  <img src="/images/working.svg" style="width:50%;height:auto;margin:0 auto" />
	</div>	  
  </div>
</template>

<script>
	
export default {
  data() {
    return {
      pdfPath: 'https://kobra-marketing.com/cotizacion.pdf',
    };
  },
};
</script>