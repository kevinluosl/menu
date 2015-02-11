/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
          
        }
    },
    
    tree: {
        value:{
             "name": "Root",
             "children": [
                { "name": "Parent 1", "children": [{ "name": "Child 1" }] },
                { "name": "Parent 2", "children": [{ "name": "Child 2" },{ "name": "Child 2-2" }] },
                { "name": "Parent 3", "children": [{ "name": "Child 3"}] }
            ]

        }
    }
});
