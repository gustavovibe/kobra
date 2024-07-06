<template>
  <div>
	<Background/>
	<Header/>  
    <router-view></router-view>
	<Footer/>  
  </div>
</template>

<script>
import Background from './components/Background.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';	
export default {
  components: {
	Background,
	Header,
	Footer,  
  }
};
</script>