import React from 'react';
import styles from './category-page.module.css';
import {MdAddShoppingCart} from "react-icons/md";
import Link from "next/link";

	const products = [
		{
			image: "./unikons.jpg",
			title: "UNIKON FERMENT",
			desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi autem deleniti dolores, hic molestias neque quam quod quos recusandae!',
			price: "3000"
		}
		,
		{
			image: "./unikons.jpg",
			title: "UNIKON FERMENT",
			desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi autem deleniti dolores, hic molestias neque quam quod quos recusandae!',
			price: "3000"
		}
		,
		{
			image: "./unikons.jpg",
			title: "UNIKON FERMENT",
			desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi autem deleniti dolores, hic molestias neque quam quod quos recusandae!',
			price: "3000"
		}
		,
		{
			image: "./unikons.jpg",
			title: "UNIKON FERMENT",
			desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi autem deleniti dolores, hic molestias neque quam quod quos recusandae!',
			price: "3000"
		}
		,
		{
			image: "./unikons.jpg",
			title: "UNIKON FERMENT",
			desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi autem deleniti dolores, hic molestias neque quam quod quos recusandae!',
			price: "3000"
		}
		,
	]
	
	//
	// const categories = [
	// 	{
	// 		title: "Риба",
	// 		image: "./fish.png",
	// 		desc: "Комплексні харчові добавки, консерванти та антоксиданти для риби та рибних виробів"
	// 	}, {
	// 		title: "М'ясо",
	// 		image: "./meat.png",
	// 		desc: "Консерванти для м'яса, консерванти для ковбаси. М'ясопереробка"
	// 	}, {
	// 		title: "Випічка",
	// 		image: "./backery.png",
	// 		desc: "Кондитерські та хлібобулочні вироби"
	// 	}, {
	// 		title: "Пиво, напої, вода",
	// 		image: "./drinks.png",
	// 		desc: "Ароматизатори, смакопідсюлювачі, барвники "
	// 	}
	// ]

const Category = () => {
	
	const {
		isPending,
		error,
		data: products,
		isFetching
	} = useQuery({
		queryKey: ['productsData'],
		queryFn: () =>
			getProductsFx()
				.then((res) => res.data.data),
	})
	
	return (
		<div className={styles.products__page}>
			<h1 className={styles.products__title}>Каталог</h1>
			{/*<h1 className={styles.products__title}>Категорії товарів які ми виробляємо</h1>*/}
			<div className={styles.products}>
				 {products.map(({title, image, price, desc}) => {
				 	return (<>
				 		<div className={styles.product__card}>
				 			<img className={styles.product__img} src={image} alt={title}/>
				 			<h3 className={styles.product__title}>{title}</h3>
				 			<div className={styles.product__desc}>{desc}</div>
				 			<div className={styles.product__footer}>
				 				<div className={styles.product__price}>
				 					{price}<span>грн/л</span>
				 				</div>
				 				<div className={styles.product__add_cart}>
				 					<MdAddShoppingCart/>
				 				</div>
				 			</div>
				 		</div>
				 	</>)
				 })}
				{/*{categories.map(({title, image, desc}) => {*/}
				{/*	return (*/}
				{/*		<Link className={styles.category__card} href={`/products/${title}`}>*/}
				{/*			<img className={styles.category__img} src={image} alt={title}/>*/}
				{/*			<h3 className={styles.category__title}>{title}</h3>*/}
				{/*			<div className={styles.category__desc}>{desc}</div>*/}
				{/*		</Link>)*/}
				{/*})}*/}
			</div>
		</div>
	);
};

export default Category;
