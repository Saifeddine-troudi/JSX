import './App.css';
import saif from "./image/saif.jpg";
import YoutubeEmbed from './YoutubeEmbed';
import './style.css';
function App() {
  let firstName="Saifeddine";
  let lastName="Troudi";
  return (
    <div className='title'>
   <h1 className='titleRed'>{firstName + " " +lastName}</h1>
   <div>
   <img src={saif} alt="saif" width="200" height="200"/> 
   </div>
   <div>
   <img src="./lundi.jpg" alt='lundi' width="200"/>
   </div>
   <div>
     <YoutubeEmbed embedId="dNVrdYGiULM" />
     
   </div>
   </div>

  );
}
export default App;
