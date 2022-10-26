// import { Component } from "react";
import { Monster } from "../../App";
import Card from "../card/card.component";
import './card-list.styles.css';

type CardListProps = {
    monsters: Monster[]
}

const CardList = ({ monsters }: CardListProps) => {
    return (
        <div className="card-list">
            {monsters.map((monster) => {
                return <Card key={monster.id} monster={monster} />
            })}
        </div>
    )
}

// class CardList extends Component {
//     render() {
//         const { monsters } = this.props;
//         return (
//             <div className="card-list">
//                 {monsters.map((monster) => {
//                     return <Card monster={monster} />
//                 })}
//             </div>
//         )
//     }
// }

export default CardList;