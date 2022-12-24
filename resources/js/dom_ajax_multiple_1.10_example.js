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
						filter_container_id: 'multi-column-filter-05'
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
	
	 // Sort dataset alphabetically
         //dataSrc.sort();
	     var opts = oTable2.column(3).data();
 	     var okela = oTable2.column(0).data();
	     var aloha = { ...opts, ...okela };
        
         // Initialize Typeahead plug-in
         yadcf.initMultipleColumns(oTable2, [{
   		data: aloha,
    		filter_container_id: 'multi-column-filter-03', 
	  	filter_type: "select", 
	  	select_type: "chosen", 
	  	filter_default_label: "Nhập tên hoạt chất",
    		select_type_options: {
     			 width: '180px',
      			 dropdownAutoWidth: '180px',
    				     }
	 }]);
    SyntaxHighlighter.all();
	

});
