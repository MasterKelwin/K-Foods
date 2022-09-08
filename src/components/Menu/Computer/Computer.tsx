import { Wrapper, ComputersList, EachComputer } from './style';
import Computers from './Computers.json';


export default function Computer() {
    return (
        <Wrapper>
            <span>Ordenar por:</span>
            <ComputersList>
                {Computers.map(computer => (
                    <EachComputer key={computer.value}>
                    {computer.name}
                    </EachComputer>
                ))}
            </ComputersList>
        </Wrapper>
    )
}