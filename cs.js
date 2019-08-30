/**
 * Browser console hack that allows you to save JSON objects to disk.
 * @project https://github.com/wellsjo/console.save
 * @author Wells Johnston
 */

(function (console) {

    /**
     * Save json object to disk.
     *
     * @param {object} obj The object to save.
     * @param {string} filename The name of the file to save.
     */
    console.saveJson = function (obj, filename) {

        if (!obj) {
            console.error('console.saveJson: No data.');
            return;
        }

        if (filename === null) filename = 'console.json';

        if (typeof obj === 'object') {
            var data = JSON.stringify(obj, undefined, 4);
        }

        var blobType = 'text/json';
        // create a phantom link element to download a Blob of data, then create
        // a mouse event to click the link to download the file.
        var blob = new Blob([data], {
            type: blobType
        });
        var e = document.createEvent('MouseEvents');
        var a = document.createElement('a');

        a.download = filename;
        a.href = window.URL.createObjectURL(blob);
        a.dataset.downloadurl = [blobType, a.download, a.href].join(':');
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        a.dispatchEvent(e);
    };

    /**
   * Save image object to disk.
   *
   * @param {object} obj The object to save.
   * @param {string} filename The name of the file to save.
   * @param {string} imageType The type of the image to save: png, jpeg, gif
   */
    console.saveImage = function (obj, filename, imageType) {

        if (!obj) {
            console.error('console.saveImage: No data.');
            return;
        }

        if (filename === null) filename = 'console.jpeg';

        //if (typeof obj === 'object') {
        //    var data = JSON.stringify(obj, undefined, 4);
        //}

        var blobType = 'image/' + imageType;
        // create a phantom link element to download a Blob of data, then create
        // a mouse event to click the link to download the file.
        var blob = new Blob([obj], {
            type: blobType
        });
        var e = document.createEvent('MouseEvents');
        var a = document.createElement('a');

        a.download = filename;
        a.href = window.URL.createObjectURL(blob);
        a.dataset.downloadurl = [blobType, a.download, a.href].join(':');
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        a.dispatchEvent(e);
    };

})(console);
