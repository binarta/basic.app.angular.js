angular.module("basic.app").run(["$templateCache", function($templateCache) {$templateCache.put("basic-app-site-settings.html","<div class=\"page-header-wrapper\"><div class=\"container\"><div class=\"row\"><div class=\"col-xs-12\"><div class=\"page-header\"><h1 i18n=\"\" code=\"site.settings.title\" read-only=\"\" ng-bind=\"::var\"></h1></div></div></div></div></div><div checkpoint-permission-for=\"edit.mode\"><div class=\"container bin-site-settings\" ng-if=\"permitted\"><div class=\"row\"><div class=\"col-xs-12 col-sm-8 col-sm-offset-2\"><div class=\"panel panel-default\"><div class=\"panel-heading\" i18n=\"\" code=\"site.settings.contact.settings.title\" read-only=\"\">{{::var}}</div><div class=\"panel-body\"><div class=\"row\"><div class=\"col-xs-12 col-md-8 col-md-offset-2\"><form name=\"form\" ng-controller=\"binConfigController as bcc\" ng-init=\"bcc.init({key: \'application.email\', scope: \'public\'})\" ng-submit=\"bcc.submit(); form.$setPristine();\"><div class=\"form-group\" ng-class=\"{\'has-error\': form.$invalid}\"><label i18n=\"\" code=\"config.application.email.label\" read-only=\"\" for=\"config-application-email\">{{::var}}</label> <input type=\"email\" id=\"config-application-email\" class=\"form-control\" ng-model=\"config.value\"></div><div class=\"form-group\"><button type=\"submit\" class=\"btn btn-success\" ng-disabled=\"working || form.$pristine || form.$invalid\" i18n=\"\" code=\"site.settings.save.button\" read-only=\"\"><span ng-show=\"!working\"><i class=\"fa fa-check-circle fa-fw\"></i></span> <span ng-show=\"working\"><i class=\"fa fa-spinner fa-spin fa-fw\"></i></span> {{::var}}</button><p class=\"help-block\" i18n=\"\" read-only=\"\" code=\"config.application.email.info\"><i class=\"fa fa-info-circle\"></i> <span ng-bind-html=\"::var\"></span></p></div></form></div></div><hr><div class=\"row\"><div class=\"col-xs-12 col-md-8 col-md-offset-2\"><form name=\"form\" ng-controller=\"binConfigController as bcc\" ng-init=\"bcc.init({key: \'sender.email\'})\" ng-submit=\"bcc.submit(); form.$setPristine();\"><div class=\"form-group\" ng-class=\"{\'has-error\': form.$invalid}\"><label i18n=\"\" code=\"site.settings.sender.email.label\" read-only=\"\" for=\"config-sender-email\">{{::var}}</label> <input type=\"email\" id=\"config-sender-email\" class=\"form-control\" ng-model=\"config.value\"></div><div class=\"form-group\"><button type=\"submit\" class=\"btn btn-success\" ng-disabled=\"working || form.$pristine || form.$invalid\" i18n=\"\" code=\"site.settings.save.button\" read-only=\"\"><span ng-show=\"!working\"><i class=\"fa fa-check-circle fa-fw\"></i></span> <span ng-show=\"working\"><i class=\"fa fa-spinner fa-spin fa-fw\"></i></span> {{::var}}</button> <button type=\"button\" class=\"btn btn-warning\" ng-click=\"config.value = \'noreply@email.binarta.com\'; bcc.submit();\" ng-disabled=\"config.value == \'noreply@email.binarta.com\'\" i18n=\"\" code=\"site.settings.reset.button\" read-only=\"\"><i class=\"fa fa-refresh fa-fw\"></i> {{::var}}</button><p class=\"help-block\" i18n=\"\" read-only=\"\" code=\"site.settings.sender.email.info\"><i class=\"fa fa-info-circle\"></i> <span ng-bind-html=\"::var\"></span></p></div></form></div></div></div></div><div bin-config-if=\"analytics\" equals=\"\'true\'\"><div class=\"panel panel-default\"><div class=\"panel-heading\" i18n=\"\" code=\"site.settings.analytics.title\" read-only=\"\">{{::var}}</div><div class=\"panel-body\"><div class=\"row\"><div class=\"col-xs-12 col-md-8 col-md-offset-2\"><form name=\"form\" ng-controller=\"binConfigController as bcc\" ng-init=\"bcc.init({key: \'analytics.ga.key\', scope: \'public\'})\" ng-submit=\"bcc.submit(); form.$setPristine();\"><div class=\"form-group\" ng-class=\"{\'has-error\': form.$invalid}\"><label i18n=\"\" code=\"site.settings.analytics.ga.key.label\" read-only=\"\" for=\"config-analytics-ga-key\">{{::var}}</label> <input type=\"text\" id=\"config-analytics-ga-key\" class=\"form-control\" ng-model=\"config.value\"></div><div class=\"form-group\"><button type=\"submit\" class=\"btn btn-success\" ng-disabled=\"working || form.$pristine || form.$invalid\" i18n=\"\" code=\"site.settings.save.button\" read-only=\"\"><span ng-show=\"!working\"><i class=\"fa fa-check-circle fa-fw\"></i></span> <span ng-show=\"working\"><i class=\"fa fa-spinner fa-spin fa-fw\"></i></span> {{::var}}</button><p class=\"help-block\" i18n=\"\" read-only=\"\" code=\"site.settings.analytics.ga.key.info\"><i class=\"fa fa-info-circle\"></i> <span ng-bind-html=\"::var\"></span></p></div></form></div></div></div></div></div><div class=\"panel panel-default\"><div class=\"panel-heading\" i18n=\"\" code=\"site.settings.paypal.title\" read-only=\"\">{{::var}}</div><div class=\"panel-body\"><div class=\"row\"><div class=\"col-xs-12 col-md-8 col-md-offset-2\"><ng-include src=\"\'shop-setup-paypal-form.html\'\"></ng-include></div></div></div></div></div></div></div></div>");}]);