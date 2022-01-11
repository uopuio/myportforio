import Image from 'next/image'
import Link from 'next/link'

export default function Header(){
    return(
         <div className="bg-black-500 w-full h-80 text-white">
      <div className="flex h-80">
        <div className="bg-stone-800 w-2/3 pl-10 py-30 pt-5">
         <img
            src="/images/IMG_0397 1me.png"
            width={93}
            height={83}
            className=""
         />
            <h1 className="text-amber-400 text-3xl font-bold ">石倉圭悟</h1>
            <p className="text-2xl font-bold py-5 w-34">フロントエンドエンジニア</p>
            <p className="text-2xl font-bold w-">情報経営イノベーション<br/>専門職大学一年</p>
        </div>
       
       <div className="bg-amber-500 w-1/3">
        <ul className="flex space-x-4 m-auto py-32 justify-center">
         <li><Link href="https://www.instagram.com/keigo_1129_/"><Image
         src="/images/akar-icons_instagram-fillinstaicon.png"
         width={43}
         height={43}
         /></Link></li>

         <li><Link href="https://www.instagram.com/keigo_1129_/"><Image
         src="/images/eva_twitter-filltwitter.png"
         width={43}
         height={43}
         /></Link></li>
         <li><Link href="https://github.com/uopuio"><Image
         src="/images/akar-icons_github-fillGit.png"
         width={43}
         height={43}
         
         /></Link></li>
        </ul>
       </div>
      </div>
       </div>
    )}