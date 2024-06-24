import React from 'react';
import styles from './advantages.module.css';
import {Grid} from "@mantine/core";
import Image from "next/image";

const Advantages = () => {
	const advantagesList = [
		"Повністю українське виробництво",
		"Збільшення термінів зберігання у 3-6 разів!",
		"Вся продукція в наявності",
		"Відвантаження зі складу наступного дня",
		"Консультації та підтримка технологів"
	]
	return (
		<>
			<h1 className={styles.title}>
				<span>Ми пропонуємо</span>
				Комплексні харчові добавки, харчові консерванти, технологічні допоміжні засоби</h1>
			<section className={`${styles.advangates__section} container-c`}>
				<Grid className={styles.advangates__wrap} overflow={"hidden"} gutter={{base: 20, xs: 30, md: 40}}>
					<Grid.Col span={{base: 12, xs: 6}} order={{base: 2, xs: 1}}>
						<ul className={styles.advangates__list}>
							{advantagesList.map((advantage, index) => {
								return (
									<li className={styles.advangates__item} key={index}>
										<p className={styles.advangates__text}><span>{index + 1}</span>{advantage}</p>
									</li>
								)
							})}
						</ul>
					</Grid.Col>
					<Grid.Col span={{base: 12, xs: 6}} order={{base: 1, xs: 2}}>
						<div className={styles.advangates__img}>
							<Image
								// src={`http://127.0.0.1:1337${img.formats.small.url}`}
								src="/factory.jpg"
								alt={"factory"}
								quality={100}
								layout="fill"
								// placeholder="blur"
							/>
						</div>
					</Grid.Col>
				</Grid>
				
				<p className={styles.advangates__bottom_info}>Ми пропонуємо якісні продукти, найширші сфери застосування, вигідні комерційні умови: єдину цінову політику,
					бонусну систему та систему знижок, стовідсоткову гарантію повернення бракованої та простроченої продукції.</p>
			</section>
		</>
	);
};

export default Advantages;
