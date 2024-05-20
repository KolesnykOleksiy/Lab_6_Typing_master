document.addEventListener('DOMContentLoaded', () => {
	const themeToggleButton = document.getElementById('themeToggle')
	const themeStylesheet = document.getElementById('themeStylesheet')

	themeToggleButton.addEventListener('click', () => {
		const currentTheme = themeStylesheet.getAttribute('href')
		if (currentTheme === 'light-theme.css') {
			themeStylesheet.setAttribute('href', 'dark-theme.css')
		} else {
			themeStylesheet.setAttribute('href', 'light-theme.css')
		}
		themeToggleButton.blur()
	})
})
