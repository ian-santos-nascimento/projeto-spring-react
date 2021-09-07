import NavBar from "components/navbar";
import Footer from "components/footer";
import DataTable from "components/DataTable";
import BarChart from "components/BarChart";
import DonutChart from "components/DonutChart";

function App() {
  return (
    <> 
    
      <NavBar />
    <div className="container">
      <h1 className="text-primary py-3">Dados das vendas</h1>
      <div className="row px-3">

        <div className= "col-sm-6">
          <h4 className="text-center text-secundary">Sucesso(%)</h4>
          <DonutChart/>
        </div>
        <div className= "col-sm-6">
          <h2>Todas as vendas</h2>
          <BarChart/>
        </div>

        <div className="py-3 ">
          <h2 className="text-primary">Todas vendas</h2>
        </div>


      </div>

      <DataTable />
    </div>
    <Footer />

    </>
  );
}

export default App;
