/**
 * @fileoverview Model for views
 * @author NHN Ent. FE Development Team <e0242@nhnent.com>
 */
'use strict';

/**
 * Event ViewModel
 * TODO: useless.
 * @constructor
 * @param {Event} event Event instance.
 */
function EventViewModel(event) {
    /**
     * The model of event.
     * @type {Event}
     */
    this.model = event;

    /**
     * @type {number}
     */
    this.top = 0;

    /**
     * @type {number}
     */
    this.left = 0;

    /**
     * @type {number}
     */
    this.width = 0;

    /**
     * @type {number}
     */
    this.height = 0;

    /**
     * Represent event has collide with other events when rendering.
     * @type {boolean}
     */
    this.hasCollide = false;

    /**
     * Extra space at rigth side of this event.
     * @type {number}
     */
    this.extraSpace = 0;
}

/**********
 * static props
 **********/

/**
 * EventViewModel factory method.
 * @param {Event} event Event instance.
 * @returns {EventViewModel} EventViewModel instance.
 */
EventViewModel.create = function(event) {
    return new EventViewModel(event);
};


/**********
 * prototype props
 **********/

/**
 * Shadowing valueOf method for event sorting.
 * @returns {Event} The model of event.
 */
EventViewModel.prototype.valueOf = function() {
    return this.model;
};

/**
 * Link duration method
 * @returns {number} Event#duration result.
 */
EventViewModel.prototype.duration = function() {
    return this.model.duration();
};

/**
 * Link collidesWith method
 * @param {Event|EventViewModel} viewModel - Model or viewmodel instance of Events.
 * @returns {boolean} Event#collidesWith result.
 */
EventViewModel.prototype.collidesWith = function(viewModel) {
    return this.model.collidesWith(viewModel.valueOf());
};

module.exports = EventViewModel;

