import { Wrapper } from './style';
import Computers from './Computers.json';


export default function Computer() {
    return (
        <Wrapper>
            <span>Ordenar por:</span>
            {Computers.map(computer => (
                <div key={computer.value}>
                {computer.name}
                </div>
            ))}
        </Wrapper>
    )
}