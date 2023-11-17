# Introduction to D3 - Part 2

- link: https://www.youtube.com/watch?v=Crp8UX-eQB0

### Scatterplot Checklist

### Scale

- In D3, a scale is a function that maps and abstract dimension of data to a visual representation.

```javascript
myScale = d3.scaleLinear().domain([1, 100]).range([5.25]);
///Linear scale that takes data (1, 50, 100) and uses it to change the radius of circle
```

```javascript
myColorScale = d3
  .scaleOrdianl()
  .domain([1, 50, 100])
  .range(["steelblue", "orange", "magenta"]); //color
///Set the color for domain
```

##### Activity 2

```javascript
myLinearScale = d3.scaleLinear().domain([0, 1]).range([0, 100]);

myLinearScale(0.5);
```

iris

```javascript
myValues = iris.map((d) => d.sepalLength)
//Allow we take all the value of sepalLength.
minValues = d3.min(myValues) //Take the min value of sepalLength
maxValues = d3.max(myValues) //Take the max value of sepalLength

// Then put it to scaleLinear
d3.scaleLinear().domain([minValues, maxValues]).range([0, 1]) (5)

//Short form
extentValue = d3.extend(myValues)
d3.scaleLinear().domain(extentValue).range([0, 1]) (5)

//Shortest and common
d3
    .scaleLinear()
    .domain(d3.extent(iris.,ap(d) => d.sepalLength))
    .range([0, 1])(5)
```

##### Activity 3

```javascript
d3.scaleOrdial()
  .domain(["apple", "orange", "banana"])
  .range(["red", "orange", "yellow"]);

myDataOrdinalScale = d3.scaleOridinal().domain(test).range();

test = Array.from(new Set(iris.map((d) => d.species)));

//Shortest
myDataOrdinalScale = d3
  .scaleOridinal()
  .domain(Array.from(new Set(iris.map((d) => d.species))))
  .range(["red", "orange", "yellow"]);
```

##### The canvas (SVG)

```javascript
{
  const width = 600;
  const height = 400;
  const margin = { top: 20, bottom: 20, left: 20, right: 20 };

  const svg = d3
    .create("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .style("border", "1px dotted #000");

  const g = svg
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);
  //grouping element together

  g.append("rect").attr("width", width).attr("height", height);
  return svg.node;
}
```
