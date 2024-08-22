import React,{useState} from 'react'


function Homepage(){
  // const [searchCountry, setsearchCountry] = useState('');
  // const [filteredCountries, setFilteredCountries] = useState([]);

  // const countries = [
  //   'Tanzania', 'Burundi', 'Uganda', 'Zambia', 'Congo', 
  //   'Kenya', 'Nigeria', 'South Africa', 'Ethiopia'
  // ];

  // const handleSearch = (event) => {
  //   const searchValue = event.target.value.toLowerCase();
  //   setsearchCountry(searchValue);

  //   const filtered = countries.filter(country => 
  //     country.toLowerCase().includes(searchValue)
  //   );
  //   setFilteredCountries(filtered);
  // };


    return(
<div className="homepage">
  <header className="header">
    {/* <h1>make kenya a better market</h1> */}
  </header>
  <div className="search-section">
    <div className="search-box">
      <form className="search-form">
      
     <select>
      <option>import</option>
      <option>Export</option>
     </select>
     
      
        
        <select>
          <option>products</option>
          <option disabled>--- import & export ---</option>
              <option>Cement</option>
              <option>packing containers</option>
              <option>non-alloy steel</option>
              <option>slag cement</option>
              <option>wire of iron</option>
              <option>paperboard</option>
              <option>cellulose fibres</option>
        
          </select>
        <select>
          <option>yearly</option>
          <option disabled>--- years---</option>
              <option>2022</option>
              <option>2023</option>
              <option>2024</option>
              
           </select> 
           <select>
          <option>monthly</option>
             <option disabled>--- Months ---</option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>             
</select>

        <select>
          <option>kenya</option>
          <option>Region</option>
          <option disabled>--- Kenya Regions ---</option>
              <option>Central</option>
              <option>Western</option>
              <option>Eastern</option>
              <option>Nairobi</option>
              <option>Coast</option>
              <option>Rift Valley</option>
              <option>Nyanza</option>
              <option>None</option>
          <option>County</option>
        </select>
        <select>
          <option>African Countries</option>
          <option>Tanzania</option>
          <option>Burudundi</option>
          <option>Uganda</option>
          <option>Zambia</option>
          <option>Congo</option>
         
        </select>
         {/* <div className="country-search">
              <input 
                type="text" 
                placeholder="Search for a country..." 
                value={searchCountry} 
                onChange={handleSearch} 
              />
              <select>
                <option disabled>--- Matching Countries ---</option>
                {filteredCountries.map((country, index) => (
                  <option key={index}>{country}</option>
                ))}
              </select> */}
            {/* </div> */}
        <button type="submit">Search</button>
      </form>
       <div style={{ backgroundImage: "url()" }}></div>
    </div>
  </div>
</div>
    );
}


export default Homepage;
