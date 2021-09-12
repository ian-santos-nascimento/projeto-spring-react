
import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSuccess } from 'types/sale';
import { round } from 'utils/format';
import { BASE_URL } from 'utils/requests';

type SeriesData = {
    name: string;
    data : number[]
}

type ChartData = {
    labels: {
       categories:  string[];
    };
        series : SeriesData[];
}

function BarChart() {

    const [chartData, setChartData] = useState<ChartData>({
        labels: {
            categories: []
    },
        series: [
        {
            name: "",
            data: []                   
        }
            ]
    }); 

    useEffect (() => {
        axios.get(`${BASE_URL}/sales/success-by-seller`)
        .then( response => {
            const main_data = response.data as SaleSuccess[];
            const myLabels = main_data.map( x => x.sellerName);
            const mySeries = main_data.map(x => round( 100.0 *x.deals / x.visited, 1));

            setChartData({
                labels: {
                categories: myLabels
        },
            series: [
            {
                name: "% Success",
                data: mySeries                   
            }
            ]
        }); 
        });
    })
    
    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
    
    
    return (
        //O que isso tudo significa é que ele usar o Chart(que é um componente externo) 
        //e no argumento "options" eu passo tudo dentro da variável criada options e outro argumento
        //"xaxix" eu passo o meu arg criado 
        <Chart 
        options={{...options, xaxis: chartData.labels}}
        series = {chartData.series}
        type= "bar"
        height = "300"
        />
    );
  }
export default BarChart;