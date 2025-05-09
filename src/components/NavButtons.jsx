import "./NavButtons.css"

const NavButtons = ({ items, functions }) => {
    return (
        <div className='nav-button-container'>
            {
                items.map((item, index)=>(
                    <div key={index}>
                        <button className='nav-button' onClick={()=>functions[index]()} >
                            {item}
                        </button>
                    </div>
                ))
            }
        </div>
    );
};

export default NavButtons;