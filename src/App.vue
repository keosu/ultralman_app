<template>
  <div ref="chart" id="chart" style="position: fixed;
    top: 0;
    left: -5;
    width: 100%;
    height: 100%;
    z-index: 999;
    background-color: #3a3939;"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted, ref } from "vue";
import * as data from "./relationship"

// 一进来就调用
onMounted(() => {
  init()
})

const chart = ref();
const init = () => {
  const myChart = echarts.init(chart.value);
  let option = {
    title: { text: '人民的名义关系图谱' },
    tooltip: {
      formatter: function (x) {
        return x.data.des;
      }
    },
    series: [
      {
        type: 'graph',
        layout: 'force',
        symbolSize: 80,
        roam: true,
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [4, 10],
        edgeLabel: {
          normal: {
            show: true,
            formatter: function (x) {
              return x.data.name;
            },
            textStyle: {
              fontSize: 20
            }
          }
        },
        force: {
          repulsion: 2500,
          edgeLength: [10, 50]
        },
        draggable: true,
        itemStyle: {
          normal: {
            color: '#4b565b'
          }
        },
        lineStyle: {
          normal: {
            width: 2,
            color: '#229922'

          }
        },
        label: {
          normal: {
            show: true,
            textStyle: {
            }
          }
        },
        data: data.x.data,
        links: data.x.links
      }
    ]
  };
  myChart.setOption(option)
}
</script>

<style>
html {
  height: 100%;
}

body {
  height: 100%;
  display: flex;
}

.chart {
  position: fixed;
  top: 0;
  left: -5;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: #3a3939;
}
</style> 