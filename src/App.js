import './App.css';
import { useState } from 'react';


function App() {
  const [inputs, setInputs] = useState({
    Firstname: '',
    Lastname: '',
    Mail: '',
    Password:'',
    Mobile: '',
    date: '',
    time: ''
  });

  const handleChange = (event) => {
    const placeholder=event.target.placeholder;
    const value=event.target.value;
    setInputs(values => ({...values, [placeholder]: value}))
  }

  const handleReset = (event) =>{
    event.preventDefault();
    setInputs({
    Firstname: '',
    Lastname: '',
    Mail: '',
    Password:'',
    Mobile: '',
    date: '',
    time: ''});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted SucessFully`);
  }
  

  return (
    <div className="container">
      <h1>Welcome</h1>

      <div className='sec-container'>
        <input type="text"
          placeholder="Search.."
          name="search"
        />

        <button type="submit">Submit</button>

        <div className='contact'>
          <h1>Contact info</h1><br/><br/>
          <table>
            <tr>Name : Divyabharathi Mayavan</tr><br/><br/>
            <tr>Phone: 9894606975</tr><br/><br/>
            <tr>Mail id: divyamayavan1925@gmail.com</tr><br/><br/>
            <tr>location: 1/65, Boyar Street, <br/> Vasanthapuram(po),<br /> Namakkal(dt),637002.</tr><br/><br/>
          </table>
        </div>

        <div className='third-container'>
          <h1>Form content</h1>
          <div>
        
          <form onSubmit={handleSubmit} onReset={handleReset}>
          <lable>
        <input 
        type='text'
        placeholder='Firstname'
        onChange={handleChange}
        value={inputs.Firstname || ""}
        />
       </lable><br/><br/>
      <lable>
      <input
       type='text'
       placeholder='Lastname'
       onChange={handleChange}
       value={inputs.Lastname || ""}
       />
       </lable><br/><br/>

       <lable>
        <input 
        type='mail' 
        placeholder='Mail'
        value={inputs.Mail || ""}
        onChange={handleChange}
        />
       </lable><br/><br/>

       <lable>
        <input
         type='password'
         placeholder='Password'
         onChange={handleChange}
         value={inputs.Password || ""}
          />
       </lable><br/><br/>

       <lable>
        <input 
        type='number'
        placeholder='Mobile'
        onChange={handleChange}
        value={inputs.Mobile  || ""}
        />
       </lable><br/><br/>

       <lable>Date :
        <input 
        type='date' 
        placeholder='date'
        onChange={handleChange}
        value={inputs.date || ""}
        />

       </lable><br/><br/>

       <lable>Time :
        <input 
        type='time' 
        placeholder='time'
        value={inputs.time || ""}
        onChange={handleChange}
        />
       </lable><br/><br/>

       <input type="submit" />

       <button onClick={handleReset}>Reset</button>
          </form>
          
         
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
