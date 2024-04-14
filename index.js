// index.ts
function mostrarSeries(series) {
    var table = document.createElement('table');
    table.classList.add('table');
    var headerRow = table.createTHead().insertRow();
    headerRow.innerHTML = '<th>#</th><th>Nombre</th><th>Canal</th><th>Temporadas</th>';
    series.forEach(function (serie) {
        var row = table.insertRow();
        row.classList.add('data-row');
        row.innerHTML = "<td>".concat(serie.id, "</td><td class='name'>").concat(serie.name, "</td><td>").concat(serie.channel, "</td><td>").concat(serie.seasons, "</td>");
        row.addEventListener('click', function () {
            mostrarDetalleSerie(serie);
        });
    });
    var totalSeasons = series.reduce(function (total, serie) { return total + serie.seasons; }, 0);
    var averageSeasons = totalSeasons / series.length;
    var averageRow = table.insertRow();
    averageRow.innerHTML = "<td colspan=\"3\"><strong>Promedio de temporadas:</strong></td><td>".concat(averageSeasons.toFixed(2), "</td>");
    var seriesTable = document.getElementById("seriesTable");
    if (seriesTable) {
        seriesTable.appendChild(table);
    }
    else {
        console.error("No se encontró ningún elemento con el ID 'seriesTable'.");
    }
}
function mostrarDetalleSerie(serie) {
    var detalleSerie = document.getElementById("detalleSerie");
    var card = document.createElement('div');
    card.classList.add('card');
    card.style.width = "25rem";
    card.style.float = "right";
    card.innerHTML = "\n        <div class=\"card-body\">\n            <img src=\"".concat(serie.image, "\" class=\"card-img-top\" alt=\"Imagen de ").concat(serie.name, "\">\n            <h5 class=\"card-title\">").concat(serie.name, "</h5>\n            <h6 class=\"card-subtitle mb-2 text-muted\">").concat(serie.channel, "</h6>\n            <p class=\"card-text\" style=\"text-align: justify;\">Temporadas: ").concat(serie.seasons, "</p>\n            <p class=\"card-text\" style=\"text-align: justify;\">").concat(serie.description, "</p>\n        </div>\n    ");
    detalleSerie.innerHTML = '';
    detalleSerie.appendChild(card);
}
var series = [
    {
        id: 1,
        name: "Breaking Bad",
        channel: "AMC",
        seasons: 5,
        description: "Un profesor de química se convierte en fabricante de metanfetamina después de descubrir que tiene cáncer terminal.",
        image: "images/BreakingBad.jpg"
    },
    {
        id: 2,
        name: "Orange Is the New Black",
        channel: "Netflix",
        seasons: 6,
        description: "Una mujer de clase media es condenada a prisión por un delito que cometió hace años y debe aprender a adaptarse a la vida en la cárcel.",
        image: "images/Orange.jpg"
    },
    {
        id: 3,
        name: "Game of Thrones",
        channel: "HBO",
        seasons: 7,
        description: "Serie épica que sigue las luchas de poder entre familias nobles mientras intentan reclamar el Trono de Hierro y gobernar los Siete Reinos de Westeros.",
        image: "images/Game.jpg"
    },
    {
        id: 4,
        name: "The Big Bang Theory",
        channel: "CBS",
        seasons: 12,
        description: "La vida de un grupo de físicos brillantes y socialmente torpes, y su interacción con su vecina que es actriz.",
        image: "images/TBBT.jpg"
    },
    {
        id: 5,
        name: "Sherlock",
        channel: "BBC",
        seasons: 4,
        description: "Serie de detectives que sigue a Sherlock Holmes y su compañero John Watson mientras resuelven casos intrigantes en el Londres contemporáneo.",
        image: "images/Sherlock.jpg"
    },
    {
        id: 6,
        name: "A Very English Scandal",
        channel: "BBC",
        seasons: 2,
        description: "Basada en hechos reales, sigue el escándalo político y el juicio del líder del Partido Liberal Jeremy Thorpe por conspiración para asesinar a su amante gay.",
        image: "images/English.jpg"
    }
];
mostrarSeries(series);
