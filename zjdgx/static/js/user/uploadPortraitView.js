/**
 * Build Date: 15/8/26 15:42.
 * Copyright (c): NHN China Co.,LTD
 * Author: jianggang
 * Description:
 */

define(['jquery', 'backbone', './templates', '../common', 'swfobject'], function ($, Backbone, template, zjdgx) {
	return Backbone.View.extend({
		className: 'zjdgxPopup upload',
		template: template.uploadPortraitTemplate,
		initialize: function (zjdgx) {
			zjdgx.eventbus.on('uploadSuccess:portrait', this.remove, this);
		},
		render: function () {
			$('body').append(this.$el.html(this.template()));
			setTimeout(this.flashHtml, 10);

			return this;
		},
		flashHtml: function () {
			var params = {
				useSize: '0',
				totalSize: '107374182400',
				uploadServerUrl : '/uploadPortrait',//�ϴ���Ӧҳ��(��������)
				loadComplete: '',
				nologinFunction: 'home.nologinWhenUpload',
				jsFunction : 'zjdgx.updatePortrait',//�ϴ��ɹ���ص�JS
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
		remove: function (sourceUrl) {
			this.$el.remove();
			zjdgx.eventbus.trigger('updatePortrait:register', sourceUrl);
		}
	});
});