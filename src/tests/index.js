import React from 'react';
import { shallow, mount, render } from 'enzyme';

import { expect } from 'chai';
import sinon from 'sinon';

// import Button from '../index';
import ReactSpeedometer from "../index"

const { describe, it } = global;

describe("<ReactSpeedometer />", () => {

    // test if it has the parent div component for the "svg"
    it('should render one parent div component', () => {
        // a wrapper that does not render the child components
        // ref: http://airbnb.io/enzyme/
        const wrapper = shallow(<ReactSpeedometer />);
        expect( wrapper.find('div') ).to.have.length(1);
    });

    // test if we component did mount is called
    it('componentDidMount => called once', () => {
        // ref: http://airbnb.io/enzyme/
        sinon.spy( ReactSpeedometer.prototype, 'componentDidMount' );
        const wrapper = mount( <ReactSpeedometer /> );
        // expect( wrapper.find('svg') ).to.have.length(1);
        expect(ReactSpeedometer.prototype.componentDidMount.calledOnce).to.equal(true);
    });

    // test if we have the 'svg.speedometer'
    it('svg.speedometer is present', () => {
        // ref: http://airbnb.io/enzyme/
        const full_dom_wrapper = mount( <ReactSpeedometer /> ).render();
        expect( full_dom_wrapper.find('svg.speedometer').length ).to.equal(1);
    });

    // check if the default segments is 5 by counting 'speedo-segment'
    it('by default we should have 5 segments', () => {
        const full_dom_wrapper = mount( <ReactSpeedometer /> ).render();
        expect( full_dom_wrapper.find('path.speedo-segment').length ).to.equal(5);
    });

    // check the text color of the current value is the default (#666)
    it('should have the default text color for current value', () => {
        const full_dom_wrapper = mount( <ReactSpeedometer /> ).render();
        expect( full_dom_wrapper.find('text.current-value').css("fill") ).to.equal("#666");
    });

    // should take the color given by us in 'textColor'
    it('should have the text color given by us => steelblue ', () => {
        const full_dom_wrapper = mount( 
                                    <ReactSpeedometer 
                                        textColor="steelblue"
                                    /> 
                                ).render();
        expect( full_dom_wrapper.find('text.current-value').css("fill") ).to.equal("steelblue");
    });    

});