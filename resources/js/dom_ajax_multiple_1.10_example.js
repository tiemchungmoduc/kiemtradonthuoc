/*global $, SyntaxHighlighter*/


var oTable2;

$(document).ready(function () {
    'use strict';
    oTable2 = $('#entrys_table').DataTable({
    	//stateSave: true,
		fixedHeader: true,
	    "responsive": true,
    });
	yadcf.init(oTable2, [{
					        column_number: 1,
					        filter_type: "auto_complete",
						select_type: 'chosen'
					    }, {
					        column_number: 2,
					        filter_type: "auto_complete"
					    }]);
	yadcf.initMultipleColumns(oTable2, [{
		column_number: [1, 2], 
		filter_container_id: 'multi-column-filter-01', 
		filter_default_label: 'Nhập tên hoạt chất',
		filter_match_mode : "contains",
		filter_type: 'multi_select',
        	select_type: 'chosen'
	}]);
	yadcf.initMultipleColumns(oTable2, [{
		column_number: [1|2] , 
		filter_container_id: 'multi-column-filter-02', 
		filter_default_label: 'Nhập tên hoạt chất',
		filter_match_mode : "contains",
		filter_type: 'select',
		select_type: 'chosen'
	}]);
    SyntaxHighlighter.all();

});
