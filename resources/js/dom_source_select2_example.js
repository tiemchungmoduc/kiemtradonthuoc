/*global $, SyntaxHighlighter*/


var oTable;

$(document).ready(function () {
    'use strict';

    oTable = $('#example').DataTable({
    	"responsive": true,
        "processing": true,
        "ajax": "/kiemtradonthuoc/resources/deep.txt",
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

    yadcf.init(oTable, [{
        column_number: 0
    }, {
        column_number: 1,
        filter_type: "text",
        exclude: true,
        exclude_label: '!(not)'
    }, {
        column_number: 2,
        filter_type: "auto_complete"
    }, {
        column_number: 3,
        filter_type: "range_number_slider",
        ignore_char: "-"
    }, {
        column_number: 4
    }]);
    
	yadcf.exFilterColumn(oTable, [[0, "Misc"]]);
	
    SyntaxHighlighter.all();

});
