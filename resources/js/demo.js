/*global $, SyntaxHighlighter*/


var oTable2;

$(document).ready(function () {
    'use strict';

    oTable2 = $('#entrys_table').DataTable({
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

    yadcf.init(oTable2, [{
        column_number: 0
    }, {
        column_number: 1,
        filter_type: "text",
        exclude: true,
        exclude_label: '!(not)'
    }, {
        column_number: 2,
        filter_type: "multi_select", 
	select_type: 'select2'
    }, {
        column_number: 3,
        filter_type: "range_number_slider",
        ignore_char: "-"
    }, {
        column_number: 4
    }]);
    
	
        yadcf.initMultipleColumns(oTable2, [{
		column_number: [0, 1], 
		filter_container_id: 'multi-column-filter-01', 
		filter_default_label: 'First table columns 1 and 2!',
		filter_match_mode : "contains",
		filter_type: 'multi_select',
        	select_type: 'select2'
	}]);
    SyntaxHighlighter.all();

});
