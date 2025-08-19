import { useEffect , useState} from "react";


function FetchAPI(){

    const [posts, setpost] = useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data =>setpost(data))

    }, [])


    return(
        <div>
            <h1>Fetch the data</h1>
            <div>
                {posts.map(t =>(
                    <p key={t.id}>{t.title}</p>
                ))}
            </div>
        </div>
    );
}

export default FetchAPI