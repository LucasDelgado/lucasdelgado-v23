'use client'
import { useEffect, useState } from "react"

type Props = {
    mobileContent: JSX.Element | null,
    desktopContent: JSX.Element | null,
}

export const MatchMediaWrapper = ( {mobileContent, desktopContent} : Props ) => {
    const [isNarrowScreen, setIsNarrowScreen] = useState(false)
    useEffect(() => {
        const mediaWatcher = window.matchMedia("screen and (max-width: 767px)")
        setIsNarrowScreen(mediaWatcher.matches);
  
        function updateIsNarrowScreen(e : MediaQueryListEvent ) {
            setIsNarrowScreen(e.matches);
        }
        mediaWatcher.addEventListener('change', updateIsNarrowScreen)

        return function cleanup() {
            mediaWatcher.removeEventListener('change', updateIsNarrowScreen)
        }
    },[])

    return isNarrowScreen ? mobileContent : desktopContent;
}