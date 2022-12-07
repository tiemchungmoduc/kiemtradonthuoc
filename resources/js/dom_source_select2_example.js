/*global $, SyntaxHighlighter*/

var oTable;


$(document).ready(function () {
	'use strict';

	oTable = $('#example').dataTable({
		"responsive": true,
					        "processing": true,
					        "ajax": "/kiemtradonthuoc/resources/Deep.txt",
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
	}).yadcf([
	    {column_number : 0, filter_type: "multi_select", select_type: 'select2'},
	    {column_number : 1, filter_type: "multi_select", select_type: 'select2'},
	    {column_number : 2, select_type: 'select2', select_type_options: {width: '150px', minimumResultsForSearch: -1}},
	    {column_number : 3, filter_type: "text", text_data_delimiter: ",", exclude: true},
	    {column_number : 4, select_type: 'select2', select_type_options : {width: '150px', placeholder: 'Select tag', allowClear: true}, column_data_type: "html", html_data_type: "text", filter_reset_button_text: false}]);

	SyntaxHighlighter.all();
});
