function score() {
    var b1 = 0;
    var b2 = 0;
    var b0 = 0;
    var s1 = 0;
    var s2 = 0;
    var s3 = 0;
    var s4 = 0;
    var s5 = 0;
    var s6 = 0;
    var s7 = 0;
    var s0 = 0; /* default value for 大罪屬性 (i.e. highest single value among all types) */
    var pm = document.querySelector('input[name = pm]:checked').value; /* physical or magical */
    var sin = document.querySelector('input[name = sin]:checked').value;
    if (pm == 'phy') {
        b1 = 1;
    } else if (pm == 'mag') {
        b2 = 1;
    } else {
        b0 = 1;
    }
    if (sin == 'envy') {
        s1 = 1;
    } else if (sin == 'sloth') {
        s2 = 1;
    } else if (sin == 'lust') {
        s3 = 1;
    } else if (sin == 'gluttony') {
        s4 = 1;
    } else if (sin == 'wrath') {
        s5 = 1;
    } else if (sin == 'greed') {
        s6 = 1;
    } else if (sin == 'pride') {
        s7 = 1;
    } else if (sin == 'any') {
        s0 = 1;
    }
    var e01 = document.querySelector('#ex01').checked;
    var e02 = document.querySelector('#ex02').checked;
    var e03 = document.querySelector('#ex03').checked;
    var e04 = document.querySelector('#ex04').checked;
    var e05 = document.querySelector('#ex05').checked;
    var e06 = document.querySelector('#ex06').checked;
    var e07 = document.querySelector('#ex07').checked;
    var e08 = document.querySelector('#ex08').checked;
    var e09 = document.querySelector('#ex09').checked;
    var e10 = document.querySelector('#ex10').checked;
    var e11 = document.querySelector('#ex11').checked;
    var e12 = document.querySelector('#ex12').checked;
    var e13 = document.querySelector('#ex13').checked;
    var e14 = document.querySelector('#ex14').checked;
    var e15 = document.querySelector('#ex15').checked;
    var e16 = document.querySelector('#ex16').checked;
    var e17 = document.querySelector('#ex17').checked;
    var e18 = document.querySelector('#ex18').checked;
    document.getElementById('m001').innerHTML = (b0 * 0) + (s0 * 30 + s4 * 30) + (e01 * 20);
    document.getElementById('m002').innerHTML = (b0 * 0) + (s0 * 40 + s2 * 20 + s4 * 40) + (e01 * 40 + e18 * 30);
    document.getElementById('m003').innerHTML = (b0 * 50 + b1 * 50) + (s0 * 40 + s4 * 40 + s5 * 20);
    document.getElementById('m004').innerHTML = (b0 * 0) + (s0 * 15 + s1 * 15 + s5 * 15) + (e01 * 30);
    document.getElementById('m005').innerHTML = (b0 * 0);
    document.getElementById('m006').innerHTML = (b0 * 30 + b1 * 30) + (s0 * 40 + s2 * 20 + s5 * 40) + (e02 * 30);
    document.getElementById('m007').innerHTML = (b0 * 30 + b1 * 30) + (s0 * 30 + s2 * 30);
    document.getElementById('m008').innerHTML = (b0 * 0);
    document.getElementById('m009').innerHTML = (b0 * 0);
    document.getElementById('m010').innerHTML = (b0 * 0);
    document.getElementById('m011').innerHTML = (b0 * 0) + (s0 * 60 + s2 * 60) + (e01 * 50 + e12 * 20);
    document.getElementById('m012').innerHTML = (b0 * 30) + (s0 * 30 + s3 * 30);
    document.getElementById('m013').innerHTML = (b0 * 30 + b1 * 30);
    document.getElementById('m014').innerHTML = (b0 * 30 + b1 * 30) + (s0 * 30 + s1 * 30 + s4 * 30) + (e02 * 30);
    document.getElementById('m015').innerHTML = (b0 * 20 + b1 * 20) + (s0 * 30 + s1 * 30 + s4 * 30) + (e02 * 40 + e11 * 20);
    document.getElementById('m016').innerHTML = (b0 * 0) + (e01 * 10);
    document.getElementById('m017').innerHTML = (b0 * 30 + b1 * 30) + (s0 * 30 + s4 * 30);
    document.getElementById('m018').innerHTML = (b0 * 50 + b1 * 50) + (s0 * 30 + s4 * 30 + s5 * 30);
    document.getElementById('m019').innerHTML = (b0 * 30 + b1 * 30) + (s0 * 60 + s6 * 60);
    document.getElementById('m020').innerHTML = (b0 * 20 + b1 * 20) + (s0 * 40 + s3 * 40 + s4 * 20) + (e11 * 20);
    document.getElementById('m021').innerHTML = (b0 * 15 + b1 * 15 + b2 * 15) + (s0 * 30 + s1 * 30 + s3 * 30);
    document.getElementById('m022').innerHTML = (b0 * 20) + (s0 * 20 + s3 * 20 + s4 * 20 + s5 * 20) + (e05 * 20);
    document.getElementById('m023').innerHTML = (b0 * 0) + (s0 * 20 + s4 * 10 + s7 * 20);
    document.getElementById('m024').innerHTML = (b0 * 20 + b1 * 20) + (s0 * 30 + s4 * 30) + (e02 * 20);
    document.getElementById('m025').innerHTML = (b0 * 20 + b1 * 20) + (s0 * 30 + s4 * 30);
    document.getElementById('m026').innerHTML = (b0 * 50 + b1 * 50) + (s0 * 20 + s1 * 20 + s4 * 20 + s5 * 20);
    document.getElementById('m027').innerHTML = (b0 * 0) + (s0 * 20 + s4 * 20) + (e13 * 20);
    document.getElementById('m028').innerHTML = (b0 * 40) + (s0 * 20 + s1 * 20 + s3 * 20 + s4 * 20);
    document.getElementById('m029').innerHTML = (b0 * 0);
    document.getElementById('m030').innerHTML = (b0 * 0);
    document.getElementById('m031').innerHTML = (b0 * 20 + b1 * 20) + (s0 * 20 + s1 * 20);
    document.getElementById('m032').innerHTML = (b0 * 0);
    document.getElementById('m033').innerHTML = (b0 * 0);
    document.getElementById('m034').innerHTML = (b0 * 0);
    document.getElementById('m035').innerHTML = (b0 * 0) + (s0 * 30 + s1 * 30 + s6 * 30) + (e01 * 15);
    document.getElementById('m036').innerHTML = (b0 * 0) + (s0 * 60 + s6 * 60) + (e10 * 30);
    document.getElementById('m037').innerHTML = (b0 * 20 + b1 * 20 + b2 * 20) + (s0 * 40 + s1 * 20 + s6 * 40);
    document.getElementById('m038').innerHTML = (b0 * 0) + (s0 * 40 + s1 * 20 + s6 * 40) + (e01 * 30);
    document.getElementById('m039').innerHTML = (b0 * 0) + (s0 * 40 + s5 * 40 + s6 * 20);
    document.getElementById('m040').innerHTML = (b0 * 0) + (s0 * 40 + s5 * 40 + s6 * 20) + (e01 * 30);
    document.getElementById('m041').innerHTML = (b0 * 0);
    document.getElementById('m042').innerHTML = (b0 * 0);
    document.getElementById('m043').innerHTML = (b0 * 0);
    document.getElementById('m044').innerHTML = (b0 * 0) + (s0 * 20 + s1 * 20);
    document.getElementById('m045').innerHTML = (b0 * 0);
    document.getElementById('m046').innerHTML = (b0 * 0);
    document.getElementById('m047').innerHTML = (b0 * 0);
    document.getElementById('m048').innerHTML = (b0 * 0);
    document.getElementById('m049').innerHTML = (b0 * 0);
    document.getElementById('m050').innerHTML = (b0 * 0) + (s0 * 40 + s4 * 20 + s5 * 40) + (e12 * 20);
    document.getElementById('m051').innerHTML = (b0 * 30 + b1 * 30) + (s0 * 10 + s1 * 10 + s3 * 10 + s5 * 10);
    document.getElementById('m052').innerHTML = (b0 * 20 + b1 * 20) + (s0 * 30 + s1 * 30 + s5 * 30) + (e02 * 20);
    document.getElementById('m053').innerHTML = (b0 * 0) + (s0 * 30 + s5 * 30);
    document.getElementById('m054').innerHTML = (b0 * 0);
    document.getElementById('m055').innerHTML = (b0 * 0);
    document.getElementById('m056').innerHTML = (b0 * 20 + b1 * 20) + (s0 * 30 + s1 * 30);
    document.getElementById('m057').innerHTML = (b0 * 0);
    document.getElementById('m058').innerHTML = (b0 * 0);
    document.getElementById('m059').innerHTML = (b0 * 0);
    document.getElementById('m060').innerHTML = (b0 * 15 + b1 * 15) + (s0 * 20 + s1 * 20 + s5 * 20 + s6 * 20);
    document.getElementById('m061').innerHTML = (b0 * 25 + b1 * 25) + (s0 * 40 + s1 * 20 + s6 * 40);
    document.getElementById('m062').innerHTML = (b0 * 15 + b1 * 15) + (s0 * 40 + s1 * 20 + s5 * 40);
    document.getElementById('m063').innerHTML = (b0 * 0);
    document.getElementById('m064').innerHTML = (b0 * 0);
    document.getElementById('m065').innerHTML = (b0 * 0);
    document.getElementById('m066').innerHTML = (b0 * 0);
    document.getElementById('m067').innerHTML = (b0 * 0) + (e03 * 40);
    document.getElementById('m068').innerHTML = (b0 * 0);
    document.getElementById('m069').innerHTML = (b0 * 30 + b1 * 30 + b2 * 30) + (s0 * 60 + s5 * 60);
    document.getElementById('m070').innerHTML = (b0 * 0 + b1 * 0) + (s0 * 60 + s1 * 10 + s5 * 60) + (e12 * 20);
    document.getElementById('m071').innerHTML = (b0 * 30 + b1 * 30 + b2 * 20) + (s0 * 30 + s5 * 30 + s6 * 30);
    document.getElementById('m072').innerHTML = (b0 * 30 + b1 * 30 + b2 * 30) + (s0 * 60 + s6 * 60);
    document.getElementById('m073').innerHTML = (b0 * 50 + b1 * 50) + (s0 * 30 + s1 * 30 + s6 * 30);
    document.getElementById('m074').innerHTML = (b0 * 0) + (s0 * 30 + s1 * 30 + s6 * 30) + (e01 * 30 + e10 * 20);
    document.getElementById('m075').innerHTML = (b0 * 0);
    document.getElementById('m076').innerHTML = (b0 * 0);
    document.getElementById('m077').innerHTML = (b0 * 0);
    document.getElementById('m078').innerHTML = (b0 * 0);
    document.getElementById('m079').innerHTML = (b0 * 0);
    document.getElementById('m080').innerHTML = (b0 * 0);
    document.getElementById('m081').innerHTML = (b0 * 0);
    document.getElementById('m082').innerHTML = (b0 * 0);
    document.getElementById('m083').innerHTML = (b0 * 30 + b1 * 30 + b2 * 30) + (s0 * 30 + s1 * 30 + s2 * 30) + (e03 * 30);
    document.getElementById('m084').innerHTML = (b0 * 0);
    document.getElementById('m085').innerHTML = (b0 * 0);
    document.getElementById('m086').innerHTML = (b0 * 0);
    document.getElementById('m087').innerHTML = (b0 * 0);
    document.getElementById('m088').innerHTML = (b0 * 30 + b1 * 30) + (s0 * 30 + s1 * 30 + s4 * 30) + (e04 * 30);
    document.getElementById('m089').innerHTML = (b0 * 30) + (s0 * 30 + s4 * 30 + s5 * 30);
    document.getElementById('m090').innerHTML = (b0 * 40) + (s0 * 40 + s3 * 20 + s4 * 40) + (e04 * 30 + e01 * 30 - e04 * e01 * 30);
    document.getElementById('m091').innerHTML = (b0 * 50 + b1 * 50) + (s0 * 30 + s4 * 30 + s7 * 30);
    document.getElementById('m092').innerHTML = (b0 * 0) + (s0 * 40 + s6 * 40 + s7 * 20) + (e01 * 20);
    document.getElementById('m093').innerHTML = (b0 * 30 + b1 * 30 + b2 * 30) + (s0 * 60 + s4 * 60);
    document.getElementById('m094').innerHTML = (b0 * 20 + b1 * 20) + (s0 * 30 + s2 * 30);
    document.getElementById('m095').innerHTML = (b0 * 40 + b1 * 40) + (s0 * 40 + s2 * 40 + s6 * 20) + (e06 * 30);
    document.getElementById('m096').innerHTML = (b0 * 0) + (s0 * 40 + s1 * 20 + s4 * 40) + (e12 * 20 + e08);
    document.getElementById('m097').innerHTML = (b0 * 0) + (s0 * 40 + s5 * 20 + s7 * 40) + (e03 * 30);
    document.getElementById('m098').innerHTML = (b0 * 30 + b1 * 30) + (s0 * 30 + s3 * 30 + s7 * 30) + (e03 * 40);
    document.getElementById('m099').innerHTML = (b0 * 0) + (s0 * 30 + s2 * 30 + s3 * 30) + (e04 * 20 + e05 * 20 - e04 * e05 * 20);
    document.getElementById('m100').innerHTML = (b0 * 0) + (s0 * 30 + s3 * 30 + s7 * 30) + (e03 * 20);
    document.getElementById('m101').innerHTML = (b0 * 50 + b1 * 50) + (s0 * 40 + s6 * 20 + s7 * 40);
    document.getElementById('m102').innerHTML = (b0 * 20 + b1 * 20) + (s0 * 30 + s3 * 30 + s7 * 30) + (e03 * 20);
    document.getElementById('m103').innerHTML = (b0 * 20 + b1 * 20) + (s0 * 40 + s6 * 20 + s7 * 40) + (e12 * 20);
    document.getElementById('m104').innerHTML = (b0 * 20) + (s0 * 40 + s6 * 20 + s7 * 40) + (e01 * 30);
    document.getElementById('m105').innerHTML = (b0 * 0) + (s0 * 40 + s6 * 20 + s7 * 40) + (e01 * 40 + e11 * 20);
    document.getElementById('m106').innerHTML = (b0 * 30) + (s0 * 40 + s3 * 20 + s7 * 40) + (e05 * 20);
    document.getElementById('m107').innerHTML = (b0 * 0) + (s0 * 40 + s4 * 20 + s7 * 40) + (e03 * 20);
    document.getElementById('m108').innerHTML = (b0 * 30 + b1 * 30 + b2 * 30) + (s0 * 60 + s7 * 60);
    document.getElementById('m109').innerHTML = (b0 * 0) + (s0 * 60 + s7 * 60) + (e05 * 40 + e04 * 40 - e05 * e04 * 40 + e13 * 10);
    document.getElementById('m110').innerHTML = (b0 * 0) + (s0 * 60 + s7 * 60) + (e13 * 20);
    document.getElementById('m111').innerHTML = (b0 * 50) + (s0 * 40 + s1 * 20 + s7 * 40);
    document.getElementById('m112').innerHTML = (b0 * 0) + (s0 * 30 + s3 * 30 + s7 * 30) + (e05 * 30);
    document.getElementById('m113').innerHTML = (b0 * 20 + b1 * 20) + (s0 * 30 + s5 * 30 + s7 * 30) + (e01 * 20);
    document.getElementById('m114').innerHTML = (b0 * 0) + (s0 * 40 + s6 * 20 + s7 * 40) + (e01 * 40);
    document.getElementById('m115').innerHTML = (b0 * 0) + (s0 * 40 + s6 * 20 + s7 * 40) + (e01 * 30 + e02 * 30 - e01 * e02 * 30 + e11 * 20);
    document.getElementById('m116').innerHTML = (b0 * 40) + (s0 * 40 + s6 * 20 + s7 * 40);
    document.getElementById('m117').innerHTML = (b0 * 0) + (s0 * 30 + s6 * 30 + s7 * 30) + (e05 * 20 + e03 * 20 - e05 * e03 * 20);
    document.getElementById('m118').innerHTML = (b0 * 30 + b1 * 30) + (s0 * 20 + s3 * 20 + s5 * 20 + s7 * 20) + (e01 * 40);
    document.getElementById('m119').innerHTML = (b0 * 0);
    document.getElementById('m120').innerHTML = (b0 * 20) + (s0 * 40 + s1 * 20 + s3 * 40) + (e03 * 20);
    document.getElementById('m121').innerHTML = (b0 * 30) + (s0 * 30 + s1 * 30 + s3 * 30) + (e03 * 30);
    document.getElementById('m122').innerHTML = (b0 * 0);
    document.getElementById('m123').innerHTML = (b0 * 20) + (s0 * 40 + s2 * 20 + s3 * 40) + (e09 * 20);
    document.getElementById('m124').innerHTML = (b0 * 0) + (s0 * 60 + s3 * 60) + (e05 * 20);
    document.getElementById('m125').innerHTML = (b0 * 30 + b1 * 30 + b2 * 30) + (s0 * 30 + s1 * 30 + s3 * 30);
    document.getElementById('m126').innerHTML = (b0 * 0);
    document.getElementById('m127').innerHTML = (b0 * 0);
    document.getElementById('m128').innerHTML = (b0 * 0) + (s0 * 40 + s3 * 40 + s4 * 20) + (e03 * 40);
    document.getElementById('m129').innerHTML = (b0 * 40 + b1 * 40) + (s0 * 40 + s1 * 20 + s3 * 40) + (e03 * 30);
    document.getElementById('m130').innerHTML = (b0 * 0);
    document.getElementById('m131').innerHTML = (b0 * 30) + (s0 * 30 + s3 * 30) + (e09 * 30);
    document.getElementById('m132').innerHTML = (b0 * 30) + (s0 * 30 + s3 * 30 + s6 * 30);
    document.getElementById('m133').innerHTML = (b0 * 30);
    document.getElementById('m134').innerHTML = (b0 * 0);
    document.getElementById('m135').innerHTML = (b0 * 30) + (s0 * 30 + s3 * 30);
    document.getElementById('m136').innerHTML = (b0 * 0) + (s0 * 40 + s3 * 40 + s4 * 20) + (e05 * 30 + e12 * 10);
    document.getElementById('m137').innerHTML = (b0 * 0);
    document.getElementById('m138').innerHTML = (b0 * 0);
    document.getElementById('m139').innerHTML = (b0 * 0);
    document.getElementById('m140').innerHTML = (b0 * 0);
    document.getElementById('m141').innerHTML = (b0 * 0);
    document.getElementById('m142').innerHTML = (b0 * 0);
    document.getElementById('m143').innerHTML = (b0 * 0) + (s0 * 40 + s3 * 40 + s6 * 20) + (e05 * 40 + e04 * 20 - e05 * e04 * 20);
    document.getElementById('m144').innerHTML = (b0 * 30 + b1 * 30) + (s0 * 20 + s1 * 20 + s3 * 20 + s6 * 20) + (e01 * 40);
    document.getElementById('m145').innerHTML = (b0 * 0) + (s0 * 40 + s3 * 20 + s6 * 40) + (e11 * 50);
    document.getElementById('m146').innerHTML = (b0 * 30 + b1 * 30) + (s0 * 20 + s3 * 10 + s5 * 20);
    document.getElementById('m147').innerHTML = (b0 * 30 + b1 * 30 + b2 * 30) + (s0 * 60 + s3 * 60) + (e15 * 40);
    document.getElementById('m148').innerHTML = (b0 * 40 + b1 * 40) + (s0 * 60 + s5 * 60) + (e15 * 40);
    document.getElementById('m149').innerHTML = (b0 * 40 + b1 * 40) + (s0 * 40 + s3 * 20 + s7 * 40);
    document.getElementById('m150').innerHTML = (b0 * 50 + b1 * 50) + (s0 * 40 + s6 * 40 + s7 * 20) + (e09 * 20);
    document.getElementById('m151').innerHTML = (b0 * 0);
    document.getElementById('m152').innerHTML = (b0 * 20 + b1 * 20 + b2 * 20) + (s0 * 60 + s7 * 60);
    document.getElementById('m153').innerHTML = (b0 * 0);
    document.getElementById('m154').innerHTML = (b0 * 0);
    document.getElementById('m155').innerHTML = (b0 * 20 + b1 * 20 + b2 * 20) + (s0 * 30 + s6 * 30 + s7 * 30);
    document.getElementById('m156').innerHTML = (b0 * 0);
    document.getElementById('m157').innerHTML = (b0 * 20 + b1 * 20) + (s0 * 20 + s1 * 20 + s2 * 20 + s6 * 20) + (e14 * 50);
    document.getElementById('m158').innerHTML = (b0 * 0) + (s0 * 30 + s1 * 20 + s6 * 30 + s7 * 30) + (e01 * 20 + e02 * 20 - e01 * e02 * 20);
    document.getElementById('m159').innerHTML = (b0 * 30 + b1 * 30) + (s0 * 20 + s5 * 10 + s7 * 20);
    document.getElementById('m160').innerHTML = (b0 * 20 + b1 * 20 + b2 * 20) + (s0 * 30 + s3 * 30 + s5 * 30);
    document.getElementById('m161').innerHTML = (b0 * 60 + b1 * 60) + (s0 * 30 + s1 * 30 + s6 * 30);
    document.getElementById('m162').innerHTML = (b0 * 30 + b1 * 30) + (s0 * 30 + s3 * 30 + s6 * 30);
    document.getElementById('m163').innerHTML = (b0 * 50 + b1 * 50) + (s0 * 30 + s4 * 20 + s5 * 30 + s7 * 10) + (e14 * 30);
    document.getElementById('m164').innerHTML = (b0 * 0) + (s0 * 30 + s5 * 30 + s7 * 30);
    document.getElementById('m165').innerHTML = (b0 * 0) + (s0 * 60 + s7 * 60) + (e04 * 40);
    document.getElementById('m166').innerHTML = (b0 * 0) + (s0 * 30 + s1 * 30);
    document.getElementById('m167').innerHTML = (b0 * 30 + b1 * 30 + b2 * 30) + (s0 * 60 + s1 * 60);
    document.getElementById('m168').innerHTML = (b0 * 20 + b1 * 20 + b2 * 20) + (s0 * 30 + s1 * 30 + s4 * 30);
    document.getElementById('m169').innerHTML = (b0 * 0);
    document.getElementById('m170').innerHTML = (b0 * 40 + b1 * 40) + (s0 * 30 + s3 * 30 + s5 * 30) + (e01 * 20);
    document.getElementById('m171').innerHTML = (b0 * 30 + b1 * 30 + b2 * 30) + (s0 * 40 + s3 * 40 + s5 * 20);
    document.getElementById('m172').innerHTML = (b0 * 0);
    document.getElementById('m173').innerHTML = (b0 * 0);
    document.getElementById('m174').innerHTML = (b0 * 0) + (s0 * 60 + s2 * 60) + (e06 * 20);
    document.getElementById('m175').innerHTML = (b0 * 0);
    document.getElementById('m176').innerHTML = (b0 * 0);
    document.getElementById('m177').innerHTML = (b0 * 30) + (s0 * 40 + s1 * 20 + s5 * 40) + (e05 * 20);
    document.getElementById('m178').innerHTML = (b0 * 30) + (s0 * 40 + s4 * 40 + s5 * 20) + (e05 * 30 + e12 * 20);
    document.getElementById('m179').innerHTML = (b0 * 0);
    document.getElementById('m180').innerHTML = (b0 * 30 + b1 * 30) + (s0 * 30 + s4 * 30 + s6 * 30);
    document.getElementById('m181').innerHTML = (b0 * 0);
    document.getElementById('m182').innerHTML = (b0 * 20 + b1 * 20) + (s0 * 60 + s5 * 60);
    document.getElementById('m183').innerHTML = (b0 * 30) + (s0 * 30 + s4 * 30 + s5 * 30) + (e03 * 20 + e05 * 20 - e03 * e05 * 20);
    document.getElementById('m184').innerHTML = (b0 * 0);
    document.getElementById('m185').innerHTML = (b0 * 0);
    document.getElementById('m186').innerHTML = (b0 * 0);
    document.getElementById('m187').innerHTML = (b0 * 0) + (s0 * 40 + s1 * 20 + s2 * 40) + (e04 * 30);
    document.getElementById('m188').innerHTML = (b0 * 0) + (s0 * 40 + s1 * 20 + s2 * 40) + (e04 * 40);
    document.getElementById('m189').innerHTML = (b0 * 0) + (s0 * 40 + s2 * 40 + s3 * 20) + (e04 * 30);
    document.getElementById('m190').innerHTML = (b0 * 0);
    document.getElementById('m191').innerHTML = (b0 * 20 + b1 * 20) + (s0 * 40 + s2 * 40 + s4 * 20) + (e02 * 20 + e09 * 20);
    document.getElementById('m192').innerHTML = (b0 * 0) + (e01 * 20);
    document.getElementById('m193').innerHTML = (b0 * 0);
    document.getElementById('m194').innerHTML = (b0 * 0);
    document.getElementById('m195').innerHTML = (b0 * 0) + (s0 * 40 + s2 * 40 + s4 * 20);
    document.getElementById('m196').innerHTML = (b0 * 0);
    document.getElementById('m197').innerHTML = (b0 * 0);
    document.getElementById('m198').innerHTML = (b0 * 40) + (s0 * 30 + s2 * 30 + s6 * 30) + (e12 * 10);
    document.getElementById('m199').innerHTML = (b0 * 20) + (s0 * 40 + s2 * 20 + s6 * 40) + (e05 * 40 + e04 * 40 - e05 * e04 * 40);
    document.getElementById('m200').innerHTML = (b0 * 40 + b1 * 40) + (s0 * 40 + s2 * 40 + s4 * 20) + (e04 * 20 + e09 * 20);
    document.getElementById('m201').innerHTML = (b0 * 0);
    document.getElementById('m202').innerHTML = (b0 * 0) + (s0 * 30 + s2 * 30) + (e01 * 40);
    document.getElementById('m203').innerHTML = (b0 * 0) + (s0 * 40 + s2 * 40 + s6 * 20) + (e04 * 20);
    document.getElementById('m204').innerHTML = (b0 * 0);
    document.getElementById('m205').innerHTML = (b0 * 20 + b1 * 20 + b2 * 20) + (s0 * 40 + s2 * 40 + s6 * 20) + (e18 * 40);
    document.getElementById('m206').innerHTML = (b0 * 0);
    document.getElementById('m207').innerHTML = (b0 * 0);
    document.getElementById('m208').innerHTML = (b0 * 0) + (s0 * 30 + s3 * 30);
    document.getElementById('m209').innerHTML = (b0 * 20 + b1 * 20 + b2 * 20) + (s0 * 30 + s1 * 30 + s5 * 30);
    document.getElementById('m210').innerHTML = (b0 * 30 + b1 * 30 + b2 * 30) + (s0 * 30 + s4 * 30 + s7 * 30) + (e16 * 40);
    document.getElementById('m211').innerHTML = (b0 * 0) + (s0 * 60 + s7 * 60) + (e17 * 80);
    document.getElementById('m212').innerHTML = (b0 * 20 + b1 * 20) + (s0 * 40 + s4 * 40 + s5 * 20);
    document.getElementById('m213').innerHTML = (b0 * 30 + b1 * 30) + (s0 * 40 + s2 * 20 + s5 * 40);
    document.getElementById('m214').innerHTML = (b0 * 0) + (s0 * 30 + s2 * 30);
    document.getElementById('m215').innerHTML = (b0 * 0);
    document.getElementById('m216').innerHTML = (b0 * 0) + (s0 * 40 + s3 * 40 + s7 * 20) + (e01 * 20);
    document.getElementById('m217').innerHTML = (b0 * 0);
    document.getElementById('m218').innerHTML = (b0 * 0);
    document.getElementById('m219').innerHTML = (b0 * 0) + (s0 * 20 + s1 * 20 + s5 * 20 + s6 * 20);
    document.getElementById('m220').innerHTML = (b0 * 60) + (s0 * 30 + s5 * 30 + s6 * 30);
    document.getElementById('m221').innerHTML = (b0 * 40 + b1 * 40) + (s0 * 20 + s3 * 20 + s4 * 20 + s5 * 20);
    document.getElementById('m222').innerHTML = (b0 * 20 + b1 * 20 + b2 * 20) + (s0 * 60 + s6 * 60);
    document.getElementById('m223').innerHTML = (b0 * 40) + (s0 * 30 + s3 * 30 + s6 * 30) + (e04 * 30 + e05 * 30 - e04 * e05 * 30);
    document.getElementById('m224').innerHTML = (b0 * 0) + (s0 * 40 + s5 * 20 + s6 * 40) + (e01 * 40);
    document.getElementById('m225').innerHTML = (b0 * 30 + b1 * 30) + (s0 * 60 + s6 * 60) + (e01 * 40);
    document.getElementById('m226').innerHTML = (b0 * 20 + b1 * 20) + (s0 * 30 + s1 * 30 + s6 * 30) + (e01 * 30 + e12 * 10);
    document.getElementById('m227').innerHTML = (b0 * 0) + (s0 * 30 + s6 * 30) + (e01 * 30);
    document.getElementById('m228').innerHTML = (b0 * 30 + b1 * 30) + (s0 * 10 + s1 * 10 + s2 * 10 + s6 * 10) + (e01 * 20);
    document.getElementById('m229').innerHTML = (b0 * 30 + b1 * 30) + (s0 * 40 + s1 * 10 + s4 * 20 + s6 * 40) + (e01 * 30 + e10 * 20);
    document.getElementById('m230').innerHTML = (b0 * 0);
    document.getElementById('m231').innerHTML = (b0 * 0);
    document.getElementById('m232').innerHTML = (b0 * 40 + b1 * 40) + (s0 * 30 + s2 * 30 + s6 * 30);
    document.getElementById('m233').innerHTML = (b0 * 30 + b1 * 30) + (s0 * 40 + s4 * 20 + s6 * 40);
    document.getElementById('m234').innerHTML = (b0 * 30) + (s0 * 40 + s4 * 20 + s6 * 40);
    document.getElementById('m235').innerHTML = (b0 * 0) + (s0 * 30 + s4 * 30 + s6 * 30) + (e01 * 20 + e05 * 20 - e01 * e05 * 20);
    document.getElementById('m236').innerHTML = (b0 * 30 + b1 * 30) + (s0 * 30 + s4 * 30 + s6 * 30) + (e07 * 20);
    document.getElementById('m237').innerHTML = (b0 * 30 + b1 * 30) + (s0 * 30 + s1 * 30 + s5 * 30) + (e01 * 30);
    document.getElementById('m238').innerHTML = (b0 * 0);
    document.getElementById('m239').innerHTML = (b0 * 30 + b1 * 30) + (s0 * 30 + s1 * 30 + s5 * 30) + (e01 * 30);
    document.getElementById('m240').innerHTML = (b0 * 0);
    document.getElementById('m241').innerHTML = (b0 * 20 + b1 * 20) + (s0 * 30 + s5 * 30);
    document.getElementById('m242').innerHTML = (b0 * 0) + (s0 * 40 + s5 * 40 + s7 * 20) + (e01 * 30 + e11 * 20);
    document.getElementById('m243').innerHTML = (b0 * 0) + (s0 * 40 + s4 * 40 + s5 * 20) + (e01 * 30);
    document.getElementById('m244').innerHTML = (b0 * 0);
    document.getElementById('m245').innerHTML = (b0 * 0);
    document.getElementById('m246').innerHTML = (b0 * 60 + b1 * 60) + (s0 * 40 + s5 * 20 + s6 * 40);
    document.getElementById('m247').innerHTML = (b0 * 30 + b1 * 30) + (s0 * 30 + s5 * 30 + s6 * 30) + (e02 * 30);
    document.getElementById('m248').innerHTML = (b0 * 0) + (s0 * 15 + s1 * 15 + s5 * 15);
    document.getElementById('m249').innerHTML = (b0 * 20 + b1 * 20) + (s0 * 40 + s4 * 40 + s5 * 20) + (e02 * 20);
    document.getElementById('m250').innerHTML = (b0 * 0);
    document.getElementById('m251').innerHTML = (b0 * 0) + (s0 * 40 + s5 * 40 + s6 * 20) + (e04 * 30);
    document.getElementById('m252').innerHTML = (b0 * 30 + b1 * 30 + b2 * 30) + (s0 * 40 + s5 * 40 + s6 * 20);
    document.getElementById('m253').innerHTML = (b0 * 30) + (s0 * 30 + s1 * 30 + s5 * 30);
    document.getElementById('m254').innerHTML = (b0 * 50) + (s0 * 40 + s4 * 40 + s5 * 20);
    document.getElementById('m255').innerHTML = (b0 * 0) + (s0 * 15 + s1 * 15 + s5 * 15);
    document.getElementById('m256').innerHTML = (b0 * 0) + (s0 * 40 + s4 * 40 + s5 * 20) + (e01 * 20);
    document.getElementById('m257').innerHTML = (b0 * 0);
    document.getElementById('m258').innerHTML = (b0 * 0);
    document.getElementById('m259').innerHTML = (b0 * 0);
    document.getElementById('m260').innerHTML = (b0 * 15 + b1 * 15) + (s0 * 40 + s1 * 40 + s6 * 20);
    document.getElementById('m261').innerHTML = (b0 * 30 + b1 * 30) + (s0 * 30 + s2 * 30 + s6 * 30) + (e10 * 20);
    document.getElementById('m262').innerHTML = (b0 * 0);
    document.getElementById('m263').innerHTML = (b0 * 30 + b1 * 30) + (s0 * 40 + s1 * 20 + s5 * 40) + (e12 * 10);
    document.getElementById('m264').innerHTML = (b0 * 20 + b1 * 20) + (s0 * 60 + s1 * 60) + (e01 * 20);
    document.getElementById('m265').innerHTML = (b0 * 30 + b1 * 30 + b2 * 30) + (s0 * 30 + s2 * 30 + s5 * 30) + (e01 * 40);
}