<script setup>
import { computed } from 'vue';
import Menubar from 'primevue/menubar';
import { ref } from "vue";
import Badge from 'primevue/badge';
import Button from 'primevue/button';	
	
const items = ref([
                 { label: 'Nosotros', 
						 icon: 'pi pi-question', 
						 url:'https://kobra-marketing.com/nosotros' 
				 },
				 { label: 'Cotizar', 
				  icon: 'pi pi-file-edit',
				  target: 'new_blank',
				  url:'https://kobra-marketing.com/cotizar' 
				 },
                 { label: 'Precios', 
				  icon: 'pi pi-dollar',
				  target: 'new_blank',
				  url:'https://kobra-marketing.com/precios' 
				 },
				{
					label: 'Proyectos',
					icon: 'pi pi-images',
					root: true,
					target: 'new_blank',
					url: 'https://kobra-marketing.com/proyectos'
				},
				{
					label: 'Contacto',
					icon: 'pi pi-envelope',
					root: true,
					target: 'new_blank',
					url: 'https://kobra-marketing.com/contacto'
				}
]);	
	
const smoothScroll = (id) => {
    document.querySelector(id).scrollIntoView({
        behavior: 'smooth'
    });
};
</script>	

<template>
 	<div class="surface flex justify-content-center">
		<Menubar :model="items" style="margin-top: 10px;background: transparent;border: none;">
			<template #start>
				  <a class="flex align-items-center" href="https://kobra-marketing.com/"> <img src="/images/cobra-white.svg" alt="Sakai Logo" height="80" class="mr-0 lg:mr-2" /><span class="text-900 font-medium text-2xl line-height-3 mr-8">Kobra Marketing</span> </a>
			</template>
			<template #item="{ item, props, hasSubmenu, root }">
				<a v-ripple class="flex align-items-center text-white" v-bind="props.action" :href="item.url" :target="item.target">
					<span :class="item.icon" />
					<span class="ml-2">{{ item.label }}</span>
					<Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
					<span v-if="item.shortcut" class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">
						{{ item.shortcut }}
					</span>
				<i v-if="hasSubmenu" :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
				</a>
			</template>
			<template #end>
				<div class="align-items-center gap-2 mobile-hidden">
					<a href="https://calendar.app.google/fo1k6oEs5uafJchL9" target="new_blank">
						<Button label="Asesoría Gratis" icon="pi pi-video" severity="help" rounded />
					</a>
				</div>
			</template>
		</Menubar>
	</div>
</template>