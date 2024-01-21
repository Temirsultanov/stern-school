import React, { useEffect } from 'react'
import { useOnClickOutside } from '../../lib/useOnClickOutside'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css' // T
import './index.scss'

let photos = [
	'./images/gallery/image1.png',
	'./images/gallery/image3.png',
	'./images/gallery/image4.png',
	'./images/gallery/image5.png',
	'./images/gallery/image6.png',
	'./images/gallery/image4.png',
	'./images/gallery/image5.png',
	'./images/gallery/image6.png',
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
		<div className='gallery'>
			<div className='wrapper'>
				<div className='cont'>
					{lightbox !== '' && (
						<Lightbox
							mainSrc={lightbox}
							nextSrc={null}
							prevSrc={null}
							onCloseRequest={() => setLightbox('')}
							onMovePrevRequest={() => null}
							onMoveNextRequest={() => null}
						/>
					)}
					{fullLightbox && (
						<Lightbox
							mainSrc={photos[index]}
							nextSrc={photos[(index + 1) % photos.length]}
							prevSrc={photos[(index + photos.length - 1) % photos.length]}
							onCloseRequest={() => setFullLightbox(false)}
							onMovePrevRequest={() => setIndex((index + photos.length - 1) % photos.length)}
							onMoveNextRequest={() => setIndex((index + 1) % photos.length)}
						/>
					)}

					<div className='grid'>
						<div className='row'>
							{photos1.map((photo, index) => (
								<img
									onClick={() => (photo.url.includes('image2') ? null : setLightbox(photo.url))}
									src={photo.url}
									key={index}
								/>
							))}
						</div>
						<div className='row'>
							{photos2.map((photo, index) => (
								<img onClick={() => setLightbox(photo.url)} src={photo.url} key={index} />
							))}
						</div>
						<div className='row'>
							{photos3.map((photo, index) => (
								<img onClick={() => setLightbox(photo.url)} src={photo.url} key={index} />
							))}
						</div>
					</div>
					<button onClick={() => setFullLightbox(true)}>Посмотреть еще</button>
				</div>
			</div>
		</div>
	)
}

export default Gallery
