<template>
  <v-content app>
    <v-container fluid fill-height>
      <v-layout justify-center align-center>
        <v-flex text-xs-center>
          <v-tooltip left>
            <v-btn slot="activator" :href="source" icon large 
                   target="_blank">
              <v-icon large>code</v-icon>
            </v-btn>
            <span>Source</span>
          </v-tooltip>
          <v-tooltip right>
            <v-btn slot="activator" icon large href="https://codepen.io/johnjleider/pen/BYqXgr" 
                   target="_blank">
              <v-icon large>mdi-codepen</v-icon>
            </v-btn>
            <span>Codepen</span>
          </v-tooltip>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>
