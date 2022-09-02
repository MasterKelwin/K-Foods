import { Wrapper } from './style';
import filter from './filters.json';

type IOption = typeof filter[0];

export default function Filters() {
    function banana(option: IOption) {}
    return (
        <Wrapper>
            {filter.map((option) => (
                <label>{option.label}</label>
            ))}
        </Wrapper>
    )
}