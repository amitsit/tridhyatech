﻿'use strict';

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('app.services', [])

    .value('version', '0.1');


angular.module('app.services').service('configurationService', function () {

    var configService = {};

    configService.basePath = "http://localhost:8282/TridhiyaTechAPI/";

    //configService.basePath = "http://www.TridhiyaTech.com/TridhiyaTechAPI/";
    return configService;

});
