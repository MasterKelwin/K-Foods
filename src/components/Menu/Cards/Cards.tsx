import { Wrapper } from './style';
import Card from './Card/Card';
import Flavors from './Cards.json';

export default function Cards() {
    return (
        <Wrapper>
            {Flavors.map(flavor => (
                <Card  key={flavor.id}
                {...flavor}
                />
            ))}
        </Wrapper>
    )
}