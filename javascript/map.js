const mapDiv = document.querySelector('.map');
const mapSvg = document.querySelector('.map > svg');
const worldMapG = document.querySelector('.map > svg > g');
const worldMapDefs = document.querySelector('.map > svg > defs');

results.forEach(country => {
    country.codes.forEach(countryCode => {
        let countrySvgElements = document.querySelectorAll(`.map > svg > g g.${countryCode.toLocaleLowerCase()} path`);
        let countrySvgElementG = document.querySelector(".map > svg > g g." + countryCode.toLocaleLowerCase());

        if(!countrySvgElements[0]) {
            countrySvgElements = document.querySelectorAll(".map > svg > g path." + countryCode.toLocaleLowerCase());
        }

        if(!countrySvgElementG) {
            countrySvgElementG = countrySvgElements[0];
        }
        
        worldMapDefs.innerHTML += 
            `<pattern id="${countryCode.toLocaleLowerCase()}" patternUnits="userSpaceOnUse" width="${countrySvgElementG.getBBox().width}" height="${countrySvgElementG.getBBox().height}">
                <image xlink:href="./images/img/flags/${country.country_name}.svg" x="${countrySvgElementG.getBBox().left - countrySvgElementG.getBBox().width / 2}" y="${countrySvgElementG.getBBox().top - countrySvgElementG.getBBox().height / 2}" width="${countrySvgElementG.getBBox().width}" height="${countrySvgElementG.getBBox().height}" />
            </pattern>`;
            countrySvgElements.forEach(elem => elem.style.fill = `url(#${countryCode.toLocaleLowerCase()})`);
    });
});