/* ***** BEGIN LICENSE BLOCK *****
 * Distributed under the BSD license:
 *
 * Copyright (c) 2012, Ajax.org B.V.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of Ajax.org B.V. nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL AJAX.ORG B.V. BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * ***** END LICENSE BLOCK ***** */

/* This file was autogenerated from /home/bwh/.vscode-server/extensions/rscript-syntax/syntaxes/rscript.tmLanguage.json (uuid: ) */
/****************************************************************************************
 * IT MIGHT NOT BE PERFECT ...But it's a good start from an existing *.tmlanguage file. *
 * fileTypes                                                                            *
 ****************************************************************************************/

define(function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

var rscriptHighlightRules = function() {
    // regexp must not have capturing parentheses. Use (?:) instead.
    // regexps are ordered -> the first match is used

    this.$rules = {
        start: [{
            include: "#items"
        }],
        "#items": [{
            include: "#comments"
        }, {
            include: "#strings"
        }, {
            include: "#keywords"
        }, {
            include: "#constants"
        }, {
            include: "#types"
        }, {
            include: "#numbers"
        }, {
            include: "#functions"
        }],
        "#functions": [{
            token: ["entity.name.function.rscript", "text"],
            regex: /(\w+)(\W*\()/,
            push: [{
                token: "text",
                regex: /\)/,
                next: "pop"
            }, {
                include: "#items"
            }]
        }],
        "#types": [{
            token: "entity.name.type.rscript",
            regex: /\b[A-Z]\w*\b/
        }],
        "#constants": [{
            token: "constant.numeric.rscript",
            regex: /\b[0-9]+(?:\.[0-9]*)?\b/
        }, {
            token: "constant.language.rscript",
            regex: /True|False|None|self|super/
        }],
        "#comments": [{
            token: "comment.line.rscript",
            regex: /\/\/.*/
        }, {
            token: "comment.block.rscript",
            regex: /\/\*/,
            push: [{
                token: "comment.block.rscript",
                regex: /\*\//,
                next: "pop"
            }, {
                defaultToken: "comment.block.rscript"
            }]
        }],
        "#keywords": [{
            token: "keyword.control.rscript",
            regex: /\b(?:return|if|else|loop|while|for|in|break)\b/
        }, {
            token: "keyword.rscript",
            regex: /\b(?:pub|fn|let|class)\b/
        }],
        "#members": [{
            token: ["text", "variable.parameter.rscript"],
            regex: /(\.)(\w+)\b/
        }],
        "#strings": [{
            token: "string.quoted.double.rscript",
            regex: /"/,
            push: [{
                token: "string.quoted.double.rscript",
                regex: /"/,
                next: "pop"
            }, {
                token: "constant.character.escape.rscript",
                regex: /\\./
            }, {
                defaultToken: "string.quoted.double.rscript"
            }]
        }]
    }
    
    this.normalizeRules();
};

rscriptHighlightRules.metaData = {
    "$schema": "https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json",
    name: "rscript",
    scopeName: "source.rscript"
}


oop.inherits(rscriptHighlightRules, TextHighlightRules);

exports.rscriptHighlightRules = rscriptHighlightRules;
});