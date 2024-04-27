var chart;
		var legend;

		var chartData = [{
				country: "Cons 1",
				value: 200
			},
			{
				country: "Cons 2",
				value: 340
			},
			{
				country: "Cons 3",
				value: 230
			},
			{
				country: "Cons 4",
				value: 250
			},
			{
				country: "Cons 5",
				value: 150
			},
			{
				country: "Cons 6",
				value: 200
			}
		];

		AmCharts.ready(function () {
			// PIE CHART
			chart = new AmCharts.AmPieChart();
			chart.dataProvider = chartData;
			chart.titleField = "country";
			chart.valueField = "value";
			chart.outlineColor = "";
			chart.outlineAlpha = 0.8;
			chart.outlineThickness = 2;
			// this makes the chart 3D
			chart.depth3D = 20;
			chart.angle = 30;

			// WRITE
			chart.write("chartdiv");
		});