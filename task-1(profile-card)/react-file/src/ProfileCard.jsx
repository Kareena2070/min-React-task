
// function ProfileCard(){
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
 
 function ProfileCard1({ name, bio, image, skills, hobbies }) {
  return (
    <div className="Card">
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <p>{bio}</p>

      <h4>Skills:</h4>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h4>Hobbies:</h4>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}

export{ProfileCard, ProfileCard1} ;

ProfileCard1.defaultProps = {
    skills: ["No skills added"],
    hobbies: ["No hobbies added"],
  };

 
//  export default ProfileCard;