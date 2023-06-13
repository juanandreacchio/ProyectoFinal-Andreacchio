const productos = [
    {
        id: "Pelicans-Azul-Zion",
        titulo: "Men's New Orleans Pelicans Zion Williamson Nike Navy 2020/21 Swingman Jersey - Icon Edition",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683134072/CursoJS/camisetasNBA/camisetaNOLA_cmfcnm.png",
        categoria: {
            nombre: "NBA",
            id: "NBA",
        },
        precio: 94.99,
    },
    {
        id: "Boston-Verde-Tatum",
        titulo: "Unisex Boston Celtics Jayson Tatum Nike Kelly Green 2022/23 Swingman Jersey - Icon Edition",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683134072/CursoJS/camisetasNBA/celticsVerde_oyeips.png",
        categoria: {
            nombre: "NBA",
            id: "NBA",
        },
        precio: 119.99,
    },
    {
        id: "Lakers-Amarilla-Lebron",
        titulo: "Unisex Los Angeles Lakers LeBron James Nike Gold 2022/23 Swingman Jersey - Icon Edition",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683134072/CursoJS/camisetasNBA/lakersAmarilla_iba8oh.png",
        categoria: {
            nombre: "NBA",
            id: "NBA",
        },
        precio: 119.99,
    },
    {
        id: "Phoenix-Violeta-KD",
        titulo: "Unisex Phoenix Suns Kevin Durant Nike Purple 2022/23 Swingman Jersey - Icon Edition",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683134072/CursoJS/camisetasNBA/sunsVioleta_xjocy0.png",
        categoria: {
            nombre: "NBA",
            id: "NBA",
        },
        precio: 119.99,
    },
    {
        id: "Warriors-Blanca-Curry",
        titulo: "Unisex Golden State Warriors Stephen Curry Nike White 2022/23 Swingman Jersey - Association Edition",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683134072/CursoJS/camisetasNBA/warriorsBlanca_zketf2.png",
        categoria: {
            nombre: "NBA",
            id: "NBA",
        },
        precio: 119.99,
    },
    {
        id: "Grizzlies-Celeste-Morant",
        titulo: "Men's Memphis Grizzlies Ja Morant Jordan Brand Light Blue 2022/23 Statement Edition Swingman Jersey",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683134072/CursoJS/camisetasNBA/grizzliesCeleste_de13ql.png",
        categoria: {
            nombre: "NBA",
            id: "NBA",
        },
        precio: 119.99,
    },
    {
        id: "Heat-Roja-Butler",
        titulo: "Men's Miami Heat Jimmy Butler Jordan Brand Red 2022/23 Statement Edition Swingman Jersey",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683134072/CursoJS/camisetasNBA/heatRoja_vhahnt.png",
        categoria: {
            nombre: "NBA",
            id: "NBA",
        },
        precio: 119.99,
    },
    {
        id: "Sixers-Azul-Embiid",
        titulo: "Unisex Philadelphia 76ers Joel Embiid Nike Royal 2022/23 Swingman Jersey - Icon Edition",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683134072/CursoJS/camisetasNBA/sixersAzul_fbpb3h.png",
        categoria: {
            nombre: "NBA",
            id: "NBA",
        },
        precio: 119.99,
    },
    {
        id: "Mavs-Azul-Doncic",
        titulo: "Men's Dallas Mavericks Luka Doncic Nike Royal 2020/21 Swingman Jersey - Icon Edition",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683136097/CursoJS/camisetasNBA/mavericksAzul_gt4wkm.png",
        categoria: {
            nombre: "NBA",
            id: "NBA",
        },
        precio: 95.99,
    },
    {
        id: "Pistons-VerdeAgua-Cunningham",
        titulo: "Men's Detroit Pistons Cade Cunningham Nike Teal 2022/23 Swingman Jersey - Classic Edition",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683136097/CursoJS/camisetasNBA/pistonsVerdeAgua_ig5ttz.png",
        categoria: {
            nombre: "NBA",
            id: "NBA",
        },
        precio: 119.99,
    },
    {
        id: "Rockets-Roja-Green",
        titulo: "Unisex Houston Rockets Jalen Green Nike Red 2022/23 Swingman Jersey - Icon Edition",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683136097/CursoJS/camisetasNBA/rocketsRoja_cefyzo.png",
        categoria: {
            nombre: "NBA",
            id: "NBA",
        },
        precio: 119.99,
    },
    {
        id: "Pacers-Azul-Turner",
        titulo: "Men's Indiana Pacers Myles Turner Nike Navy Swingman Jersey - Icon Edition",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683136097/CursoJS/camisetasNBA/pacersAzul_nifoop.png",
        categoria: {
            nombre: "NBA",
            id: "NBA",
        },
        precio: 109.99,
    },
    {
        id: "Clippers-Negra-Kawhi",
        titulo: "Men's LA Clippers Kawhi Leonard Jordan Brand Black 2022/23 Statement Edition Swingman Jersey",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683136097/CursoJS/camisetasNBA/clippersNegra_j3kqhl.png",
        categoria: {
            nombre: "NBA",
            id: "NBA",
        },
        precio: 119.99,
    },
    {
        id: "Timberwolves-Azul-Edwards",
        titulo: "Unisex Minnesota Timberwolves Anthony Edwards Nike Navy 2022/23 Swingman Jersey - Icon Edition",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683136096/CursoJS/camisetasNBA/timberwolvesAzul_gzybou.png",
        categoria: {
            nombre: "NBA",
            id: "NBA",
        },
        precio: 119.99,
    },
    {
        id: "OKC-Celeste-Giddey",
        titulo: "Unisex Oklahoma City Thunder Josh Giddey Nike Gold 2022/23 Swingman Jersey - Icon Edition",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683136096/CursoJS/camisetasNBA/okcAzul_pbhgpv.png",
        categoria: {
            nombre: "NBA",
            id: "NBA",
        },
        precio: 119.99,
    },
    {
        id: "Blazers-Roja-Lillard",
        titulo: "Unisex Phoenix Suns Kevin Durant Nike Purple 2022/23 Swingman Jersey - Icon Edition",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683136096/CursoJS/camisetasNBA/portlandRoja_gtyar9.png",
        categoria: {
            nombre: "NBA",
            id: "NBA",
        },
        precio: 119.99,
    },
    {
        id: "Jazz-Violeta-Clarkson",
        titulo: "Men's Utah Jazz Jordan Clarkson Nike Purple 2022/23 Swingman Jersey - Classic Edition",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683136096/CursoJS/camisetasNBA/jazzVioleta_wizc6s.png",
        categoria: {
            nombre: "NBA",
            id: "NBA",
        },
        precio: 89.99,
    },
    {
        id: "Spurs-Turquesa-Custom",
        titulo: "Unisex San Antonio Spurs Nike Turquoise 2022/23 Swingman Custom Jersey - City Edition",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683136096/CursoJS/camisetasNBA/sasTurquesa_qmvwdy.png",
        categoria: {
            nombre: "NBA",
            id: "NBA",
        },
        precio: 149.99,
    },
    {
        id: "Kings-Violeta-Fox",
        titulo: "Men's Sacramento Kings De'Aaron Fox Nike Purple 2020/21 Swingman Jersey - Icon Edition",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683136096/CursoJS/camisetasNBA/sacramentoVioleta_ww32lj.png",
        categoria: {
            nombre: "NBA",
            id: "NBA",
        },
        precio: 105.99,
    },
    {
        id: "Raptors-Roja-Siakam",
        titulo: "Men's Toronto Raptors Pascal Siakam Jordan Brand Black 2020/21 Swingman Jersey - Statement Edition",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683136096/CursoJS/camisetasNBA/raptorsNegra_egzhhw.png",
        categoria: {
            nombre: "NBA",
            id: "NBA",
        },
        precio: 94.99,
    },
    {
        id: "Wizards-Roja-Beal",
        titulo: "Men's Washington Wizards Bradley Beal Nike Red Swingman Jersey - Icon Edition",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683136723/CursoJS/camisetasNBA/wizardsRoja_1_iomd4i.png",
        categoria: {
            nombre: "NBA",
            id: "NBA",
        },
        precio: 109.99,
    },
    {
        id: "Bulls-Roja-DeRozan",
        titulo: "Unisex Chicago Bulls DeMar DeRozan Nike Red 2022/23 Swingman Jersey - Icon Edition",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683134990/CursoJS/camisetasNBA/bullsRoja_y3zsp8.png",
        categoria: {
            nombre: "NBA",
            id: "NBA",
        },
        precio: 119.99,
    },
    {
        id: "Magic-Azul-Banchero",
        titulo: "Men's Sacramento Kings De'Aaron Fox Nike Purple 2020/21 Swingman Jersey - Icon Edition",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683134990/CursoJS/camisetasNBA/magicAzul_ksepm0.png",
        categoria: {
            nombre: "NBA",
            id: "NBA",
        },
        precio: 119.99,
    },
    {
        id: "Cavs-Negra-Sexton",
        titulo: "Men's Cleveland Cavaliers Collin Sexton Jordan Brand Black 2020/21 Swingman Jersey - Statement Edition",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683136096/CursoJS/camisetasNBA/raptorsNegra_egzhhw.png",
        categoria: {
            nombre: "NBA",
            id: "NBA",
        },
        precio: 94.99,
    },
    {
        id: "Hawks-Roja-Young",
        titulo: "Unisex Atlanta Hawks Trae Young Nike Red 2022/23 Swingman Jersey - Icon Edition",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683134990/CursoJS/camisetasNBA/hawksRoja_qkg5vm.png",
        categoria: {
            nombre: "NBA",
            id: "NBA",
        },
        precio: 119.99,
    },
    {
        id: "Nets-Negra-Durant",
        titulo: "Unisex Brooklyn Nets Kevin Durant Nike Black 2022/23 Swingman Jersey - Icon Edition",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683134989/CursoJS/camisetasNBA/netsNegra_aa5wen.png",
        categoria: {
            nombre: "NBA",
            id: "NBA",
        },
        precio: 88.99,
    },
    {
        id: "Knicks-Azul-Barrett",
        titulo: "Unisex New York Knicks RJ Barrett Nike Blue 2022/23 Swingman Jersey - Icon Edition",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683134605/CursoJS/camisetasNBA/knicksAzul_1_hwayhs.png",
        categoria: {
            nombre: "NBA",
            id: "NBA",
        },
        precio: 119.99,
    },
    {
        id: "Bucks-Verde-Giannis",
        titulo: "Unisex Milwaukee Bucks Giannis Antetokounmpo Nike Hunter Green 2022/23 Swingman Jersey - Icon Edition",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683134544/CursoJS/camisetasNBA/bucksVerde_lbjxyo.png",
        categoria: {
            nombre: "NBA",
            id: "NBA",
        },
        precio: 119.99,
    },
    {
        id: "Nuggets-Azul-Jokic",
        titulo: "Unisex Denver Nuggets Nikola Jokic Nike Navy 2022/23 Swingman Jersey - Icon Edition",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683134544/CursoJS/camisetasNBA/nuggetsAzul_npob76.png",
        categoria: {
            nombre: "NBA",
            id: "NBA",
        },
        precio: 119.99,
    },
    {
        id: "Hornetts-Celeste-Lamelo",
        titulo: "Unisex Charlotte Hornets LaMelo Ball Jordan Brand Teal 2022/23 Swingman Jersey - Icon Edition",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683134544/CursoJS/camisetasNBA/hornettsCeleste_eq4gtz.png",
        categoria: {
            nombre: "NBA",
            id: "NBA",
        },
        precio: 119.99,
    },
    {
        id: "AllStar-Amarilla-Embiid",
        titulo: "Men's Joel Embiid Jordan Brand Orange 2023 NBA All-Star Game Swingman Jersey",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683219024/CursoJS/camisetasNBA/allStarAmarilla_vohjmp.png",
        categoria: {
            nombre: "NBA",
            id: "NBA",
        },
        precio: 119.99,
    },
    {
        id: "AllStar-Azul-Jokic",
        titulo: "Men's Nikola Jokic Jordan Brand Blue 2023 NBA All-Star Game Swingman Jersey",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683219024/CursoJS/camisetasNBA/allStarAzul_xdcs6b.png",
        categoria: {
            nombre: "NBA",
            id: "NBA",
        },
        precio: 119.99,
    },
    {
        id: "Milan-Local",
        titulo: "Camiseta AC Milan Local Authentic 2022/23",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683163919/CursoJS/camisetasChampionsLeague/milanLocal_n05pv6.png",
        categoria: {
            nombre: "Champions",
            id: "Champions",
        },
        precio: 79.99,
    },
    {
        id: "Ajax-Local",
        titulo: "Camiseta Ajax Local Authentic 2022/23",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683163922/CursoJS/camisetasChampionsLeague/ajaxLocal_yifq4j.png",
        categoria: {
            nombre: "Champions",
            id: "Champions",
        },
        precio: 89.99,
    },
    {
        id: "Atletico-Madrid-Local",
        titulo: "Camiseta Atlético Madrid Local Authentic 2022/23",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683163922/CursoJS/camisetasChampionsLeague/atleticoMadridLocal_ouawy0.png",
        categoria: {
            nombre: "Champions",
            id: "Champions",
        },
        precio: 119.99,
    },
    {
        id: "Bayer-04-Leverkusen-Local",
        titulo: "Camiseta Bayer 04 Leverkusen Local Authentic 2022/23",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683163922/CursoJS/camisetasChampionsLeague/leverkusenLocal_ey3rkr.png",
        categoria: {
            nombre: "Champions",
            id: "Champions",
        },
        precio: 93.50,
    },
    {
        id: "Bayern-München-Local",
        titulo: "Camiseta Bayern München Local Authentic 2022/23",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683163922/CursoJS/camisetasChampionsLeague/bayerMunichLocal_vc73sj.png",
        categoria: {
            nombre: "Champions",
            id: "Champions",
        },
        precio: 74.99,
    },
    {
        id: "Borussia-Dortmund-Local",
        titulo: "Camiseta Borussia Dortmund Local Authentic 2022/23",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683163922/CursoJS/camisetasChampionsLeague/borussiaLocal_d55wzh.png",
        categoria: {
            nombre: "Champions",
            id: "Champions",
        },
        precio: 95.99,
    },
    {
        id: "Celtic-Local",
        titulo: "Camiseta Celtic Local Authentic 2022/23",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683163921/CursoJS/camisetasChampionsLeague/celticFLocal_d6slrq.png",
        categoria: {
            nombre: "Champions",
            id: "Champions",
        },
        precio: 81.79,
    },
    {
        id: "Chelsea-FC-Local",
        titulo: "Camiseta Chelsea FC Local Authentic 2022/23",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683163921/CursoJS/camisetasChampionsLeague/chelseaLocal_xeflhn.png",
        categoria: {
            nombre: "Champions",
            id: "Champions",
        },
        precio: 112.99,
    },
    {
        id: "Club-Brugge-Local",
        titulo: "Camiseta Club Brugge Local Authentic 2022/23",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683163921/CursoJS/camisetasChampionsLeague/brujasLocal_bswhpy.png",
        categoria: {
            nombre: "Champions",
            id: "Champions",
        },
        precio: 84.99,
    },
    {
        id: "Dinamo-Zagreb-Local",
        titulo: "Camiseta Dinamo Zagreb Local Authentic 2022/23",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683163921/CursoJS/camisetasChampionsLeague/zagrebLocal_uwnmsw.png",
        categoria: {
            nombre: "Champions",
            id: "Champions",
        },
        precio: 77.64,
    },
    {
        id: "Eintracht-Frankfurt-Local",
        titulo: "Camiseta Eintracht Frankfurt Local Authentic 2022/23",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683163921/CursoJS/camisetasChampionsLeague/frankfurtLocal_in2nkp.png",
        categoria: {
            nombre: "Champions",
            id: "Champions",
        },
        precio: 94.99,
    },
    {
        id: "FC-Barcelona-Local",
        titulo: "Camiseta FC Barcelona Local Authentic 2022/23",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683164067/CursoJS/camisetasChampionsLeague/barcelonaLocal_nl4sp7.png",
        categoria: {
            nombre: "Champions",
            id: "Champions",
        },
        precio: 94.99,
    },
    {
        id: "FC-Copenhagen-Local",
        titulo: "Camiseta FC Copenhagen Local Authentic 2022/23",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683163921/CursoJS/camisetasChampionsLeague/copenagheLocal_c25ipu.png",
        categoria: {
            nombre: "Champions",
            id: "Champions",
        },
        precio: 103.35,
    },
    {
        id: "FC-Porto-Local",
        titulo: "Camiseta FC Porto Local Authentic 2022/23",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683163920/CursoJS/camisetasChampionsLeague/portoLocal_rluc5m.png",
        categoria: {
            nombre: "Champions",
            id: "Champions",
        },
        precio: 89.99,
    },
    {
        id: "Inter-Milan-Local",
        titulo: "Camiseta Inter Milan Local Authentic 2022/23",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683163922/CursoJS/camisetasChampionsLeague/interTitular_e3jj9u.png",
        categoria: {
            nombre: "Champions",
            id: "Champions",
        },
        precio: 119.99,
    },
    {
        id: "Juventus-FC-Local",
        titulo: "Camiseta Juventus FC Local Authentic 2022/23",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683163920/CursoJS/camisetasChampionsLeague/juventusLocal_ogk2xa.png",
        categoria: {
            nombre: "Champions",
            id: "Champions",
        },
        precio: 89.99,
    },
    {
        id: "Liverpool-FC-Local",
        titulo: "Camiseta Liverpool FC Local Authentic 2022/23",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683163920/CursoJS/camisetasChampionsLeague/liverpoolLocal_ecfnrf.png",
        categoria: {
            nombre: "Champions",
            id: "Champions",
        },
        precio: 87.94,
    },
    {
        id: "Maccabi-Haifa-Local",
        titulo: "Camiseta Maccabi Haifa Local Authentic 2022/23",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683163920/CursoJS/camisetasChampionsLeague/maccabiLocal_m7shqt.png",
        categoria: {
            nombre: "Champions",
            id: "Champions",
        },
        precio: 60.26,
    },
    {
        id: "Manchester-City-Local",
        titulo: "Camiseta Manchester City Local Authentic 2022/23",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683163920/CursoJS/camisetasChampionsLeague/manCityLocal_n0cdhy.png",
        categoria: {
            nombre: "Champions",
            id: "Champions",
        },
        precio: 89.99,
    },
    {
        id: "Olympique-Marseille-Local",
        titulo: "Camiseta Olympique Marseille Local Authentic 2022/23",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683163920/CursoJS/camisetasChampionsLeague/marsellaLocal_lnmt97.png",
        categoria: {
            nombre: "Champions",
            id: "Champions",
        },
        precio: 99.99,
    },
    {
        id: "Paris-Saint-Germain-Local",
        titulo: "Camiseta Paris Saint-Germain Local Authentic 2022/23",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683163919/CursoJS/camisetasChampionsLeague/psgLocal_whnhzs.png",
        categoria: {
            nombre: "Champions",
            id: "Champions",
        },
        precio: 119.99,
    },
    {
        id: "Rangers-Local",
        titulo: "Camiseta Rangers Local Authentic 2022/23",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683163919/CursoJS/camisetasChampionsLeague/rangersLocal_hjbcaz.png",
        categoria: {
            nombre: "Champions",
            id: "Champions",
        },
        precio: 84.21,
    },
    {
        id: "RB-Leipzig-Local",
        titulo: "Camiseta RB Leipzig Local Authentic 2022/23",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683163919/CursoJS/camisetasChampionsLeague/leipzigLocal_awnb7o.png",
        categoria: {
            nombre: "Champions",
            id: "Champions",
        },
        precio: 99.07,
    },
    {
        id: "Real-Madrid-Local",
        titulo: "Camiseta Real Madrid Local Authentic 2022/23",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683163922/CursoJS/camisetasChampionsLeague/realMadridBlanca_ppkheb.png",
        categoria: {
            nombre: "Champions",
            id: "Champions",
        },
        precio: 114.99,
    },
    {
        id: "Red-Bull-Salzburg",
        titulo: "Camiseta Red Bull Salzburg Local Authentic 2022/23",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683163919/CursoJS/camisetasChampionsLeague/salzburgoLocal_h9iovg.png",
        categoria: {
            nombre: "Champions",
            id: "Champions",
        },
        precio: 93.58,
    },
    {
        id: "Sevilla",
        titulo: "Camiseta Sevilla FC Local Authentic 2022/23",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683163919/CursoJS/camisetasChampionsLeague/sevillaLocal_bct5s1.png",
        categoria: {
            nombre: "Champions",
            id: "Champions",
        },
        precio: 93.58,
    },
    {
        id: "Shakhtar-Donetsk-Local",
        titulo: "Camiseta Shakhtar Donetsk Local Authentic 2022/23",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683163918/CursoJS/camisetasChampionsLeague/shaktarLocal_k5gewb.png",
        categoria: {
            nombre: "Champions",
            id: "Champions",
        },
        precio: 63.57,
    },
    {
        id: "SL-Benfica-Local",
        titulo: "Camiseta SL Benfica Local Authentic 2022/23",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683163918/CursoJS/camisetasChampionsLeague/benficaLocal_u8uq27.png",
        categoria: {
            nombre: "Champions",
            id: "Champions",
        },
        precio: 99.14,
    },
    {
        id: "Sporting-CP-Local",
        titulo: "Camiseta Sporting CP Local Authentic 2022/23",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683163918/CursoJS/camisetasChampionsLeague/sportingLisboaLocal_y2mohi.png",
        categoria: {
            nombre: "Champions",
            id: "Champions",
        },
        precio: 99.11,
    },
    {
        id: "SSC-Napoli-Local",
        titulo: "Camiseta SSC Napoli Local Authentic 2022/23",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683163918/CursoJS/camisetasChampionsLeague/napoliLocal_ug4hpx.png",
        categoria: {
            nombre: "Champions",
            id: "Champions",
        },
        precio: 137.67,
    },
    {
        id: "Tottenham-Hotspur-Local",
        titulo: "Camiseta Tottenham Hotspur Local Authentic 2022/23",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683163918/CursoJS/camisetasChampionsLeague/tottenhamLocal_t6me0c.png",
        categoria: {
            nombre: "Champions",
            id: "Champions",
        },
        precio: 97.48,
    },
    {
        id: "Viktoria-Plzeň-Local",
        titulo: "Camiseta Viktoria Plzeň Local Authentic 2022/23",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683163918/CursoJS/camisetasChampionsLeague/viktoriaPlzenLocal_agjgxi.png",
        categoria: {
            nombre: "Champions",
            id: "Champions",
        },
        precio: 86.93,
    },
    {
        id: "Argentinos-Juniors-Titular",
        titulo: "Camiseta Umbro Argentinos Juniors Titular 22/23",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683220895/CursoJS/camisetasLPF/argentinosJuniorsTitular_nuz4v3.png",
        categoria: {
            nombre: "LPF",
            id: "LPF",
        },
        precio: 77.24,
    },
    {
        id: "Arsenal-Fc-2023",
        titulo: "Camiseta Titular Arsenal Fc 2023",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683220894/CursoJS/camisetasLPF/arsenalTitular_r4nvvd.png",
        categoria: {
            nombre: "LPF",
            id: "LPF",
        },
        precio: 63.81,
    },
    {
        id: "Club-Atlético-Tucumán",
        titulo: "Camiseta Umbro Club Atlético Tucumán Oficial 2022/23",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683220893/CursoJS/camisetasLPF/atleticoTucumanTitular_fyeyrs.png",
        categoria: {
            nombre: "LPF",
            id: "LPF",
        },
        precio: 88.59,
    },
    {
        id: "Banfield-Local",
        titulo: "Camiseta Athix Banfield Oficial 2023 Hombre",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683220896/CursoJS/camisetasLPF/banfieldLocal_lonhyk.png",
        categoria: {
            nombre: "LPF",
            id: "LPF",
        },
        precio: 79.76,
    },
    {
        id: "Boca-Juniors-Titular",
        titulo: "Camiseta adidas Boca Juniors Titular AU 2022/23",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683220893/CursoJS/camisetasLPF/bocaTitular_rc9qny.png",
        categoria: {
            nombre: "LPF",
            id: "LPF",
        },
        precio: 110.78,
    },
    {
        id: "Barracas-Central-Titular",
        titulo: "Camiseta Barracas Central Titular Il Ossso 2023",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683220895/CursoJS/camisetasLPF/barracasTitular_jptyj5.png",
        categoria: {
            nombre: "LPF",
            id: "LPF",
        },
        precio: 62.04,
    },
    {
        id: "Belgrano-Titular",
        titulo: "Camiseta Errea Belgrano Titular 2022 Hombre",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683220896/CursoJS/camisetasLPF/belgranoTitular_bxsrdv.png",
        categoria: {
            nombre: "LPF",
            id: "LPF",
        },
        precio: 79.72,
    },
    {
        id: "Titular-Central-Córdoba-SdE",
        titulo: "Camiseta Titular de Central Córdoba SdE 2023",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683220893/CursoJS/camisetasLPF/centralCordobaTitular_skdgwo.png",
        categoria: {
            nombre: "LPF",
            id: "LPF",
        },
        precio: 73.12,
    },
    {
        id: "Titular-Colón",
        titulo: "Camiseta KDY Titular Colón 2023",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683220893/CursoJS/camisetasLPF/colonTitular_seuser.png",
        categoria: {
            nombre: "LPF",
            id: "LPF",
        },
        precio: 77.99,
    },
    {
        id: "Defensa-Y-Justicia-Titular",
        titulo: "Camiseta De Defensa Y Justicia Titular 2023 Lyon",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683220895/CursoJS/camisetasLPF/defensaYJusticiaTitular_qy1wm6.png",
        categoria: {
            nombre: "LPF",
            id: "LPF",
        },
        precio: 66.43,
    },
    {
        id: "Edlp-Titular",
        titulo: "Camiseta Ruge Estudiantes De La Plata 2023 Edlp Titular",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683220895/CursoJS/camisetasLPF/estudiantesTitular_alasan.png",
        categoria: {
            nombre: "LPF",
            id: "LPF",
        },
        precio: 81.98,
    },
    {
        id: "Gimnasia-De-La-Plata-Titular",
        titulo: "Camiseta Gimnasia De La Plata Givova Futbol Titular 2023 Hombre",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683220896/CursoJS/camisetasLPF/gimasiaLPLocal_dicffx.png",
        categoria: {
            nombre: "LPF",
            id: "LPF",
        },
        precio: 88.59,
    },
    {
        id: "Godoy-Cruz-Titular",
        titulo: "Camiseta Godoy Cruz Titular 2023",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683220893/CursoJS/camisetasLPF/godoyCruzTitular_gqn7jf.png",
        categoria: {
            nombre: "LPF",
            id: "LPF",
        },
        precio: 88.59,
    },
    {
        id: "Huracan-Titular",
        titulo: "Camiseta Kappa Huracan Titular 2023",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683220896/CursoJS/camisetasLPF/huracanTitular_xw7075.png",
        categoria: {
            nombre: "LPF",
            id: "LPF",
        },
        precio: 87.31,
    },
    {
        id: "Independiente-Titular",
        titulo: "Camiseta Fútbol Puma Independiente Titular 22/23 Hombre",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683220896/CursoJS/camisetasLPF/independienteLocal_mibhw7.png",
        categoria: {
            nombre: "LPF",
            id: "LPF",
        },
        precio: 88.63,
    },
    {
        id: "Titular-Instituto",
        titulo: "Camiseta Instituto Lyon Futbol Titular 2023 Hombre",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683220895/CursoJS/camisetasLPF/institutoTitular_zk8o4w.png",
        categoria: {
            nombre: "LPF",
            id: "LPF",
        },
        precio: 70.46,
    },
    {
        id: "Lanus-Titular",
        titulo: "Camiseta Juego Lanús Titular Errea 2023",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683220895/CursoJS/camisetasLPF/lanusTitular_qwiwx6.png",
        categoria: {
            nombre: "LPF",
            id: "LPF",
        },
        precio: 88.19,
    },
    {
        id: "Newells-Old-Boys-Titular",
        titulo: "Camiseta Givova Newell's Old Boys Titular",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683220896/CursoJS/camisetasLPF/newellsTitular_qytnav.png",
        categoria: {
            nombre: "LPF",
            id: "LPF",
        },
        precio: 89.34,
    },
    {
        id: "Platense-Titular",
        titulo: "Camiseta De Platense Titular 2023 Hummel",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683220893/CursoJS/camisetasLPF/platenseTitular_mvmqtw.png",
        categoria: {
            nombre: "LPF",
            id: "LPF",
        },
        precio: 73.12,
    },
    {
        id: "Titular-Racing-Club",
        titulo: "Camiseta Kappa Racing Club Kombat Titular 22",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683220893/CursoJS/camisetasLPF/racingTitular_e0rgxe.png",
        categoria: {
            nombre: "LPF",
            id: "LPF",
        },
        precio: 106.35,
    },
    {
        id: "Titular-River-Plate",
        titulo: "Camiseta adidas River Plate Titular AU 2022/23",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683220892/CursoJS/camisetasLPF/riverTitular_g2b2j4.png",
        categoria: {
            nombre: "LPF",
            id: "LPF",
        },
        precio: 110.78,
    },
    {
        id: "Rosario-Central-Titular",
        titulo: "Camiseta Umbro Rosario Central Oficial",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683220895/CursoJS/camisetasLPF/rosarioCentralTitular_r23c1k.png",
        categoria: {
            nombre: "LPF",
            id: "LPF",
        },
        precio: 88.63,
    },
    {
        id: "San-Lorenzo-Titular",
        titulo: "Camiseta Fútbol Nike Titular San Lorenzo 2023 Hombre",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683220893/CursoJS/camisetasLPF/sanLorenzoTitular_wewepn.png",
        categoria: {
            nombre: "LPF",
            id: "LPF",
        },
        precio: 110.78,
    },
    {
        id: "Sarmiento-Titular",
        titulo: "Camiseta Local Sarmiento 2023",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683220893/CursoJS/camisetasLPF/sarmientoTitular_nupbpz.png",
        categoria: {
            nombre: "LPF",
            id: "LPF",
        },
        precio: 75.33,
    },
    {
        id: "Tigre-Titular",
        titulo: "Camiseta Kappa Club Atletico Tigre Titular Hombre 2023",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683220895/CursoJS/camisetasLPF/tigreTitular_xpd7iy.png",
        categoria: {
            nombre: "LPF",
            id: "LPF",
        },
        precio: 60.26,
    },
    {
        id: "Talleres-Titular",
        titulo: "Camiseta Givova Club Atlético Talleres Titular",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683220896/CursoJS/camisetasLPF/talleresLocal_fu5nqk.png",
        categoria: {
            nombre: "LPF",
            id: "LPF",
        },
        precio: 89.52,
    },
    {
        id: "Union-Titular",
        titulo: "Camiseta Oficial Titular Unión Kdy 2023",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683220894/CursoJS/camisetasLPF/unionTitular_udqt5b.png",
        categoria: {
            nombre: "LPF",
            id: "LPF",
        },
        precio: 84.22,
    },
    {
        id: "Titular-Velez",
        titulo: "Camiseta Diadora Velez Sarsfield Oficial 2023 Hombre",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683220896/CursoJS/camisetasLPF/velezTitular_spd4se.png",
        categoria: {
            nombre: "LPF",
            id: "LPF",
        },
        precio: 92.58,
    },
    {
        id: "Cardials-Roja-Murray",
        titulo: "Men's Arizona Cardinals Kyler Murray Nike Cardinal Vapor F.U.S.E. Limited Jersey",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683164678/CursoJS/camisetasNFL/arizonaCardinalsRoja_e422cl.png",
        categoria: {
            nombre: "NFL",
            id: "NFL",
        },
        precio: 174.99,
    },
    {
        id: "Falcons-Negra-Patterson",
        titulo: "Men's Atlanta Falcons Cordarrelle Patterson Nike Black Vapor F.U.S.E. Limited Jersey",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683164678/CursoJS/camisetasNFL/atlantaFalconsNegra_rv3mpz.png",
        categoria: {
            nombre: "NFL",
            id: "NFL",
        },
        precio: 174.99,
    },
    {
        id: "Ravens-Violeta-Jackson",
        titulo: "Men's Baltimore Ravens Lamar Jackson Nike Purple Vapor F.U.S.E. Limited Jersey",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683164678/CursoJS/camisetasNFL/baltimoreRavensVioleta_irzh7f.png",
        categoria: {
            nombre: "NFL",
            id: "NFL",
        },
        precio: 174.99,
    },
    {
        id: "Bills-Azul-Allen",
        titulo: "Men's Buffalo Bills Josh Allen Nike Royal Vapor F.U.S.E. Limited Jersey",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683164678/CursoJS/camisetasNFL/buffaloBillsAzul_rvdxdx.png",
        categoria: {
            nombre: "NFL",
            id: "NFL",
        },
        precio: 174.99,
    },
    {
        id: "Panthers-Negra-Chinn",
        titulo: "Men's Carolina Panthers Jeremy Chinn Nike Black Vapor F.U.S.E. Limited Jersey",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683164678/CursoJS/camisetasNFL/carolinaPanthersNegra_txmxzq.png",
        categoria: {
            nombre: "NFL",
            id: "NFL",
        },
        precio: 174.99,
    },
    {
        id: "Bears-Azul-Fields",
        titulo: "Men's Chicago Bears Justin Fields Nike Navy Player Game Jersey",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683164678/CursoJS/camisetasNFL/chicagoBearsNegra_fjmit3.png",
        categoria: {
            nombre: "NFL",
            id: "NFL",
        },
        precio: 129.99,
    },
    {
        id: "Bengals-Negra-Burrow",
        titulo: "Men's Cincinnati Bengals Joe Burrow Nike Black Vapor Untouchable Limited Jersey",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683164677/CursoJS/camisetasNFL/cincinattiBengalsNegra_j6wckv.png",
        categoria: {
            nombre: "NFL",
            id: "NFL",
        },
        precio: 174.99,
    },
    {
        id: "Browns-Marron-Watson",
        titulo: "Men's Cleveland Browns Deshaun Watson Nike Brown Vapor Limited Jersey",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683164677/CursoJS/camisetasNFL/clevelandBrownsMarron_kztj9e.png",
        categoria: {
            nombre: "NFL",
            id: "NFL",
        },
        precio: 159.99,
    },
    {
        id: "Cowboys-Azul-Lamb",
        titulo: "Men's Dallas Cowboys CeeDee Lamb Nike Navy Game Jersey",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683218843/CursoJS/camisetasNFL/dallasCowboysAzul_lyxgxs.png",
        categoria: {
            nombre: "NFL",
            id: "NFL",
        },
        precio: 129.99,
    },
    {
        id: "Broncos-Naranja-Wilson",
        titulo: "Men's Denver Broncos Russell Wilson Nike Orange Vapor F.U.S.E. Limited Jersey",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683218843/CursoJS/camisetasNFL/denverBroncosNaranja_sv3hix.png",
        categoria: {
            nombre: "NFL",
            id: "NFL",
        },
        precio: 174.99,
    },
    {
        id: "Lions-Celeste-Hutchinson",
        titulo: "Men's Detroit Lions Aidan Hutchinson Nike Blue Team Vapor Limited Jersey",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683218843/CursoJS/camisetasNFL/detroitLionsCeleste_hgsbkv.png",
        categoria: {
            nombre: "NFL",
            id: "NFL",
        },
        precio: 159.99,
    },
    {
        id: "Packers-Verde-Rodgers",
        titulo: "Men's Green Bay Packers Aaron Rodgers Nike Green Classic Limited Player Jersey",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683218843/CursoJS/camisetasNFL/greenBayPackersVerde_ewwy00.png",
        categoria: {
            nombre: "NFL",
            id: "NFL",
        },
        precio: 159.99,
    },
    {
        id: "Texans-Azul-Anderson",
        titulo: "Men's Houston Texans Will Anderson Jr. Nike Navy 2023 NFL Draft First Round Pick Game Jersey",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683218843/CursoJS/camisetasNFL/houstonTexansAzul_sabqm9.png",
        categoria: {
            nombre: "NFL",
            id: "NFL",
        },
        precio: 129.99,
    },
    {
        id: "Colts-Azul-Richardson",
        titulo: "Men's Indianapolis Colts Anthony Richardson Nike Royal 2023 NFL Draft First Round Pick Game Jersey",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683218843/CursoJS/camisetasNFL/indianapolisColtsAzul_rkkatl.png",
        categoria: {
            nombre: "NFL",
            id: "NFL",
        },
        precio: 129.99,
    },
    {
        id: "Jaguars-Celeste-Lawrence",
        titulo: "Men's Jacksonville Jaguars Trevor Lawrence Nike Teal Vapor F.U.S.E. Limited Jersey",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683218843/CursoJS/camisetasNFL/jacksonvilleJaguarsCeleste_d0usfb.png",
        categoria: {
            nombre: "NFL",
            id: "NFL",
        },
        precio: 174.99,
    },
    {
        id: "Chiefs-Roja-Mahomes",
        titulo: "Men's Kansas City Chiefs Patrick Mahomes Nike Red Vapor Untouchable Limited Jersey",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683218842/CursoJS/camisetasNFL/kansasCityChiefsRoja_ze68op.png",
        categoria: {
            nombre: "NFL",
            id: "NFL",
        },
        precio: 174.99,
    },
    {
        id: "Raiders-Negra-Crosby",
        titulo: "Men's Las Vegas Raiders Maxx Crosby Nike Black Limited Jersey",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683218842/CursoJS/camisetasNFL/lasVegasRaidersNegra_oxoh24.png",
        categoria: {
            nombre: "NFL",
            id: "NFL",
        },
        precio: 159.99,
    },
    {
        id: "Chargers-Azul-Herbert",
        titulo: "Men's Los Angeles Chargers Justin Herbert Nike Navy Vapor Limited Jersey",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683218842/CursoJS/camisetasNFL/losAngelesChargersAzul_ocxqmf.png",
        categoria: {
            nombre: "NFL",
            id: "NFL",
        },
        precio: 159.99,
    },
    {
        id: "Rams-Azul-Kupp",
        titulo: "Men's Los Angeles Rams Cooper Kupp Nike Royal Vapor Limited Jersey",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683218842/CursoJS/camisetasNFL/losAngelesRamsAzul_xtcswg.png",
        categoria: {
            nombre: "NFL",
            id: "NFL",
        },
        precio: 159.99,
    },
    {
        id: "Dolphins-Verde-Waddle",
        titulo: "Men's Miami Dolphins Jaylen Waddle Nike Aqua Vapor F.U.S.E. Limited JerseyAlternate 1",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683218842/CursoJS/camisetasNFL/miamiDolphinsVerde_xsr7qs.png",
        categoria: {
            nombre: "NFL",
            id: "NFL",
        },
        precio: 174.99,
    },
    {
        id: "Vikings-Violeta-Addison",
        titulo: "Men's Minnesota Vikings Jordan Addison Nike Purple 2023 NFL Draft First Round Pick Game Jersey",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683218842/CursoJS/camisetasNFL/minesottaVikinsVioleta_rwzbri.png",
        categoria: {
            nombre: "NFL",
            id: "NFL",
        },
        precio: 129.99,
    },
    {
        id: "Patriots-Azul-Jones",
        titulo: "Men's New England Patriots Mac Jones Nike Navy Player Game Jersey",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683218842/CursoJS/camisetasNFL/newEnglandPatriotsAzul_c5oczj.png",
        categoria: {
            nombre: "NFL",
            id: "NFL",
        },
        precio: 129.99,
    },
    {
        id: "Saints-Negra-Olave",
        titulo: "Men's New Orleans Saints Chris Olave Nike Black Vapor F.U.S.E. Limited Jersey",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683218842/CursoJS/camisetasNFL/newOrleansSaintsNegra_hzajfr.png",
        categoria: {
            nombre: "NFL",
            id: "NFL",
        },
        precio: 174.99,
    },
    {
        id: "Giants-Azul-Barkley",
        titulo: "Men's New York Giants Saquon Barkley Nike Royal Classic Player Game Jersey",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683218842/CursoJS/camisetasNFL/newYorkGiantsAzul_vr7poi.png",
        categoria: {
            nombre: "NFL",
            id: "NFL",
        },
        precio: 129.99,
    },
    {
        id: "Jets-Verde-Rodgers",
        titulo: "Men's New York Jets Aaron Rodgers Nike Gotham Green Game Jersey",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683218841/CursoJS/camisetasNFL/newYorkJetsVerde_bff7oj.png",
        categoria: {
            nombre: "NFL",
            id: "NFL",
        },
        precio: 129.99,
    },
    {
        id: "Eagles-Verde-Hurts",
        titulo: "Men's Philadelphia Eagles Jalen Hurts Nike Midnight Green Vapor F.U.S.E. Limited Jersey",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683218842/CursoJS/camisetasNFL/philadelphiaEaglesVerde_xzunhp.png",
        categoria: {
            nombre: "NFL",
            id: "NFL",
        },
        precio: 174.99,
    },
    {
        id: "Steelers-Negra-Pickett",
        titulo: "Men's Pittsburgh Steelers Kenny Pickett Nike Black Vapor F.U.S.E. Limited Jersey",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683218841/CursoJS/camisetasNFL/pittsburghSteelersNegra_bf5frp.png",
        categoria: {
            nombre: "NFL",
            id: "NFL",
        },
        precio: 174.99,
    },
    {
        id: "49ers-Roja-Samuel",
        titulo: "Men's San Francisco 49ers Deebo Samuel Nike Scarlet Vapor F.U.S.E. Limited Jersey",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683218841/CursoJS/camisetasNFL/sanFrancisco49ErsRoja_uzivtt.png",
        categoria: {
            nombre: "NFL",
            id: "NFL",
        },
        precio: 174.99,
    },
    {
        id: "Seahawks-Azul-Smith",
        titulo: "Men's Seattle Seahawks Jaxon Smith-Njigba Nike College Navy 2023 NFL Draft First Round Pick Game Jersey",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683218841/CursoJS/camisetasNFL/seattleSeaHawksAzul_j6mdwq.png",
        categoria: {
            nombre: "NFL",
            id: "NFL",
        },
        precio: 129.99,
    },
    {
        id: "Buccaneers-Roja-Brady",
        titulo: "Men's Tampa Bay Buccaneers Tom Brady Nike Red Captain Vapor Limited Jersey",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683218841/CursoJS/camisetasNFL/tampaBayBuccaneersRoja_quztbw.png",
        categoria: {
            nombre: "NFL",
            id: "NFL",
        },
        precio: 174.99,
    },
    {
        id: "Titans-Azul-Byard",
        titulo: "Men's Tennessee Titans Kevin Byard Nike Navy Vapor F.U.S.E. Limited Jersey",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683218841/CursoJS/camisetasNFL/tennesseTitansAzul_owrrby.png",
        categoria: {
            nombre: "NFL",
            id: "NFL",
        },
        precio: 174.99,
    },
    {
        id: "Commanders-Negra-Dotson",
        titulo: "Men's Washington Commanders Jahan Dotson Nike Black Alternate Vapor Untouchable Limited Jersey",
        imagen:
            "https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683218841/CursoJS/camisetasNFL/washingtonCommandersNegra_bebvvi.png",
        categoria: {
            nombre: "NFL",
            id: "NFL",
        },
        precio: 174.99,
    }
]

