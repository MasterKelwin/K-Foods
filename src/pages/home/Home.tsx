import { Wrapper } from 'pages/home/style';
import Flavors from 'data/Flavors.json';

export default function Home() {
	let recomendedFlavors = [...Flavors];
	recomendedFlavors = recomendedFlavors.sort(() => 0.5 - Math.random()).splice(0, 3);
	
	return (
		<Wrapper>
			<h3>Recomendações do Chef</h3>
			<div>
				{recomendedFlavors.map(flavor => (
					<div key={flavor.id}>
						<div>
							<img src={flavor.img} alt={flavor.title} />
						</div>
						<button>
							Ver mais
						</button>
					</div>
				))}
			</div>
		</Wrapper>
	);
}