export default {
  data() {
    return {
      prefItems: [],
      populationItems: [],
    }
  },
  created() {
    this.getPrefData()
  },
  methods: {
    async getPrefData() {
      // const apiKey = process.env.API_KEY
      const apiKey = 'IcOTaQWbCRGx0Y3uUg1sUmvTzqgJByvUvCzqCXjr'
      const prefData = await this.$axios.$get(
        'https://opendata.resas-portal.go.jp/api/v1/prefectures',
        {
          headers: { 'X-API-KEY': apiKey },
        }
      )
      prefData.result.forEach((pref) => this.prefItems.push(pref))
    },
    async getPopulationData(value, $event) {
      if ($event.target.checked) {
        const apiKey = 'IcOTaQWbCRGx0Y3uUg1sUmvTzqgJByvUvCzqCXjr'
        const populationData = await this.$axios.$get(
          `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${value}`,
          {
            headers: { 'X-API-KEY': apiKey },
          }
        )
       this.populationItems.push(populationData.result.data[0].data)
       console.log(this.populationItems);
      }
    },
  },
}