const contenedorProductos = document.querySelector('.productos');
const botonesCategoria = document.querySelectorAll('.boton-menu-categoria');
let darkMode = localStorage.getItem('dark-mode');
const botonCambiarMode = document.querySelector('.btnCambiarMode');
const bodyDoc = document.querySelector('body');
let select = document.querySelector("#ordenar");

function ordenarProductos(criterio,productosAOrdenar){
    switch (criterio) {
        case 'precioMayor':
            ordenarProductosPorPrecioMayorMenor(productosAOrdenar);
            break;
        case 'precioMenor':
            ordenarProductosPorPrecioMenorMayor(productosAOrdenar);
            break;
        case 'alfabeticoAZ':
            ordenaAlfabeticoAZ(productosAOrdenar);
            break;
        case 'alfabeticoZA':
            ordenaAlfabeticoZA(productosAOrdenar);
            break;
        case 'Default':
            cargarProductos(productosAOrdenar);
            break;
    }
}

function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML = "";
    productosElegidos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('producto');
        div.innerHTML = `
        <div class="img-producto">
        <img src="${producto.imagen}" alt="${producto.titulo}">
    </div>
    <div class="info-producto">
        <div class="nombre">
            <label for="">${producto.titulo}</label>
        </div>
        <div class="precioYCarrito">
            <p>
                <label class="precio">$${(producto.precio).toFixed(2)}</label>
            </p>
            <button id="${producto.id}" class="agregarCarrito">Agregar al Carrito</button>
        </div>
    </div>
        `;

        contenedorProductos.append(div);
    })
    actualizarBotonesAgregar();
}
cargarProductos(productos);
select.value = "Default";
select.addEventListener('change', () => {
    let opcionSeleccionada = select.value;
    console.log(opcionSeleccionada);
    switch (opcionSeleccionada) {
        case 'precioMayor':
            ordenarProductosPorPrecioMayorMenor(productos);
            break;
        case 'precioMenor':
            ordenarProductosPorPrecioMenorMayor(productos);
            break;
        case 'alfabeticoAZ':
            ordenaAlfabeticoAZ(productos);
            break;
        case 'alfabeticoZA':
            ordenaAlfabeticoZA(productos);
            break;
        case 'Default':
            cargarProductos(productos);
            break;
    }
})

