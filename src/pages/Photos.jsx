import React, {useContext} from "react"

import {Context} from "../Context"
import Image from "../components/Image"
import {getClass} from "../utils"

function Photos() {
    const {allPhotos} = useContext(Context)

    const imageElements = allPhotos.map((image, index) => (
        <Image
            key={image.id}
            img={image}
            className={getClass(index)}
        />
    ))

    return (
        <main className="photos">
            {imageElements}
        </main>
    )
}

export default Photos
