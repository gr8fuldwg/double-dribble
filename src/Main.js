import React from 'react';
import Card from './Card';

function Main(props) {
    return (
        <main className="h-100 d-flex flex-column">
            <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center align-items-center">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="#" className="nav-link text-dark font-weight-bold ">
                            Popular <i className="fa fa-angle-down"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link text-dark font-weight-bold">
                            Shots <i className="fa fa-angle-down"></i></a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link text-dark font-weight-bold">
                            Now <i className="fa fa-angle-down"></i></a>
                    </li>
                </ul>
            </nav>
            <section className="porject-grid flex-grow-1 p-4 d-flex flex-wrap justify-content-around">
                <Card src="http://loremflickr.com/240/180" likes={2108} views={2108} comments={2108} />
                <Card src="http://loremflickr.com/240/180/dog" likes={2108} views={2108} comments={2108}/>
                <Card src="http://loremflickr.com/240/180/bird" likes={2108} views={2108} comments={2108}/>
                <Card src="http://loremflickr.com/240/180/snake" likes={2108} views={2108} comments={2108}/>
                <Card src="http://loremflickr.com/240/180/truck" likes={642} views={397} comments={15}/>
            </section>
        </main>
    )
}

export default Main;