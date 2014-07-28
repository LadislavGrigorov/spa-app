/*globals define*/
define(['requester'], function (requester) {
    var DataPersister;
    DataPersister = (function () {
        function DataPersister(resourceURL) {
            this.resourceURL = resourceURL;
        }

        DataPersister.prototype.messages = function(){
            var self = this;
            return requester.getJSON(self.resourceURL);
            return messages;
        };

        return DataPersister;
    }());
    return DataPersister;
});
