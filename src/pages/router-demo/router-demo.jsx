import { useEffect } from 'react';
import { Outlet, useParams } from 'react-router';
import { Link, useSearchParams } from 'react-router-dom';
import Title from '../../components/title/title';

export const RouteInitial = () => {
    return (
        <div>
            <h2>Initial content</h2>
        </div>
    );
};

export const Route1 = () => {
    return (
        <div>
            <h2>Route 1</h2>
        </div>
    );
};

export const Route2 = () => {
    return (
        <div>
            <h2>Route 2</h2>
        </div>
    );
};

export const RouteParam = () => {
    const { id } = useParams();

    useEffect(() => {
        console.log(`Request Ajax ${id}`);
    }, [id]);

    return (
        <div>
            <h2>Param {id}</h2>
        </div>
    );
};

export const SearchParam = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const firstname = searchParams.get('firstname');
    const lastname = searchParams.get('lastname');

    return (
        <div>
            <h2>Search</h2>
            <p>{firstname} {lastname}</p>
        </div>
    )
}

const RouterDemo = () => {
    return (
        <main>
            <Title text='Demo Router' />
            <ul>
                <li><Link to='route1'>route1</Link></li>
                <li><Link to='route2'>route2</Link></li>
                <li><Link to='param/42'>param/42</Link></li>
                <li><Link to='param/1337'>param/1337</Link></li>
                <li><Link to='search?firstname=Zaza&lastname=Vanderquack'>search?firstname=Zaza&lastname=Vanderquack</Link></li>
                <li><Link to='search?firstname=Della&lastname=Duck'>search?firstname=Della&lastname=Duck</Link></li>
            </ul>
            <Outlet />
        </main>
    );
};

export default RouterDemo;