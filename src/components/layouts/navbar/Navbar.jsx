import { CartWidget } from '../../common/CartWidget/CartWidget';
import logo from './assets/NicoComputacion.png';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <>
            <nav className="">
                <div className="w-full h-20 bg-blue-600 flex overflow-hidden space-x-36">
                    <div className="">
                        <Link to="/">
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <Link to="/">
                        <button className="py-2 px-4 text-white text-2xl hover:text-3xl hover:border-b-2 hover:border-b-current ease-in duration-300 my-2">
                            Todos
                        </button>
                    </Link>
                    {/* Los siguientes links son rutas dinamicas que me limitaran los items resultantes */}
                    <Link to="category/Mac">
                        <button className="py-2 px-4 text-white text-2xl hover:text-3xl hover:border-b-2 hover:border-b-current ease-in duration-300 my-2">
                            Mac
                        </button>
                    </Link>
                    <Link to="category/Oficina">
                        <button className="py-2 px-4 text-white text-2xl hover:text-3xl hover:border-b-2 hover:border-b-current ease-in duration-300 my-2">
                            Oficina
                        </button>
                    </Link>
                    <Link to="category/Diseño">
                        <button className="py-2 px-4 text-white text-2xl hover:text-3xl hover:border-b-2 hover:border-b-current ease-in duration-300 my-2">
                            Diseño
                        </button>
                    </Link>
                    <div>
                        <Link to="/cart">
                            <CartWidget></CartWidget>
                        </Link>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    );
};
