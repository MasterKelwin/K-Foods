import { Wrapper } from './style';
import filters from './filters.json';
import Button from '../Button/button';

type IOption = typeof filters[0];

export default function Filters() {
    function selectOption(option: IOption) {}
    return (
        <Wrapper>
            {filters.map(option => (
                <li key={option.id} >
                    <Button>
                        {option.label}
                    </Button>
                </li>
            ))}
        </Wrapper>
    )
}