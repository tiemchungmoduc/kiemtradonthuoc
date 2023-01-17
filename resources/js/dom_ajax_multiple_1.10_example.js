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
	     var opt1 = oTable2.column(1).data();
 	     var opt2 = oTable2.column(2).data();
	     var aloha = Object.values(opt1).slice(0, 420);
	     var alohe = Object.values(opt2).slice(0, 420);
	     var olala = [...aloha, ...alohe];
	     var olili = [...new Set(olala)];
        
         // Initialize Typeahead plug-in
         yadcf.initMultipleColumns(oTable2, [{
   		data: olili,
    		filter_container_id: 'multi-column-filter-03', 
		column_number: [1, 2], 
	  	filter_type: "multi_select", 
	  	select_type: "select2", 
	  	filter_default_label: "Nhập tên hoạt chất",
    		select_type_options: {
     			 width: '180px',
      			 dropdownAutoWidth: '180px',
    				     }
	 }]);
    SyntaxHighlighter.all();
	

});
