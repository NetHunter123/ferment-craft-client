import React from 'react';
import {useForm} from "@mantine/form";
import {Button, TextInput, Notification, Dialog} from "@mantine/core";
import InputMask from 'react-input-mask';
// import BtnBorderHover from "@/components/elements/Buttons/BtnBorderHover/BtnBorderHover";
import {useDisclosure} from "@mantine/hooks";
import styles from './consult-sign-up.module.css';

const ConsultSignUp = () => {
	const [opened, {toggle, close}] = useDisclosure(false);
	
	const form = useForm(
		{
			mode: 'uncontrolled',
			initialValues: {
				name: '',
				surname: '',
				email: '',
				phone: false,
			},
			
			validate: {
				name: (value) => (value.trim() === '' ? 'Введіть ім\'я будьласка!' : null),
				surname: (value) => (value.trim() === '' ? 'Введіть прізвище будьласка' : null),
				email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Введіть правильний емейл будьласка'),
				phone: (value) => (/^38\s?0\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/.test(value) ? null : 'Введіть правильний номер будьласка'),
			},
		});
	
	const handleOpen = () => {
		console.log("form.errors", form.errors)
		toggle()
		setTimeout(close, 5000)
	}
	
	
	return (<>
		<section className={`section-c ${styles.free_lesson}`}>
			<h2 className={`${styles.free_lesson__title} section_title`}>Консультація по телефону!</h2>
			<div className={styles.free_lesson__wrap}>
				<h2 className={`${styles.free_lesson__form_title} section_title`}>Залиште заявку прямо
					зараз</h2>
				
				<form className={styles.free_lesson__form} onSubmit={form.onSubmit((values) => {
					console.log(values);
				})}>
					<TextInput
						label="Ім'я"
						placeholder="John"
						{...form.getInputProps('name')}
					/>
					
					<TextInput
						label="Прізвище"
						placeholder="Doe"
						{...form.getInputProps('surname')}
					/>
					
					<TextInput
						label="Емейл"
						placeholder="your@email.com"
						{...form.getInputProps('email')}
					/>
					
					<TextInput
						mask="38 099 999 99 99"
						component={InputMask}
						label="Телефон"
						placeholder="380753321944"
						{...form.getInputProps('phone')}/>
					
					<Button
						className={styles.free_lesson__form_btn}
						onClick={handleOpen }
						color={"#8fb146"}
						type="submit"
						>Записатись!</Button>
				</form>
			</div>
			
			<Dialog opened={opened} className={styles.free_lesson__notifi} withCloseButton onClose={close} size="lg"
			        radius="md">
				{JSON.stringify(form.errors) === "{}" ?
					<Notification withBorder withCloseButton={false} color={"var(--primary-50-c)"}
					              title="Ваш запит успішно відправлений!">
						Очікуйте звінка від оператора
					</Notification> :
					<Notification withBorder withCloseButton={false} color={"red"}
					                                title="Неправильно введені дані">
						Будьласка введіть коректні дані
					</Notification>
				}
			</Dialog>
		</section>
	</>)
};

export default ConsultSignUp;
