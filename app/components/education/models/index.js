"use strict";
var CourseModel = (function () {
    function CourseModel(title, company, shortName, initDate, finalDate, description, tecnologies, projects) {
        this.title = title;
        this.company = company;
        this.shortName = shortName;
        this.initDate = initDate;
        this.finalDate = finalDate;
        this.description = description;
        this.tecnologies = tecnologies;
        this.projects = projects;
    }
    ;
    return CourseModel;
}());
exports.CourseModel = CourseModel;
//# sourceMappingURL=index.js.map