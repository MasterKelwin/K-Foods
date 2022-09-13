import { Wrapper, DivImgPizza, DivInfo } from './style';
import Flavors from '../Cards.json';

type Props = typeof Flavors[0];

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
                    <li>{props.category.label}</li>
                    <li>Massa {props.pasta}</li>
                    <li>Serve {props.serving} pessoa{props.serving === 1 ? '' : 's'}</li>
                    <li>R$ {props.price},00</li>
                </ul>
            </DivInfo>
        </Wrapper>
    )
}