$(document).ready(
    function() {

        var like_list = ["fish", "curry"];
        var hate_list = ["cucumber", "shimp"];
        var result_dish = [];
        var get_result_list = function() {
            for (var i = 0; i < dishData.length; i++) {
                var ingredient = dishData[i].Ingredient;
                var ifContinue = 1;
                for (var j = 0; j < hate_list.length; j++) {
                    if (ingredient.indexOf(hate_list[j]) >= 0) {
                        ifContinue = 0;
                        break;
                    }
                }
                if (ifContinue == 1) {
                    for (var k = 0; k < like_list.length; k++) {
                        if (ingredient.indexOf(like_list[k]) >= 0) {
                            result_dish.push(dishData[i]);
                            break;
                        }
                    }
                }
            }
        }


        get_result_list();
        bind_data(result.dish);

        // Change the selector if needed
        var $table = $('table.scroll'),
            $bodyCells = $table.find('tbody tr:first').children(),
            colWidth;

        // Adjust the width of thead cells when window resizes
        $(window).resize(function() {
            // Get the tbody columns width array
            colWidth = $bodyCells.map(function() {
                return $(this).width();
            }).get();

            // Set the width of thead columns
            $table.find('thead tr').children().each(function(i, v) {
                $(v).width(colWidth[i]);
            });
        }).resize(); // Trigger resize handler

        var svg = d3.select("body").append("svg")
            .attr("width", width)
            .attr("height", height);

        var row = svg.selectAll(".")
            .data(data)
            .enter().append("g")
            .attr("class", "bar")
            .attr("transform", function(d) {
                return "translate(" + x(d.x) + "," + y(d.y) + ")";
            })
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide)
            .on('click', function(d, i) {});

    }

);