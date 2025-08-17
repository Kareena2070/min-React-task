import profilepic from "./assets/profile.jpeg"
// import ProfileCard from "./ProfileCard"

import { ProfileCard,ProfileCard1 } from "./ProfileCard"

function App() {
 
  return (
    <>

    

    {/* task 1.1 */}
    <ProfileCard
        name = "Kareena Yadav"
        bio = "I am fulltime student at Navgurukul"
        image = {profilepic}
    />

    <ProfileCard1
        name="Kareena Yadav"
        bio="Full-time student at NavGurukul"
        // image="https://via.placeholder.com/150"
        image={profilepic}
        skills={["React", "Bootstrap", "Python"]}
        hobbies={["Coding", "Drawing", "Music"]}
    />

    <ProfileCard 
        name="Rahul Singh"
        bio="Loves coding and problem solving"
        image={profilepic}
    />
    <ProfileCard 
        name="Simran Kaur"
        bio="Frontend Developer from Delhi"
        image={profilepic}

    />

  
    

    </>
  )
}


export default App
