<template>
  <v-scale-transition v-if="active">
    <div class="style">
      <v-row class="mt-5" align="center" justify="center">
        <v-col cols="6">
          <v-row justify="center">
            <v-alert
              width="max-content"
              dense
              dismissible
              elevation="3"
              prominent
              transition="scale-transition"
              :type="type"
            >
              <v-row align="center">
                <v-col class="grow ml-10">
                  {{ text }}
                </v-col>
              </v-row>
            </v-alert>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </v-scale-transition>
</template>

<script>
export default {
  name: "Alert",
  props: ["text", "active", "type"],
};
</script>

<style>
.style {
  position: fixed;
  height: 20px;
  width: 100%;

  z-index: 99999;
}

.v-alert--prominent .v-alert__icon::after {
  opacity: 0 !important;
}
</style>
