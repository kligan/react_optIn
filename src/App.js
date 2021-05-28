import logo from './logo.svg';
import React,{useState, useEffect} from 'react'
import './App.scss';
import Cash from './components/Cash';
import OptIn from './components/OptIn'
import topImg from './images/top_image_scale_1x.png'

function App() {

  const [Time, setTime ] = useState("");
  const [data, setData] = useState({});
  const [timeout, setTimeout] = useState(false);

const getGitHubUserWithFetch = async () => {
  const response = await fetch("http://localhost:3001/content");
  const jsonData = await response.json();
  setData(jsonData);
};

  useEffect(()=>{

    getGitHubUserWithFetch();

    // future date or can be a value to count down 
    let countDownDate = new Date(data.duration).getTime();
    // let newCountDownDate = countDownDate.setMinutes(countDownDate+5)

    // function to render every 1000 second 
    let x = setInterval(()=>{
    let now = new Date().getTime()

    let distance = countDownDate - now;

    let hour = Math.floor ((distance  % (1000 * 60 * 60 *24))/ (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setTime(  hour + " : " + minutes + " : " + seconds );

    if(distance < 0 ){
      clearInterval(x);
      setTime(" 00 : 00 : 00 ")
      setTimeout(true)
    }
}, 1000)
},[Time]);

  return (
    <div className="App">
      <img src={topImg}></img>
      {timeout ? 
       null  : (
         <div>
        <Cash cash_value = {data.cash_value}/>
        <OptIn url = {data.opt_in} />
        </div>
       )
        }
         <h2>{Time}</h2> 
    </div>
  );
}

export default App;
