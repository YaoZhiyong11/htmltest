/** 欢迎使用guiPlan,以下代码均由guiPlan软件自动生成，如有疑问添加添加作者微信guiplan或加入学习交流qq群711964722  网站htpp://www.guiplan.com **/
// interfaceCode
var App = {
    name: '',
    mounted() {
        // defaultLoad
        // KeShiHuaDaPingMountedStart

        this.initPie3Chart()
        this.setPie3Chart()
        this.initPie3Chart()
        this.setPie3Chart()
        this.initRadar2Chart()
        this.setRadar2Chart()
        this.initRadar2Chart()
        this.setRadar2Chart()
        this.initRadar2Chart()
        this.setRadar2Chart()
        this.initBar2Chart()
        this.setBar2Chart()
        this.initPie3Chart()
        this.setPie3Chart()
        this.initLine3Chart()
        this.setLine3Chart()
        this.initLine3Chart()
        this.setLine3Chart()
        this.initMyChart();
        this.setMyChart();
        this.initPieChart()
        this.setPieChart()
        this.initPieChart()
        this.setPieChart()
        this.initPie3Chart()
        this.setPie3Chart()
        this.initBar2Chart()
        this.setBar2Chart()
        this.initPieChart()
        this.setPieChart()
        this.initRadarChart()
        this.setRadarChart()
        this.initLineChart()
        this.setLineChart()
        this.initPie3Chart()
        this.setPie3Chart()
        this.initLineChart()
        this.setLineChart()
        this.initLineChart()
        this.setLineChart()
        this.initRadar2Chart()
        this.setRadar2Chart()
        this.initPie3Chart()
        this.setPie3Chart()
        this.initRadar2Chart()
        this.setRadar2Chart()
        this.initPie3Chart()
        this.setPie3Chart()
        this.initPie3Chart()
        this.setPie3Chart()
        this.initLine4Chart()
        this.setLine4Chart()
        // KeShiHuaDaPingMountedEnd

    },
    components: {},
    data() {
        return {
            // insertData
            // KeShiHuaDaPingDataStart

            line4Chart: ''
            // KeShiHuaDaPingDataEnd

        }
    },
    methods: {
        default () {},
        // insertMethod
        // KeShiHuaDaPingMethodStart
        // 设置图表内容
        setLine4Chart(data) {
            if (!data) { // 如果没有参数则用默认参数
                data = {
                    //  backgroundColor: '#00265f',
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    grid: {
                        left: '0%',
                        top: '10px',
                        right: '0%',
                        bottom: '0',
                        containLabel: true
                    },
                    xAxis: [{
                        type: 'category',
                        data: ['1月', '2月', '3月', '4月', '5月', '6月'],
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "rgba(255,255,255,.1)",
                                width: 1,
                                type: "solid"
                            },
                        },
                        axisTick: {
                            show: false,
                        },
                        axisLabel: {
                            interval: 0,
                            // rotate:50,
                            show: true,
                            splitNumber: 5,
                            textStyle: {
                                color: "rgba(255,255,255,.6)",
                                fontSize: '12',
                            },
                        },
                    }],
                    yAxis: [{
                        type: 'value',
                        axisLabel: {
                            //formatter: '{value} %'
                            show: true,
                            textStyle: {
                                color: "rgba(255,255,255,.6)",
                                fontSize: '12',
                            },
                        },
                        axisTick: {
                            show: false,
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "rgba(255,255,255,.1	)",
                                width: 1,
                                type: "solid"
                            },
                        },
                        splitLine: {
                            show: false,
                            lineStyle: {
                                color: "rgba(255,255,255,.1)",
                            }
                        }
                    }],
                    series: [{
                        name: '2017年',
                        type: 'line',
                        //smooth: true,
                        data: [2, 6, 3, 8, 5, 8],

                        itemStyle: {
                            normal: {
                                color: '#2f89cf',
                                opacity: 1,

                                barBorderRadius: 5,
                            }
                        }
                    }]
                }
            }
            this.line4Chart.setOption(data)
        }, // 初始化图表
        initLine4Chart() {
            this.line4Chart = echarts.init(document.querySelector('.line4Chart'));
        }
        // KeShiHuaDaPingMethodEnd

        // methodsCode

    },
    computed: {}
}
const app = Vue.createApp(App);
app.use(ViewUIPlus);
app.mount("#defaultId1");