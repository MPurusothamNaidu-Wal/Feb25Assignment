const Card = props => {
    return (
        <div style={{ margin: '1em' }} className="card" >
            <h3 style={{ fontWeight: 'bold', color:'black' }} > {props.name} </h3>
            <img alt="avatar" style={{ width: '90px' }} src={props.avatar_url} />
            <h5>
            <a href={props.blog}> {props.blog} </a>
            </h5>
        </div>
    )
}
export default Card;