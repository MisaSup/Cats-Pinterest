import "./image-wrapper.css";

import { Component } from "react";

import CatImage from "../cat-image/cat-image"


class ImageWrapper extends Component
{
    addImages = () =>
    {
        const cats = this.props.cats,
        onToggleFav = this.props.onToggleFav;
        const images = cats.map(item => {
            return (
                <CatImage url={item.url} id={item.id} key={item.id} onToggleFav={() => onToggleFav(item.id)}/>
            )
        });
        return  images;
    }
        
    render()
    {
        return (
            <section className="wrapper">
                {this.addImages()}
            </section>
        )
    }
}

export default ImageWrapper;

/* const objArr = [
{"breeds":[],"categories":[{"id":1,"name":"hats"}],"id":8,"url":"https://30.media.tumblr.com/tumblr_krvxbfFEsf1qa9hjso1_1280.png","width":516,"height":404},
{"breeds":[],"categories":[{"id":1,"name":"hats"}],"id":344,"url":"https://24.media.tumblr.com/tumblr_krvx7tfD0B1qa9hjso1_1280.jpg","width":1024,"height":681},
{"breeds":[],"categories":[{"id":1,"name":"hats"}],"id":202,"url":"https://30.media.tumblr.com/tumblr_krvwsxKwz51qa9hjso1_1280.png","width":510,"height":402},
{"breeds":[],"categories":[{"id":1,"name":"hats"}],"id":182,"url":"https://26.media.tumblr.com/tumblr_krvvyt91aU1qa9hjso1_1280.png","width":509,"height":344},
{"breeds":[],"categories":[{"id":1,"name":"hats"}],"id":7628,"url":"https://28.media.tumblr.com/tumblr_krvvxawUd81qa9hjso1_1280.jpg","width":378,"height":500},
{"breeds":[],"categories":[{"id":1,"name":"hats"}],"id":8292,"url":"https://30.media.tumblr.com/tumblr_krvxbfFEsf1qa9hjso1_1280.png","width":516,"height":404},
{"breeds":[],"categories":[{"id":1,"name":"hats"}],"id":800,"url":"https://24.media.tumblr.com/tumblr_krvx7tfD0B1qa9hjso1_1280.jpg","width":1024,"height":681},
{"breeds":[],"categories":[{"id":1,"name":"hats"}],"id":200,"url":"https://30.media.tumblr.com/tumblr_krvwsxKwz51qa9hjso1_1280.png","width":510,"height":402},
{"breeds":[],"categories":[{"id":1,"name":"hats"}],"id":550,"url":"https://26.media.tumblr.com/tumblr_krvvyt91aU1qa9hjso1_1280.png","width":509,"height":344},
{"breeds":[],"categories":[{"id":1,"name":"hats"}],"id":500,"url":"https://28.media.tumblr.com/tumblr_krvvxawUd81qa9hjso1_1280.jpg","width":378,"height":500}
]; */