import { Wrapper } from './style';
import filters from './filters.json';
import Button from '../../Button/button';

type IOption = typeof filters[0];

interface Props {
    filter: string | null,
    setFilter: React.Dispatch<React.SetStateAction<string | null>>
}

export default function Filters({ filter, setFilter }: Props) {
    function selectOption(option: IOption) {
        setFilter(option.id);
    }

    function cleanOption() {
        setFilter('');
    }
    
    return (
        <Wrapper>
            {filters.map(option => {
                if(option.id !== filter) {
                return <li key={option.id} >
                    <Button onClick={() => selectOption(option)}>
                        {option.label}
                    </Button>
                </li>
                }
                if(option.id === filter) {
                    return <li key={option.id} >
                    <Button onClick={() => cleanOption()} theme={true}>
                        {option.label}
                    </Button>
                </li>
                }
                return undefined;
            })}
        </Wrapper>
    )
}