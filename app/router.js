"use strict";
var index_1 = require('./views/home/index');
var index_2 = require('./views/oneFilm/index');
var index_3 = require('./views/otherProjects/index');
exports.Routes = [
    { path: '', component: index_1.Home },
    { path: ':title', component: index_2.OneFilm },
    { path: 'other-projects', component: index_3.OtherProjects },
];
//# sourceMappingURL=router.js.map