botonesCategoria.forEach(boton => {
    boton.addEventListener('click', (e) => {
        botonesCategoria.forEach(boton => boton.classList.remove('active'));
        e.currentTarget.classList.add('active');
        if (e.currentTarget.id === 'todos') {
            select.value = "Default";
            cargarProductos(productos);
            select.addEventListener('change', () => {
                let opcionSeleccionada = select.value;
                ordenarProductos(opcionSeleccionada,productos);
            })
        }
        else {
            const productosFiltrados = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosFiltrados);
            select.value = "Default";
            select.addEventListener('change', () => {
                let opcionSeleccionada = select.value;
                ordenarProductos(opcionSeleccionada,productosFiltrados);
            })
        }
    })
})


!darkMode && localStorage.setItem('dark-mode',"desactivado");
darkMode === "activado" && (activarDarkMode(),botonCambiarMode.innerHTML = '<i class="fa-solid fa-moon"></i>')

darkMode === "desactivado" && (desactivarDarkMode(),botonCambiarMode.innerHTML = '<i class="fa-solid fa-sun"></i>');


function activarDarkMode() {
    localStorage.setItem('dark-mode', "activado");
    bodyDoc.classList.add('dark-mode');
}

function desactivarDarkMode() {
    localStorage.setItem('dark-mode', "desactivado");
    bodyDoc.classList.remove('dark-mode');
}


