import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div className='w-full bg-slate-100 h-20 flex items-center justify-center px-5'>
            <header className='container mx-auto flex items-center justify-between'>
                <Link href="/" className='text-[24px] font-[600]'><span className='text-textBase'>Linked</span> Jobs</Link>

                <Link>
                    <button className='btn px-7 py-1 bg-textBase hover:bg-textBase focus:bg-textBase text-white border-none outline-none rounded-lg'>Login</button>
                </Link>
            </header>
        </div>
    );
};

export default Header;
