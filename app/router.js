"use strict";
var index_1 = require('./views/home/index');
var index_2 = require('./views/otherProjects/index');
exports.Routes = [
    { path: '', component: index_1.Home },
    { path: 'other-projects', component: index_2.OtherProjects },
];
//# sourceMappingURL=router.js.map