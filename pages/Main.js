import Link from 'next/link'


export default function Main() {
  if(process.browser){
    document.body.classList.add('bg-stone-900')
    document.body.classList.remove("bg-gradient-to-r","bg-gradient-to-r","from-cyan-500", "to-blue-500")}
    // document.body.classList.add('bg-gradient-to-r from-cyan-500 to-blue-500')
  return (
    <div className='h-max bg-black-500 text-white bg-stone-900 '>
    
    <div clasName="m-48">
      <ul className="my-auto mx-auto flex w-96 flex-wrap space-4 p-0 py-20 ">
        <Link href="/Services">
          <li className="w-40 h-28 bg-gradient-to-r from-cyan-500 to-blue-500 rounded text-center mr-3 mt-3 pt-9">Services</li>
        </Link>
        <Link href="">
          <li className="w-40 h-28 bg-gradient-to-r from-sky-500 to-indigo-500 rounded text-center mr-3 mt-3 pt-9">Activety</li>
        </Link>
        <Link href="">
          <li className="w-40 h-28 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded text-center mr-3 mt-3 pt-6 ">Program<br/>Language</li>
        </Link>
        <Link href="">
        <li className="w-40 h-28 bg-gradient-to-r from-purple-500 to-pink-500 rounded text-center mr-3 mt-3 pt-9">About</li>
        </Link>
      </ul>
    </div>
   </div>
  )
 
}