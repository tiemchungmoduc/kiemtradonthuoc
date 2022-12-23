/*global $, SyntaxHighlighter*/


var oTable2;

$(document).ready(function () {
    'use strict';
    oTable2 = $('#entrys_table').DataTable({
    	    stateSave: true,
	    fixedHeader: true,
	    "responsive": true,
	     ordering: false
    });
	yadcf.init(oTable2, [{
					        column_number: 1,
					        filter_type: "select",
						select_type: 'chosen'
					    }, {
					        column_number: 2,
					        filter_type: 'select',
        					select_type: 'chosen'
					    }], {cumulative_filtering: true}
		  );
	yadcf.initMultipleColumns(oTable2, [{
		column_number: [1, 2], 
		filter_container_id: 'multi-column-filter-01', 
		filter_default_label: 'Nhập tên hoạt chất',
		filter_match_mode : "contains",
		filter_type: 'multi_select',
        	select_type: 'select2'
	}]);
    SyntaxHighlighter.all();
 var dataSrc = [];

   var table = $('#entrys_table').DataTable({
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
         $('.dataTables_filter input[type="search"]', api.table().container())
            .typeahead({
               source: dataSrc,
               afterSelect: function(value){
                  api.search(value).draw();
               }
            }
         );
      }
   });
});
