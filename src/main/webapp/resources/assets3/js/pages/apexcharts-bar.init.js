function getChartColorsArray(t){var e=document.getElementById(t);if(e){e=e.dataset.colors;if(e)return JSON.parse(e).map(t=>{var e=t.replace(/\s/g,"");return e.includes(",")?2===(t=t.split(",")).length?`rgba(${getComputedStyle(document.documentElement).getPropertyValue(t[0])}, ${t[1]})`:e:getComputedStyle(document.documentElement).getPropertyValue(e)||e});console.warn("data-colors attribute not found on: "+t)}}var chartBarChart="",chartDatalabelsBarChart="",chartStackedBarChart="",chartStackedBar100Chart="",chartNegativeBarChart="",chartBarMarkersChart="",chartBarReversedChart="",chartPatternedChart="",chartGroupbar="";function loadCharts(){(t=getChartColorsArray("bar_chart"))&&(e={chart:{height:350,type:"bar",toolbar:{show:!1}},plotOptions:{bar:{horizontal:!0}},dataLabels:{enabled:!1},series:[{data:[380,430,450,475,550,584,780,1100,1220,1365]}],colors:t,grid:{borderColor:"#f1f1f1"},xaxis:{categories:["South Korea","Canada","United Kingdom","Netherlands","Italy","France","Japan","United States","China","Germany"]}},""!=chartBarChart&&chartBarChart.destroy(),(chartBarChart=new ApexCharts(document.querySelector("#bar_chart"),e)).render()),(t=getChartColorsArray("custom_datalabels_bar"))&&(e={series:[{data:[400,430,448,470,540,580,690,1100,1200,1380]}],chart:{type:"bar",height:350,toolbar:{show:!1}},plotOptions:{bar:{barHeight:"100%",distributed:!0,horizontal:!0,dataLabels:{position:"bottom"}}},colors:t,dataLabels:{enabled:!0,textAnchor:"start",style:{colors:["#fff"]},formatter:function(t,e){return e.w.globals.labels[e.dataPointIndex]+":  "+t},offsetX:0,dropShadow:{enabled:!1}},stroke:{width:1,colors:["#fff"]},xaxis:{categories:["South Korea","Canada","United Kingdom","Netherlands","Italy","France","Japan","United States","China","India"]},yaxis:{labels:{show:!1}},title:{text:"Custom DataLabels",align:"center",floating:!0,style:{fontWeight:500}},subtitle:{text:"Category Names as DataLabels inside bars",align:"center"},tooltip:{theme:"dark",x:{show:!1},y:{title:{formatter:function(){return""}}}}},""!=chartDatalabelsBarChart&&chartDatalabelsBarChart.destroy(),(chartDatalabelsBarChart=new ApexCharts(document.querySelector("#custom_datalabels_bar"),e)).render()),(t=getChartColorsArray("stacked_bar"))&&(e={series:[{name:"Marine Sprite",data:[44,55,41,37,22,43,21]},{name:"Striking Calf",data:[53,32,33,52,13,43,32]},{name:"Tank Picture",data:[12,17,11,9,15,11,20]},{name:"Bucket Slope",data:[9,7,5,8,6,9,4]},{name:"Reborn Kid",data:[25,12,19,32,25,24,10]}],chart:{type:"bar",height:350,stacked:!0,toolbar:{show:!1}},plotOptions:{bar:{horizontal:!0}},stroke:{width:1,colors:["#fff"]},title:{text:"Fiction Books Sales",style:{fontWeight:500}},xaxis:{categories:[2008,2009,2010,2011,2012,2013,2014],labels:{formatter:function(t){return t+"K"}}},yaxis:{title:{text:void 0}},tooltip:{y:{formatter:function(t){return t+"K"}}},fill:{opacity:1},legend:{position:"top",horizontalAlign:"left",offsetX:40},colors:t},""!=chartStackedBarChart&&chartStackedBarChart.destroy(),(chartStackedBarChart=new ApexCharts(document.querySelector("#stacked_bar"),e)).render()),(t=getChartColorsArray("stacked_bar_100"))&&(e={series:[{name:"Marine Sprite",data:[44,55,41,37,22,43,21]},{name:"Striking Calf",data:[53,32,33,52,13,43,32]},{name:"Tank Picture",data:[12,17,11,9,15,11,20]},{name:"Bucket Slope",data:[9,7,5,8,6,9,4]},{name:"Reborn Kid",data:[25,12,19,32,25,24,10]}],chart:{type:"bar",height:350,stacked:!0,stackType:"100%",toolbar:{show:!1}},plotOptions:{bar:{horizontal:!0}},stroke:{width:1,colors:["#fff"]},title:{text:"100% Stacked Bar",style:{fontWeight:500}},xaxis:{categories:[2008,2009,2010,2011,2012,2013,2014]},tooltip:{y:{formatter:function(t){return t+"K"}}},fill:{opacity:1},legend:{position:"top",horizontalAlign:"left",offsetX:40},colors:t},""!=chartStackedBar100Chart&&chartStackedBar100Chart.destroy(),(chartStackedBar100Chart=new ApexCharts(document.querySelector("#stacked_bar_100"),e)).render()),(t=getChartColorsArray("negative_bars"))&&(e={series:[{name:"Males",data:[.4,.65,.76,.88,1.5,2.1,2.9,3.8,3.9,4.2,4,4.3,4.1,4.2,4.5,3.9,3.5,3]},{name:"Females",data:[-.8,-1.05,-1.06,-1.18,-1.4,-2.2,-2.85,-3.7,-3.96,-4.22,-4.3,-4.4,-4.1,-4,-4.1,-3.4,-3.1,-2.8]}],chart:{type:"bar",height:360,stacked:!0,toolbar:{show:!1}},colors:t,plotOptions:{bar:{horizontal:!0,barHeight:"80%"}},dataLabels:{enabled:!1},stroke:{width:1,colors:["#fff"]},grid:{xaxis:{lines:{show:!1}}},yaxis:{min:-5,max:5,title:{text:"Age",style:{fontWeight:500}}},tooltip:{shared:!1,x:{formatter:function(t){return t}},y:{formatter:function(t){return Math.abs(t)+"%"}}},title:{text:"Mauritius population pyramid 2011",style:{fontWeight:500}},xaxis:{categories:["85+","80-84","75-79","70-74","65-69","60-64","55-59","50-54","45-49","40-44","35-39","30-34","25-29","20-24","15-19","10-14","5-9","0-4"],title:{text:"Percent"},labels:{formatter:function(t){return Math.abs(Math.round(t))+"%"}}}},""!=chartNegativeBarChart&&chartNegativeBarChart.destroy(),(chartNegativeBarChart=new ApexCharts(document.querySelector("#negative_bars"),e)).render()),(t=getChartColorsArray("bar_markers"))&&(e={series:[{name:"Actual",data:[{x:"2011",y:12,goals:[{name:"Expected",value:14,strokeWidth:5,strokeColor:"#564ab1"}]},{x:"2012",y:44,goals:[{name:"Expected",value:54,strokeWidth:5,strokeColor:"#564ab1"}]},{x:"2013",y:54,goals:[{name:"Expected",value:52,strokeWidth:5,strokeColor:"#564ab1"}]},{x:"2014",y:66,goals:[{name:"Expected",value:65,strokeWidth:5,strokeColor:"#564ab1"}]},{x:"2015",y:81,goals:[{name:"Expected",value:66,strokeWidth:5,strokeColor:"#564ab1"}]},{x:"2016",y:67,goals:[{name:"Expected",value:70,strokeWidth:5,strokeColor:"#564ab1"}]}]}],chart:{height:350,type:"bar",toolbar:{show:!1}},plotOptions:{bar:{horizontal:!0}},colors:t,dataLabels:{formatter:function(t,e){e.w.config.series[e.seriesIndex].data[e.dataPointIndex].goals;return t}},legend:{show:!0,showForSingleSeries:!0,customLegendItems:["Actual","Expected"],markers:{fillColors:t}}},""!=chartBarMarkersChart&&chartBarMarkersChart.destroy(),(chartBarMarkersChart=new ApexCharts(document.querySelector("#bar_markers"),e)).render()),(t=getChartColorsArray("reversed_bars"))&&(e={series:[{data:[400,430,448,470,540,580,690]}],chart:{type:"bar",height:350,toolbar:{show:!1}},annotations:{xaxis:[{x:500,borderColor:"#038edc",label:{borderColor:"#038edc",style:{color:"#fff",background:"#038edc"},text:"X annotation"}}],yaxis:[{y:"July",y2:"September",label:{text:"Y annotation"}}]},colors:t,plotOptions:{bar:{horizontal:!0}},dataLabels:{enabled:!0},xaxis:{categories:["June","July","August","September","October","November","December"]},grid:{xaxis:{lines:{show:!0}}},yaxis:{reversed:!0,axisTicks:{show:!0}}},""!=chartBarReversedChart&&chartBarReversedChart.destroy(),(chartBarReversedChart=new ApexCharts(document.querySelector("#reversed_bars"),e)).render()),(t=getChartColorsArray("patterned_bars"))&&(e={series:[{name:"Marine Sprite",data:[44,55,41,37,22,43,21]},{name:"Striking Calf",data:[53,32,33,52,13,43,32]},{name:"Tank Picture",data:[12,17,11,9,15,11,20]},{name:"Bucket Slope",data:[9,7,5,8,6,9,4]}],chart:{type:"bar",height:350,stacked:!0,dropShadow:{enabled:!0,blur:1,opacity:.25},toolbar:{show:!1}},plotOptions:{bar:{horizontal:!0,barHeight:"60%"}},dataLabels:{enabled:!1},stroke:{width:2},title:{text:"Compare Sales Strategy",style:{fontWeight:500}},xaxis:{categories:[2008,2009,2010,2011,2012,2013,2014]},yaxis:{title:{text:void 0}},tooltip:{shared:!1,y:{formatter:function(t){return t+"K"}}},fill:{type:"pattern",opacity:1,pattern:{style:["circles","slantedLines","verticalLines","horizontalLines"]}},states:{hover:{filter:"none"}},legend:{position:"right",offsetY:40},colors:t},""!=chartPatternedChart&&chartPatternedChart.destroy(),(chartPatternedChart=new ApexCharts(document.querySelector("#patterned_bars"),e)).render());(t=getChartColorsArray("grouped_bar"))&&(e={series:[{data:[44,55,41,64,22,43,21]},{data:[53,32,33,52,13,44,32]}],chart:{type:"bar",height:410,toolbar:{show:!1}},plotOptions:{bar:{horizontal:!0,dataLabels:{position:"top"}}},dataLabels:{enabled:!0,offsetX:-6,style:{fontSize:"12px",colors:["#fff"]}},stroke:{show:!0,width:1,colors:["#fff"]},tooltip:{shared:!0,intersect:!1},xaxis:{categories:[2001,2002,2003,2004,2005,2006,2007]},colors:t},""!=chartGroupbar&&chartGroupbar.destroy(),(chartGroupbar=new ApexCharts(document.querySelector("#grouped_bar"),e)).render());var t,e={series:[{name:"coins",data:[2,4,3,4,3,5,5,6.5,6,5,4,5,8,7,7,8,8,10,9,9,12,12,11,12,13,14,16,14,15,17,19,21]}],chart:{type:"bar",height:410,animations:{enabled:!1},toolbar:{show:!1}},plotOptions:{bar:{horizontal:!0,barHeight:"100%"}},dataLabels:{enabled:!1},stroke:{colors:["#fff"],width:.2},labels:Array.apply(null,{length:39}).map(function(t,e){return e+1}),yaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1},title:{text:"Weight"}},grid:{position:"back"},title:{text:"Paths filled by clipped image",align:"right",offsetY:30,style:{fontWeight:500}},fill:{type:"image",opacity:.87,image:{src:["assets/images/small/img-1.jpg"],width:466,height:406}}};document.querySelector("#bar_images")&&new ApexCharts(document.querySelector("#bar_images"),e).render()}window.addEventListener("resize",function(){setTimeout(()=>{loadCharts()},250)}),loadCharts();