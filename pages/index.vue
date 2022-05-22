<template>
  <div class="pref">
    <h1>コーディングテスト</h1>
    <h2>都道府県</h2>
    <div class="pref__list">
      <div
        v-for="(prefItem, index) in prefItems"
        :key="index"
        class="pref__item"
      >
        <input
          :id="`pref-${index}`"
          type="checkbox"
          name="pref"
          @change="getPopulationData(prefItem.prefCode, $event)"
        />
        <label :for="`pref-${index}`">{{ prefItem.prefName }}</label>
      </div>
    </div>
    <div
      v-for="(populationItem, firstIndex) in populationItems"
      :key="firstIndex"
    >
      <div v-for="(item, secondIndex) in populationItem" :key="secondIndex">
        <p>{{ item.year }}年:{{ item.value }}人</p>
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
