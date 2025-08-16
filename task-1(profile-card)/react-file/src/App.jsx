import profilepic from "./assets/profile.jpeg"
import ProfileCard from "./ProfileCard"
function App() {
 
  return (
    <>

    {/* task 1.1 */}
    <ProfileCard
        name = "Kareena Yadav"
        bio = "I am fulltime student at Navgurukul"
        image = {profilepic}
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
