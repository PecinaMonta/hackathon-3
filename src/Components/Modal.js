import './lightbox.css'


const Modal = ({clickedImg, handleRotationRight, handleRotationLeft, setClickedImg}) => {

const handleClick = (e) => {
    if(e.target.classList.contains("dismiss")) {
        setClickedImg(null);
    }
};

    return (
    <div className="overlay dismiss" onClick={handleClick}>
        <img src={clickedImg}/>
        <span className="dismiss" onClick={handleClick}>X</span>
        <div onClick={handleRotationLeft} className="overlay-left"><h4>Prev</h4></div>
        <div onClick={handleRotationRight} className="overlay-right"><h4>Next</h4></div>
    </div>

)};

export default Modal;