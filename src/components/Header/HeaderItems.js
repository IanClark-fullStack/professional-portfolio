export default function HeaderItems({ headerInfoProp }) {
    console.log(headerInfoProp);
    return (
        <ul className='font-display md:text-4xl md:leading-loose'>{
            headerInfoProp.map((item) => 
                <li key={item} className='my-4'>{item}</li>
            )
        }</ul>
    )
};