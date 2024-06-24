import React from 'react';
import styles from './hero.module.css';
import Image from "next/image";
import HeroSlider from "@/components/modules/HeroSlider/HeroSlider";
import {Grid} from "@mantine/core";

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
					quality={100}
				/>
				<div className={`${styles.top_slider} container-c`}>
					<Grid container gutter={{base: 0}}>
						<Grid.Col span={{base: 4.3}}>
							<div className={`${styles.top_slider_inner} `}>
								<HeroSlider/>
							</div>
						</Grid.Col>
					</Grid>
				</div>
			</div>
			<div className={`${styles.hero__bottom} container-c`}>
				<Grid container gutter={{base: 0}}>
					<Grid.Col span={{base: 4.3}}>
						<p className={styles.hero__accent_text}><span>Ми прагнемо</span> до сталого розвитку та дбаємо про
							навколишнє
							середовище.</p>
					</Grid.Col>
					<Grid.Col span={{base: 7.6}}>
						<div className={styles.hero__desc_text}>
							<span>Вітаємо!</span>
							<p>Ми — команда експертів, яка займається виробництвом поживних добавок високої якості. Наша місія полягає
								в
								тому, щоб зробити ваше життя здоровішим та активнішим.</p>
						</div>
					</Grid.Col>
				</Grid>
			
			</div>
		</section>
	);
};

export default Hero;
