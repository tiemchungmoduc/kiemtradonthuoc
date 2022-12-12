/*global $, SyntaxHighlighter*/


var oTable;

$(document).ready(function () {
    'use strict';

    oTable = $('#entrys_table').DataTable({
    	"responsive": true,
        "processing": true,
        "ajax": "resources/deep.txt",
        "columns": [{
            "data": "engine"
        }, {
            "data": "browser"
        }, {
            "data": "platform.inner"
        }, {
            "data": "platform.details.0"
        }, {
            "data": "platform.details.1"
        }]
    });

	
        yadcf.initMultipleColumns(oTable, [{
		column_number: [0, 1], 
		filter_container_id: 'kiem-tra-don-thuoc', 
		filter_default_label: 'Nhập tên thuốc',
		filter_match_mode : "contains",
		filter_type: 'multi_select',
        	select_type: 'select2'
	}]);
    SyntaxHighlighter.all();

});
