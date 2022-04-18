import Nav from './components/nav'
import Card from './components/card'
import data from './data'

export default function App() {
    const cards = data.map(item => {
        return (
            <Card 
            key={item.id}
            {...item}
            />
        )
    })
    return (
        <div>
        <Nav />
        {cards}
        </div>
    )
}