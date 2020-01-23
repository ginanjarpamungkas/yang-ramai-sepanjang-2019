var width = document.body.getBoundingClientRect().width
var height = window.innerHeight

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  var bulan =['Des','Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov']
  var kurang = 15
}else{
  var bulan =['Desember','Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November']
  var kurang = 38
}

var color = ['#d71921', '#9e1d1b', '#681b15', '#37140e', '#000000']
var svg = d3.select("#chart-container").append("svg").attr('width', (width+1)).attr('height', height).attr('preserveAspectRatio', 'xMidYMid meet').attr('id', 'chart-kaledoskop').attr("transform","translate(-1,0)");
var title =  svg.append("text").attr("class","chart-title").attr('x', (0.01*width)).attr('y', (0.20*height)).text("BISNIS");
var bgYear = svg.append('rect').attr("transform", "translate(0,"+(height-90)+")").attr('height', '6em').attr('width', width).attr('fill', '#000000')

const blnWidth = width/12;
bulan.forEach(function(bln,idx) {
  var axis = d3.select("#chart-kaledoskop").append("text").attr("class","axis").attr("x",(blnWidth*idx)+kurang).attr("y",height-30).attr("text-anchor","middle").text(bln);
})

d3.json("zero.json", function(error, data) {
  if (error) throw error;
  var kanalCount = data.length
  let padding = (height/5)/kanalCount;

  var kanals = d3.select("#chart-kaledoskop").selectAll(".kanals").data(data).enter().append("g").attr("class","kanals").attr("id",function(d){return d.kanal.split(' ').join('')}).attr("transform","translate(0,"+((height/2.5))+")");

  data.forEach(function(d,idx) {
    var x = d3.scaleTime().domain(d3.extent(d.data, function(d) { return d3.timeParse("%Y-%m-%d")(d.date); })).range([ 0, width ]);
    var y = d3.scaleLinear().domain([0, d3.max(d.data, function(d) { return +d.value; })]).range([ height/1.8, 0 ]);

    kanals.append("path")
      .datum(d.data)
      .attr("fill", color[idx])
      .attr('height',height/2)
      .attr("id",""+d.kanal+"")
      .attr("transform",function(d,m){return "translate(0,"+(idx*padding-kanalCount*padding)+")"})
      .attr("d", d3.area()
        .x(function(d) { return x(d3.timeParse("%Y-%m-%d")(d.date)) })
        .y0(y(0))
        .y1(function(d) { return y(d.value) })
        )
  })
});

function updateKanal(paramKanal,idKanal,nmaKanal) {
  d3.json("data.json", function(error, data) {
    if (error) throw error;

    var x = d3.scaleTime().domain(d3.extent(data[idKanal].data, function(d) { return d3.timeParse("%Y-%m-%d")(d.date); })).range([ 0, width ]);
    var y = d3.scaleLinear().domain([0, d3.max(data[idKanal].data, function(d) { return +d.value; })]).range([ height/1.8, 0 ]);

    d3.selectAll(paramKanal)
      .datum(data[idKanal].data)
      .transition()
      .delay(100)
      .duration(1000)
      .attr("d", d3.area()
        .x(function(d) { return x(d3.timeParse("%Y-%m-%d")(d.date)) })
        .y0(y(0))
        .y1(function(d) { return y(d.value) })
        )
  });
  d3.selectAll(".chart-title").text(nmaKanal)
}

function updateZero(paramKanal) {
  d3.json("zero.json", function(error, data) {
    if (error) throw error;
    data.forEach(function(d,idx) {

    var x = d3.scaleTime().domain(d3.extent(d.data, function(d) { return d3.timeParse("%Y-%m-%d")(d.date); })).range([ 0, width ]);
    var y = d3.scaleLinear().domain([0, d3.max(d.data, function(d) { return +d.value; })]).range([ height/1.8, 0 ]);

    d3.selectAll(paramKanal)
      .datum(d.data)
      .transition()
      .delay(100)
      .duration(1000)
      .attr("d", d3.area()
        .x(function(d) { return x(d3.timeParse("%Y-%m-%d")(d.date)) })
        .y0(y(0))
        .y1(function(d) { return y(d.value) })
        )
    })
  });
}