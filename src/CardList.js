import Card from "./Card"
const CardList = props => {
    return(
        <div className="CardList">
                {props.cards.map(card => (
                    <Card {...card} />
                ))}
        </div>
    
    )
    
}
export default CardList