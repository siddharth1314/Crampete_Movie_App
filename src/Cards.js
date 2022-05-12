import { useState } from "react";
import Modal from "./modal";

function Card(props) {
    const [testModal, setTestModal] = useState(false);
    return (
        <>
            {/* {console.log(props.data)} */}
            {((props.data.poster_path) !== null) ? (<img className="api-image" onClick={() => setTestModal(true)} src={`https://image.tmdb.org/t/p/original/${props.data.poster_path}`}></img>) : (<img className="api-image" onClick={() => setTestModal(true)} src={'https://www.careandshare-ut.org/wp-content/uploads/2020/09/image-coming-soon.jpg'} />)}
            {testModal && (<Modal title={props.data.title}
             date={props.data.release_date}
             image={props.data.backdrop_path} 
             language={props.data.original_language}
             overview={props.data.overview}
             popularity={props.data.popularity}
            rating={props.data.vote_average} 
            close={setTestModal}></Modal>)}
        </>
    )
}
export default Card
