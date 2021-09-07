
import Chart from 'react-apexcharts';


function DonutChart() {

    const mockData = { //São listas
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    }
    
    const options = {
        legend: {
            show: true
        }
    }
    return (
        //O que isso tudo significa é que ele usar o Chart(que é um componente externo) 
        //e no argumento "options" eu passo tudo dentro da variável criada options e outro argumento
        //"xaxix" eu passo o meu arg criado 
        <Chart 
        options={{...options, labels: mockData.labels}}
        series = {mockData.series}
        type= "donut"
        height = "300"
        />
    );
  }
export default DonutChart;