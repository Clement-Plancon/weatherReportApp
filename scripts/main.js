const gab = document.querySelector('.gab');
const temp = document.querySelector('.temp');
const local = document.querySelector('.local');






function aa() {
    var langue = "fr"
    var queryLoc = document.querySelector('.queryLoc').value;
    console.log(queryLoc);
    const link = 'https://api.openweathermap.org/data/2.5/weather?q=' + queryLoc + '&curent.temp=metric:Celsius&appid=d3895a3b19a9c9c2d5532054b387044c&units=metric&lang=' + langue + ''

    fetch(link)
        .then(response => response.json())
        .then(data => {

            var t = Math.round(data.main.temp);

            gab.innerHTML = data.weather[0].description
            temp.innerHTML = t += "°C";
            local.innerHTML = data.name
            data.weather[0].icon
            var lien = "./ressources/jour/" + data.weather[0].icon + ".svg"
            document.querySelector('.ico').src = lien;

            var lat = data.coord.lat;
            var lon = data.coord.lon;

            console.log


            fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=hourly,minutely&lang=fr&units=metric&appid=d3895a3b19a9c9c2d5532054b387044c').then(res => res.json()).then(data => {





                var jeudi = data.daily[0].feels_like.day
                var vendredi = data.daily[1].feels_like.day
                var samedi = data.daily[2].feels_like.day
                var dimanche = data.daily[3].feels_like.day
                var lundi = data.daily[4].feels_like.day
                var mardi = data.daily[5].feels_like.day
                var mercredi = data.daily[6].feels_like.day

                document.querySelector('.lundi').innerHTML = Math.round(lundi)+"°C";
                document.querySelector('.mardi').innerHTML = Math.round(mardi)+"°C";
                document.querySelector('.mercredi').innerHTML = Math.round(mercredi)+"°C";
                document.querySelector('.jeudi').innerHTML = Math.round(jeudi)+"°C";
                document.querySelector('.vendredi').innerHTML = Math.round(vendredi)+"°C";
                document.querySelector('.samedi').innerHTML = Math.round(samedi)+"°C";
                document.querySelector('.dimanche').innerHTML = Math.round(dimanche)+"°C";

                var jour = Math.round(data.daily[0].feels_like.day)
                var nuit = Math.round(data.daily[0].feels_like.night)
                var eve = Math.round(data.daily[0].feels_like.eve)
                var morn = Math.round(data.daily[0].feels_like.morn)
                document.querySelector('.morn').innerHTML = morn+"°C";
                document.querySelector('.day').innerHTML = jour+"°C";
                document.querySelector('.day2').innerHTML = jour+"°C";
                document.querySelector('.eve').innerHTML = eve+"°C";
                document.querySelector('.night').innerHTML = nuit+"°C";
                document.querySelector('.night2').innerHTML = nuit+"°C";
                document.querySelector('.night3').innerHTML = nuit+"°C";

                console.log(data.daily[0].feels_like);
            })
        });
    document.querySelector('.ico').src.innerHTML

}

