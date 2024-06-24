import React from 'react';
import styles from './categories.module.css';
import Link from "next/link";


const Categories = ({categories}) => {
	
	// const {
	// 	isPending,
	// 	error,
	// 	data: products,
	// 	isFetching
	// } = useQuery({
	// 	queryKey: ['productsData'],
	// 	queryFn: () =>
	// 		getProductsFx()
	// 			.then((res) => res.data.data),
	// })
	
	return (
		<section className={`${styles.categories_section} container-c`}>
			<ul className={`${styles.categories}`}>
				{categories.map(({title, image, desc}) => {
					return (
						<Link className={styles.category__card} href={`/products/${title}`} key={title}>
							<img className={styles.category__img} src={image} alt={title}/>
							<h3 className={styles.category__title}>{title}</h3>
							<div className={styles.category__desc}>{desc}</div>
						</Link>)
				})}
			</ul>
		</section>
	);
};

export default Categories;
