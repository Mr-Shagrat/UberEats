const App = {
	data() {
		return {
			eats: {
				img: [
					'img/Eats/01.png',
					'img/Eats/02.png',
					'img/Eats/03.png',
					'img/Eats/04.png',
					'img/Eats/05.png',
					'img/Eats/06.png',
					'img/Eats/07.png',
					'img/Eats/08.png',
					'img/Eats/09.png',
				],
				title: [
					'Макдоналдс — Газетный',
					'DimSum & Co — ЦД',
					'ДвижОК — Манежная',
					'НЯ — NHA',
					'Точка Дзы — Цветной',
					'Cinnabon',
					'PIZZELOVE',
					'Zю кафе — Тверская',
					'Bar BQ Cafe — Манежная'
				],
				subtitle: [
					'₽₽ • Бургеры',
					'₽ • Японская • Китайская • Азиатская',
					'₽ • Американская • Европейская',
					'₽₽ • Вьетнамская',
					'₽₽ • Вьетнамская',
					'₽ • Выпечка • Десерты • Капкейки',
					'₽₽ • Пицца',
					'₽₽ • Японская',
					'₽₽₽ • Европейская'

				],
				price: [
					'25 - 35 мин',
					'40 - 50 мин',
					'35 - 45 мин',
					'30 - 40 мин',
					'40 - 50 мин',
					'25 - 35 мин',
					'15 - 25 мин',
					'25 - 35 мин',
					'30 - 40 мин'
				],
			},
			rest: {
				subtitle: [
					'Сельдь на бородинском хлебе',
					'Соленья ассорти',
					'Грибы маринованные',
					'Сало домашнее с горчицей',
					'Малосольная семга',
					'Язык говяжий с хреном',
				],
				label: [
					'C яйцом и огурцом',
				],
				price: [
					'240',
					'320',
					'300',
					'320',
					'390',
					'350',
				],
				img: [
					'img/Restaurant/01.png',
					'img/Restaurant/02.png',
					'img/Restaurant/03.png',
					'img/Restaurant/04.png',
					'img/Restaurant/05.png',
					'img/Restaurant/06.png',
				],
			},
		}
	},
	methods: {
		upClick(e) {
			e.preventDefault()
			window.scrollTo({
				left: 0,
				top: 0,
				behavior: 'smooth'
			})
		},
	},
	mounted() {
		const upArrow = document.body.querySelector('.footer-up__link')
		document.addEventListener('scroll', (e) => {
			if (window.pageYOffset >= 400) {
				upArrow.classList.add('active')
			} else {
				upArrow.classList.remove('active')
			}
		})
	},
}

Vue.createApp(App).mount('#app')
