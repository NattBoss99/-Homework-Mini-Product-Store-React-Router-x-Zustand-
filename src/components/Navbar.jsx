import { Link } from 'react-router-dom';
import useCartStore from '../store/cartStore';

const Navbar = () => {

    const cart = useCartStore((state)=>state.cart)
    
    return (
        <nav>
            <Link to='/'>Shop</Link>
            <Link to='/cart'>Cart ({cart.length})</Link>
        </nav>
    );
};
export default Navbar;