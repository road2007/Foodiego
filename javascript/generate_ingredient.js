// function retrieve_json(url){
// 	return $.getJSON(url, function(data){
// 		return(data)
// 	}
// }

function display_ingredients() {

	var ingredients = DB.getIngredient();
	var ing2cat = DB.getIng2cat();

	for (i = 0; i < ingredients.length; i++){
		ing_id = ingredients[i].id;
		category = ing2cat[ing_id];
		//document.getElementById("app_status").innerHTML = ingredients.length;
		if (category != null){
			list_id = category + "_list";
			var parent = document.getElementById(list_id);

			if (parent.childNodes.length ==1 ){
				var title = document.createElement("h4");
				title.innerHTML = category + ":\t";
				parent.appendChild(title);
			};

			var img = document.createElement("img");
			img.id = ing_id;
			img.className = "ingredient_img";
			img.setAttribute("category", list_id);
			img.src = "images/search page/" + ing_id + ".jpeg";
			img.alt = "Jpeg";
			img.setAttribute("draggable", "true");
			img.setAttribute("ondragstart", "drag(event)");
			img.setAttribute("ondblclick", "put_back(event)");
			parent.appendChild(img);
		}
	}
	
}