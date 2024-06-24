import React from 'react';
import styles from './logo.module.css';
import Link from "next/link";

const Logo = () => {
	return (
		<Link href={"/"} className={styles.logo__root}>
			<span>Ferment</span> Craft
		</Link>
	);
};

export default Logo;
