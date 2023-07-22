import {notFound} from 'next/navigation';

export default function Page({params:{id}}: {params:{id:string}}) {
    if (id !== '1') {
        notFound();
    }
    return <div>exists</div>;
}
