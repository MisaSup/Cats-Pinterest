import "./menu.css"

import { Component } from "react"

class Menu extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            data: [
                {text: "Все котики", active: true, id: 0},
                {text: "Любимые котики", active: false, id: 1}
            ]
        }
    }

    changeMenuTab = (id) =>
    {
        this.props.changeTab(id);
        this.setState(({data}) => ({data: data.map(item => ({...item, active: !item.active}))}))
    }

    addMenuButtons = () =>
    {
        const btns = this.state.data.map(item => {
            const btnClass = item.active ? "menu-btn active" : "menu-btn";
            return (
                <button className={btnClass} key={item.id} onClick={() => this.changeMenuTab(item.id)}>
                    {item.text}
                </button>
            )
        });
        return btns;
    }

    catCounterMessage = () =>
    {
        if (localStorage.length > 1)
        {
            return (`Вы лайкнули ${localStorage.length} котиков!`);
        }
        else if (localStorage.length === 1)
        {
            return ("Вы лайкнули одного котика c:");
        }
        return ("Вы пока не лайкнули ни одного котика :,(");
    }

    render()
    {
        return (
            <nav className="menu">
                {this.addMenuButtons()}
                <div className="cat-counter">{this.catCounterMessage()}</div>
            </nav>
        )
    }
}

export default Menu;