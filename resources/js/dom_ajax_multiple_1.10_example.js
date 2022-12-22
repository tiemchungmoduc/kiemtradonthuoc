/*global $, SyntaxHighlighter*/


var oTable2;

$(document).ready(function () {
    'use strict';
    oTable2 = $('#entrys_table').DataTable({
    	//stateSave: true,
		fixedHeader: true,
	    "responsive": true,
    });
	yadcf.initMultipleColumns(oTable2, [{
		column_number: [1, 2], 
		filter_container_id: 'multi-column-filter-01', 
		filter_default_label: 'Nhập tên hoạt chất',
		filter_match_mode : "contains",
		filter_type: 'multi_select',
        	select_type: 'chosen'
	}]);
	yadcf.initMultipleColumns(oTable2, [{
		column_number: [1, 2], 
		filter_container_id: 'multi-column-filter-02', 
		filter_default_label: 'Nhập tên hoạt chất',
		filter_match_mode : "contains",
		filter_type: 'select',
		select_type: 'chosen',
		select_type_options: {
            no_results_text: 'Can\'t find ->',
            search_contains: true
        }
	}]);
    SyntaxHighlighter.all();

});
