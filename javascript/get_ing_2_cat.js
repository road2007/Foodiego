var DB = {
	data: {
		ingredient: [
			{"id":"shrimp"},
			{"id":"fish"},
			{"id":"chicken"},
			{"id":"beef"},
			{"id":"pork"},
			{"id":"lamb"}
		],

		ing2cat: {
			shrimp:"seafood",
			//calamari:"seafood",
			tuna/salmon/fish/tilapia:"seafood",
			scallop:"seafood"
			//
			chicken:"meat",
			duck:"meat",
			steak/beef:"meat",
			bacon/pork:"meat",
			ham:"meat",
			lamb:"meat",
			//
			potato:"vegetable",
			tomato:"vegetable",
			carrot:"vegetable",
			celery:"vegetable",
			mushroom:"vegetable",
			onion:"vegetable",
			pepper:"vegetable",
			//
			cheese/cheddar:"dairy",
			egg:"dairy",
			//
			:""

			rice:"add-on",
			noodle:"add-on",
			bean:"add-on",
			pasta:"add-on"

		}
	},

	getIngredient: function(){
		return this.data.ingredient;
	},

	getIng2cat: function(){
		return this.data.ing2cat
	}
}