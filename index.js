let resultat = document.getElementsByClassName('resultat')[0];
let h = 10, m = 55, s = 23;

setInterval(() => {
    if (s < 59)
        s++;
    else {
        s = 0;
        if (m < 59)
            m++;
        else {
            m = 0;
            if (h < 23)
                h++;
            else
                h = 0;
        }
    }

    h.length == 1 ? h = `0${h}` : h = `${h}`;
    m.length == 1 ? m = `0${m}` : m = `${m}`;
    s.length == 1 ? s = `0${s}` : s = `${s}`;

    resultat.innerHTML = `${h}h: ${m}m: ${s}s`;
}, 1000);