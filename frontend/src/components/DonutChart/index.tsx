import axios from 'axios';
import Chart from 'react-apexcharts';
import { SalesSum } from 'types/sale';
import { BASE_URL } from 'utils/requests';

//Criação de um tipo para receber a informação do BackEnd, com os argumentos com os mesmos nomes
type ChartData ={
    labels: string[];
    series : number [];
}


function DonutChart() {
    //Cria uma variável do tipo CharData 
    //Cria uma lista vazia pra cada atributo
    let chartData : ChartData = {labels:[], series:[]};

    //RESPONSAVEL PELO GET NO BACKEND
    axios.get(`${BASE_URL}/sales/amount-by-seller`)
    .then(response => {
        //Vai receber a resposta como um SalesSum
        const data = response.data as SalesSum[];
        //Aqui separamos os dados 
        const myLabels = data.map(x => x.sellerName);
        const mySeries = data.map(x => x.sum);

        chartData = {labels:myLabels, series:mySeries};
        console.log(response.data);
    });
    
    
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
        options={{...options, labels: chartData.labels}}
        series = {chartData.series}
        type= "donut"
        height = "300"
        />
    );
  }
export default DonutChart;