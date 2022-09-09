import { Wrapper, ComputersList, EachComputer } from './style';
import Computers from './Computers.json';
import { useState } from 'react';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

interface Props {
    selectedComputer: string,
    setSelectedComputer: React.Dispatch<React.SetStateAction<string>>
}

function Computer({selectedComputer, setSelectedComputer}:Props) {
    const [open, setOpen] = useState<boolean>(false);
    const computerName = Computers.find(computer => computer.value === selectedComputer)?.name;
    return (
        <Wrapper 
            onClick={() => setOpen(!open)} 
            open={open} 
            onBlur={() => setOpen(false)}
            >
            <span>
                {selectedComputer ? computerName : "Ordenar por"}
            </span>
            {open ? <MdKeyboardArrowUp/> : < MdKeyboardArrowDown/>}
            <ComputersList open={open}>
                {Computers.map(computer => (
                    <EachComputer 
                        key={computer.value} 
                        open={open}
                        onClick={() => setSelectedComputer(computer.value)}
                        >
                    {computer.name}
                    </EachComputer>
                ))}
            </ComputersList>
        </Wrapper>
    );
}
export default Computer;