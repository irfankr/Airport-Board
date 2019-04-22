import React, { Component } from 'react';
import $ from 'jquery';
import './jquery.splitflap.js'

import chars from './chars.png'

// sudo npm install jquery --save
// TO TREBA URADITI

export default class SlipLane extends Component {
    componentDidMount(){
        this.initFlip();
    }

    initFlip() {
        var ratio = 0.7,
            wait = 2000,
            citiesList = this.props.citiesList,
            counter = 0,
            letters = 15,
            that = this;

        function addSpacesToLabel(label) {
            var outputLabel = label;
            for (var i = 0; i < (letters - label.length); i++) {
                outputLabel += ' ';
            }
            return outputLabel;
        }

        function displaySource(source) {
            counter = counter < citiesList.length-1 ? counter+1 : 0;
            $('.resized-splitflap-irfan-' + that.props.rowIndex)
                .splitFlap({
                    image: chars,
                    charWidth:  50 * ratio,
                    charHeight: 100 * ratio,
                    speed: 50,
                    text: addSpacesToLabel(source),
                    imageSize:  (2500 * ratio) + 'px ' + (100 * ratio) + 'px',
                    onComplete: function() {
                        setTimeout(function() { displaySource(citiesList[counter]); }, wait);
                    }
                });
        }

        displaySource(addSpacesToLabel(citiesList[counter]));
    }

    render() {
        return (
            <div className="irfan-idea">
                <div className={'resized-splitflap-irfan-' + this.props.rowIndex}></div>
            </div>
        );
    }
}