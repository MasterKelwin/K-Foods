import { Wrapper } from './style';
import filter from './filters.json';
import Button from '../Button/button';

type IOption = typeof filter[0];

export default function Filters() {
    function selectOption(option: IOption) {}
    return (
        <Wrapper>
            {filter.map((option) => (
                <Button>{option.label}</Button>
            ))}
        </Wrapper>
    )
}