import { Wrapper } from './style';
import Card from './Card/Card';
import Flavors from './Cards.json';
import { useEffect, useState } from 'react';

interface Props {
    search: string,
    filter: number | null,
    setFilter: React.Dispatch<React.SetStateAction<number | null>>,
    selectedComputer: string
}

export default function Cards({search, filter, setFilter, selectedComputer}: Props) {
    const [list, setList] = useState(Flavors);

    function searchRender(title: string) {
        const regex = new RegExp(search, 'i');
        return regex.test(title);
    }

    function filterRender(id: number) {
        if(filter !== null) return filter === id;
        return true;
    }

    function order(list: typeof Flavors) {
        switch(selectedComputer){
            case 'qtd_pessoas' :
                return list.sort((a, b) => a.serving > b.serving ? 1 : -1);
            case 'preco' :
                return list.sort((a, b) => a.price > b.price ? 1 : -1);
            default :
                return list;
        }
    }

    useEffect(() => {
        const newList = Flavors.filter(item => searchRender(item.title) && filterRender(item.category.id));
        setList(order(newList));
    }, [search, filter, selectedComputer]);


    return (
        <Wrapper>
            {list.map(flavor => (
                <Card  key={flavor.id} {...flavor} setFilter={setFilter}
                />
            ))}
        </Wrapper>
    )
}
