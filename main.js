$.getJSON("data.json", function (data) {

    data.forEach(function (spot) {
        var row = $("<tr>");
        var name = $("<td>").text(spot.name);
        var description = $("<td>").text(spot.description);
        var mapUrl = "https://www.google.com/maps?q=" + spot.location[0] + "," + spot.location[1];
        var link = $("<a>").attr("href", mapUrl).text("View on Google Maps");
        var linkCell = $("<td>").append(link);

        row.append(name);
        row.append(description);
        row.append(linkCell);
        $("#top-spots").append(row);
    });

});