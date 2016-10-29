"use strict";
var index_1 = require('./views/home/index');
var index_2 = require('./views/interview/index');
exports.Routes = [
    { path: '', component: index_1.Home },
    { path: 'interview', component: index_2.Interview },
    { path: ':company', component: index_1.Home },
];
//# sourceMappingURL=router.js.map