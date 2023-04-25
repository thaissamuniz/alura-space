
import Card from './Card';
const Cards = ({ itens, styles }) => {
    return (
        <ul className={styles.galery__cards}>
            {itens.map(item => <Card key={item.id} item={item} style={styles} />)}
        </ul>
    )
}

export default Cards;