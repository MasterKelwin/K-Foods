import { Wrapper, DivImgPizza, DivInfo } from './style';

//type Props = typeof Flavors[0];

interface Props {
    title: string,
    description: string,
    img: string,
    pasta: string,
    serving: number,
    price: number,
    id: number,
    category: {
        id: number,
        label: string
    },
    setFilter: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Card(props: Props) {
	return (
		<Wrapper>
			<DivImgPizza>
				<img src={props.img} alt={props.title} />
			</DivImgPizza>
			<DivInfo>
				<div>
					<h1>{props.title}</h1>
					<p>{props.description}</p>
				</div>
				<ul>
					<li 
						onClick={() => props.setFilter(props.category.id)}                    
					>{props.category.label}</li>
					<li>Massa {props.pasta}</li>
					<li>Serve {props.serving} pessoa{props.serving === 1 ? '' : 's'}</li>
					<li>R$ {props.price},00</li>
				</ul>
			</DivInfo>
		</Wrapper>
	);
}