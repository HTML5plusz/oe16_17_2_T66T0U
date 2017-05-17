var SERVICE_URL = "http://94.177.230.203:8080/sport/rest/";	

$(function () {
	$("#selectBoxChampionship").dxSelectBox({
		dataSource: new DevExpress.data.CustomStore({

			load: function (loadOptions) {
				return $.getJSON(SERVICE_URL + "championship/entity/all");
			},

			byKey: function (key) {
				return $.getJSON(SERVICE_URL + "championship/" + encodeURIComponent(key));
			}
		}),
		valueExpr: "id",
		displayExpr: "name",
		width: 150,
		placeholder: "Championship",
		onSelectionChanged: function(e){
		
			document.getElementById("headerSportEvents").innerHTML = "Sportesemények";
			
			var currSeria;
			if(e.selectedItem.seria){
				 currSeria = new Seria(e.selectedItem.seria.id, e.selectedItem.seria.name, e.selectedItem.seria.description);
				 document.getElementById("headerSportEvents").innerHTML = document.getElementById("headerSportEvents").innerHTML.concat(" - "+currSeria.name);
				
				$("#selectBoxSeria").dxSelectBox({
					value: currSeria.id						
				});	
			}
			else{
				$("#selectBoxSeria").dxSelectBox({
					value: null					
				});					
			}
			
			var currSeason;
			if(e.selectedItem.season){
				currSeason =  new Season(e.selectedItem.season.id, e.selectedItem.season.name, e.selectedItem.season.description);
				document.getElementById("headerSportEvents").innerHTML = document.getElementById("headerSportEvents").innerHTML.concat(" - "+currSeason.name);
				
				$("#selectBoxSeason").dxSelectBox({
					value: currSeason.id						
				});	
			}
			else{
				$("#selectBoxSeason").dxSelectBox({
					value: null					
				});		
			}
			
			var currChamp = new Championship(e.selectedItem.id,
							e.selectedItem.name,
							e.selectedItem.description, 
							currSeria,
							currSeason,
							e.selectedItem.event,
							e.selectedItem.condition,
							e.selectedItem.startDate,
							e.selectedItem.endDate
						);
			
			$("#tableSportEvents").dxDataGrid({
				dataSource: e.selectedItem.event						
			});					
		}
	});
							
	$("#tableSportSpecializations").dxDataGrid({
		noDataText: "Nincs megjeleníthető sport specializáció!"
	});
			
	$("#tableSportEvents").dxDataGrid({
		noDataText: "Nincs megjeleníthető sportesemény!",
		columns: [
			{ 	dataField: 'id', 
				caption: 'ID',
				cellTemplate: function (container, options) {
					$("<a>", { "class": "dx-link" })
					.text(options.value)
					.on('dxclick', function(){
						alert('Itt le kellene GET-elni a(z) ' + options.value + ' id-val rendelkező SportEvent-et! :)');
					})
					.appendTo(container);
				},
				width: 50
			},
			{ dataField: 'sport.name', caption: 'Sport' },
			{ dataField: 'specialization.name', caption: 'Specialization' }
		]
	});
	
	$("#selectBoxSeria").dxSelectBox({
		dataSource: new DevExpress.data.CustomStore({

			load: function (loadOptions) {
				return $.getJSON(SERVICE_URL + "seria/entity/all");
			},

			byKey: function (key) {
				return $.getJSON(SERVICE_URL + "seria/" + encodeURIComponent(key));
			}
		}),
		valueExpr: "id",
		displayExpr: "name",
		width: 150,
		placeholder: "Seria"
	});
	
	$("#selectBoxSeason").dxSelectBox({
		dataSource: new DevExpress.data.CustomStore({

			load: function (loadOptions) {
				return $.getJSON(SERVICE_URL + "season/entity/all");
			},

			byKey: function (key) {
				return $.getJSON(SERVICE_URL + "season/" + encodeURIComponent(key));
			}
		}),
		valueExpr: "id",
		displayExpr: "name",
		width: 150,
		placeholder: "Season"
	});
	
	$("#selectBoxSport").dxSelectBox({
		dataSource: new DevExpress.data.CustomStore({

			load: function (loadOptions) {
				return $.getJSON(SERVICE_URL + "sport/entity/all");
			},

			byKey: function (key) {
				return $.getJSON(SERVICE_URL + "sport/" + encodeURIComponent(key));
			}
		}),
		valueExpr: "id",
		displayExpr: "name",
		width: 150,
		placeholder: "Sport",
		onSelectionChanged: function(e){		
			$("#tableSportSpecializations").dxDataGrid({
				dataSource: new DevExpress.data.CustomStore({
					load: function (loadOptions) {
						return $.getJSON(SERVICE_URL + "sportspecialization/entity/" + e.selectedItem.id);
					},

					byKey: function (key) {
						return $.getJSON(SERVICE_URL + "sportspecialization/idname/" + encodeURIComponent(key));
					}
				})
			})
		}
	});
});