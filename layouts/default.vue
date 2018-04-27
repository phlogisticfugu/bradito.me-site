<template>
  <v-app>
    <v-toolbar dark>
      <v-btn to="/" icon>
        <v-icon>home</v-icon>
      </v-btn>
      <v-toolbar-items>
        <v-btn to="/about" flat>About</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <nuxt/>
    <v-footer dark app>
      <v-spacer/>
      <span class="white--text">&copy; {{ current_year }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        current_year: new Date().getFullYear()
      }
    }
  }
</script>

