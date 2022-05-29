import "./cat-image.css"

import { Component } from "react";

class CatImage extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            heartStyle: "fa-regular fa-heart heart_icon",
        };
    }

    poineterOverHeart = () =>
    {
        if (this.state.heartStyle.indexOf("heart_clicked") === -1)
        {
            this.setState({heartStyle: "fa-solid fa-heart heart_icon"});
        }
    }

    poineterLeftHeart = () =>
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
            localStorage.setItem(this.props.id, this.props.url);
        }
        else
        {
            this.setState({heartStyle: "fa-solid fa-heart heart_icon"});
            localStorage.removeItem(this.props.id, this.props.url);
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
                    onPointerOver={this.poineterOverHeart}
                    onPointerLeave={this.poineterLeftHeart}
                    onClick={this.clickedHeart}></i>
                </div>
        )
    }
}

export default CatImage;