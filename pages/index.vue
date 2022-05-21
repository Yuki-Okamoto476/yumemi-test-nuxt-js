<template>
  <div class="pref">
    <div class="pref__list">
      <div
        v-for="(prefItem, index) in prefItems"
        :key="index"
        class="pref__item"
      >
        <input id="pref" type="checkbox" name="pref" @click="getCheckStatus" />
        <label for="pref">{{ prefItem.prefName }}</label>
      </div>
    </div>
  </div>
</template>

<script lang="js" src="@/pages/index.js" />
<style scoped>
.pref__item {
  display: inline-block;
}
</style>
