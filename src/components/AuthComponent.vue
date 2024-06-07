<script>
import AuthService from '@/services/AuthService.js';
import axios from "axios";

export default {
  name: "CatalogComponent",
  methods: {
    login() {
      AuthService.login().then(
          response => {
            console.log(response.data);
            console.log(response.data.username);
            console.log(response.data.token);
            // HACE CASO
            localStorage.setItem("token", response.data.token)
            // document.cookie = response.data.cookie;
          }
      );
    },
    currentUser() {
      AuthService.getCurrentUser();
    },
    async viewCatalog() {
      let response = await axios.get('http://localhost:8080/api/v1/products');
      JSON.stringify(response);
    }
  }
}
</script>

<template>
  <Button @click="login" label="Login"/>
  <br><br>
  <Button @click="currentUser" label="CurrentUser"/>
  <br><br>
  <Button @click="viewCatalog" label="Info"/>
</template>
<style scoped>

</style>