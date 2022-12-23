/*global $, SyntaxHighlighter*/


var oTable2;

$(document).ready(function () {
    'use strict';
    oTable2 = $('#entrys_table').DataTable({
	     fixedHeader: true,
	     responsive: true,
	     ordering: false
    });
	yadcf.init(oTable2, [{
					        column_number: 1,
					        filter_type: "select",
						select_type: 'chosen',
						filter_container_id: 'multi-column-filter-02'
					    }, {
					        column_number: 2,
					        filter_type: 'select',
        					select_type: 'chosen',
						filter_container_id: 'multi-column-filter-03'
					    }], {cumulative_filtering: true}
		  );
	yadcf.initMultipleColumns(oTable2, [{
		column_number: [1, 2], 
		filter_container_id: 'multi-column-filter-01', 
		filter_default_label: 'Nhập tên hoạt chất',
		filter_match_mode : "contains",
		filter_type: 'multi_select',
        	select_type: 'chosen'
	}]);
	yadcf.initMultipleColumns(oTable2, [{
		column_number: [1] , 
		filter_container_id: 'multi-column-filter-05', 
		filter_default_label: 'Nhập tên hoạt chất',
		filter_match_mode : "contains",
		filter_type: 'select',
		select_type: 'chosen'
	}]);
    SyntaxHighlighter.all();
	
	var dataSrc = [];
   var table = $('#entrys_table').DataTable({
	    fixedHeader: true,
	    //"responsive": true,
	    destroy: true,
	   "ordering": false,
     'initComplete': function(){
         var api = this.api();

         // Populate a dataset for autocomplete functionality
         // using data from first, second and third columns
         api.cells('tr', [1, 2]).every(function(){
            // Get cell data as plain text
            var data = $('<div>').html(this.data()).text();           
            if(dataSrc.indexOf(data) === -1){ dataSrc.push(data); }
            					 });
         
         // Sort dataset alphabetically
         dataSrc.sort();
        
         // Initialize Typeahead plug-in
         yadcf.initMultipleColumns(oTable2, [
   		data: dataSrc,
    		filter_container_id: 'multi-column-filter-04', 
	  	filter_type: "select", 
	  	select_type: "chosen", 
	  	filter_default_label: "Nhập tên hoạt chất",
    		select_type_options: {
     			 width: '180px',
      			 dropdownAutoWidth: true,
    				     }
					     ]);
	                               }
       						});

});
