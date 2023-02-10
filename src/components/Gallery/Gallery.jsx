import React, { useEffect } from 'react'
import { useOnClickOutside } from '../../utils/useOnClickOutside'
import './index.scss'

let photos = [
    {
        url: './images/gallery/image1.png',
    },
    {
        url: './images/gallery/image3.png',
    },
    {
        url: './images/gallery/image4.png',
    },
    {
        url: './images/gallery/image5.png',
    },
    {
        url: './images/gallery/image6.png',
    },
    {
        url: './images/gallery/image4.png',
    },
    {
        url: './images/gallery/image5.png',
    },
    {
        url: './images/gallery/image6.png',
    },
]

const photos1 = [
    {
        url: './images/gallery/image1.png',
    },
    {
        url: './images/gallery/image2.png',
    },
    {
        url: './images/gallery/image3.png',
    },
]
const photos2 = [
    {
        url: './images/gallery/image4.png',
    },
    {
        url: './images/gallery/image5.png',
    },
    {
        url: './images/gallery/image6.png',
    },
]

const photos3 = [
    {
        url: './images/gallery/image7.png',
    },
    {
        url: './images/gallery/image8.png',
    },
    {
        url: './images/gallery/image9.png',
    },
]

const Gallery = () => {
    const [lightbox, setLightbox] = React.useState('')
    const [fullLightbox, setFullLightbox] = React.useState(false)
    const [index, setIndex] = React.useState(0)
    let ref = React.useRef(null)
    let ref2 = React.useRef(null)

    useOnClickOutside(ref, () => setLightbox(''))
    useOnClickOutside(ref2, () => setFullLightbox(false))
    useEffect(() => {
        if (fullLightbox || lightbox !== '') {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'scroll'
        }
    }, [fullLightbox, lightbox])

    return (
        <div className="gallery">
            <div className="wrapper">
                <div className="cont">
                    {lightbox !== '' && (
                        <div className="lightbox">
                            <img src={lightbox} alt="" ref={ref} />
                        </div>
                    )}
                    {fullLightbox && (
                        <div className="full_lightbox">
                            <div
                                className="arrow first"
                                ref={ref2}
                                onClick={() => {
                                    if (index === 0) {
                                        return null
                                    } else {
                                        setIndex(index - 1)
                                    }
                                }}
                            >
                                <svg
                                    width="17"
                                    height="30"
                                    viewBox="0 0 17 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M14 13C12.8954 13 12 13.8954 12 15C12 16.1046 12.8954 17 14 17L14 13ZM16.4142 16.4142C17.1953 15.6332 17.1953 14.3668 16.4142 13.5858L3.68629 0.857865C2.90524 0.0768166 1.63891 0.0768167 0.857863 0.857866C0.0768144 1.63891 0.0768145 2.90524 0.857863 3.68629L12.1716 15L0.857865 26.3137C0.0768167 27.0948 0.0768168 28.3611 0.857866 29.1421C1.63891 29.9232 2.90524 29.9232 3.68629 29.1421L16.4142 16.4142ZM14 17L15 17L15 13L14 13L14 17Z"
                                        fill="#5277F7"
                                    />
                                </svg>
                            </div>
                            <img
                                ref={ref2}
                                src={photos[index].url}
                                alt={index}
                                className="main"
                            />
                            <div
                                ref={ref2}
                                className="arrow second"
                                onClick={() => {
                                    if (index + 1 === photos.length) {
                                        return null
                                    } else {
                                        setIndex(index + 1)
                                    }
                                }}
                            >
                                <svg
                                    width="17"
                                    height="30"
                                    viewBox="0 0 17 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M14 13C12.8954 13 12 13.8954 12 15C12 16.1046 12.8954 17 14 17L14 13ZM16.4142 16.4142C17.1953 15.6332 17.1953 14.3668 16.4142 13.5858L3.68629 0.857865C2.90524 0.0768166 1.63891 0.0768167 0.857863 0.857866C0.0768144 1.63891 0.0768145 2.90524 0.857863 3.68629L12.1716 15L0.857865 26.3137C0.0768167 27.0948 0.0768168 28.3611 0.857866 29.1421C1.63891 29.9232 2.90524 29.9232 3.68629 29.1421L16.4142 16.4142ZM14 17L15 17L15 13L14 13L14 17Z"
                                        fill="#5277F7"
                                    />
                                </svg>
                            </div>
                        </div>
                    )}

                    <div className="grid">
                        <div className="row">
                            {photos1.map((photo, index) => (
                                <img
                                    onClick={() =>
                                        photo.url.includes('image2')
                                            ? null
                                            : setLightbox(photo.url)
                                    }
                                    src={photo.url}
                                    key={index}
                                />
                            ))}
                        </div>
                        <div className="row">
                            {photos2.map((photo, index) => (
                                <img
                                    onClick={() => setLightbox(photo.url)}
                                    src={photo.url}
                                    key={index}
                                />
                            ))}
                        </div>
                        <div className="row">
                            {photos3.map((photo, index) => (
                                <img
                                    onClick={() => setLightbox(photo.url)}
                                    src={photo.url}
                                    key={index}
                                />
                            ))}
                        </div>
                    </div>
                    <button onClick={() => setFullLightbox(true)}>
                        Посмотреть еще
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Gallery
