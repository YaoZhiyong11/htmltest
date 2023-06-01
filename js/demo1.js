//柱状图1
(function () {
  //1.实例化对象
  //   var myChart = echarts.init(document.querySelector(".middle"));
  var myChart = echarts.init(document.getElementById("echart3"));
  var option = {
    title: {
      //   text: "浏览器占比变化",
      //   subtext: "纯属虚构",
      //   top: 10,
      //   left: 10,
    },
    tooltip: {
      trigger: "item",
      // backgroundColor: "rgba(0,0,250,0.2)",
    },
    legend: {
      type: "scroll",
      bottom: 10,
      data: (function () {
        var list = [];
        for (var i = 1; i <= 28; i++) {
          list.push(i + 2000 + "");
        }
        return list;
      })(),
    },
    visualMap: {
      top: "middle",
      right: 10,
      color: ["blue", "cyan"],
      calculable: true,
    },
    radar: {
      indicator: [
        { text: "IE8-", max: 400, color: "white" },
        { text: "IE9+", max: 400, color: "white" },
        { text: "Safari", max: 400, color: "white" },
        { text: "Firefox", max: 400, color: "white" },
        { text: "Chrome", max: 400, color: "white" },
      ],
      center: ["50%", "50%"],
      splitArea: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ["#ffffff"],
          width: 0.5,
        },
      },
    },
    series: (function () {
      var series = [];
      for (var i = 1; i <= 28; i++) {
        series.push({
          name: "浏览器（数据纯属虚构）",
          type: "radar",
          symbol: "none",
          lineStyle: {
            width: 1,
          },
          emphasis: {
            areaStyle: {
              color: "rgba(250,250,250,1)",
            },
          },
          data: [
            {
              value: [
                (40 - i) * 10,
                (38 - i) * 4 + 60,
                i * 5 + 10,
                i * 9,
                (i * i) / 2,
              ],
              //   name: i + 2000 + "",
            },
          ],
        });
      }
      return series;
    })(),
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
(function () {
  //1.实例化对象
  //   var myChart = echarts.init(document.querySelector(".middle"));
  var myChart = echarts.init(document.getElementById("month1"));
  var salvProName = ["一月", "二月", "三月", "四月", "五月"];
  var salvProValue = [1170, 740, 720, 670, 550];
  var salvProMax = []; //背景按最大值
  for (let i = 0; i < salvProValue.length; i++) {
    salvProMax.push(salvProValue[0]);
  }
  option = {
    grid: {
      left: "2%",
      right: "2%",
      bottom: "-12%",
      top: "8%",
      containLabel: true,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "none",
      },
      formatter: function (params) {
        return params[0].name + " : " + params[0].value;
      },
    },
    xAxis: {
      show: false,
      type: "value",
    },
    yAxis: [
      {
        type: "category",
        inverse: true,
        axisLabel: {
          show: true,
          textStyle: {
            color: "#fff",
          },
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        data: salvProName,
      },
      {
        type: "category",
        inverse: true,
        axisTick: "none",
        axisLine: "none",
        show: true,
        axisLabel: {
          textStyle: {
            color: "#ffffff",
            fontSize: "12",
          },
        },
        data: salvProValue,
      },
    ],
    series: [
      {
        name: "值",
        type: "bar",
        zlevel: 1,
        itemStyle: {
          normal: {
            barBorderRadius: 30,
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              {
                offset: 0,
                color: "rgb(57,89,255,1)",
              },
              {
                offset: 1,
                color: "rgb(46,200,207,1)",
              },
            ]),
          },
        },
        barWidth: 10,
        data: salvProValue,
      },
      {
        name: "背景",
        type: "bar",
        barWidth: 10,
        barGap: "-100%",
        data: salvProMax,
        itemStyle: {
          normal: {
            color: "rgba(24,31,68,1)",
            barBorderRadius: 30,
          },
        },
      },
    ],
  };

  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
(function () {
  //1.实例化对象
  //   var myChart = echarts.init(document.querySelector(".middle"));
  var myChart = echarts.init(document.getElementById("rightTable1"));
  const colors = ["#FFD422", "#E323FF"];
  option = {
    color: colors,
    grid: {
      show: false,
      top: "10%",
      right: "0%",
      bottom: "0",
      left: "0%",
    },
    xAxis: [
      {
        show: false,
        data: ["2016-1", "2016-2", "2016-3", "2016-4", "2016-5", "2016-6"],
      },
      {
        show: false,
        data: ["2015-1", "2015-2", "2015-3", "2015-4", "2015-5", "2015-6"],
      },
    ],
    yAxis: [
      {
        show: false,
        type: "value",
      },
    ],
    series: [
      {
        type: "line",
        smooth: true,
        symbolSize: 0,
        data: [2.6, 4, 6, 4, 2.3, 2],
      },
      {
        type: "line",
        smooth: true,
        symbolSize: 0,
        data: [2.5, 5, 2, 5, 3, 2],
      },
    ],
  };

  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

//右边
(function () {
  //1.实例化对象
  //   var myChart = echarts.init(document.querySelector(".middle"));
  var myChart = echarts.init(document.getElementById("Dynamicss"));
  const colors = ["#5470C6", "#EE6666"];
  option = {
    color: colors,
    grid: {
      show: false,
      top: "20%",
      right: "10%",
      bottom: "10%",
      left: "10%",
    },
    xAxis: [
      {
        show: false,
        data: [
          "2016-1",
          "2016-2",
          "2016-3",
          "2016-4",
          "2016-5",
          "2016-6",
          "2016-7",
          "2016-8",
          "2016-9",
          "2016-10",
          "2016-11",
          "2016-12",
        ],
      },
      {
        show: false,
        data: [
          "2015-1",
          "2015-2",
          "2015-3",
          "2015-4",
          "2015-5",
          "2015-6",
          "2015-7",
          "2015-8",
          "2015-9",
          "2015-10",
          "2015-11",
          "2015-12",
        ],
      },
    ],
    yAxis: [
      {
        show: false,
        type: "value",
      },
    ],
    series: [
      {
        type: "line",
        smooth: true,
        symbolSize: 0,
        data: [2.6, 3, 4, 4, 4.5, 5, 3, 5, 3, 3, 4, 2.3],
      },
      {
        type: "line",
        smooth: true,
        symbolSize: 0,
        data: [5, 3, 2, 5, 5, 2, 4, 5, 2, 4, 4, 3],
      },
    ],
  };

  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
