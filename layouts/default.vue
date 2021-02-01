<template>
  <div>
    <app-header/>
    <Nuxt keep-alive /> 
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader';
export default {
  components:{
    AppHeader
  }
}
</script>
