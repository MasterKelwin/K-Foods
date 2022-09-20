import { Wrapper } from './style';
import filters from './filters.json';
import Button from '../../Button/button';

type IOption = typeof filters[0];

interface Props {
    filter: number | null,
    setFilter: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filters({ filter, setFilter }: Props) {
	function selectOption(option: IOption) {
		setFilter(option.id);
	}

	function cleanOption() {
		setFilter(null);
	}
    
	return (
		<Wrapper>
			{filters.map(option => {
				if(option.id !== filter) {
					return <li key={option.id} >
						<Button onClick={() => selectOption(option)}>
							{option.label}
						</Button>
					</li>;
				}
				if(option.id === filter) {
					return <li key={option.id} >
						<Button onClick={() => cleanOption()} theme={true}>
							{option.label}
						</Button>
					</li>;
				}
				return undefined;
			})}
		</Wrapper>
	);
}