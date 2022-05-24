export default {
  data() {
    return {
      prefItems: [],
      chartOptions: {
        series: [],
        xAxis: {
          categories: [
            1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010,
            2015, 2020, 2025, 2030, 2035, 2040, 2045,
          ],
          title: {
            text: '年',
          },
        },
        yAxis: {
          title: {
            text: '人口数',
          },
        },
        title: {
          text: '都道府県別人口推移',
        },
        credits: {
          enabled: false,
        },
      },
    }
  },
  created() {
    this.getPrefData()
  },
  methods: {
    async getPrefData() {
      // const apiKey = process.env.API_KEY
      const apiKey = 'IcOTaQWbCRGx0Y3uUg1sUmvTzqgJByvUvCzqCXjr'
      const requestUrl = 'https://opendata.resas-portal.go.jp/api/v1/prefectures'
      const config = {
        headers: { 'X-API-KEY': apiKey },
        timeout: 30000,
        params: {
          cache: new Date().getTime()
        },
      }
      const prefData = await this.$axios.$get(requestUrl, config)
      prefData.result.map((pref) => this.prefItems.push(pref))
    },
    async createPopulationGraph(value, $event) {
      const matchedPref = this.prefItems.find((item) => item.prefCode === value)
      if ($event.target.checked) {
        const apiKey = 'IcOTaQWbCRGx0Y3uUg1sUmvTzqgJByvUvCzqCXjr'
        const requestUrl = `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${value}`
        const config = {
          headers: { 'X-API-KEY': apiKey },
          timeout: 30000,
          params: {
            cache: new Date().getTime()
          },
        }
        const populationData = await this.$axios.$get(requestUrl, config)
        const result = populationData.result.data[0].data
        const resultArray = []
        for (let i = 0; i < result.length; i++) {
          resultArray.push(result[i].value)
        }
        this.chartOptions.series.push({
          data: resultArray,
          name: matchedPref.prefName,
        })
      } else {
        const filteredOption = this.chartOptions.series.filter(
          (el) => el.name === matchedPref.prefName
        )
        this.chartOptions.series = this.chartOptions.series.filter((el) => {
          return !filteredOption.includes(el)
        })
      }
    },
  },
}
