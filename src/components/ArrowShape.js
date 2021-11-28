import arrowImg from '../images/downArrow.gif';

export default function ArrowShape() {
    return (
        <img key='img' src={arrowImg} alt={'Scroll Down'} className='mx-auto'/>
    )
}