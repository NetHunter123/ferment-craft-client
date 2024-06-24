import React from 'react';
import styles from "./nav.module.css"
import Link from "next/link";
import {FaChevronDown} from "react-icons/fa6";
import {useMediaQuery} from "@mantine/hooks";
import MenuMobile from "@/components/modules/MenuMobile/MenuMobile";
// import MenuMobile from "@/components/modules/MenuMobile/MenuMobile";

const linksData = [
	{title: "Партнерам", link: "/partners", value: "partners"},
	{title: "Ціни", link: "/prices", value: "prices"},
	{title: "Замовити продукцію", link: "/products", value: "products"},
]

const linksList = linksData.map(item => {
	return (
		<li className={styles.nav__item} key={item.value}>
			<Link href={item.link} className={styles.nav__link}>{item.title}</Link>
		</li>
	)
})

const Nav = () => {
	const isMedia992 = useMediaQuery('(max-width: 992px)')
	
	return (
		<nav className={styles.nav}>
			{!isMedia992 ?
				<ul className={styles.nav__list}>
					{linksList}
				</ul>
				: <MenuMobile links={linksList}/>
			}
		</nav>
	);
};

export default Nav;
