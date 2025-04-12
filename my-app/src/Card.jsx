import Profile from './assets/Profile.jpg'
const Card = ()=>{
    return(
     <div className="card">
        <img alt="profile" src={Profile} ></img>
        <h2>Elie</h2>
        <p>Software developer</p>

     </div>
    )
}
export default Card