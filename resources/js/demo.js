/*global $, SyntaxHighlighter*/


$(document).ready(function () {
    
    oTable = $('#table_2').DataTable();
    yadcf.initMultipleColumns([oTable], [{
		column_number: [0, 1],
		filter_container_id: 'kiem-tra-don-thuoc', 
		filter_default_label: 'Nhập hoạt chất',
		filter_match_mode : "contains",
		filter_type: 'multi_select',
        	select_type: 'select2'
	}]);

});
