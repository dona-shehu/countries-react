
import React from "react";
import data from './data'

const DisplayCountries = (props)=>{
    let filteredCountries = data.filter((country) => {
        if (props.countries === "") return country;
        else return country.name.toLowerCase().includes(props.countries);
    })
    return (
        <>
        {filteredCountries.map((country, index) => {
                return (
                    <>
                        <div className='img-div'>
                            <img key={index} src={country.flag} alt="flag" />
                        </div>
                        <h3>Population :{country.name}</h3>
                        <p>Population: {country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                        <p>Region: {country.region}</p>
                        <p>Capital: {country.capital}</p>
                    </>
                )
            })
        }
        </>
    )
}
export default DisplayCountries;