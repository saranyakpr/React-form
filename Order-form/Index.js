import React, { useEffect, useState } from 'react';
import './style.css';

const Index = () => {

    let [name, setName] = useState('');
    let [mobile, setMobile] = useState('');
    let [email, setEmail] = useState('');
    let [token, setToken] = useState('');
    let [jasmine, setJasmine] = useState('');
    let [black, setBlack] =useState('');
    let[bomba, setBomba] = useState('');
    let [coconut, setCoconut] = useState('');
    let [sunflower, setSunflower] = useState('');
    let [olive, setOlive] = useState('');

    const [listRice, setListRice] = useState('mainExtra');
    const [listOil, setListOil] = useState('mainExtra');

    let sheetId ='1xSettwL9CRAeSewzQsZ1JbBQZJWB1zFp7fv-dr-bMeM';
    let range = 'form-data';

    const handleSubmit=async(e)=>{
        e.preventDefault();

        let value = [name, email, mobile, jasmine, black, bomba, coconut, sunflower, olive];
        let valueInputOption = 'USER_ENTERED'
        let apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}:append?access_token=${token}&valueInputOption=${valueInputOption}`
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            values: [
              value
            ],
          }),
        });
        const responseData = await response.json();

        if (response.ok) {
          console.log('Data inserted successfully:', responseData);
        } else {
          console.error('Error:', responseData.error);
        }
        setName('');
        setEmail('');
        setMobile('');  
        setJasmine('');
        setBlack('');
        setBomba('');
        setCoconut('');
        setSunflower('');
        setOlive('');
    }

    useEffect(() => {
        getAccessToken();
    },[]);

    const getAccessToken =()=>{
      const currentUrl = window.location.href;
      const queryParams = new URLSearchParams(currentUrl.split('#')[1]);
      const accessToken = queryParams.get('access_token');
      console.log('Access Token:', accessToken);
      setToken(accessToken?accessToken:"")
    }

    const getAuthorizeUrl = (() => {
          window.location.href = 'https://accounts.google.com/o/oauth2/v2/auth?client_id=737536722910-cq86bo1eu4fim27vg1b3cbt0m9ec1jef.apps.googleusercontent.com&redirect_uri=http://localhost:3000&response_type=token&scope=https://www.googleapis.com/auth/drive'
    })

    const handleListRice=()=>{
      if(listRice !== "mainExtra") setListRice("mainExtra");
      else setListRice('main');
    }

    const handleListOil=()=>{
      if(listOil !== "mainExtra") setListOil("mainExtra");
      else setListOil('main');
    }

  return (
    <div className='order'>
      {/* <button >Login</button> */}
      <h2>Order now</h2>
        <form onSubmit={handleSubmit} className='form'>
            <div className='item'>
                <label>Name:</label>
                <input type='text' name='Name' placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className='item'>
                <label>Mobile number:</label>
                <input type='text' name='Mobile' value={mobile} placeholder='Enter your mobile number' onChange={(e)=>setMobile(e.target.value)}/>
            </div>
            <div className='item'>
                <label>Email:</label>
                <input type='email' name='Email' value={email} placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className='item'>
                <tr>
                  <td><label>options:</label></td>
                    <td>
                      <li className='main'><input type='checkbox' onClick={handleListRice}/><label>Rice</label>
                        <ul className={listRice}>
                          <li>
                              <label>Jasmine Rice</label>
                              <label>Quantity:</label><input type='text' name='Jasmine' onChange={(e)=>setJasmine(e.target.value)}/>
                            </li>
                            <li>
                              <label>Black Rice</label>
                              <label>Quantity:</label><input type='text' name='Black' onChange={(e)=>setBlack(e.target.value)}/>
                            </li>
                            <li>
                              <label>Bomba Rice</label>
                              <label>Quantity:</label><input type='text' name='Bomba' onChange={(e)=>setBomba(e.target.value)}/>
                            </li>
                        </ul>
                      </li>
                    </td>
                    <td>
                      <li className='main'><input type='checkbox' onClick={handleListOil}/><label>Oil</label>
                        <ul className={listOil}>
                          <li>
                              <label>Coconut oil</label>
                              <label>Quantity:</label><input type='text' name='Coconut' onChange={(e)=>setCoconut(e.target.value)}/>
                            </li>
                            <li>
                              <label>Sunflower oil</label>
                              <label>Quantity:</label><input type='text' name='Sunflower' onChange={(e)=>setSunflower(e.target.value)}/>
                            </li>
                            <li>
                              <label>Olive oil</label>
                              <label>Quantity:</label><input type='text' name='Olive' onChange={(e)=>setOlive(e.target.value)}/>
                            </li>
                        </ul>
                      </li>
                    </td>
                </tr>
            </div>
            <input className='btn' type='submit' value='submit' onClick={getAuthorizeUrl}/>
        </form>
    </div>
  )
}

export default Index

