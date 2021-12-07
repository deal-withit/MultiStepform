import React,{ useState } from "react"; 
import './App.css';

function App() {
  const [form, setForm] = useState({
    place: "",
  })

  const [count,setCount] = useState(1); //Initialising the count value
  const updateForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="App">
      <form>
         {/* If the value of count is 1 then only the content of 1st page will be shown */}
          {count === 1 ? (
              <div className="container">
                <label>Area he visited yesterday for marketing</label>
                {/* Input Area of first page */}
                <input 
                    type="text"
                    className="inputarea" 
                    name="place" 
                    onChange={updateForm}
                    value={form.place}
                />
                
            </div>
          ): null}

          {/* If the value of count is 2 then only the content of 2nd page will be shown */}
          {count === 2 ? (
              <div className="container">
                <label>Total Person he approached</label>
                {/* Input Area for 2nd Page */}
                <input 
                  type="text"
                  className="inputarea" 
                  name="person" 
                  onChange={updateForm}
                  value={form.person}
                />
               
            </div>
          ): null}

          {/* When the value of count becomes 3,Only The results are visible */}
          {count === 3 ? (
            <div className="result">

              <div>
                <p className="label">Area he visited for marketing</p>
                <p className="answer">{form.place}</p>
              </div>

              <div>
                <p className="label">Total Person he approached</p>
                <p className="answer">{form.person}</p>
              </div>
              
            </div>
          ): null}
          
        
      </form>

      {/* When value of count is less than 3 then only the next button will be visible otherwise it will be hidden.  */}
      {count < 3 ? (
      <div>
        <button 
            className="nxtbtn" 
            type="submit" 
            onClick={() => setCount(count+1)} //At each click the value of count will be increased by 1
            disabled={count > 2}
        >
        Next
        </button>
        </div>
      ): null}
      
    </div>
  );
}

export default App;
