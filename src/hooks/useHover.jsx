import {useState, useEffect, useRef} from "react"

function useHover() {
    const [isHovered, setIsHovered] = useState(false)
    const listenerRef = useRef(null)

    function enter() {
        setIsHovered(true)
    }

    function leave() {
        setIsHovered(false)
    }

    useEffect(() => {
        listenerRef.current.addEventListener('mouseenter', enter)
        listenerRef.current.addEventListener('mouseleave', leave)

        return () => {
          listenerRef.current.removeEventListener('mouseenter', enter)
          listenerRef.current.removeEventListener('mouseleave', leave)
        }
    }, [])

    return [isHovered, listenerRef]
}

export default useHover
