import "./cat-image.css"

import { Component } from "react";

class CatImage extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            heartStyle: this.props.favorite ? 
            "fa-solid fa-heart heart_icon heart_clicked" : 
            "fa-regular fa-heart heart_icon",
        };
    }

    pointerOverHeart = () =>
    {
        if (this.state.heartStyle.indexOf("heart_clicked") === -1)
        {
            this.setState({heartStyle: "fa-solid fa-heart heart_icon"});
        }
    }

    pointerLeftHeart = () =>
    {
        if (this.state.heartStyle.indexOf("heart_clicked") === -1)
        {
            this.setState({heartStyle: "fa-regular fa-heart heart_icon"});
        }
    }

    clickedHeart = () =>
    {
        this.props.onToggleFav();
        if (this.state.heartStyle.indexOf("heart_clicked") === -1)
        {
            this.setState({heartStyle: "fa-solid fa-heart heart_icon heart_clicked"});
            const catObj = JSON.stringify({id: this.props.id, url: this.props.url, favorite: true});
            localStorage.setItem(this.props.id, catObj);
        }
        else
        {
            this.setState({heartStyle: "fa-solid fa-heart heart_icon"});
            localStorage.removeItem(this.props.id);
        }
    }

    render()
    {
        const {url, id} = this.props;
        const {heartStyle} = this.state;
        return (
            <div className="cat_wrap">
                    <img className="cat" src={`${url}` } alt="cat" key={id}/>
                    <i className={heartStyle}
                    onPointerOver={this.pointerOverHeart}
                    onPointerLeave={this.pointerLeftHeart}
                    onClick={this.clickedHeart}></i>
                </div>
        )
    }
}

export default CatImage;