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
          @change="createPopulationGraph(prefItem.prefCode, $event)"
        />
        <label :for="`pref-${index}`">{{ prefItem.prefName }}</label>
      </div>
    </div>
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script lang="js" src="@/pages/index.js" />
<style lang="scss" src="@/pages/index.scss" scoped />
