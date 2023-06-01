$(function () {
  echarts_1();
  echarts_2();
  echarts_3();
  function echarts_1() {
    var myChart = echarts.init(document.getElementById("echart1"));
    let angle = 0; //角度，用来做简单的动画效果的
    let value = 80;
    var timerId;
    var option = {
      // backgroundColor: "#000E1A",
      title: {
        text: "{a|" + value + "}{c|%}",
        x: "center",
        y: "center",
        textStyle: {
          rich: {
            a: {
              fontSize: 48,
              color: "#29EEF3",
            },

            c: {
              fontSize: 20,
              color: "#ffffff",
              // padding: [5,0]
            },
          },
        },
      },

      series: [
        // 紫色
        {
          name: "ring5",
          type: "custom",
          coordinateSystem: "none",
          renderItem: function (params, api) {
            return {
              type: "arc",
              shape: {
                cx: api.getWidth() / 2,
                cy: api.getHeight() / 2,
                r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.6,
                startAngle: ((0 + angle) * Math.PI) / 180,
                endAngle: ((90 + angle) * Math.PI) / 180,
              },
              style: {
                stroke: "#8383FA",
                fill: "transparent",
                lineWidth: 1.5,
              },
              silent: true,
            };
          },
          data: [0],
        },
        {
          name: "ring5", //紫点
          type: "custom",
          coordinateSystem: "none",
          renderItem: function (params, api) {
            let x0 = api.getWidth() / 2;
            let y0 = api.getHeight() / 2;
            let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.6;
            let point = getCirlPoint(x0, y0, r, 90 + angle);
            return {
              type: "circle",
              shape: {
                cx: point.x,
                cy: point.y,
                r: 4,
              },
              style: {
                stroke: "#8450F9", //绿
                fill: "#8450F9",
              },
              silent: true,
            };
          },
          data: [0],
        },
        // 蓝色

        {
          name: "ring5",
          type: "custom",
          coordinateSystem: "none",
          renderItem: function (params, api) {
            return {
              type: "arc",
              shape: {
                cx: api.getWidth() / 2,
                cy: api.getHeight() / 2,
                r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.6,
                startAngle: ((180 + angle) * Math.PI) / 180,
                endAngle: ((270 + angle) * Math.PI) / 180,
              },
              style: {
                stroke: "#4386FA",
                fill: "transparent",
                lineWidth: 1.5,
              },
              silent: true,
            };
          },
          data: [0],
        },
        {
          name: "ring5", // 蓝色
          type: "custom",
          coordinateSystem: "none",
          renderItem: function (params, api) {
            let x0 = api.getWidth() / 2;
            let y0 = api.getHeight() / 2;
            let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.6;
            let point = getCirlPoint(x0, y0, r, 180 + angle);
            return {
              type: "circle",
              shape: {
                cx: point.x,
                cy: point.y,
                r: 4,
              },
              style: {
                stroke: "#4386FA", //绿
                fill: "#4386FA",
              },
              silent: true,
            };
          },
          data: [0],
        },

        {
          name: "ring5",
          type: "custom",
          coordinateSystem: "none",
          renderItem: function (params, api) {
            return {
              type: "arc",
              shape: {
                cx: api.getWidth() / 2,
                cy: api.getHeight() / 2,
                r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65,
                startAngle: ((270 + -angle) * Math.PI) / 180,
                endAngle: ((40 + -angle) * Math.PI) / 180,
              },
              style: {
                stroke: "#0CD3DB",
                fill: "transparent",
                lineWidth: 1.5,
              },
              silent: true,
            };
          },
          data: [0],
        },
        // 橘色

        {
          name: "ring5",
          type: "custom",
          coordinateSystem: "none",
          renderItem: function (params, api) {
            return {
              type: "arc",
              shape: {
                cx: api.getWidth() / 2,
                cy: api.getHeight() / 2,
                r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65,
                startAngle: ((90 + -angle) * Math.PI) / 180,
                endAngle: ((220 + -angle) * Math.PI) / 180,
              },
              style: {
                stroke: "#FF8E89",
                fill: "transparent",
                lineWidth: 1.5,
              },
              silent: true,
            };
          },
          data: [0],
        },
        {
          name: "ring5",
          type: "custom",
          coordinateSystem: "none",
          renderItem: function (params, api) {
            let x0 = api.getWidth() / 2;
            let y0 = api.getHeight() / 2;
            let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65;
            let point = getCirlPoint(x0, y0, r, 90 + -angle);
            return {
              type: "circle",
              shape: {
                cx: point.x,
                cy: point.y,
                r: 4,
              },
              style: {
                stroke: "#FF8E89", //粉
                fill: "#FF8E89",
              },
              silent: true,
            };
          },
          data: [0],
        },
        {
          name: "ring5", //绿点
          type: "custom",
          coordinateSystem: "none",
          renderItem: function (params, api) {
            let x0 = api.getWidth() / 2;
            let y0 = api.getHeight() / 2;
            let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65;
            let point = getCirlPoint(x0, y0, r, 270 + -angle);
            return {
              type: "circle",
              shape: {
                cx: point.x,
                cy: point.y,
                r: 4,
              },
              style: {
                stroke: "#0CD3DB", //绿
                fill: "#0CD3DB",
              },
              silent: true,
            };
          },
          data: [0],
        },
        {
          name: "吃猪肉频率",
          type: "pie",
          radius: ["52%", "40%"],
          silent: true,
          clockwise: true,
          startAngle: 90,
          z: 0,
          zlevel: 0,
          label: {
            normal: {
              position: "center",
            },
          },
          data: [
            {
              value: value,
              name: "",
              itemStyle: {
                normal: {
                  color: {
                    // 完成的圆环的颜色
                    colorStops: [
                      {
                        offset: 0,
                        color: "#A098FC", // 0% 处的颜色
                      },
                      {
                        offset: 0.3,
                        color: "#4386FA", // 0% 处的颜色
                      },
                      {
                        offset: 0.6,
                        color: "#4FADFD", // 0% 处的颜色
                      },
                      {
                        offset: 0.8,
                        color: "#0CD3DB", // 100% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "#646CF9", // 100% 处的颜色
                      },
                    ],
                  },
                },
              },
            },
            {
              value: 100 - value,
              name: "",
              label: {
                normal: {
                  show: false,
                },
              },
              itemStyle: {
                normal: {
                  color: "#173164",
                },
              },
            },
          ],
        },
        {
          name: "吃猪肉频率",
          type: "pie",
          radius: ["32%", "35%"],
          silent: true,
          clockwise: true,
          startAngle: 270,
          z: 0,
          zlevel: 0,
          label: {
            normal: {
              position: "center",
            },
          },
          data: [
            {
              value: value,
              name: "",
              itemStyle: {
                normal: {
                  color: {
                    // 完成的圆环的颜色
                    colorStops: [
                      {
                        offset: 0,
                        color: "#00EDF3", // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "#646CF9", // 100% 处的颜色
                      },
                    ],
                  },
                },
              },
            },
            {
              value: 100 - value,
              name: "",
              label: {
                normal: {
                  show: false,
                },
              },
              itemStyle: {
                normal: {
                  color: "#173164",
                },
              },
            },
          ],
        },
      ],
    };

    //获取圆上面某点的坐标(x0,y0表示坐标，r半径，angle角度)
    function getCirlPoint(x0, y0, r, angle) {
      let x1 = x0 + r * Math.cos((angle * Math.PI) / 180);
      let y1 = y0 + r * Math.sin((angle * Math.PI) / 180);
      return {
        x: x1,
        y: y1,
      };
    }

    function draw() {
      angle = angle + 3;
      myChart.setOption(option, true);
      // window.requestAnimationFrame(draw);
    }
    init();
    function init() {
      myChart.setOption(option, true);
      setTimeout(function () {
        if (timerId) {
          clearInterval(timerId);
        }
        timerId = setInterval(function () {
          //用setInterval做动画感觉有问题
          draw();
        }, 40);
      }, 500);
    }
    // if (timerId) {
    //   clearInterval(timerId);
    // }
    // timerId = setInterval(function () {
    //   用setInterval做动画感觉有问题
    //   draw();
    // }, 100);
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  function echarts_2() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("echart2"));
    var colorList = [
      [
        "#ff7f50",
        "#87cefa",
        "#da70d6",
        "#32cd32",
        "#6495ed",
        "#ff69b4",
        "#ba55d3",
        "#cd5c5c",
        "#ffa500",
        "#40e0d0",
        "#1e90ff",
        "#ff6347",
        "#7b68ee",
        "#d0648a",
        "#ffd700",
        "#6b8e23",
        "#4ea397",
        "#3cb371",
        "#b8860b",
        "#7bd9a5",
      ],
      [
        "#ff7f50",
        "#87cefa",
        "#da70d6",
        "#32cd32",
        "#6495ed",
        "#ff69b4",
        "#ba55d3",
        "#cd5c5c",
        "#ffa500",
        "#40e0d0",
        "#1e90ff",
        "#ff6347",
        "#7b68ee",
        "#00fa9a",
        "#ffd700",
        "#6b8e23",
        "#ff00ff",
        "#3cb371",
        "#b8860b",
        "#30e0e0",
      ],
      [
        "#929fff",
        "#9de0ff",
        "#ffa897",
        "#af87fe",
        "#7dc3fe",
        "#bb60b2",
        "#433e7c",
        "#f47a75",
        "#009db2",
        "#024b51",
        "#0780cf",
        "#765005",
        "#e75840",
        "#26ccd8",
        "#3685fe",
        "#9977ef",
        "#f5616f",
        "#f7b13f",
        "#f9e264",
        "#50c48f",
      ],
    ][2];

    var option = {
      // 图表标题
      title: {
        show: true, //显示策略，默认值true,可选为：true（显示） | false（隐藏）
        // text: '"新时代"主题图谱', //主标题文本，'\n'指定换行
        x: "center", // 水平安放位置，默认为左对齐，可选为：
        // 'center' ¦ 'left' ¦ 'right'
        // ¦ {number}（x坐标，单位px）
        y: "bottom", // 垂直安放位置，默认为全图顶端，可选为：
        // 'top' ¦ 'bottom' ¦ 'center'
        // ¦ {number}（y坐标，单位px）
        //textAlign: null          // 水平对齐方式，默认根据x设置自动调整
        // backgroundColor: "rgba(255,255,255,255)",
        borderColor: "#ccc", // 标题边框颜色
        borderWidth: 0, // 标题边框线宽，单位px，默认为0（无边框）
        padding: 5, // 标题内边距，单位px，默认各方向内边距为5，
        // 接受数组分别设定上右下左边距，同css
        itemGap: 10, // 主副标题纵向间隔，单位px，默认为10，
        textStyle: {
          fontSize: 18,
          fontWeight: "bolder",
          color: "#333", // 主标题文字颜色
        },
        subtextStyle: {
          color: "#aaa", // 副标题文字颜色
        },
      },
      // backgroundColor: "#fff",
      tooltip: {},
      animationDurationUpdate: function (idx) {
        // 越往后的数据延迟越大
        return idx * 100;
      },
      animationEasingUpdate: "bounceIn",
      color: ["#fff", "#fff", "#fff"],
      series: [
        {
          type: "graph",
          layout: "force",
          force: {
            repulsion: 500,
            edgeLength: 10,
          },
          zoom: 1.6,
          roam: true,
          label: {
            normal: {
              show: true,
            },
          },
          data: [
            {
              name: "新冠肺炎愈后一般6个月内不会再得",
              value: 2373,
              symbolSize: 48,
              draggable: true,
              itemStyle: {
                normal: {
                  shadowBlur: 100,
                  shadowColor: colorList[0],
                  color: colorList[0],
                },
              },
            },
            {
              name: "女篮两连胜后大喊武汉加油",
              value: 5449,
              symbolSize: 73,
              draggable: true,
              itemStyle: {
                normal: {
                  shadowBlur: 100,
                  shadowColor: colorList[1],
                  color: colorList[1],
                },
              },
            },
            {
              name: "火神山医院开微博",
              value: 2289,
              symbolSize: 67,
              draggable: true,
              itemStyle: {
                normal: {
                  shadowBlur: 100,
                  shadowColor: colorList[2],
                  color: colorList[2],
                },
              },
            },
            {
              name: "医疗队女队员集体理平头和光头",
              value: 2518,
              symbolSize: 50,
              draggable: true,
              itemStyle: {
                normal: {
                  shadowBlur: 100,
                  shadowColor: colorList[3],
                  color: colorList[3],
                },
              },
            },
            {
              name: "缅怀疫情中逝去的人们",
              value: 4730,
              symbolSize: 88,
              draggable: true,
              itemStyle: {
                normal: {
                  shadowBlur: 100,
                  shadowColor: colorList[4],
                  color: colorList[4],
                },
              },
            },
            {
              name: "妨害疫情防控的违法行为",
              value: 1952,
              symbolSize: 55,
              draggable: true,
              itemStyle: {
                normal: {
                  shadowBlur: 100,
                  shadowColor: colorList[5],
                  color: colorList[5],
                },
              },
            },
            {
              name: "66岁重症患者8天快速康复",
              value: 926,
              symbolSize: 70,
              draggable: true,
              itemStyle: {
                normal: {
                  shadowBlur: 100,
                  shadowColor: colorList[6],
                  color: colorList[6],
                },
              },
            },
            {
              name: "别让快递小哥一直等在寒风中",
              value: 4536,
              symbolSize: 67,
              draggable: true,
              itemStyle: {
                normal: {
                  shadowBlur: 100,
                  shadowColor: colorList[7],
                  color: colorList[7],
                },
              },
            },
            {
              name: "湖北以外地区新增病例数连降5天",
              value: 750,
              symbolSize: 47,
              draggable: true,
              itemStyle: {
                normal: {
                  shadowBlur: 100,
                  shadowColor: colorList[8],
                  color: colorList[8],
                },
              },
            },
            {
              name: "女儿写给战疫一线爸爸的信",
              value: 493,
              symbolSize: 82,
              draggable: true,
              itemStyle: {
                normal: {
                  shadowBlur: 100,
                  shadowColor: colorList[9],
                  color: colorList[9],
                },
              },
            },
            {
              name: "青海连续3天无新增病例",
              value: 385,
              symbolSize: 59,
              draggable: true,
              itemStyle: {
                normal: {
                  shadowBlur: 100,
                  shadowColor: colorList[10],
                  color: colorList[10],
                },
              },
            },
            {
              name: "辽宁再派1000名医护人员驰援武汉",
              value: 4960,
              symbolSize: 90,
              draggable: true,
              itemStyle: {
                normal: {
                  shadowBlur: 100,
                  shadowColor: colorList[11],
                  color: colorList[11],
                },
              },
            },
            {
              name: "抗击新型肺炎第一线",
              value: 8694000,
              symbolSize: 134,
              draggable: true,
              itemStyle: {
                normal: {
                  shadowBlur: 100,
                  shadowColor: colorList[12],
                  color: colorList[12],
                },
              },
            },
            {
              name: "12项疫情防控惠民政策",
              value: 5668,
              symbolSize: 75,
              draggable: true,
              itemStyle: {
                normal: {
                  shadowBlur: 100,
                  shadowColor: colorList[13],
                  color: colorList[13],
                },
              },
            },
            {
              name: "战疫一线的别样团圆",
              value: 339,
              symbolSize: 68,
              draggable: true,
              itemStyle: {
                normal: {
                  shadowBlur: 100,
                  shadowColor: colorList[14],
                  color: colorList[14],
                },
              },
            },
            {
              name: "31省区市心理援助热线",
              value: 671,
              symbolSize: 62,
              draggable: true,
              itemStyle: {
                normal: {
                  shadowBlur: 100,
                  shadowColor: colorList[15],
                  color: colorList[15],
                },
              },
            },
            {
              name: "元宵节亮灯为武汉加油",
              value: 27000,
              symbolSize: 114,
              draggable: true,
              itemStyle: {
                normal: {
                  shadowBlur: 100,
                  shadowColor: colorList[16],
                  color: colorList[16],
                },
              },
            },
            {
              name: "抗击新型肺炎我们在行动",
              value: 10777000,
              symbolSize: 130,
              draggable: true,
              itemStyle: {
                normal: {
                  shadowBlur: 100,
                  shadowColor: colorList[17],
                  color: colorList[17],
                },
              },
            },
            {
              name: "疫情中的逆行者",
              value: 92000,
              symbolSize: 123,
              draggable: true,
              itemStyle: {
                normal: {
                  shadowBlur: 100,
                  shadowColor: colorList[18],
                  color: colorList[18],
                },
              },
            },
            {
              name: "一张图看懂新冠肺炎",
              value: 20000,
              symbolSize: 141,
              draggable: true,
              itemStyle: {
                normal: {
                  shadowBlur: 100,
                  shadowColor: colorList[19],
                  color: colorList[19],
                },
              },
            },
          ],
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
    var data = [
      {
        name: "姓名1",
        value: (Math.random() * 10).toFixed(0),
        sum: 10,
      },
      {
        name: "姓名2",
        value: (Math.random() * 10).toFixed(0),
        sum: 10,
      },
      {
        name: "姓名3",
        value: (Math.random() * 10).toFixed(0),
        sum: 10,
      },
      {
        name: "姓名4",
        value: (Math.random() * 10).toFixed(0),
        sum: 10,
      },
      {
        name: "姓名5",
        value: (Math.random() * 10).toFixed(0),
        sum: 10,
      },
      {
        name: "姓名6",
        value: (Math.random() * 10).toFixed(0),
        sum: 10,
      },
    ];
    getArrByKey = (data, k) => {
      let key = k || "value";
      let res = [];
      if (data) {
        data.forEach(function (t) {
          res.push(t[key]);
        });
      }
      return res;
    };
    var opt = {
      index: 0,
    };
    color = ["#FC619D", "#FF904D", "#48BFE3"];
    data = data.sort((a, b) => {
      return b.value - a.value;
    });
    var option = {
      grid: {
        top: "2%",
        bottom: -15,
        right: 10,
        left: -40,
        containLabel: true,
      },
      xAxis: {
        show: false,
      },
      yAxis: [
        {
          triggerEvent: true,
          show: true,
          inverse: true,
          data: getArrByKey(data, "name"),
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            interval: 0,
            color: "#FFFFFF",
            align: "left",
            margin: 80,
            fontSize: 12,
            formatter: function (value, index) {
              if (opt.index === 0 && index < 3) {
                return (
                  "{idx" + index + "|" + (1 + index) + "} {title|" + value + "}"
                );
              } else if (opt.index !== 0 && index + opt.index < 9) {
                return (
                  "{idx|0" + (1 + index + opt.index) + "} {title|" + value + "}"
                );
              } else {
                return (
                  "{idx|" + (1 + index + opt.index) + "} {title|" + value + "}"
                );
              }
            },
            rich: {
              idx0: {
                color: "#FB375E",
                backgroundColor: "#FFE8EC",
                borderRadius: 100,
                padding: [5, 8],
              },
              idx1: {
                color: "#FF9023",
                backgroundColor: "#FFEACF",
                borderRadius: 100,
                padding: [5, 8],
              },
              idx2: {
                color: "#01B599",
                backgroundColor: "#E1F7F3",
                borderRadius: 100,
                padding: [5, 8],
              },
              idx: {
                color: "#FFFFFF",
                borderRadius: 100,
                padding: [5, 8],
              },
              title: {
                width: 165,
              },
            },
          },
        },
        {
          triggerEvent: true,
          show: true,
          inverse: true,
          data: getArrByKey(data, "name"),
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            interval: 0,
            color: "#FFFFFF",
            align: "left",
            margin: 20,
            fontSize: 12,
            formatter: function (value, index) {
              return "正确数：" + data[index].value;
            },
          },
        },
      ],
      series: [
        {
          name: "条",
          type: "bar",
          yAxisIndex: 0,
          data: data,
          barWidth: 10,
          itemStyle: {
            color: (val) => {
              if (val.dataIndex < 3 && opt.index === 0) {
                return color[val.dataIndex];
              } else {
                return "#1990FF";
              }
            },
            barBorderRadius: 30,
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
