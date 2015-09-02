/**
 * Build Date: 15/8/26 15:42.
 * Copyright (c): NHN China Co.,LTD
 * Author: jianggang
 * Description:
 */

define(['jquery', 'backbone', './templates', '../common/zjdgxUtil', 'swfobject'], function ($, Backbone, template, zjdgxUtil) {
	return Backbone.View.extend({
		className: 'zjdgxPopup upload',
		template: template.uploadPortraitTemplate,
		initialize: function () {

		},
		render: function () {
			$('body').append(this.$el.html(this.template()));
			setTimeout(this.flashHtml, 10);
		},
		flashHtml: function () {
			var params = {
				useSize: '0',
				totalSize: '107374182400',
				uploadServerUrl : '/uploadPortrait',//�ϴ���Ӧҳ��(��������)
				loadComplete: '',
				nologinFunction: 'home.nologinWhenUpload',
				jsFunction : 'zjdgxUtil.updatePortrait',//�ϴ��ɹ���ص�JS
				filter : "*.jpeg;*.gif;*.jpg;*.png"//�ϴ��ļ���������
			};
			swfobject.embedSWF("js/fileupload/imagecut.swf",
				"zjdgxPortrait",
				"388",
				"272",
				"10.0.0",
				"../fileupload/expressInstall.swf",
				params,
				{wmode: "transparent"}
			);
		},
		updatePortrait: function () {
			console.log(1234);
		}
	});
});