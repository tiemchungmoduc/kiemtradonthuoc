/*global $, SyntaxHighlighter*/


var oTable2;

$(document).ready(function () {
    'use strict';

    oTable2 = $('#entrys_table').DataTable({
    	"responsive": true,
        "processing": true,
        "ajax": "resources/deep.txt",
        "columns": [{
            "data": "STT"
        }, {
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

	yadcf.initMultipleColumns(oTable2, [{
		column_number: [1, 2], 
		filter_container_id: 'multi-column-filter-01', 
		filter_default_label: 'First table columns 1 and 2!',
		filter_match_mode : "contains",
		filter_type: 'multi_select',
        	select_type: 'select2'
	}]);
    SyntaxHighlighter.all();

});
