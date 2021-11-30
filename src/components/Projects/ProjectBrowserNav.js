import browserBrush from './assets/browserBrush.png';
const styles = {
    fakeNav: {
        background: 'url({browserBrush})',
    },
};
export default function ProjectsBrowserNav() {
    
    return (
        <div style={styles.fakeNav} className='h-5 border-b border-indigo-900 bg-cover bg-center items-center p2 text-xs text-white mb-3'>
            <p className='ml-1 text-left'>x _</p>
        </div>

    )
}