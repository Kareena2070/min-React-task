//     return(
//         <div className="Card">
//             <img src={Profilepic} alt="Kareena Yadav" />
//             <h1>Kareena Yadav</h1>
//             <p>I am a fulltime student at Navgurukul</p>
//         </div>
//     );
// }


function ProfileCard(items){
    return(
        <div className="Card">
            <img src={items.image} alt={items.name} />
            <h1>{items.name}</h1>
            <p>{items.bio}</p>
        </div>
    );
 }
 
 
 export default ProfileCard