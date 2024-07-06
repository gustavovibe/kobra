<script setup>
	import Button from 'primevue/button';
</script>
<template>
<div class="surface flex justify-content-center">
	<div style="max-width:1140px;margin:50px auto;text-align:center">
				<h2 class="text-900 font-normal mb-2 text-primary" style="text-align:center">Empieza a generar dinero con tu sitio web</h2>
                <span class="text-600 text-2xl" style="text-align:center;margin: 15px auto;display: block;">¿Cómo Trabajamos?</span>
				<div class="card">
					<div class="grid">
						<div class="col-12 md:col-4">
							<Button class="w-4rem h-3rem p-0" severity="help" rounded outlined label="1"/>
							<h3 class="text-primary">Asesoria</h3>
							<img src="/images/asesoria-pagina-web.svg" style="width:90%;margin:0 auto" />
						</div>
						<div class="col-12 md:col-4">
							<Button class="w-4rem h-3rem p-0" severity="help" rounded outlined label="2"/>
							<h3 class="text-primary">Desarrollo del sitio web</h3>
							<img src="/images/cotizar-sitio-web.svg" style="width:90%;margin:0 auto" />
						</div>
						<div class="col-12 md:col-4">
						    <Button class="w-4rem h-3rem p-0" severity="help" rounded outlined label="3"/>
							<h3 class="text-primary">Publicidad</h3>
							<img src="/images/crecer-pagina-web.svg" style="width:90%;margin:0 auto" />
						</div>
					</div>
				</div>
	</div>
	</div>
</template>