botonCambiarMode.addEventListener('click', () => {
    darkMode = localStorage.getItem('dark-mode');
    darkMode === "activado" && (desactivarDarkMode(),botonCambiarMode.innerHTML = '<i class="fa-solid fa-sun"></i>')
    darkMode === "desactivado" && (activarDarkMode(),botonCambiarMode.innerHTML = '<i class="fa-solid fa-moon"></i>');
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll('.agregarCarrito');
    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', agregarAlCarrito);
    })
};

let productosEnCarrito;
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");
productosEnCarritoLS ? productosEnCarrito = JSON.parse(productosEnCarritoLS) : productosEnCarrito = [];


function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregar = productos.find(producto => producto.id === idBoton);
    if (productosEnCarrito.some(producto => productoAgregar.id === producto.id)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    }
    else {
        productoAgregar.cantidad = 1;
        productosEnCarrito.push(productoAgregar);
    }
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    darkMode = localStorage.getItem("dark-mode");
    if(darkMode === "desactivado"){
    Toastify({
        text: "Producto agregado al carrito!",
        duration: 1000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(90deg, rgba(104,197,219,1) 0%, rgba(95,168,208,1) 31%, rgba(202,233,255,1) 100%)",
          color: "#101D42"
        },
        onClick: function(){} // Callback after click
      }).showToast();
    }
    else{
        Toastify({
            text: "Producto agregado al carrito!",
            duration: 1000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(90deg, rgba(74,43,92,1) 0%, rgba(61,42,85,1) 31%, rgba(97,61,193,1) 100%)",
              color: "white"
            },
            onClick: function(){} // Callback after click
          }).showToast();
    }
}


function ordenarProductosPorPrecioMayorMenor(productosElegidos) {
    const productosAux = [...productosElegidos];
    productosAux.sort((a, b) => b.precio - a.precio);
    cargarProductos(productosAux);
}

function ordenarProductosPorPrecioMenorMayor(productosElegidos) {
    const productosAux = [...productosElegidos];
    productosAux.sort((a, b) => a.precio - b.precio);
    cargarProductos(productosAux);
}

function ordenaAlfabeticoZA(productosElegidos) {
    const productosAux = [...productosElegidos];
    productosAux.sort((a, b) => {
        if (a.titulo < b.titulo) {
            return 1;
        }
        if (a.titulo > b.titulo) {
            return -1;
        }
        return 0;
    })
    cargarProductos(productosAux);
}


function ordenaAlfabeticoAZ(productosElegidos) {
    const productosAux = [...productosElegidos];
    productosAux.sort((a, b) => {
        if (a.titulo < b.titulo) {
            return -1;
        }
        if (a.titulo > b.titulo) {
            return 1;
        }
        return 0;
    })
    cargarProductos(productosAux);
}




