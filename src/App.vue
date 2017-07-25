<template>
	<div>
    <head-top></head-top>
		<transition name="router-fade" mode="out-in">
    		<router-view></router-view>
    	</transition>
    </div>
</template>

<script>
  import headTop from './components/header/head'
  export default {
    components:{
      headTop
    }
  }
</script>

<style lang="scss">
  @import './assets/style/common';
	.router-fade-enter-active, .router-fade-leave-active {
	  	transition: opacity .3s;
	}
	.router-fade-enter, .router-fade-leave-active {
	  	opacity: 0;
	}
</style>
