// import "./app.css";

import {Component} from 'react';

import getCatsFromAPI from "../../services/CatsService";
import Menu from "../menu/menu";
import ImageWrapper from "../image-wrapper/image-wrapper";
import ShowMoreCats from '../show-more-cats/show-more-cats';

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

    addMoreCats = () =>
    {
        getCatsFromAPI().then(res => {
            this.setState(({cats}) => {
                const newArr = [...cats, ...res];
                return {cats: newArr};
            })
        })
    }

    render()
    {
        const filteredCats = this.state.activeMenuTab ? this.state.cats.filter(item => item.favorite) : this.state.cats; 
        return (
            <>
                <Menu changeTab={(id) => this.changeTab(id)}/>
                <ImageWrapper cats={filteredCats} onToggleFav={(id) => this.onToggleFav(id)}/>
                <ShowMoreCats addMoreCats={() => this.addMoreCats()} tab={this.state.activeMenuTab}/>
            </>    
        );    
    }
}

export default App;