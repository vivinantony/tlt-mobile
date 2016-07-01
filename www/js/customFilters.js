angular.module('tltApp')

.filter('hrefToJS', function($sce, $sanitize) {
    return function(text) {
        var regex = /href="([\S]+)"/g;
        var newString = $sanitize(text).replace(regex, "href=\"#\" onClick=\"window.open('$1', '_blank', 'location=yes')\"");
        return $sce.trustAsHtml(newString);
    }
});
