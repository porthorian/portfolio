<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
$color-primary-0: #1D201D;  // Main Primary color */
$color-primary-1: #4B6B46;
$color-primary-2: #394937;
$color-primary-3: #263524;
$color-primary-4: #274722;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-primary-1;
}

body {
  background-color: $color-primary-0;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $color-primary-1;

    &.router-link-exact-active {
      color: $color-primary-2;
    }
  }
}
</style>
