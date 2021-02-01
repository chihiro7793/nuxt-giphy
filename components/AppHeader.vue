<template>
  <div class="container">
    <ul class="nav nav-tabs">
      <nuxt-link tag="li" to="/" active-class="active" exact>
        <a class="nav-link">Home</a>
      </nuxt-link >
      <nuxt-link  tag="li" active-class="active" to="/bookmarks">
        <a class="nav-link">Bookmarks</a>
      </nuxt-link >
    </ul>
  </div>
</template>

<style>
.nav-link {
  color: whitesmoke;
  background: black;
  border:none !important;
}
.nav-link:hover{
  color: black;
  background:  rgb(245, 245, 100);
}
.active .nav-link {
  color: black;
  background: whitesmoke;
}
</style>
