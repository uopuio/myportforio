export default function Services(){
    if(process.browser){
        document.body.classList.remove('bg-stone-900')
        // document.body.classList.add('bg-gradient-to-r from-cyan-500 to-blue-500')
    document.body.classList.add("bg-gradient-to-r","bg-gradient-to-r","from-cyan-500", "to-blue-500")
    }
    return(
        <div className="">
            


            <h1 className="text-white">Services</h1>
            <div className="bg-white h-96 w-96 rounded">
            <ul>
                <a href="https://avshindan.vercel.app/">
                    <li className="rounded border w-28 h-28">
                        <img src="/images/027ec577-1ac9-4367-b523-056c55c02d2f.png"
                        width={93}
                        height={83}
                        />
                        <h2>av女優診断</h2>
                        
                    </li>
                </a>
            </ul>
            </div>
        </div>
    )
}