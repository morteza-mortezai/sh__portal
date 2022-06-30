<template>
  <!-- <v-app id="inspire">
    <v-app-bar app elevation="0">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <template> </template>
    </v-app-bar> -->

  <!-- <v-navigation-drawer absolute right v-model="drawer" class="mt-0">
      <v-list
        nav
        dense
        class="pa-0"
        v-for="menu in adminPanelMenus"
        :key="menu.text"
      >
        <v-list-item-group v-model="group" active-class="--text text--accent-4">
          <v-list-item
            link
            :to="{ name: menu.route }"
            v-if="menu.children === undefined"
          >
            <v-list-item-icon class="me-3">
              <v-icon> {{ menu.icon }} </v-icon>
            </v-list-item-icon>
            <v-list-item-content class="font-weight-light text-caption">
              {{ menu.text }}
            </v-list-item-content>
          </v-list-item>

          <v-list-group v-if="menu.children !== undefined">
            <template v-slot:activator>
              <v-row no-gutters>
                <v-col cols="auto">
                  <v-icon>
                    {{ menu.icon }}
                  </v-icon>
                </v-col>
                <v-col class="text-right ms-3">
                  <span class="text-medium">{{ menu.text }}</span>
                </v-col>
              </v-row>
            </template>
            <v-list-item
              v-for="childMenu in menu.children"
              link
              :to="{ name: childMenu.route }"
              :key="childMenu.text"
            >
              <v-list-item-icon class="me-3">
                <v-icon> {{ childMenu.icon }} </v-icon>
              </v-list-item-icon>
              <v-list-item-content class="font-weight-light text--caption">
                {{ childMenu.text }}
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer> -->

  <div style="margin: 0px; padding: 0px; overflow: hidden">
    <iframe
      src="http://192.168.0.57/map/selector-map/?selectMode=1&mode=portal"
      frameborder="0"
      style="
        overflow: hidden;
        overflow-x: hidden;
        overflow-y: hidden;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
      "
      height="100%"
      width="100%"
    ></iframe>
  </div>
  <!-- </v-app> -->
</template>

<script></script>
<style scoped>
.videoWrapper {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 25px;
  height: 0;
}
.videoWrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
/* <a :href="'/job/' + r.id"> */
</style>
