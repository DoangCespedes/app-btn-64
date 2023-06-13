
import Axios from 'axios';
import './App.css';


function App() {




const imageHandler =  (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0])
    const input = e.target.files[0];
    reader.onload = async () => {      
      const base64 = reader.result.split(',')[1];
      console.log(base64);  
      guardar (base64)
      
  };
};


const guardar  = async (base64) => {
  const params = { p_nombre_doc: 'PRUEBA1',
  p_documento:base64  }
const response = await Axios.post("http://dev-segurospiramide.com/asg-api/dbo/intranet/sp_guardar_doc",params)

console.log(4,response.data)
}



  return (
    <div className="App">

      <h1>PRUEBA EXCEL</h1>
<form action="#">
              <input type="file" accept="" name="image-upload" id="input" onChange={imageHandler} />
              <label htmlFor="input">
            
              </label>
            </form>
    </div>
  );
}

export default App;
