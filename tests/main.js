/**
 * @jest-environment jsdom
 * */

import {getAttributes} from '../src/core.js';
import {expect} from 'expect';
import {JSDOM} from "jsdom";


describe("First Tests", function () {
    let document, window;

    // Set up the document and window before each test
    beforeEach(function () {
        const dom = new JSDOM(`<!DOCTYPE html><html><body><div id="app"></div></body></html>`);
        document = dom.window.document;
        window = dom.window;
    });

    // Clean up the window after each test
    afterEach(function () {
        window.close();
    });


    it("should find the #app div element", function () {
        const appDiv = document.getElementById("app");
        expect(appDiv).not.toBeNull();
        expect(appDiv.tagName).toBe("DIV");
    });

    it("should allow adding content to #app", function () {
        const appDiv = document.getElementById("app");
        appDiv.textContent = "Hello World!";
        expect(appDiv.textContent).toBe("Hello World!");
    });

    it("getAttributes",  function () {
        let elem = document.createElement('div');
        elem.setAttribute('aria-label', "about-us");
        expect(getAttributes(elem)).toBe("{\"aria-label\":\"about-us\"}");
    });
});
