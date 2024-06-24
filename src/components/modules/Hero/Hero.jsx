import React from 'react';
import styles from './hero.module.css';
import Image from "next/image";
import HeroSlider from "@/components/modules/HeroSlider/HeroSlider";

const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.hero__top}>
				<Image
					className={styles.hero__img}
					// src={`http://127.0.0.1:1337${img.formats.small.url}`}
					src="/hero-img.jpg"
					alt={"hero"}
					width={500}
					height={300}
					sizes="100vw"
					// style={{
					// 	width: '100%',
					// 	height: '500px',
					// }}
					quality={100}
					// layout="fill"
					// placeholder="blur"
				/>
				<div className={`${styles.top_slider} container-c`}>
					<div className={`${styles.top_slider_inner} `}>
						<HeroSlider/>
					</div>
				</div>
			</div>
			<div className={`${styles.hero__bottom} container-c`}>
				<p className={styles.hero__accent_text}><span>Ми прагнемо</span> до сталого розвитку та дбаємо про навколишнє
					середовище.</p>
				<div className={styles.hero__desc_text}>
					<span>Вітаємо!</span>
					<p>Ми — команда експертів, яка займається виробництвом поживних добавок високої якості. Наша місія полягає в
						тому, щоб зробити ваше життя здоровішим та активнішим.</p>
				</div>
			</div>
		</section>
	);
};

export default Hero;
