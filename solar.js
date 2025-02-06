// Add event listeners to each planet for interactivity
const planets = document.querySelectorAll('.planet');

planets.forEach((planet) => {
    planet.addEventListener('click', function () {
        // Toggle the visibility of the planet's information when clicked
        const infoBox = planet.querySelector('.info');
        infoBox.style.display = infoBox.style.display === 'block' ? 'none' : 'block';
    });
});
