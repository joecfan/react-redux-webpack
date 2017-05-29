/**
 * Created by Administrator on 2016/7/2.
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export class HotSearch extends React.Component {

    render() {
        const { hotText, hotClick } = this.props
        return (
            <a className="style_span"
                  onClick={hotClick}
            >
                {hotText}
            </a>
        )
    }
}

HotSearch.propTypes = {
    hotText: PropTypes.string,
    hotClick: PropTypes.func
}