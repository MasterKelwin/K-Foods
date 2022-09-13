import { Wrapper } from './style';
import Card from './Card/Card';
import Flavors from './Cards.json';
import { useEffect, useState } from 'react';

interface Props {
    search: string,
    filter: number | null
}

export default function Cards({search, filter}: Props) {
    const [list, setList] = useState(Flavors);

    function searchRender(title: string) {
        const regex = new RegExp(search, 'i');
        return regex.test(title);
    }

    function filterRender(id: number) {
        if(filter !== null) return filter === id;
        return true;
    }

    useEffect(() => {
        const newList = Flavors.filter(item => searchRender(item.title) && filterRender(item.category.id));
        setList(newList);
    }, [search, filter]);


    return (
        <Wrapper>
            {list.map(flavor => (
                <Card  key={flavor.id} {...flavor}
                />
            ))}
        </Wrapper>
    )
}
