export default {
  data() {
    return {
      hello: 'hello',
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
      // const prefInfo = prefData.result
      prefData.result.forEach((pref) => this.prefItems.push(pref))
      const populationData = await this.$axios.$get(
        'https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=11362&prefCode=11',
        {
          headers: { 'X-API-KEY': apiKey },
        }
      )
      console.log(populationData.result.data[0].data)
    },
  },
  getCheckStatus() {
    console.log('hello')
  },
}
