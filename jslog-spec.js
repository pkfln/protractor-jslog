/*
 * JSLog - Inject a log-div into a Protractor E2E-Test
 *
 * @author: pkfln <https://github.com/pkfln>
 */

describe('testname', function () {

    //////// JS LOG BEGIN ////////
    function escapeHtml(text) {
        var map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };

        return text.replace(/[&<>"']/g, function (m) {
            return map[m];
        });
    }

    function initJSLog() {
        browser.executeScript("document.body.insertAdjacentHTML(\"afterbegin\", \"<div id='protractor_injected_jslog' style='position: absolute; top: 5px; left: 5px; z-index: 99999; background-color: #000; width: 300px; height: 100px; color: #FFF; padding: 3px; overflow-y: scroll;'><b>JSLog</b><br /></div>\");");
    }

    function JSLog(logstring) {
        browser.executeScript("document.getElementById(\"protractor_injected_jslog\").insertAdjacentHTML(\"afterbegin\", \"" + escapeHtml(logstring) + "<br />\");");
    }
    //////// JS LOG END ////////

    it('should do something', function () {
        browser.get('/').then(function () {
            initJSLog();

            JSLog('Logged something into JSLog.');
        });

        expect(true).toBe(true);
    });
});
