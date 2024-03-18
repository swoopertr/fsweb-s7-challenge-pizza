

const MiddleCategoryTitle=(props)=>{
    return (
        <>
        <div className="middleCategoryTitle">
            <div className="small-red-title">{`${props.mainTitle}`} </div>
            <div className="big-regular-title"> {`${props.regularTitle}`} </div>
        </div>
        </>
    );
}

export default MiddleCategoryTitle;