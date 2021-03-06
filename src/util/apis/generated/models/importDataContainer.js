/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the ImportDataContainer class.
 * @constructor
 * @member {string} [csvData]
 * 
 */
function ImportDataContainer() {
}

/**
 * Defines the metadata of ImportDataContainer
 *
 * @returns {object} metadata of ImportDataContainer
 *
 */
ImportDataContainer.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ImportDataContainer',
    type: {
      name: 'Composite',
      className: 'ImportDataContainer',
      modelProperties: {
        csvData: {
          required: false,
          serializedName: 'csvData',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = ImportDataContainer;
