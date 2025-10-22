
import axios from 'axios';
import { useState } from 'react';
function Api(){

    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const response = await axios.get('https://picsum.photos/v2/list');
            console.log('Data from API:', response.data);

            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    return (
        <>
            <div className="api-container" >
                <button className="api-button" onClick={getData}>Get data</button>
                <div>
                    <h3 className="api-heading" >Data from API will be shown here</h3>
                    <div className="api-grid">
                    {data.map((item) => (
                        <div key={item.id} className="api-card">
                            <p>Author: {item.author}</p>
                            <img src={item.download_url} alt={item.author} style={{ width: '200px' }} />
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Api;