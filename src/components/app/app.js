// import "./app.css";

import {Component} from 'react';

import getCatsFromAPI from "../../services/CatsService";
import Menu from "../menu/menu";
import ImageWrapper from "../image-wrapper/image-wrapper";

class App extends Component
{
    constructor(props)
    {
        super(props);
        this.getCats();
    }
    
    state = {
        cats: [],
        activeMenuTab: 0
    }

    getCats = () =>
    {
        getCatsFromAPI().then(res => {
            this.setState(
                {cats: res}
            )
        })
    }

    changeTab = (id) => {
        this.setState({activeMenuTab: id});
    }

    onToggleFav = (id) =>
    {
        this.setState(({cats}) => {
            return {cats: cats.map(item => {
                    if (item.id === id) 
                    {
                        return {...item, favorite: !item.favorite }
                    }
                    return item;
                }
            )}
        });
    }

    render()
    {
        const filteredCats = this.state.activeMenuTab ? this.state.cats.filter(item => item.favorite) : this.state.cats; 
        return (
            <>
                <Menu changeTab={(id) => this.changeTab(id)}/>
                <ImageWrapper cats={filteredCats} onToggleFav={(id) => this.onToggleFav(id)}/>
            </>    
        );    
    }
}

export default App;