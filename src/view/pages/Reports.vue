<template>
  <div class="reports">
    <h2 class="mb-5">Reports</h2>
    <div class="row">
      <div
        class="col-12 col-sm-6"
        v-for="(chart, chartIndex) in charts"
        :key="chartIndex"
      >
        <apexchart
          :type="chart.type"
          height="380"
          :options="chart.data.chartOptions"
          :series="chart.data.series"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script>
// import data from "@/products.json";
export default {
  data() {
    return {
      data: {

          charts: [
            {
              name: "percentage chart",
              type: "pie",
              data: {
                series: [44, 55, 13, 43, 22],
                chartOptions: {
                  chart: {
                    width: 380,
                    type: "pie",
                  },
                  labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
                  responsive: [
                    {
                      breakpoint: 480,
                      options: {
                        chart: {
                          width: 200,
                        },
                        legend: {
                          position: "bottom",
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              name: "percentage chart",
              type: "pie",
              data: {
                series: [44, 55, 13, 43, 22],
                chartOptions: {
                  chart: {
                    width: 380,
                    type: "pie",
                  },
                  labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
                  responsive: [
                    {
                      breakpoint: 480,
                      options: {
                        chart: {
                          width: 200,
                        },
                        legend: {
                          position: "bottom",
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              name: "reports chart",
              type: "bar",
              data: {
                series: [
                  {
                    name: "Inflation",
                    data: [
                      2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5,
                      0.2,
                    ],
                  },
                ],
                chartOptions: {
                  chart: {
                    height: 350,
                    type: "bar",
                  },
                  plotOptions: {
                    bar: {
                      borderRadius: 10,
                      dataLabels: {
                        position: "top",
                      },
                    },
                  },
                  dataLabels: {
                    enabled: false,
                    formatter: "function (val) { return val + '%'}",
                  },
                  offsetY: -20,
                  style: {
                    fontSize: "12px",
                    colors: ["#304758"],
                  },
                },
                xaxis: {
                  categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                  ],
                  position: "top",
                  axisBorder: {
                    show: false,
                  },
                  axisTicks: {
                    show: false,
                  },
                  crosshairs: {
                    fill: {
                      type: "gradient",
                      gradient: {
                        colorFrom: "#D8E3F0",
                        colorTo: "#BED1E6",
                        stops: [0, 100],
                        opacityFrom: 0.4,
                        opacityTo: 0.5,
                      },
                    },
                  },
                  tooltip: {
                    enabled: true,
                  },
                },
                yaxis: {
                  axisBorder: {
                    show: false,
                  },
                  axisTicks: {
                    show: false,
                  },
                  labels: {
                    show: false,
                    formatter: "function (val) { return val + '%'}",
                  },
                },
              },
              title: {
                text: "Monthly Inflation in Argentina, 2002",
                floating: true,
                offsetY: 330,
                align: "center",
                style: {
                  color: "#444",
                },
              },
            },
            {
              name: "reports chart",
              type: "bar",
              data: {
                series: [
                  {
                    name: "Inflation",
                    data: [
                      2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5,
                      0.2,
                    ],
                  },
                ],
                chartOptions: {
                  chart: {
                    height: 350,
                    type: "bar",
                  },
                  plotOptions: {
                    bar: {
                      borderRadius: 10,
                      dataLabels: {
                        position: "top",
                      },
                    },
                  },
                  dataLabels: {
                    enabled: false,
                    formatter: "function (val) { return val + '%'}",
                  },
                  offsetY: -20,
                  style: {
                    fontSize: "12px",
                    colors: ["#304758"],
                  },
                },
                xaxis: {
                  categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                  ],
                  position: "top",
                  axisBorder: {
                    show: false,
                  },
                  axisTicks: {
                    show: false,
                  },
                  crosshairs: {
                    fill: {
                      type: "gradient",
                      gradient: {
                        colorFrom: "#D8E3F0",
                        colorTo: "#BED1E6",
                        stops: [0, 100],
                        opacityFrom: 0.4,
                        opacityTo: 0.5,
                      },
                    },
                  },
                  tooltip: {
                    enabled: true,
                  },
                },
                yaxis: {
                  axisBorder: {
                    show: false,
                  },
                  axisTicks: {
                    show: false,
                  },
                  labels: {
                    show: false,
                    formatter: "function (val) { return val + '%'}",
                  },
                },
              },
              title: {
                text: "Monthly Inflation in Argentina, 2002",
                floating: true,
                offsetY: 330,
                align: "center",
                style: {
                  color: "#444",
                },
              },
            },
          ],
      
      },
      charts: [],
    };
  },
  created() {
    this.charts = this.data.charts;
    // console.log(data.charts);
  },
};
</script>
