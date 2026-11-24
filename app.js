/* gardela.lt – telefono pavyzdys ir savaitės kainos skaičiuoklė. Be bibliotekų, be slapukų, be užklausų į kitus serverius.
   Duomenys (D) – iš tų pačių failų kaip programėlė: receptai, porcijų kainos ir Maximos prekės (2026-11-13). */
(function () {
  'use strict';
  var D = {"order":["cacio","soboro","salti","dalas","bibim","mesa","cepel"],"dishes":{"cacio":{"title":"Cacio e pepe stiliaus spagečiai su parmezanu ir pipirais","short":"Cacio e pepe","desc":"Romos klasika iš kelių produktų: sūris, pipirai ir krakmolingas makaronų vanduo susijungia į kreminį padažą be lašo grietinėlės. Vietoj pekorino čia parmezanas, o sviestas padeda padažui išlikti vientisam.","cuisine":"Itališka","min":20,"pm":1.02,"pr":1.5,"kcal":560,"prot":22,"carb":72,"fat":20,"ing":[{"t":"120 g parmezano","o":false},{"t":"400 g spagečių","o":false},{"t":"18 g (1 v. š.) druskos makaronų vandeniui","o":false},{"t":"45 g (3 v. š.) sviesto","o":false},{"t":"4 g (2 a. š.) stambiai maltų juodųjų pipirų","o":false}],"steps":[{"t":"Parmezaną sutarkuokite smulkiausia tarka – kuo smulkesnis sūris, tuo lengviau jis išsilydys.","m":null},{"t":"Puode užvirinkite 2,5 l pasūdyto vandens (18 g (1 v. š.) druskos) – mažiau nei įprastai, kad vanduo būtų krakmolingesnis – ir virkite spagečius 2 min trumpiau, nei nurodyta ant pakuotės (apie 7 min). Pasisemkite didelį puodelį virimo vandens ir nusunkite.","m":7},{"t":"Kol spagečiai verda, didelėje keptuvėje ant vidutinės ugnies ištirpinkite 22,5 g (1,5 v. š.) sviesto, suberkite 3,5 g (1,75 a. š.) pipirų ir pakaitinkite 1 min, kol pakvips. Nukelkite nuo ugnies.","m":1},{"t":"Į keptuvę įpilkite 200 ml virimo vandens, sudėkite nusunktus spagečius ir likusį sviestą (22,5 g (1,5 v. š.)). Ant vidutinės ugnies maišydami pavirkite 1–2 min, kol makaronai suminkštės, o skysčio liks tik ant dugno. Nukelkite keptuvę nuo ugnies ir palaukite pusę minutės – per karštame padaže sūris sulimpa į gumulus.","m":2},{"t":"Parmezaną berkite po saują, vis energingai maišydami žnyplėmis, kol susidarys kreminis padažas. Jei jis per tirštas, įpilkite dar šlakelį virimo vandens.","m":null},{"t":"Patiekite iškart, pabarstę likusiais pipirais (0,5 g (0,25 a. š.)).","m":null}],"need":[["parmezanas",30.0],["spageciai",100.0],["druska",4.5],["sviestas",11.25],["juodieji-pipirai",1.0]]},"soboro":{"title":"Soboro don – malta vištiena, kiaušinienė ir žirneliai ant ryžių","short":"Soboro don","desc":"Trijų spalvų japoniškas dubenėlis: saldžiai sūrūs maltos vištienos trupiniai su imbieru, puri salsva kiaušinienė ir žirneliai ant ryžių. Švelnų skonį mėgsta vaikai, o kitą dieną tinka į pietų dėžutę.","cuisine":"Azijietiška","min":25,"pm":1.33,"pr":1.65,"kcal":730,"prot":41,"carb":75,"fat":29,"ing":[{"t":"320 g ryžių","o":false},{"t":"6 kiaušiniai","o":false},{"t":"30 g (2,5 v. š.) cukraus","o":false},{"t":"žiupsnelis druskos","o":false},{"t":"1 cm gabalėlis imbiero","o":false},{"t":"15 ml (1 v. š.) aliejaus","o":false},{"t":"500 g maltos vištienos","o":false},{"t":"60 ml (4 v. š.) sojų padažo","o":false},{"t":"200 g šaldytų žirnelių","o":false},{"t":"15 g (1 v. š.) sviesto","o":false}],"steps":[{"t":"Ryžius perplaukite ir suberkite į puodą. Užpilkite 600 ml vandens ir užvirinkite. Uždenkite ir virkite ant mažiausios ugnies 12 min. Nukelkite ir palikite uždengtus.","m":12},{"t":"Kiaušinius dubenyje išplakite su 6 g (0,5 v. š.) cukraus ir druska. Imbierą sutarkuokite.","m":null},{"t":"Keptuvėje įkaitinkite aliejų, sudėkite maltą vištieną ir kepkite 5 min, mentele ar šakute smulkindami į kuo smulkesnius trupinius, kol nebeliks rausvos spalvos.","m":5},{"t":"Įmaišykite imbierą, sojų padažą, likusį cukrų (24 g (2 v. š.)) ir 4 v. š. vandens. Virkite ant vidutinės ugnies 5 min, pamaišydami, kol beveik visas skystis išgaruos.","m":5},{"t":"Žirnelius 2 min pavirkite nedideliame puode verdančio vandens ir nusunkite.","m":2},{"t":"Kitoje keptuvėje ant mažos ugnies ištirpinkite sviestą, supilkite kiaušinius ir 3 min nuolat maišykite mentele, kol susidarys smulkūs minkšti gumulėliai. Iškart nukelkite, kad neperdžiūtų.","m":3},{"t":"Ryžius paskirstykite į dubenėlius. Ant vienos pusės dėkite vištienos, ant kitos – kiaušinienės, o per vidurį juostele suberkite žirnelius.","m":null}],"need":[["ryziai",80.0],["kiausiniai",1.5],["cukrus",7.5],["druska",0.5],["imbieras",2.5],["saulegrazu-aliejus",3.75],["malta-vistiena",125.0],["soju-padazas",15.0],["saldyti-zirneliai",50.0],["sviestas",3.75]]},"salti":{"title":"Šaltibarščiai su karštomis bulvėmis","short":"Šaltibarščiai","desc":"Šalta rožinė sriuba su karštomis bulvėmis – šiltojo sezono klasika, paruošiama per 35 minutes.","cuisine":"Lietuviška","min":35,"pm":1.51,"pr":1.47,"kcal":490,"prot":25,"carb":59,"fat":15,"ing":[{"t":"800 g bulvių","o":false},{"t":"6 g (1 a. š.) druskos","o":false},{"t":"7,5 g (1,25 a. š.) druskos vandeniui","o":false},{"t":"4 kiaušiniai","o":false},{"t":"500 g virtų burokėlių (tinka ir marinuoti – tada acto ir cukraus nereikia)","o":false},{"t":"2 agurkai","o":false},{"t":"0,5 ryšelio svogūnų laiškų (40 g)","o":false},{"t":"ryšelis krapų (30 g)","o":false},{"t":"1,5 l kefyro (geriausia – šaltibarščių)","o":false},{"t":"15 ml (1 v. š.) acto","o":false},{"t":"5 g (1 a. š.) cukraus","o":false}],"steps":[{"t":"Bulves nulupkite, supjaustykite ir užvirinkite pasūdytame vandenyje (7,5 g (1,25 a. š.) druskos). Virkite 20 min, kol suminkštės.","m":20},{"t":"Kiaušinius virkite 9 min, atvėsinkite šaltame vandenyje, nulupkite ir perpjaukite pusiau.","m":9},{"t":"Burokėlius ir agurkus sutarkuokite burokine tarka, svogūnų laiškus ir krapus susmulkinkite (dalį krapų pasilikite pabarstyti).","m":null},{"t":"Dideliame dubenyje sumaišykite kefyrą su burokėliais, agurkais, žalumynais, 6 g (1 a. š.) druskos, actu ir cukrumi. Paragaukite – turi būti gaivu, su lengva rūgštele. Jei sriuba per tiršta, įpilkite šalto virinto vandens. Jei yra laiko, palaikykite šaldytuve 30 min – skoniai susijungs.","m":null},{"t":"Į dubenėlius pilkite sriubą, dėkite po perpjautą kiaušinį, apibarstykite pasiliktais krapais. Bulves nusunkite ir karštas patiekite atskirai.","m":null}],"need":[["bulves",200.0],["druska",1.5],["druska",1.875],["kiausiniai",1.0],["virti-burokeliai",125.0],["agurkai",75.0],["zalieji-svogunai",10.0],["krapai",7.5],["kefyras",375.0],["actas",3.75],["cukrus",1.25]]},"dalas":{"title":"Raudonųjų lęšių dalas su ryžiais","short":"Lęšių dalas","desc":"Tirštas raudonųjų lęšių troškinys su aliejuje pakepintais svogūnais, česnaku, kuminu ir pomidorais – kasdienis Indijos namų maistas. Pigu, sotu, veganiška ir išverda per pusvalandį.","cuisine":"Indiška","min":30,"pm":0.63,"pr":0.8,"kcal":620,"prot":24,"carb":97,"fat":13,"ing":[{"t":"250 g raudonųjų lęšių","o":false},{"t":"320 g ryžių","o":false},{"t":"1 didelis svogūnas","o":false},{"t":"4 skiltelės česnako","o":false},{"t":"2 cm gabalėlis imbiero","o":false},{"t":"2 pomidorai","o":false},{"t":"45 ml (3 v. š.) aliejaus","o":false},{"t":"4 g (2 a. š.) kumino","o":false},{"t":"5 g (1 v. š.) kario miltelių","o":false},{"t":"2 g (1 a. š.) maltos paprikos","o":false},{"t":"9 g (1,5 a. š.) druskos","o":false},{"t":"0,5 citrinos","o":false},{"t":"kelios šakelės kalendros","o":true},{"t":"žiupsnelis aitriosios paprikos","o":true}],"steps":[{"t":"Lęšius perplaukite, užpilkite 1 l vandens ir užvirinkite. Nugriebkite putas, sumažinkite ugnį ir virkite pridengę 15 min, kol lęšiai visai suirs.","m":15},{"t":"Tuo pat metu ryžius perplaukite, suberkite į kitą puodą ir užpilkite 600 ml vandens. Užvirinkite, uždenkite ir virkite ant mažiausios ugnies 12 min. Nukelkite ir palikite uždengtus.","m":12},{"t":"Kol lęšiai ir ryžiai verda, svogūną susmulkinkite, česnaką ir imbierą sutarkuokite, pomidorus supjaustykite kubeliais. Keptuvėje įkaitinkite aliejų ir kepinkite svogūną 6 min, kol gražiai paruduos.","m":6},{"t":"Suberkite česnaką, imbierą, kuminą, kario miltelius ir maltą papriką, pakepinkite 1 min, kol pakvips. Sudėkite pomidorus ir kepinkite dar 4 min, kol jie suminkštės.","m":5},{"t":"Keptuvės turinį supilkite į lęšius, pasūdykite ir pavirkite kartu 3 min. Jei dalas per tirštas, įpilkite šlakelį karšto vandens. Įspauskite 0,5 citrinos sultis ir paragaukite.","m":3},{"t":"Patiekite su ryžiais. Jei norite, pabarstykite kalendra ir aitriąja paprika.","m":null}],"need":[["raudonieji-lesiai",62.5],["ryziai",80.0],["svogunai",37.5],["cesnakai",5.0],["imbieras",5.0],["pomidorai",62.5],["saulegrazu-aliejus",11.25],["kuminas",1.0],["karis",1.25],["malta-paprika",0.5],["druska",2.25],["citrinos",0.25]]},"bibim":{"title":"Bibimbap stiliaus ryžių dubenėlis su daržovėmis ir keptu kiaušiniu","short":"Bibimbap","desc":"Korėjietiškas ryžių dubenėlis: atskirai apkeptos morkos, cukinija, pievagrybiai ir špinatai, keptas kiaušinis skystu tryniu ir švelnus sojų bei sezamų padažas vietoj aštrios čili pastos. Prieš valgant viskas išmaišoma.","cuisine":"Azijietiška","min":40,"pm":1.74,"pr":1.88,"kcal":560,"prot":18,"carb":72,"fat":21,"ing":[{"t":"320 g ryžių","o":false},{"t":"45 ml (3 v. š.) sojų padažo","o":false},{"t":"9 g (2 a. š.) cukraus","o":false},{"t":"5 ml (1 a. š.) acto","o":false},{"t":"15 ml (3 a. š.) sezamų aliejaus","o":false},{"t":"10 g (1 v. š.) sezamų sėklų","o":false},{"t":"kelios svogūnų laiškų šakelės","o":false},{"t":"2 skiltelės česnako","o":false},{"t":"žiupsnelis aitriosios paprikos dribsnių","o":true},{"t":"2 morkos","o":false},{"t":"1 cukinija","o":false},{"t":"250 g pievagrybių","o":false},{"t":"45 ml (3 v. š.) aliejaus","o":false},{"t":"4,5 g (0,75 a. š.) druskos (daržovėms)","o":false},{"t":"200 g šviežių špinatų (1 pakuotė)","o":false},{"t":"4 kiaušiniai","o":false}],"steps":[{"t":"Ryžius perplaukite ir suberkite į puodą. Užpilkite 600 ml vandens ir užvirinkite. Uždenkite ir virkite ant mažiausios ugnies 12 min. Nukelkite ir palikite uždengtus.","m":12},{"t":"Česnaką sutarkuokite, svogūnų laiškus susmulkinkite. Padažui dubenėlyje sumaišykite sojų padažą, cukrų, actą, 2 a. š. sezamų aliejaus, sezamų sėklas, laiškus ir pusę česnako. Jei norite aštriau, įberkite aitriosios paprikos.","m":null},{"t":"Morkas supjaustykite plonais šiaudeliais arba sutarkuokite stambia tarka, cukiniją – pusmėnuliais, pievagrybius – griežinėliais.","m":null},{"t":"Didelėje keptuvėje įkaitinkite 1 v. š. aliejaus. Morkas kepkite 3 min ir perdėkite į lėkštę, tada 3 min kepkite cukiniją. Įpilkite dar 1 v. š. aliejaus ir 4 min kepkite pievagrybius. Kiekvieną daržovę kepdami šiek tiek pasūdykite ir dėkite į atskirą krūvelę.","m":10},{"t":"Į tą pačią keptuvę suberkite špinatus ir likusį česnaką, maišykite 1 min, kol lapai suvys. Šaukštu prispauskite ir nupilkite išsiskyrusį skystį, apšlakstykite likusiu sezamų aliejumi (5 ml (1 a. š.)) ir perdėkite prie kitų daržovių.","m":1},{"t":"Keptuvėje įkaitinkite likusį aliejų (15 ml (1 v. š.)) ir kepkite kiaušinius apie 3 min – baltymas turi sustingti, o trynys likti skystas. Vaikams kepkite, kol trynys sustings.","m":3},{"t":"Ryžius paskirstykite į dubenėlius, ratu išdėliokite daržoves, viduryje uždėkite po kiaušinį. Užpilkite padažu, o valgydami viską išmaišykite.","m":null}],"need":[["ryziai",80.0],["soju-padazas",11.25],["cukrus",2.25],["actas",1.25],["sezamo-aliejus",3.75],["sezamo-seklos",2.5],["zalieji-svogunai",7.5],["cesnakai",2.5],["morkos",50.0],["cukinijos",75.0],["pievagrybiai",62.5],["saulegrazu-aliejus",11.25],["druska",1.125],["spinatai",50.0],["kiausiniai",1.0]]},"mesa":{"title":"Mėsa „prancūziškai“ – kiauliena su bulvėmis, svogūnais ir sūriu orkaitėje","short":"Mėsa prancūziškai","desc":"Vienas kepimo indas: apačioje bulvės, ant jų sprandinė, svogūnai ir po sūrio plutele apskrudęs majonezo bei grietinės sluoksnis. Darbo – tik sluoksniuoti, visa kita padaro orkaitė.","cuisine":"Lietuviška","min":85,"pm":1.22,"pr":1.27,"kcal":830,"prot":41,"carb":36,"fat":56,"ing":[{"t":"900 g bulvių","o":false},{"t":"15 ml (1 v. š.) aliejaus","o":false},{"t":"9 g (1,5 a. š.) druskos","o":false},{"t":"2 g (1 a. š.) maltų juodųjų pipirų","o":false},{"t":"600 g kiaulienos sprandinės","o":false},{"t":"2 dideli svogūnai","o":false},{"t":"90 g (6 v. š.) majonezo","o":false},{"t":"100 g grietinės","o":false},{"t":"2 skiltelės česnako","o":false},{"t":"150 g fermentinio sūrio","o":false},{"t":"kelios šakelės krapų","o":true}],"steps":[{"t":"Orkaitę įkaitinkite iki 200 °C. Bulves nuskuskite ir supjaustykite plonais, maždaug 3 mm storio, griežinėliais. Maždaug 25 × 35 cm kepimo indą (2 porcijoms – maždaug 20 × 20 cm) ištepkite aliejumi, išdėliokite bulves lygiu sluoksniu, pabarstykite 4,5 g (0,75 a. š.) druskos ir 1 g (0,5 a. š.) pipirų.","m":null},{"t":"Sprandinę supjaustykite 1 cm storio gabalais skersai skaidulų, uždenkite maistine plėvele ir lengvai išmuškite. Pabarstykite 4,5 g (0,75 a. š.) druskos bei 1 g (0,5 a. š.) pipirų ir išdėliokite ant bulvių.","m":null},{"t":"Svogūnus supjaustykite plonais pusžiedžiais ir išdėliokite ant mėsos. Majonezą sumaišykite su grietine ir smulkintu česnaku, tolygiai užtepkite ant viršaus.","m":null},{"t":"Indą sandariai uždenkite folija ir kepkite 45 min, kol bulvės beveik suminkštės: po folija jos iššunta, o mėsa lieka sultinga.","m":45},{"t":"Sūrį sutarkuokite. Nuimkite foliją, užberkite sūrį ir kepkite dar 15 min, kol sūris gražiai apskrus, o bulvės suminkštės ir peilis į jas lengvai įsmigs.","m":15},{"t":"Leiskite 5 min pastovėti, supjaustykite porcijomis ir patiekite; jei turite, pabarstykite smulkintais krapais.","m":5}],"need":[["bulves",225.0],["saulegrazu-aliejus",3.75],["druska",2.25],["juodieji-pipirai",0.5],["kiaulienos-sprandine",150.0],["svogunai",75.0],["majonezas",22.5],["grietine",25.0],["cesnakai",2.5],["fermentinis-suris",37.5]]},"cepel":{"title":"Cepelinai su mėsa ir spirgučių padažu","short":"Cepelinai","desc":"Tarkuotų bulvių cepelinai su sultingu kiaulienos įdaru, spirgučių ir svogūnų padažu bei grietine. Darbo nemažai, todėl geriausia juos gaminti savaitgalį, kai prie stalo padeda visa šeima.","cuisine":"Lietuviška","min":110,"pm":1.11,"pr":1.47,"kcal":1000,"prot":35,"carb":93,"fat":52,"ing":[{"t":"2,5 kg bulvių (geriausia krakmolingų)","o":false},{"t":"2 svogūnai","o":false},{"t":"400 g maltos kiaulienos","o":false},{"t":"7,5 g (1,25 a. š.) druskos (įdarui ir tešlai)","o":false},{"t":"6 g (1 a. š.) druskos vandeniui","o":false},{"t":"2 g (1 a. š.) pipirų","o":false},{"t":"30 g (3 v. š.) krakmolo","o":false},{"t":"200 g rūkytos šoninės","o":false},{"t":"200 g grietinės","o":false}],"steps":[{"t":"Atskirkite 500 g bulvių, nulupkite, supjaustykite ir virkite 20 min, kol suminkštės. Nusunkite, sugrūskite į košę be gumulėlių ir palikite atvėsti. Kol bulvės verda, paruoškite įdarą: 1 svogūnas susmulkinkite ir sumaišykite su malta kiauliena, 0,5 a. š. druskos, 1 g (0,5 a. š.) pipirų ir 2 v. š. šalto vandens.","m":20},{"t":"Likusias bulves nulupkite ir sutarkuokite smulkia bulvine tarka arba virtuviniu kombainu. Tarkius dalimis dėkite į marlę ar švarų medvilninį rankšluostį ir stipriai nuspauskite skystį į dubenį. Skystį palikite 10 min nusistovėti, tada atsargiai nupilkite – dugne liks baltas krakmolas.","m":10},{"t":"Nuspaustus tarkius sumaišykite su virtų bulvių koše, nusistovėjusiu krakmolu, 2 v. š. krakmolo ir 0,75 a. š. druskos. Minkykite, kol masė taps vientisa ir limpanti kaip tešla. Dideliame plačiame puode užvirinkite 4 l pasūdyto vandens (6 g (1 a. š.) druskos). Likusį krakmolą (10 g (1 v. š.)) ištirpinkite 100 ml šalto vandens ir supilkite į puodą – verdami cepelinai nesuskils.","m":null},{"t":"Drėgnomis rankomis iš tešlos suplokite delno dydžio paplotėlį, į vidurį dėkite šaukštą įdaro, užspauskite kraštus ir suformuokite pailgą cepeliną be įtrūkimų. Taip sunaudokite visą tešlą ir įdarą – turi išeiti po 2 cepelinus kiekvienai porcijai.","m":null},{"t":"Cepelinus po vieną atsargiai sudėkite į verdantį vandenį ir mediniu šaukštu švelniai pajudinkite, kad neprikibtų prie dugno. Virkite ant vidutinės ugnies 30 min – vanduo turi tik lengvai kunkuliuoti.","m":30},{"t":"Kol cepelinai verda, šoninę supjaustykite mažais kubeliais, likusį svogūną susmulkinkite. Šoninę kepinkite keptuvėje 5 min, kol išleis taukų. Suberkite svogūną ir likusius pipirus (1 g (0,5 a. š.)), kepinkite dar 5 min, kol spirgučiai ir svogūnas gražiai apskrus.","m":10},{"t":"Cepelinus kiaurasamčiu išgriebkite į lėkštes, užpilkite spirgučių padažu ir patiekite su grietine.","m":null}],"need":[["bulves",625.0],["svogunai",50.0],["malta-kiauliena",100.0],["druska",1.875],["druska",1.5],["juodieji-pipirai",0.5],["krakmolas",7.5],["rukyta-sonine",50.0],["grietine",50.0]]}},"products":{"actas":{"n":"Actas 9 %","e":"🫗","c":"spices_oils","s":1,"w":0,"q":1000.0,"u":"ml","p":0.63,"d":"Acto rūgštis BAJORIŠKIŲ, 9 %, 1 l"},"agurkai":{"n":"Agurkai","e":"🥒","c":"produce","s":0,"w":1,"q":1000.0,"u":"g","p":5.49,"d":"Lietuviški trumpavaisiai agurkai, 1 kg"},"bulves":{"n":"Bulvės","e":"🥔","c":"produce","s":0,"w":1,"q":1000.0,"u":"g","p":0.39,"d":"Lietuviškos bulvės, 1 kg"},"cesnakai":{"n":"Česnakai","e":"🧄","c":"produce","s":0,"w":0,"q":50.0,"u":"g","p":0.17,"d":"Česnakas, 1 vnt. (~50 g)"},"citrinos":{"n":"Citrinos","e":"🍋","c":"produce","s":0,"w":0,"q":1.0,"u":"vnt","p":0.28,"d":"Citrina, 1 vnt."},"cukinijos":{"n":"Cukinijos","e":"🥒","c":"produce","s":0,"w":0,"q":300.0,"u":"g","p":1.99,"d":"Ekologiška žalioji cukinija, 300 g"},"cukrus":{"n":"Cukrus","e":"🫙","c":"pantry","s":1,"w":0,"q":1000.0,"u":"g","p":0.59,"d":"Cukrus EXTRA LINE, 1 kg"},"druska":{"n":"Druska","e":"🧂","c":"spices_oils","s":1,"w":0,"q":1000.0,"u":"g","p":0.45,"d":"Akmens druska SALT HILL, 1 kg"},"fermentinis-suris":{"n":"Fermentinis sūris (Gouda / Tilsit)","e":"🧀","c":"dairy_eggs","s":0,"w":1,"q":1000.0,"u":"g","p":7.29,"d":"Gaudos sūris FARM MILK, 45 % rieb., 1 kg"},"grietine":{"n":"Grietinė 30 %","e":"🫙","c":"dairy_eggs","s":0,"w":0,"q":400.0,"u":"g","p":1.55,"d":"Grietinė FARM MILK, 30 % rieb., 400 g"},"imbieras":{"n":"Imbieras (šviežias)","e":"🫚","c":"produce","s":0,"w":0,"q":50.0,"u":"g","p":0.2,"d":"Imbiero šaknis, 1 vnt. (~50 g)"},"juodieji-pipirai":{"n":"Juodieji pipirai","e":"🫙","c":"spices_oils","s":1,"w":0,"q":100.0,"u":"g","p":1.89,"d":"Malti juodieji pipirai SAUDA, 100 g"},"karis":{"n":"Kario milteliai","e":"🫙","c":"spices_oils","s":0,"w":0,"q":20.0,"u":"g","p":0.45,"d":"Karis WELL DONE, 20 g"},"kefyras":{"n":"Kefyras","e":"🫙","c":"dairy_eggs","s":0,"w":0,"q":1000.0,"u":"ml","p":0.89,"d":"Kefyras FARM MILK, 2 % rieb., 1 kg"},"kiaulienos-sprandine":{"n":"Kiaulienos sprandinė","e":"🥩","c":"meat_fish","s":0,"w":1,"q":1000.0,"u":"g","p":3.99,"d":"Kiaulienos sprandinė be kaulo LIETUVIŠKA, 1 kg"},"kiausiniai":{"n":"Kiaušiniai","e":"🥚","c":"dairy_eggs","s":0,"w":0,"q":10.0,"u":"vnt","p":2.19,"d":"Ant kraiko laikomų vištų kiaušiniai, 10 vnt."},"krakmolas":{"n":"Bulvių krakmolas","e":"🌾","c":"pantry","s":1,"w":0,"q":400.0,"u":"g","p":0.8,"d":"Bulvių krakmolas ALOJAS, 400 g"},"krapai":{"n":"Krapai","e":"🌿","c":"produce","s":0,"w":0,"q":50.0,"u":"g","p":0.89,"d":"Krapai, 50 g"},"kuminas":{"n":"Kuminas","e":"🫙","c":"spices_oils","s":0,"w":0,"q":22.0,"u":"g","p":0.69,"d":"Maltas kuminas SALDVA, 22 g"},"majonezas":{"n":"Majonezas","e":"🫙","c":"pantry","s":1,"w":0,"q":620.0,"u":"g","p":2.79,"d":"Majonezas LIETUVIŠKAS ORIGINALUS, 620 g"},"malta-kiauliena":{"n":"Malta kiauliena","e":"🥩","c":"meat_fish","s":0,"w":1,"q":1000.0,"u":"g","p":3.09,"d":"Kiaulienos faršas be antibiotikų, 20 % rieb., 1 kg"},"malta-paprika":{"n":"Malta paprika","e":"🫙","c":"spices_oils","s":1,"w":0,"q":60.0,"u":"g","p":0.99,"d":"Maltos saldžiosios paprikos WELL DONE, 60 g"},"malta-vistiena":{"n":"Malta vištiena","e":"🍗","c":"meat_fish","s":0,"w":0,"q":400.0,"u":"g","p":2.09,"d":"Vištienos faršas VILNIAUS PAUKŠTYNAS, 15 % rieb., 400 g"},"morkos":{"n":"Morkos","e":"🥕","c":"produce","s":0,"w":1,"q":1000.0,"u":"g","p":0.59,"d":"Plautos morkos, 1 kg"},"parmezanas":{"n":"Parmezanas","e":"🧀","c":"dairy_eggs","s":0,"w":1,"q":1000.0,"u":"g","p":24.99,"d":"Sūris PARMIGIANO REGGIANO, 28 % rieb., 1 kg"},"pievagrybiai":{"n":"Pievagrybiai","e":"🍄","c":"produce","s":0,"w":1,"q":1000.0,"u":"g","p":3.29,"d":"Pievagrybiai, 1 kg"},"pomidorai":{"n":"Pomidorai","e":"🍅","c":"produce","s":0,"w":1,"q":1000.0,"u":"g","p":2.59,"d":"Avietiniai pomidorai, 1 kg"},"raudonieji-lesiai":{"n":"Raudonieji lęšiai","e":"🫘","c":"pantry","s":0,"w":0,"q":500.0,"u":"g","p":1.29,"d":"Raudonieji lęšiai GALINTA, 500 g"},"rukyta-sonine":{"n":"Rūkyta šoninė","e":"🥓","c":"meat_fish","s":0,"w":1,"q":1000.0,"u":"g","p":6.29,"d":"Karštai rūkyta kiaulienos šoninė PORMET, 1 kg"},"ryziai":{"n":"Ryžiai","e":"🍚","c":"pantry","s":0,"w":0,"q":800.0,"u":"g","p":0.86,"d":"Balti neplikyti ryžiai EXTRA LINE, 800 g"},"saldyti-zirneliai":{"n":"Šaldyti žirneliai","e":"🫛","c":"frozen","s":0,"w":0,"q":400.0,"u":"g","p":0.95,"d":"Šaldyti žalieji žirneliai WELL DONE, 400 g"},"saulegrazu-aliejus":{"n":"Saulėgrąžų aliejus","e":"🌻","c":"spices_oils","s":1,"w":0,"q":1000.0,"u":"ml","p":2.29,"d":"Saulėgrąžų aliejus WELL DONE, 1 l"},"sezamo-aliejus":{"n":"Sezamų aliejus","e":"🫗","c":"spices_oils","s":1,"w":0,"q":250.0,"u":"ml","p":3.89,"d":"Nerafinuotas sezamų aliejus ANIRA, 250 ml"},"sezamo-seklos":{"n":"Sezamų sėklos","e":"🫙","c":"pantry","s":0,"w":0,"q":150.0,"u":"g","p":0.75,"d":"Sezamai EXTRA LINE, 150 g"},"soju-padazas":{"n":"Sojų padažas","e":"🫙","c":"pantry","s":0,"w":0,"q":150.0,"u":"ml","p":0.99,"d":"Švelnus sojų padažas JADE BRIDGE, 150 ml"},"spageciai":{"n":"Spagečiai","e":"🍝","c":"pantry","s":0,"w":0,"q":400.0,"u":"g","p":0.75,"d":"Spagečiai PASAKA, 400 g"},"spinatai":{"n":"Špinatai (švieži)","e":"🍃","c":"produce","s":0,"w":0,"q":200.0,"u":"g","p":1.69,"d":"Mažieji špinatai WELL DONE, 200 g"},"sviestas":{"n":"Sviestas","e":"🧈","c":"dairy_eggs","s":1,"w":0,"q":180.0,"u":"g","p":0.95,"d":"Sviestas FARM MILK, 82 % rieb., 180 g"},"svogunai":{"n":"Svogūnai","e":"🧅","c":"produce","s":0,"w":1,"q":1000.0,"u":"g","p":0.45,"d":"Svogūnai, 1 kg"},"virti-burokeliai":{"n":"Virti burokėliai (vakuume)","e":"🫜","c":"produce","s":0,"w":0,"q":500.0,"u":"g","p":0.79,"d":"Virti tarkuoti burokėliai LINKĖJIMAI IŠ KAIMO, 500 g"},"zalieji-svogunai":{"n":"Žalieji svogūnai","e":"🌿","c":"produce","s":0,"w":0,"q":100.0,"u":"g","p":1.29,"d":"Svogūnų laiškai LINKĖJIMAI IŠ KAIMO, 100 g"}},"observed":"2026-11-13"};

  var NBSP = ' ';
  var DAYS = ['Pirmadienis', 'Antradienis', 'Trečiadienis', 'Ketvirtadienis', 'Penktadienis', 'Šeštadienis', 'Sekmadienis'];
  var CATS = [['produce', 'Daržovės ir vaisiai'], ['bakery', 'Duona ir kepiniai'], ['meat_fish', 'Mėsa ir žuvis'], ['dairy_eggs', 'Pienas ir kiaušiniai'],
    ['frozen', 'Šaldyti produktai'], ['pantry', 'Bakalėja'], ['spices_oils', 'Prieskoniai ir aliejai'], ['drinks', 'Gėrimai'], ['other', 'Kita']];
  var PORTIONS = 4;
  var TODAY = (new Date().getDay() + 6) % 7;   // pirmadienis = 0; savaitgalį „Šiandien“ nerodoma (plane – penkios dienos)
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function eur(n) { return n.toFixed(2).replace('.', ',') + NBSP + '€'; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function $(id) { return document.getElementById(id); }

  var ICON = {
    swap: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12a7 7 0 1 1-2.6-5.4M19 4.5v4h-4" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    clock: '<svg viewBox="0 0 24 24" width="10" height="10" aria-hidden="true"><circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M12 7.5V12l3 2" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
    check: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5.2 10.4l3.1 3.1 6.4-6.8" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    play: '<svg viewBox="0 0 24 24" width="11" height="11" aria-hidden="true"><path d="M7 4.5v15l12-7.5z" fill="currentColor"/></svg>',
    back: '<svg viewBox="0 0 24 24" width="11" height="11" aria-hidden="true"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };

  /* ================= telefono pavyzdys ================= */
  var screen = $('screen');
  var st = {
    tab: 'plan',
    plan: D.order.slice(0, 5),      // penkios vakarienės, pirmadienis–penktadienis
    dish: D.order[0],
    rtab: 'ing',
    step: 0,
    checked: {},
    swapped: -1,
    timer: null                      // { left, running, id }
  };

  function planTotal() { return st.plan.reduce(function (s, k) { return s + D.dishes[k].pm * PORTIONS; }, 0); }

  /* Pirkinių sąrašas iš plano – kaip programėlėje: sveriamos prekės kas 50 g (bent 100 g), kitos – pakuotėmis;
     „turbūt turi namie“ produktai – atskirai ir į sumą neskaičiuojami. */
  function shopping() {
    var need = {};
    st.plan.forEach(function (k) {
      D.dishes[k].need.forEach(function (n) { need[n[0]] = (need[n[0]] || 0) + n[1] * PORTIONS; });
    });
    var rows = [], staples = [];
    Object.keys(need).forEach(function (slug) {
      var p = D.products[slug], q = need[slug];
      if (p.s) { staples.push(p.n); return; }
      var qty, price, name;
      if (p.w) {
        var g = Math.max(100, Math.ceil(q / 50 - 1e-9) * 50);
        price = p.p / p.q * g;
        qty = '~' + (g >= 1000 ? String(g / 1000).replace('.', ',') + NBSP + 'kg' : g + NBSP + 'g');
        name = p.d.replace(/, 1 (kg|l)$/, '');
      } else {
        var n = Math.ceil(q / p.q - 1e-9);
        price = n * p.p;
        var unit = /, 1 vnt\./.test(p.d);
        qty = n + NBSP + (unit ? 'vnt.' : 'pak.');
        name = p.d.replace(', 1 vnt.', '');
      }
      rows.push({ slug: slug, cat: p.c, title: p.n, emoji: p.e, sub: qty + ' · ' + eur(price) + ' · ' + name, price: price });
    });
    rows.sort(function (a, b) { return a.title.localeCompare(b.title, 'lt'); });
    staples.sort(function (a, b) { return a.localeCompare(b, 'lt'); });
    return { rows: rows, staples: staples, sum: rows.reduce(function (s, r) { return s + r.price; }, 0) };
  }

  function viewPlan() {
    var total = planTotal(), list = shopping();
    var done = list.rows.filter(function (r) { return st.checked[r.slug]; }).length;
    var h = '<div class="view"><div class="scroll"><div class="s-title">Planas</div>' +
      '<div class="s-seg" aria-hidden="true"><span class="on">Ši savaitė</span><span>Kita savaitė</span></div>' +
      '<div class="s-cards"><div class="s-card"><small>Savaitės kaina</small><b>' + eur(total) + '</b><em>4 žmonėms · 5 vakarienės</em></div>' +
      '<button type="button" class="s-card" data-go="list"><small>Pirkiniai ›</small><b>' + done + ' / ' + list.rows.length + '</b><div class="s-bar"><i style="width:' + (list.rows.length ? done / list.rows.length * 100 : 0) + '%"></i></div><em>nupirkta</em></button></div>' +
      '<div class="s-meta">Maximos kainomis</div>';
    st.plan.forEach(function (k, i) {
      var d = D.dishes[k];
      h += '<div class="day' + (i === TODAY ? ' today' : '') + (st.swapped === i ? ' swapped' : '') + '">' +
        '<button type="button" class="day-open" data-dish="' + k + '" aria-label="Atidaryti receptą: ' + esc(d.title) + '"></button>' +
        '<img src="img/plate-' + k + '.webp" alt="" width="46" height="46">' +
        '<div class="day-body"><div class="day-label">' + DAYS[i] + (i === TODAY ? '<span class="now">Šiandien</span>' : '') + '</div>' +
        '<div class="day-title">' + esc(d.title) + '</div>' +
        '<div class="day-foot"><span class="chip">' + d.cuisine + '</span><span>' + ICON.clock + ' ' + d.min + ' min</span><span class="d-price">' + eur(d.pm * PORTIONS) + '</span></div></div>' +
        '<button type="button" class="swap" data-swap="' + i + '" aria-label="Pasiūlyti kitą patiekalą: ' + DAYS[i].toLowerCase() + '">' + ICON.swap + '</button></div>';
    });
    return h + '</div></div>';
  }

  function viewRecipe() {
    var k = st.dish, d = D.dishes[k];
    var h = '<div class="view"><div class="scroll"><div class="r-top"><button type="button" class="r-back" data-go="plan">' + ICON.back + 'Atgal</button></div>' +
      '<img class="r-hero" src="img/hero-' + k + '.webp" alt="' + esc(d.title) + '" width="660" height="440">' +
      '<div class="r-title">' + esc(d.title) + '</div><span class="chip r-chip">' + d.cuisine + '</span>' +
      '<p class="r-desc">' + esc(d.desc) + '</p>' +
      '<div class="r-stats"><div><small>Laikas</small><b>' + d.min + ' min</b></div><div><small>Porcijos</small><b>' + PORTIONS + '</b></div><div><small>Porcijai</small><b>' + eur(d.pm) + '</b></div></div>' +
      '<button type="button" class="btn" data-cook="1">' + ICON.play + 'Gaminti žingsnis po žingsnio</button>' +
      '<div class="nut"><small>Maistinė vertė</small><em>1 porcijai · apytiksliai</em><div class="nut-grid">' +
      '<div class="n-k"><b>' + d.kcal + '</b><span>kcal</span></div><div class="n-p"><b>' + d.prot + ' g</b><span>Baltymai</span></div>' +
      '<div class="n-c"><b>' + d.carb + ' g</b><span>Angliav.</span></div><div class="n-f"><b>' + d.fat + ' g</b><span>Riebalai</span></div></div></div>' +
      '<div class="r-tabs" role="tablist"><button type="button" role="tab" data-rtab="ing" aria-selected="' + (st.rtab === 'ing') + '">Ingredientai</button>' +
      '<button type="button" role="tab" data-rtab="steps" aria-selected="' + (st.rtab === 'steps') + '">Žingsniai</button></div>';
    if (st.rtab === 'ing') {
      h += '<ul class="r-list">' + d.ing.map(function (i) { return '<li' + (i.o ? ' class="opt"' : '') + '>' + esc(i.t) + (i.o ? ' (nebūtina)' : '') + '</li>'; }).join('') + '</ul>';
    } else {
      h += '<ol class="r-list r-steps">' + d.steps.map(function (s, n) { return '<li><b>' + (n + 1) + '</b><span>' + esc(s.t) + '</span></li>'; }).join('') + '</ol>';
    }
    return h + '</div></div>';
  }

  function viewList() {
    var list = shopping();
    var done = list.rows.filter(function (r) { return st.checked[r.slug]; }).length;
    var h = '<div class="view"><div class="scroll"><div class="s-title">Pirkiniai</div>' +
      '<div class="l-card"><div class="l-row"><div><small>Nupirkta</small><b id="l-done">' + done + ' / ' + list.rows.length + '</b></div>' +
      '<div style="text-align:right"><small>Kasoje apie</small><b>' + Math.round(list.sum) + NBSP + '€</b></div></div>' +
      '<div class="s-bar"><i id="l-bar" style="width:' + (done / list.rows.length * 100) + '%"></i></div>' +
      '<p>Maxima · pagal planą sunaudosi už ~' + Math.round(planTotal()) + NBSP + '€, likę produktai liks kitoms savaitėms</p></div>' +
      '<div class="pantry"><b>Patikrink, ar turi namie</b><p>Šių produktų į sumą neskaičiavom.</p><div>' +
      list.staples.map(function (s) { return '<span>' + esc(s) + '</span>'; }).join('') + '</div></div>';
    CATS.forEach(function (c) {
      var rows = list.rows.filter(function (r) { return r.cat === c[0]; });
      if (!rows.length) return;
      h += '<div class="l-sec">' + c[1] + '</div><div class="l-group">';
      rows.forEach(function (r) {
        h += '<button type="button" class="item" role="checkbox" aria-checked="' + (!!st.checked[r.slug]) + '" data-item="' + r.slug + '">' +
          '<span class="box">' + ICON.check + '</span><span class="emo" aria-hidden="true">' + r.emoji + '</span>' +
          '<span><b>' + esc(r.title) + '</b><small>' + esc(r.sub) + '</small></span></button>';
      });
      h += '</div>';
    });
    return h + '</div></div>';
  }

  function mmss(sec) { var m = Math.floor(sec / 60), s = sec % 60; return m + ':' + (s < 10 ? '0' : '') + s; }
  function timerLabel(step) {
    var t = st.timer;
    if (!t) return ICON.clock + ' ' + step.m + ' min';
    if (t.left <= 0) return 'Laikas!';
    return ICON.clock + ' ' + mmss(t.left) + (t.running ? '' : ' · pristabdyta');
  }

  function viewCook() {
    var d = D.dishes[st.dish], n = d.steps.length, s = d.steps[st.step];
    var h = '<div class="view c-view"><div class="scroll"><div class="c-head"><button type="button" class="c-x" data-go="recipe" aria-label="Uždaryti gaminimą">✕</button>' +
      '<div class="c-count">Žingsnis ' + (st.step + 1) + ' iš ' + n + '</div><span></span></div><div class="c-prog" aria-hidden="true">';
    for (var i = 0; i < n; i++) h += '<i' + (i <= st.step ? ' class="on"' : '') + '></i>';
    h += '</div><div class="c-card"><div class="c-n">' + (st.step + 1) + '</div><div class="c-text">' + esc(s.t) + '</div></div>';
    if (s.m) {
      var cls = st.timer ? (st.timer.left <= 0 ? ' done' : ' run') : '';
      h += '<button type="button" class="btn ghost timer' + cls + '" id="timer" data-timer="1" aria-live="off">' + timerLabel(s) + '</button>';
    }
    h += '<div class="c-nav"><button type="button" class="btn ghost" data-step="-1"' + (st.step === 0 ? ' disabled' : '') + '>Atgal</button>' +
      '<button type="button" class="btn" data-step="1">' + (st.step === n - 1 ? 'Baigti' : 'Toliau') + '</button></div>';
    return h + '</div></div>';
  }

  function stopTimer() { if (st.timer && st.timer.id) clearInterval(st.timer.id); st.timer = null; }

  function render(keepScroll) {
    var sc = keepScroll && screen.querySelector('.scroll'), top = sc ? sc.scrollTop : 0;
    screen.innerHTML = st.tab === 'plan' ? viewPlan() : st.tab === 'recipe' ? viewRecipe() : st.tab === 'list' ? viewList() : viewCook();
    if (keepScroll) {
      var v = screen.querySelector('.view'); if (v) v.style.animation = 'none';
      var ns = screen.querySelector('.scroll'); if (ns) ns.scrollTop = top;
    }
    st.swapped = -1;
    var tabs = document.querySelectorAll('.demo-tabs [role=tab]');
    for (var i = 0; i < tabs.length; i++) {
      var on = tabs[i].getAttribute('data-tab') === st.tab;
      tabs[i].setAttribute('aria-selected', on);
      tabs[i].tabIndex = on ? 0 : -1;
    }
  }

  function go(tab) {
    if (tab !== 'cook') stopTimer();
    if (tab === 'cook' && st.tab !== 'cook') { st.step = 0; stopTimer(); }
    st.tab = tab; render(false);
  }

  if (screen) {
    screen.addEventListener('click', function (e) {
      var t = e.target.closest('button'); if (!t) return;
      var a;
      if ((a = t.getAttribute('data-go'))) { go(a); return; }
      if ((a = t.getAttribute('data-dish'))) { st.dish = a; st.rtab = 'ing'; go('recipe'); return; }
      if ((a = t.getAttribute('data-swap')) !== null) {
        var i = +a, cur = st.plan[i], idx = D.order.indexOf(cur);
        for (var n = 1; n <= D.order.length; n++) {
          var cand = D.order[(idx + n) % D.order.length];
          if (st.plan.indexOf(cand) === -1) { st.plan[i] = cand; break; }
        }
        if (st.dish === cur) st.dish = st.plan[i];
        st.swapped = i; render(true); return;
      }
      if (t.hasAttribute('data-cook')) { go('cook'); return; }
      if ((a = t.getAttribute('data-rtab'))) { st.rtab = a; render(true); return; }
      if ((a = t.getAttribute('data-item'))) {
        st.checked[a] = !st.checked[a];
        t.setAttribute('aria-checked', !!st.checked[a]);
        var list = shopping(), done = list.rows.filter(function (r) { return st.checked[r.slug]; }).length;
        $('l-done').textContent = done + ' / ' + list.rows.length;
        $('l-bar').style.width = (done / list.rows.length * 100) + '%';
        return;
      }
      if ((a = t.getAttribute('data-step'))) {
        var steps = D.dishes[st.dish].steps.length, next = st.step + (+a);
        stopTimer();
        if (next >= steps) { st.step = 0; go('plan'); return; }
        if (next >= 0) { st.step = next; render(false); }
        return;
      }
      if (t.hasAttribute('data-timer')) {
        var step = D.dishes[st.dish].steps[st.step];
        if (!st.timer) st.timer = { left: step.m * 60, running: false, id: 0 };
        var tm = st.timer;
        if (tm.left <= 0) { stopTimer(); }
        else if (tm.running) { clearInterval(tm.id); tm.running = false; }
        else {
          tm.running = true;
          tm.id = setInterval(function () {
            tm.left -= 1;
            var b = $('timer'); if (!b) { clearInterval(tm.id); return; }
            if (tm.left <= 0) { clearInterval(tm.id); tm.running = false; b.className = 'btn ghost timer done'; }
            b.innerHTML = timerLabel(step);
          }, 1000);
        }
        var b = $('timer');
        b.className = 'btn ghost timer' + (st.timer ? (st.timer.left <= 0 ? ' done' : ' run') : '');
        b.innerHTML = timerLabel(step);
      }
    });

    var tablist = document.querySelector('.demo-tabs');
    tablist.addEventListener('click', function (e) {
      var t = e.target.closest('[role=tab]'); if (t) go(t.getAttribute('data-tab'));
    });
    tablist.addEventListener('keydown', function (e) {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      var order = ['plan', 'recipe', 'list', 'cook'], i = order.indexOf(st.tab);
      i = (i + (e.key === 'ArrowRight' ? 1 : order.length - 1)) % order.length;
      go(order[i]); $('tab-' + order[i]).focus(); e.preventDefault();
    });
    render(false);
  }

  /* nuotraukos iš anksto – kad atidarius receptą ar pakeitus patiekalą nebūtų pilko kadro */
  var warmed = [];   // nuorodos laikomos, kad naršyklė iškoduotų vaizdų neišmestų
  function warm() {
    D.order.forEach(function (k) {
      ['hero-', 'plate-'].forEach(function (p) {
        var im = new Image(); im.src = 'img/' + p + k + '.webp'; warmed.push(im);
        if (im.decode) im.decode().catch(function () {});
      });
    });
  }
  if (document.readyState === 'complete') warm(); else window.addEventListener('load', warm);

  /* ================= viršutinė juosta: prilipusi, su dabartine dalimi ir meniu telefone ================= */
  var top = $('top'), menuBtn = $('menu-btn'), mnav = $('mnav');
  if (top) {
    var onScroll = function () { top.classList.toggle('scrolled', window.scrollY > 8); };
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
    var closeMenu = function () { mnav.hidden = true; menuBtn.setAttribute('aria-expanded', 'false'); top.classList.remove('open'); };
    menuBtn.addEventListener('click', function () {
      var open = mnav.hidden; mnav.hidden = !open; menuBtn.setAttribute('aria-expanded', String(open)); top.classList.toggle('open', open);
    });
    mnav.addEventListener('click', function (e) { if (e.target.closest('a')) closeMenu(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !mnav.hidden) { closeMenu(); menuBtn.focus(); } });
    /* šuolis į dalį: lygiai po juosta (be praeitos dalies fono ruožo); tolimas šuolis – iškart, artimas – švelniai */
    var topH = function () { return top.querySelector('.top-in').offsetHeight + 1; };
    var setTopH = function () { document.documentElement.style.setProperty('--top-h', topH() + 'px'); };
    window.addEventListener('resize', setTopH); setTopH();
    document.addEventListener('click', function (e) {
      var a = e.target.closest('a[href^="#"]'); if (!a) return;
      var id = a.getAttribute('href').slice(1), el = id && $(id); if (!el) return;
      e.preventDefault();
      var y = id === 'turinys' ? 0 : Math.max(0, Math.round(el.getBoundingClientRect().top + window.scrollY - topH() + 1));
      var far = Math.abs(y - window.scrollY) > window.innerHeight * 2.5;
      window.scrollTo({ top: y, behavior: far || reduce ? 'instant' : 'smooth' });
    });
    var links = document.querySelectorAll('.top-nav a, .mnav a');
    var ids = ['savaite', 'kaip-veikia', 'kainos', 'duk'];
    var mark = function () {
      var cur = '', line = window.innerHeight * 0.38;
      ids.forEach(function (id) { var el = $(id); if (el && el.getBoundingClientRect().top <= line) cur = id; });
      if (cur === 'kaip-veikia') { var k = $('kainos'); if (k && k.getBoundingClientRect().top <= line) cur = 'kainos'; }
      for (var i = 0; i < links.length; i++) {
        if (links[i].getAttribute('href') === '#' + cur) links[i].setAttribute('aria-current', 'true'); else links[i].removeAttribute('aria-current');
      }
    };
    window.addEventListener('scroll', mark, { passive: true }); window.addEventListener('resize', mark); mark();
  }

  /* ================= savaitės kainos skaičiuoklė ================= */
  var wk = { people: 4, dinners: 5, store: 'maxima', shown: null };
  var SHORT = ['Pr', 'An', 'Tr', 'Kt', 'Pn', 'Št', 'Sk'];
  var plates = $('plates');

  function weekTotal() {
    var key = wk.store === 'maxima' ? 'pm' : 'pr';
    return D.order.slice(0, wk.dinners).reduce(function (s, k) { return s + D.dishes[k][key]; }, 0) * wk.people;
  }
  function tween(el, from, to) {
    if (reduce || from === null || from === to) { el.textContent = eur(to); return; }
    var t0 = performance.now(), dur = 380;
    (function frame(now) {
      var p = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - p, 3);
      el.textContent = eur(from + (to - from) * e);
      if (p < 1) requestAnimationFrame(frame);
    })(t0);
  }
  function renderWeek(replates) {
    var key = wk.store === 'maxima' ? 'pm' : 'pr';
    if (replates) {
      plates.innerHTML = D.order.slice(0, wk.dinners).map(function (k, i) {
        var d = D.dishes[k];
        return '<li class="plate" style="--i:' + i + '"><img src="img/plate-' + k + '.webp" alt="" width="320" height="320" loading="lazy">' +
          '<span class="plate-day">' + DAYS[i] + '</span><span class="plate-name">' + esc(d.short) + '</span>' +
          '<span class="plate-price" data-k="' + k + '"></span></li>';
      }).join('');
    }
    var tags = plates.querySelectorAll('.plate-price');
    for (var i = 0; i < tags.length; i++) tags[i].textContent = eur(D.dishes[tags[i].getAttribute('data-k')][key] * wk.people);
    var total = weekTotal();
    $('total-label').textContent = wk.dinners + ' vakarienės ' + (wk.people === 1 ? '1 žmogui' : wk.people + ' žmonėms');
    tween($('total-sum'), wk.shown, total); wk.shown = total;
    $('total-avg').innerHTML = (wk.store === 'maxima' ? 'Maximos' : 'Rimi') + ' kainomis. Vidutiniškai <b>' + eur(total / (wk.dinners * wk.people)) + '</b> vienai porcijai.';
    $('people-val').textContent = wk.people;
    $('people-minus').disabled = wk.people <= 1;
    $('people-plus').disabled = wk.people >= 6;
  }
  function bindSeg(id, prop, cast, replates) {
    var seg = $(id);
    seg.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      var all = seg.querySelectorAll('button');
      for (var i = 0; i < all.length; i++) all[i].setAttribute('aria-checked', all[i] === b);
      wk[prop] = cast(b.getAttribute('data-v')); renderWeek(replates);
    });
  }
  if (plates) {
    $('people-minus').addEventListener('click', function () { if (wk.people > 1) { wk.people--; renderWeek(false); } });
    $('people-plus').addEventListener('click', function () { if (wk.people < 6) { wk.people++; renderWeek(false); } });
    bindSeg('seg-dinners', 'dinners', Number, true);
    bindSeg('seg-store', 'store', String, false);
    renderWeek(true);
  }
})();
