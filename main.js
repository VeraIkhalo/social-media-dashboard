const toggleButton = document.getElementById('dark-mode');
			const body = document.getElementsByTagName('body')[0];

			toggleButton.addEventListener('click', () => {
				body.classList.toggle('dark');
			});