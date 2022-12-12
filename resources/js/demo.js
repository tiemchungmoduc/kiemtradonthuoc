/*global $, SyntaxHighlighter*/


var oTable;

$(document).ready(function () {
    'use strict';

    oTable = $('#entrys_table').DataTable({
    	"responsive": true,
        "processing": true,
        "ajax": "resources/deep.txt",
        "columns": [{
            "data": "Hoạt chất 1"
        }, {
            "data": "Hoạt chất 2"
        }, {
            "data": "Cơ chế"
        }, {
            "data": "Hậu quả"
        }, {
            "data": "Xử trí"
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
