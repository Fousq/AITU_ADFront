function getRandomInt(min, max) {
    return Math.floor(getRandomFloat(min, max)); // The maximum is exclusive and the minimum is inclusive
}

function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

function generateChart(context) {
    return new CanvasJS.Chart(context.id,
    {
      title:{
        text: context.name
      },
       data: [
        {
            type: context.type,
            dataPoints: context.generateDataPoints()
        }
      ]
    });
}

function generateLineChart() {
    function generateData() {
        const chartSize = getRandomInt(10, 28);
        const dataPoints = [];
        for (let i = 0; i < chartSize; i++) {
            dataPoints.push({
                x: new Date(2023, 04, i),
                y: getRandomInt(100, 1000)
            });
        }
        return dataPoints
    }
    
    const lineChartContext = {
        id: "lineChart",
        name: "Spendings - per day",
        type: "line",
        generateDataPoints: generateData
    }

    
    generateChart(lineChartContext).render();
}

function generateSplineChart() {
    function generateData() {
        const chartSize = 12;
        const dataPoints = [];
        for (let i = 1; i <= chartSize; i++) {
            dataPoints.push({
                x: new Date(2023, i, 1),
                y: getRandomInt(10_000, 1_000_000)
            });
        }
        return dataPoints
    }
    
    const splineChartContext = {
        id: "splineChart",
        type: "spline",
        name: "Sales - per month",
        generateDataPoints: generateData
    }

    
    generateChart(splineChartContext).render();
}

function generateAreaChart() {
    function generateData() {
        const chartSize = getRandomInt(1, 28);
        const dataPoints = [];
        for (let i = 1; i <= chartSize; i++) {
            dataPoints.push({
                x: new Date(2023, 4, i),
                y: getRandomInt(10_000, 1_000_000)
            });
        }
        return dataPoints
    }
    
    const areaChartContext = {
        id: "areaChart",
        type: "area",
        name: "Daily Upload",
        generateDataPoints: generateData
    }

    
    generateChart(areaChartContext).render();
}

function generateBarChart() {
    const chart = new CanvasJS.Chart("barChart",
    {
      title:{
        text: "Sales by product"
      },
      data: [
      {
        type: "bar",
        dataPoints: [
        { y: getRandomInt(10_000, 1_000_000), label: "Socks"},
        { y: getRandomInt(10_000, 1_000_000), label: "T-shirts"},
        { y: getRandomInt(10_000, 1_000_000), label: "Underwear"},
        { y: getRandomInt(10_000, 1_000_000), label: "Hats"},
        { y: getRandomInt(10_000, 1_000_000), label: "Sweaters"},
        { y: getRandomInt(10_000, 1_000_000), label: "Pants"},
        ]
      }
      ]
    });

    chart.render();
}

function generateMultiSeriesLineChart() {
    function generateDataPoints() {
        const semesters = ["Year 1 Semester 1", "Year 1 Semester 2", "Year 2 Semester 1", "Year 2 Semester 2"];
        const dataPoints = [];
        for (let i = 1; i < semesters.length + 1; i++) {
            dataPoints.push({
                x: i,
                y: roundToTwo(getRandomFloat(1, 4)),
                label: semesters[i - 1]
            });
        }
        return dataPoints;
    }
    
    const chart = new CanvasJS.Chart("multiSeriesLineChart",
    {
      title:{
        text: "Multi Series results by subject per semester"
      },
      data: [
      {
        type: "line",
        showInLegend: true,
        legendText: "Calculus 1",
        dataPoints: generateDataPoints()
      },
      {
        type: "line",
        showInLegend: true,
        legendText: "English",
        dataPoints: generateDataPoints()
      },
      {
        type: "line",
        showInLegend: true,
        legendText: "Introduction to Programming",
        dataPoints: generateDataPoints()
      }
      ]
    });

    chart.render();
}

window.onload = () => {
    generateLineChart();
    generateSplineChart();
    generateAreaChart();
    generateBarChart();
    generateMultiSeriesLineChart();
}