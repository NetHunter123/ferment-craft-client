import React from 'react';
import EmblaCarousel from "@/components/modules/HeroSlider/embla/EmblaCarousel";
import styles from './HeroSlider.module.css';

const HeroSlider = () => {
	const slidesList = [
		{title:"Якісні",desc:"Харчовi добавки для продуктiв"},
		{title:"Прогресині",desc:"Методи виробництва продукції"},
		{title:"Надійні",desc:"Партнери з виготовлення та поставок"},
	];
	
	const options = {loop: true}
	const slides = slidesList.map((slide) => {
		return (
				<div className={styles.slide}>
					<h2>{slide.title}</h2>
					<p>{slide.desc}</p>
				</div>
		)
	})
	return (
		<EmblaCarousel slides={slides} options={options}/>
	);
};

export default HeroSlider;
