/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(request, response) {
        return response.view('home', {
            currentDate: (new Date()).toDateString()
        });
    }
};

