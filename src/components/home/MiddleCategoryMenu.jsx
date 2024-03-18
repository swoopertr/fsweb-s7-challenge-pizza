
const MiddleCategoryMenu=(props)=>{
    const onClick = (event) => { 
        event.preventDefault();
        props.clickFunction(event);
    };

    return (
        <>
            <ul>
                {
                    props.items.map(item =>{
                        return (
                            <li key={item}>
                                <a href="" data-id={item} onClick={onClick}>
                                    {item}
                                </a>
                            </li>
                        );
                    })
                }
                
            </ul>
        </>
    );
};
export default MiddleCategoryMenu;