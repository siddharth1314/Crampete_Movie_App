function Modal(props) {
    return (
        <div >
            <div className="backdrop-div">
            <div className="modal-div">
                <h1 className="title-div">TITLE -  "{props.title}"</h1>
                <h3 className="date-div">RELEASE DATE -  {props.date}</h3>
                <div className="sub-div">
                    {
                        (props.image !== null) ? (<img className="backdrop-image" src={`https://image.tmdb.org/t/p/original/${props.image}`}></img>) : (<img className="backdrop-image" src='https://www.careandshare-ut.org/wp-content/uploads/2020/09/image-coming-soon.jpg'></img>)
                    }
                    
                    <div className="side-div">
                        <h2 className="overview-div">OVERVIEW:</h2>
                        <p className="paragraph-div">{props.overview}</p>
                        <h2 className="language-div">LANGUAGE - </h2>
                        <h2 className="paragraph-div">"{props.language}"</h2>
                        <h2 className="popularity-div">POPULARITY - </h2> 
                        <h2 className="paragraph-div">{props.popularity}*</h2>
                        <h2 className="rating-div">RATING - </h2> 
                        <h2 className="paragraph-div">{props.rating}*</h2>
                    </div>
                </div>
                <img className="close-button" src="https://www.freeiconspng.com/thumbs/close-button-png/cancel-close-button-png-11.png" onClick={() => { props.close(false) }}></img>
            </div>
            </div>
        </div>
    )
}
export default Modal