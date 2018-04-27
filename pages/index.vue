<template>
  <v-content>
    <section>
      <v-parallax src="/hero.jpeg" height="600">
        <v-layout
          column
          align-center
          justify-center
          class="white--text"
        >
          <h1 class="white--text mb-2 display-1 text-xs-center">Brad Ito</h1>
          <div class="subheading mb-3 text-xs-center">
            Technology omnivore. Polyglot Software/Web Developer.
            Lean / Agile / Kanban practitioner.
            Big Data / Data Science architect
          </div>
          <div>
            <v-btn fab href="https://github.com/phlogisticfugu/" title="github">
              <v-icon x-large dark>fab fa-github</v-icon>
            </v-btn>
            <v-btn fab href="https://www.linkedin.com/in/brad-ito/" title="linkedin">
              <v-icon x-large dark>fab fa-linkedin-in</v-icon>
            </v-btn>
            <v-btn fab href="https://twitter.com/phlogisticfugu" title="twitter">
              <v-icon x-large dark>fab fa-twitter</v-icon>
            </v-btn>
          </div>
        </v-layout>
      </v-parallax>
    </section>
  </v-content>
</template>

<script>
export default {
}
</script>
