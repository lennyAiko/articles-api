/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

    'GET /articles': 'articles/index',
    'POST /articles': 'articles/create',
    'GET /articles/:id': 'articles/single',
    'PATCH /articles/:id': 'articles/update',
    'DELETE /articles/:id': 'articles/delete'

};
