export default function HeaderItems({ headerInfoProp }) {
    console.log(headerInfoProp);
    return (
        <ul className='font-display my-4 md:text-xl md:leading-loose'>{
            headerInfoProp.map((item, index) => 
                <li key={index} className='my-4'>{item}</li>
            )
        }</ul>
    )
};