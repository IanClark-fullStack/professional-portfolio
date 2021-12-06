export default function HeaderItems({ headerInfoProp }) {
    console.log(headerInfoProp);
    return (
        <ul className='font-display md:text-4xl md:leading-loose'>{
            headerInfoProp.map((item, index) => 
                <li key={index} className='my-4'>{item}</li>
            )
        }</ul>
    )
};