import "./add-more-cats.css"

const ShowMoreCats = ({addMoreCats, tab}) =>
{
    const activeTab = tab ? {display: 'none'} : {display: 'block'};
    return (
        <button onClick={addMoreCats} 
        className="more_cats"
        style={activeTab}>
            {"Больше котиков!"}
        </button>
    )
}

export default ShowMoreCats;