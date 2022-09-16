<template>
    <div class="header" style="background-image:linear-gradient(#c9ffd8, #ffffff);">
        <router-link style="font-size: 15px; padding-left: 5px; text-decoration: none; cursor: pointer;"
                     :to="{ name: 'home'}">
            <h1>[ The Greenhouse ]</h1>
        </router-link>
        <h2>Illustrating the energy cost of a connected, smarter world</h2>
    </div>
    <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<style scoped>
    a {all:unset;}
</style>
