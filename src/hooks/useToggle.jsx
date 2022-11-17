import { useCallback } from "react";
import { useState } from "react"

const useToggle = ( initialState = true ) => {
    const [isToggled, setIsToggled] = useState(initialState)

    const setToggle = useCallback(() => { setIsToggled((state) => !state), []});

    return [isToggled, setToggle]

}

export default useToggle;