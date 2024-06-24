import React from 'react';
import styles from './header.module.css';
import Logo from "@/components/modules/Logo/Logo";
import Nav from "@/components/modules/Nav/Nav";

const Header = () => {
	return (
		<header className={`${styles.header}`}>
			<div className={styles.header__decor}>
				<svg width="543" height="inherit" viewBox="0 0 543 102" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M539.898 1C518.991 9.43064 459.869 21.2335 390.632 1M542 1C511.633 18.8248 425.601 43.7795 324.409 1M535.343 1C498.902 28.0985 394.416 66.0364 267.996 1M526.583 1C482.434 34.6021 367.717 88.2932 217.19 1M513.969 1C371.361 108.31 246.272 47.9707 168.486 1M498.552 1C362.251 109.033 246.272 80.8502 123.286 1M482.434 1C310.043 140.828 193.714 75.4305 78.7863 1M464.214 1C315.299 129.627 197.918 118.788 39.1924 1M446.344 1C300.582 136.492 160.076 132.157 1 1"
						stroke="#FF6C2D"/>
				</svg>
			</div>
			<div className={`${styles.header__inner} container-c`}>
				<div className={styles.header__logo}>
					<Logo/>
				</div>
				
				<div className={styles.header__nav}>
					<Nav/>
				</div>
			</div>
		</header>
	);
};

export default Header;
