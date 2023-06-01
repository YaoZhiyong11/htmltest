$(function () {
  echarts_1();
  // echarts_2();
  echarts_3();
  function echarts_1() {
    var myChart = echarts.init(document.getElementById("echart1"));
    //清楚画布
    myChart.clear();
    var xAxisData = [];
    var data = [];
    var data2 = [];
    for (var i = 0; i < 80; i++) {
      xAxisData.push(i);
      data.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 25);
      data2.push((Math.sin(i / 5) * (i / 5 + 10) + i / 6) * 31);
    }
    option = {
      // backgroundColor: "#08263a",
      grid: {
        top: "2%",
        bottom: 0,
        right: 30,
        left: 30,
        containLabel: true,
      },
      xAxis: [
        {
          show: false,
          data: xAxisData,
        },
        {
          show: false,
          data: xAxisData,
        },
      ],
      visualMap: {
        show: false,
        min: 0,
        max: 50,
        dimension: 0,
        inRange: {
          color: [
            "#6002D9",
            "#0094FF",
            "#b1cfa5",
            "#f5d69f",
            "#FF5C5C",
            "#C625FF",
          ],
        },
      },
      yAxis: {
        axisLine: {
          show: false,
        },
        axisLabel: {
          margin: 80,
          textStyle: {
            color: "#4a657a",
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "#08263f",
          },
        },
        axisTick: {
          show: false,
        },
      },
      series: [
        {
          name: "back",
          type: "bar",
          data: data2,
          z: 1,
          itemStyle: {
            normal: {
              opacity: 0.4,
              barBorderRadius: 5,
              shadowBlur: 3,
              shadowColor: "#111",
              barBorderRadius: [10, 10, 10, 10],
            },
          },
        },
        {
          name: "Simulate Shadow",
          type: "line",
          data: data,
          z: 2,
          showSymbol: false,
          animationDelay: 0,
          animationEasing: "linear",
          animationDuration: 1200,
          lineStyle: {
            normal: {
              color: "transparent",
            },
          },
          areaStyle: {
            normal: {
              color: "#08263a",
              shadowBlur: 50,
              shadowColor: "#000",
            },
          },
        },
        {
          name: "front",
          type: "bar",
          data: data,
          xAxisIndex: 1,
          z: 3,
          itemStyle: {
            normal: {
              barBorderRadius: 5,
              barBorderRadius: [10, 10, 10, 10],
            },
          },
        },
      ],
      animationEasing: "elasticOut",
      animationEasingUpdate: "elasticOut",
      animationDelay: function (idx) {
        return idx * 20;
      },
      animationDelayUpdate: function (idx) {
        return idx * 20;
      },
    };

    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  setInterval(echarts_1, 20000); //刷新图表
  function echarts_2() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("echart2"));
    var value = 0.88;
    var colorScore = value * 100;
    var colorList = [];
    var textcolor = "";
    if (colorScore >= 90) {
      let color1 = "rgb(45,224,135)";
      let color2 = "rgb(74,227,141)";
      textcolor = "rgb(45,224,135)";
      colorList.push(color1);
      colorList.push(color2);
    } else if (colorScore >= 80 && colorScore < 90) {
      let color1 = "rgb(41,145,235)";
      let color2 = "rgb(0,137,255)";
      textcolor = "rgb(41,145,235)";
      colorList.push(color1);
      colorList.push(color2);
    } else if (colorScore >= 60 && colorScore < 80) {
      let color1 = "rgb(219,185,246)";
      let color2 = "rgb(253,208,0)";
      textcolor = "rgb(219,185,246)";
      colorList.push(color1);
      colorList.push(color2);
    } else if (colorScore < 60) {
      let color1 = "rgb(207,74,84)";
      let color2 = "rgb(243,17,34)";
      textcolor = "rgb(207,74,84)";
      colorList.push(color1);
      colorList.push(color2);
    }
    var data = [];
    data.push(value);
    data.push(value);
    data.push(value);
    data.push(value);
    option = {
      backgroundColor: "#fff",
      /* title:{
					top: '33%',
					left: 'center',
					text: '安全状态',
					color:'red',
					textStyle: {
						color: 'rgba(0, 0, 0, 0.45)',
						fontWeight: 'normal',
						fontSize: 14
					},
					subtext: (value * 100) + '%',
					subtextStyle: {
						color: 'rgba(0, 0, 0, 0.85)',
						fontSize: 18,
					}
				}, */
      series: [
        {
          type: "liquidFill", //水球echarts-liquidfill.min.js
          radius: "80%",
          center: ["50%", "40%"],
          data: data,
          backgroundStyle: {
            color: "#fff",
          },
          outline: {
            show: true, //是否显示轮廓 布尔值
            borderDistance: 2, //外部轮廓与图表的距离 数字
            itemStyle: {
              borderColor: "#edf2f6", //边框的颜色
              borderWidth: 1, //边框的宽度
            },
          },
          color: [...colorList],
          label: {
            fontSize: 50,
            color: textcolor,
          },
          /* color: [  //color一定要是个数组 ，每一项对应一个波浪，可以给每个波浪单独配置颜色
					  {
						type: "linear",
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [
						  {
							offset: 1,
							color: "rgba(255,255,255,1)"
						  },
						  {
							offset: 0,
							color: "rgba(103,205,251,1)"
						  }
						],
						globalCoord: false
					  }], */
        },
      ],
    };

    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  function echarts_3() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("echart3"));
    var option = {
      title: {
        text: "2021时间使用情况",
        textStyle: {
          color: "#FFFFFF",
          fontWeight: "800",
          fontSize: `25`,
        },
        subtextStyle: {
          color: "#000",
          fontSize: 20,
        },
        left: "15%",
        top: "5%",
      },
      // backgroundColor: "rgba(180,200,200,0.2)",
      series: [
        {
          type: "liquidFill",
          data: [0.42, 0.35, 0.25, 0.14],
          radius: "80%",
          outline: {
            show: false,
          },
          center: ["50%", "60%"],
          backgroundStyle: {
            borderColor: "#156ACF",
            borderWidth: 1,
            shadowColor: "rgba(0, 0, 0, 0.4)",
            shadowBlur: 25,
          },
          shape:
            "path://M367.855,428.202c-3.674-1.385-7.452-1.966-11.146-1.794c0.659-2.922,0.844-5.85,0.58-8.719 c-0.937-10.407-7.663-19.864-18.063-23.834c-10.697-4.043-22.298-1.168-29.902,6.403c3.015,0.026,6.074,0.594,9.035,1.728 c13.626,5.151,20.465,20.379,15.32,34.004c-1.905,5.02-5.177,9.115-9.22,12.05c-6.951,4.992-16.19,6.536-24.777,3.271 c-13.625-5.137-20.471-20.371-15.32-34.004c0.673-1.768,1.523-3.423,2.526-4.992h-0.014c0,0,0,0,0,0.014 c4.386-6.853,8.145-14.279,11.146-22.187c23.294-61.505-7.689-130.278-69.215-153.579c-61.532-23.293-130.279,7.69-153.579,69.202 c-6.371,16.785-8.679,34.097-7.426,50.901c0.026,0.554,0.079,1.121,0.132,1.688c4.973,57.107,41.767,109.148,98.945,130.793 c58.162,22.008,121.303,6.529,162.839-34.465c7.103-6.893,17.826-9.444,27.679-5.719c11.858,4.491,18.565,16.6,16.719,28.643 c4.438-3.126,8.033-7.564,10.117-13.045C389.751,449.992,382.411,433.709,367.855,428.202z",
          label: {
            position: ["40%", "55%"],
            formatter: function () {
              return "38%\n\n\n62%";
            },
            fontSize: 25,
            color: "#D94854",
          },
        },
      ],
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
});
