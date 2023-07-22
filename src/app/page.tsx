import Link from 'next/link'

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-evenly container mx-auto">
      <Link href="/ok/2" className='border-b-2 border-b-gray-50'>correct (notfound page)</Link>
      <Link href="/ng/2" className='border-b-2 border-b-gray-50'>inccorrect (error page)</Link>
    </main>
  )
}
