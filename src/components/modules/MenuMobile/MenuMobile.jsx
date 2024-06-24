import React from 'react';
import {Burger, Drawer} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import styles from "./menu-mobile.module.css";

const MenuMobile = ({links}) => {
	const [opened, {toggle, close}] = useDisclosure();
	
	return (
		<>
			<Drawer className={styles.mob_drawer} opened={opened} onClose={close} title="Меню">
				<ul className={styles.nav__list}>
					{links}
				</ul>
			</Drawer>
			
			<Burger opened={opened} className={styles.mob_burger} onClick={toggle} aria-label="Toggle navigation"/>
		</>
	);
};

export default MenuMobile;
