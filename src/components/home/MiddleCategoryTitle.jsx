

const MiddleCategoryTitle=(props)=>{
    return (
        <>
        <div style={{display:'flex',flexDirection:'column', alignItems:'center' , gap:'20px'}}>
            <div className="small-red-title">{`${props.mainTitle}`} </div>
            <div className="big-normal-title"> {`${props.regularTitle}`} </div>
        </div>
        </>
    );
}

export default MiddleCategoryTitle;