import react from 'react'
function Projectcard(props){
    console.log(props)
    return(
        <div>{props.title}
        <p>{props.description}</p>
        <a href={props.link}><p>view code</p></a>
        </div>
    )
}
export default Projectcard