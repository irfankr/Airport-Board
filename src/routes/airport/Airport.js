import React, { Component } from 'react';
import SlipLane from './SlipLane';

export default class Airport extends Component {
    render() {
        return (
            <div>
                <SlipLane rowIndex='1' citiesList={['Sarajevo', 'Belgrade', 'Zagreb', 'Skopje', 'Podgorica']} />
                <SlipLane rowIndex='2' citiesList={['Budapest', 'Sofia', 'Bukuresti', 'Istanbul', 'Athens']} />
                <SlipLane rowIndex='3' citiesList={['Paris', 'Amsterdam', 'Madrid', 'Rome', 'Berlin']} />
            </div>
        );
    }
}


