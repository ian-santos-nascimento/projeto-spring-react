
import Chart from 'react-apexcharts';


function BarChart() {

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
    
    const mockData = {
        labels: {
            categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
        },
        series: [
            {
                name: "% Sucesso",
                data: [43.6, 67.1, 67.7, 45.6, 71.1]                   
            }
        ]
    };
    return (
        //O que isso tudo significa é que ele usar o Chart(que é um componente externo) 
        //e no argumento "options" eu passo tudo dentro da variável criada options e outro argumento
        //"xaxix" eu passo o meu arg criado 
        <Chart 
        options={{...options, xaxis: mockData.labels}}
        series = {mockData.series}
        type= "bar"
        height = "300"
        />
    );
  }
export default BarChart;