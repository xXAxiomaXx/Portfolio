import { useEffect, useState } from "react"

export default function DarkMode() {

    let [darkMode,setDarkMode] = useState(true)

    useEffect(() => {
        if(darkMode){
            document.documentElement.classList.add('dark')
        } else{
            document.documentElement.classList.remove('dark')
        }
    },[darkMode])

    return (
        <button onClick={() => {
            setDarkMode(!darkMode)
        }}>
        {darkMode ?<i className='bx bx-sun text-2xl text-white hover:text-black transition ease-in-out duration-300'></i> : <i className='bx bx-moon text-2xl text-black hover:text-white transition ease-in-out duration-300' ></i>}
        </button>
    )
}

