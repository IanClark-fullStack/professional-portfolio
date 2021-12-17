import VoidShape from './assets/VoidShape';
import ArrowShape from './assets/ArrowShape';
import HeaderItems from './HeaderItems';
const headerInfoList = ['Full Stack Developer', 'Bootcamper', 'Shirt Tucker', <VoidShape />, <ArrowShape />];

export default function HeaderInfo() {
    return (
        <section className='flex flex-col mx-auto md:my-12 mt-14 text-center'>
            <h1 className='text-6xl font-display md:text-6xl'>Ian Clark</h1>

            <HeaderItems headerInfoProp={headerInfoList} />

        </section>
    )
};