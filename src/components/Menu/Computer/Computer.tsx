import { Wrapper, ComputersList, EachComputer } from './style';
import Computers from './Computers.json';
import { useState } from 'react';


export default function Computer() {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <Wrapper onClick={() => setOpen(!open)} open={open}>
            <span>Ordenar por:</span>
            <ComputersList open={open}>
                {Computers.map(computer => (
                    <EachComputer key={computer.value} open={open}>
                    {computer.name}
                    </EachComputer>
                ))}
            </ComputersList>
        </Wrapper>
    )
}