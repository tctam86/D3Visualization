const w = 500;
const h = 500;
const p = 100;

let dataset = []

for (let i  = 0; i < max; i++)
{
    let newNumber = Math.floor(Math.random() * (max - min) + min);
    dataset.push(newNumber);
}
// Use it for random data

let rowConverter = function(d) {
    let parseTime = d3.timeParse("%m/%d/%Y"); //unnessesary now
    return
    {
        attr1: d["attr1"]
        attr2: parseInt(d["attr2"])
        attr3: parseFloat(d["attr3"])
        attr4: parseFloat(d["attr4"]).replace(",", ".")
        // attr5: parseTime(d["attr5"])
    };
};

function task()
{
    d3.csv("link",rowConverter,function(error,data)){
        if (error) {
            console.log(error);
        } else {
            console.log(data);
            
            data = data.filter ((d) => !isNaN(d.lat) && !isNaN(d.long) && d.total >0);

            //Create truong du lieu moi
            data.forEach (function (d){
                d["attr5"] = d["attr4"];
            });

            let currentData = data.slice(0, i -1);
    }
}
// div.task --> 1 rectangle svg w,h --> n object svg on the rectangle 
let svg = d3
    .select(".task")
    .append("svg") //them vao
    .attr("width", w)
    .attr("height", h);

let scaleLinear = d3   //danh cho du lieu tu 1-->100 theo thu 
    .scaleLinear()
    .domain([0, d3.max(currentData, (d){
        return d["attr1"];
    })
])
    .range ([p,w-p * 1.6]);

let oScale = d3
    .scaleBand()
    .domain(d3.range(currentData.length))
    .rangeRound([0, h - p])    
    .paddingInner(0.2);
}
