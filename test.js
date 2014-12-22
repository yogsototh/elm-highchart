// JS Code

// The function
var updateSerie = function(){
                        var series=this.series;
                        runningElmModule1.ports.point.subscribe(function(newpoint){
                            console.log(newpoint);
                           var p0 = [newpoint[0],newpoint[1][0]];
                           var p1 = [newpoint[0],newpoint[1][1]];
                           series[0].addPoint(p0,true,true);
                           series[1].addPoint(p1,true,true);
                           });
                        };

// generate n+1 points from n seconds in the past to now
var genPoints = function(n) { var serie = [];
    var time = (new Date()).getTime();
    var i;
    for (i = -1 * n; i<=0; i++) {
        serie.push({x: time + i*1000, y: Math.random()});
    }
    return serie;
}

var initDatas = genPoints(20);

// highchart configuration
var conf = {
    title: {text: 'Reactive data'},
    xAxis: {type: 'datetime'},
    yAxis: {text: 'value'},
    legend: {enabled: false},
    exporting: {enabled: false},
    chart: {type: 'spline', events: {load: updateSerie}},
    series: [
        {name: 'Reactive X Mouse', data: initDatas},
        {name: 'Reactive Y Mouse', data: initDatas}
    ]
};

// load the elm renderer
// The elm renderer create a div of class "chart"
var runningElmModule1 = Elm.fullscreen(Elm.Main);
// load the highchart in all class chart
$(function(){$('.chart').highcharts(conf);});

