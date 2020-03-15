$(document).ready(function () {

    $("#BotaoCarregar").click(function () {

        var MyKey = "9346692485284ee3990b3aaaeaf0a770";
        var urlStr = "http://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=" + MyKey;

        $.ajax({
            url: urlStr,
            type: "get",
            dataType: "json",
            beforeSend: function () {
                document.getElementById("status").innerHTML = "CARREGANDO ... ";
            },
            success: function (data) {
                document.getElementById("status").innerHTML = "";

                // Noticia 01
                var img = document.getElementById('img1');
                img.src = data.articles[1]['urlToImage'];
                $("#titulo1").html(data.articles[1]['title']);

                $('#btn1').attr('href', data.articles[1]['url']);

                $("#data1").html(data.articles[1]['publishedAt']);


                // Noticia 02
                var img = document.getElementById('img2');
                img.src = data.articles[2]['urlToImage'];
                $("#titulo2").html(data.articles[2]['title']);

                $('#btn2').attr('href', data.articles[2]['url']);

                $("#data2").html(data.articles[2]['publishedAt']);



                // Noticia 03
                var img = document.getElementById('img3');
                img.src = data.articles[3]['urlToImage'];
                $("#titulo3").html(data.articles[3]['title']);

                $('#btn3').attr('href', data.articles[3]['url']);

                $("#data3").html(data.articles[3]['publishedAt']);




                // Noticia 04
                var img = document.getElementById('img4');
                img.src = data.articles[4]['urlToImage'];
                $("#titulo4").html(data.articles[4]['title']);

                $('#btn4').attr('href', data.articles[4]['url']);

                $("#data4").html(data.articles[4]['publishedAt']);

                document.getElementById("feed").style.display = "block";


            },
            error: function (erro) {
                document.getElementById("status").innerHTML = "ERRO";
            }
        });
    });
});