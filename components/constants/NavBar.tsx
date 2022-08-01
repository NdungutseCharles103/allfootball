import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { BiCaretDown, BiCaretDownSquare, BiChevronDown, BiMoon, BiSun } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { useApp } from './contexts/AppContext';
import { GiPc } from 'react-icons/gi'

const NavBar = () => {
    const { user } = useSelector((state: any)=> state.user);
    const { themeClass, setIsDark, isDark } = useApp();

  return (
    <div className={`flex w-full ${themeClass.bg} ${themeClass.border} items-center justify-between py-3 px-4 border-b-2`}>
        <div className='phone:scale-100 scale-75 flex items-center' >
            <Link href='/'>
                <>
                <Image className='cursor-pointer' src="/logo.png" alt="" width={80} height={26}/>
                </>
            </Link>
        </div>
        {user?(
            <div className=""></div>
        ):(
            <div className="flex phone:px-4 items-center phone:scale-100 scale-75">
                <Link href={`user/login`}>
                    <button className={`py-1 text-sm flex items-center justify-center duration-300 border-${themeClass.color1}/90 border-2 text-${themeClass.color1} px-4
                    hover:${themeClass.bg1} hover:${themeClass.textAlt}`}>
                        <p>Login</p>
                    </button>
                </Link>
                <p className={`mx-3 ${themeClass.text}`}>OR</p>
                <Link href={`user/signup`}>
                    <button className={`${themeClass.bg1} py-1 text-sm flex items-center justify-center duration-300 border-${themeClass.color1}/90 border-2 px-4
                    hover:${themeClass.bg1}/90 ${themeClass.text}`}>
                        Signup
                    </button>
                </Link>
                    {isDark?(
                    <BiSun onClick={()=> setIsDark(false)} className={`${themeClass.text} text-2xl ml-4 cursor-pointer`} />
                     ):(
                        <BiMoon onClick={()=> setIsDark(true)} className={`${themeClass.text} text-2xl ml-4 cursor-pointer`} />
                     )}
                    {/* {isDark==='system'&&(
                        <GiPc  onClick={()=> setIsDark('system')} className={`${themeClass.text} text-3xl ml-4 cursor-pointer`} />
                    )}
                    <BiCaretDown className='mt-3' />  */}
            </div>
        )}
    </div>
  )
}

export default NavBar