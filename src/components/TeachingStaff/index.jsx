import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import { TEACHERS } from './data'
import './index.scss'

const TeachingStaff = () => {
	const ref = useRef(null)

	return (
		<div className='teachers'>
			<div className='wrapper'>
				<div className='cont'>
					<h2>Педагогический состав</h2>
					<div className='slider'>
						<div className='circle'></div>
						<Swiper
							className='mySwiper'
							slidesPerView={window.innerWidth < 768 ? 1 : 1.5}
							spaceBetween={20}
							loop={true}
							onBeforeInit={(swiper) => (ref.current = swiper)}>
							{TEACHERS.map((teacher) => (
								<SwiperSlide key={teacher.id}>
									<Teacher teacher={teacher} />
								</SwiperSlide>
							))}
						</Swiper>
					</div>
					<SliderControllers openPrevious={() => ref.current?.slidePrev()} openNext={() => ref.current?.slideNext()} />
				</div>
			</div>
		</div>
	)
}

const Teacher = ({ teacher }) => (
	<>
		<div className='image'>
			<LazyLoadImage
				src={teacher.imageSrc}
				placeholderSrc={teacher.placeholderSrc}
				width={'100%'}
				height={'100%'}
				alt={teacher.name}
			/>
		</div>
		<div className='text'>
			<h5>{teacher.name}</h5>
			<span>{teacher.role}</span>
		</div>
	</>
)

const SliderControllers = ({ openPrevious, openNext }) => (
	<div className='arrows'>
		<div className='arrow_wrapper' onClick={openPrevious}>
			<ArrowLeftIcon />
		</div>
		<div className='arrow_wrapper' onClick={openNext}>
			<ArrowRightIcon />
		</div>
	</div>
)

const ArrowLeftIcon = () => (
	<svg className='rotate' width='17' height='30' viewBox='0 0 17 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
		<path
			d='M14 13C12.8954 13 12 13.8954 12 15C12 16.1046 12.8954 17 14 17L14 13ZM16.4142 16.4142C17.1953 15.6332 17.1953 14.3668 16.4142 13.5858L3.68629 0.857865C2.90524 0.0768166 1.63891 0.0768167 0.857863 0.857866C0.0768144 1.63891 0.0768145 2.90524 0.857863 3.68629L12.1716 15L0.857865 26.3137C0.0768167 27.0948 0.0768168 28.3611 0.857866 29.1421C1.63891 29.9232 2.90524 29.9232 3.68629 29.1421L16.4142 16.4142ZM14 17L15 17L15 13L14 13L14 17Z'
			fill='#5277F7'
		/>
	</svg>
)

const ArrowRightIcon = () => (
	<svg width='17' height='30' viewBox='0 0 17 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
		<path
			d='M14 13C12.8954 13 12 13.8954 12 15C12 16.1046 12.8954 17 14 17L14 13ZM16.4142 16.4142C17.1953 15.6332 17.1953 14.3668 16.4142 13.5858L3.68629 0.857865C2.90524 0.0768166 1.63891 0.0768167 0.857863 0.857866C0.0768144 1.63891 0.0768145 2.90524 0.857863 3.68629L12.1716 15L0.857865 26.3137C0.0768167 27.0948 0.0768168 28.3611 0.857866 29.1421C1.63891 29.9232 2.90524 29.9232 3.68629 29.1421L16.4142 16.4142ZM14 17L15 17L15 13L14 13L14 17Z'
			fill='#5277F7'
		/>
	</svg>
)

export default TeachingStaff
