import './App.css';
import React, { useState, useEffect, useCallback } from 'react';
import Card from './Cards';
import debounce from 'lodash/debounce';
import Loading from './Loading'

let api_key = '896c8566fc255f7c52f6ea6bd2901188&language=en-US';
let base_url = 'https://api.themoviedb.org/3';

function App() {
    const [query, setQuery] = useState("");
    const [value, setValue] = useState([])
    const [loading, setLoading] = useState(false)

    const test = async() => {
        setLoading(true)
        const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=896c8566fc255f7c52f6ea6bd2901188&with_genres=28');
        const data = await response.json();
        // console.log(data);
        setValue(data.results);
        setLoading(false)

    }
    useEffect(() => {
        // setLoading(true)
        test();
    }, [])

    const deb = useCallback(
        debounce(() => {
            search();
        }, 1000), [query]);


    const handleChange = (Text) => {
        setQuery(Text);
        deb();
    };

    const search = async() => {
        setLoading(true)
        const url = `${base_url}/search/movie?query=${query}&api_key=${api_key}`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            setValue(data.results);
            setLoading(false)
        } catch (err) {
            console.error(err);
        }
    };
    return ( <
            div >
            <
            div className = 'header' >
            <
            div className = 'hotstar-logo' >
            <
            img src = { `https://static.digit.in/default/3504982ae5469fb1f6412d408902d1b5ddb85c17.png?tr=w-1200` }
            /> < /
            div > <
            div className = 'search-box' >
            <
            img className = 'search-img'
            src = { `https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-19.png` }
            /> <
            input className = "input"
            type = "text"
            name = "query"
            placeholder = "Enter your movie..."
            value = { query }
            onChange = {
                (e) => handleChange(e.target.value)
            }
            /> { / * < button onClick = { search }
            className = 'search-button' > search < /button> */
        } <
        /div> < /
    div > <
        div className = 'header-picture' >
        <
        img src = { `https://lumiere-a.akamaihd.net/v1/images/8334ccd2ad5ca1470b3618954c46127e_1152x648_972088e1.png` }
    /> < /
    div > {
            loading ? < Loading / > : value && value.map((test) => {
                return ( <
                    >

                    <
                    Card data = { test }
                    />

                    <
                    />
                );
            })
        } <
        /div >
);
}
export default App;