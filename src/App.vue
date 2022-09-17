<template>
    <div class="header" style="background-image:linear-gradient(#c9ffd8, #ffffff);">
        <router-link style="font-size: 15px; padding-left: 5px; text-decoration: none; cursor: pointer;"
                     :to="{ name: 'home'}">
            <h1>[ Greenhouse ]</h1>
        </router-link>
        <h2>Showing the cost of a connected, smarter home</h2>
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
    html,
    body {
        height: 100%;
        width: 100%;
        margin-top: -17px;
        margin-left: 0px;
        line-height: 1.5;
    }
    h1 {
        font-family: "Javanese Text", sans-serif;
        font-size: 50px;
        text-shadow: 0px 2px #a0d99c;
    }

    h2 {
        font-family: "Javanese Text", sans-serif;
        text-align: center;
        font-size: 90%;
        text-shadow: 0px 2px #dadada;
        margin-top: -60px;
    }
</style>
