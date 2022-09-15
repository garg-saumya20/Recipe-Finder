
import './App.css';
import { useEffect, useState ,useRef} from "react";



function App() {

  const search=()=>{
    
    SearchForRecipe(InputRef.current.value);
    InputRef.current.value="";
  }
  const InputRef =useRef(null);
  const [ingredientList,updateIngredientList] = useState([]);
  const [Loading,setLoading] = useState(false);
  const API_Key = "4e4424bdcfbc0f52c47ae286eab753c3";
  const API_Id = "3ab69421";
  


  const SearchForRecipe =(query)=>{
    setLoading(true);
    let url = `search?q=${query}&app_id=${API_Id}&app_key=${API_Key}`;
    fetch(url).then(response => {
      return response.json();
    }).then(res => {
      console.log(res);
      console.log(res.hits);
      updateIngredientList(res.hits);
      setLoading(false);
    })
    .catch(err => {
      console.log("error", err);
      setLoading(false);
    })
  }
  useEffect(() => {
    
SearchForRecipe('chicken');
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <div class="InputWrapper">
          <input ref={InputRef } type="text" placeholder="Search for a great recipe"></input>
          <button onClick={search} >Search</button>
        </div>
        {Loading && <p>Loading...</p>}
        <div className="Wrapper">
          {ingredientList.map(item => {
            return (
              <div  key={item.recipe.label} className="Ingredient">
                <span>{item.recipe.label}</span>
                <img src={item.recipe.image} alt={item.recipe.label}/>
                <div  className="Steps">
                {item.recipe.ingredientLines.map((step,index)=>{
                      return <p key={index}>{step}</p>;
                })}
                </div>
                </div>
    
            );
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
