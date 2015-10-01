angular.module('basic.app', [
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularx',
    'ui.bootstrap.ex',
    'angularticsx.ga',
    'autoupdater',
    'schedulers',
    'cookies',
    'config.gateways',
    'viewport',
    'clerk.menu',
    'seo',
    'intercom',
    'i18n',
    'i18n.gateways',
    'ui.tinymce',
    'checkpoint',
    'checkpoint.accounts',
    'checkpoint.templates',
    'image-management',
    'imagex.tinymce',
    'contact.us',
    'bin.media',
    'catalog',
    'catalog.templates',
    'binarta.search',
    'blog',
    'blog.templates'
]).config(['$locationProvider', '$provide', function ($locationProvider, $provide) {
    $provide.decorator('$sniffer', ['$delegate', function ($delegate) {
        $delegate.history = false;
        return $delegate;
    }]);
    $locationProvider.html5Mode(false).hashPrefix('!');
}]).run(['schedule', 'autoupdater', '$cacheFactory', function (schedule, autoupdater, $cacheFactory) {
    schedule.forPeriod(autoupdater, 60000);
    schedule.forPeriod(function () {
        $cacheFactory.get('i18n').removeAll();
    }, 600000);
}]).run(['config', 'topicMessageDispatcher', function (config, topicMessageDispatcher) {
    topicMessageDispatcher.firePersistently('config.initialized', config);
    topicMessageDispatcher.firePersistently('app.start', 'ok');
}]);