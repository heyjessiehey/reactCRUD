import React, { Component } from 'react';

class TOC extends Component{
    render() {
        let lists = [];
        let data = this.props.data;
        for(let i=0; i<data.length; ++i){
            lists.push(
                <li key={data[i].id}>
                    <a
                        href={"/content/"+data[i].id}
                        onClick={function(id, e){
                            e.preventDefault();
                            this.props.onChangePage(id);
                        }.bind(this, data[i].id)}
                    >{data[i].title}</a>
                </li>);
        }   
        return (
            <nav>
                {lists}
            </nav>
        );
    }
}

export default TOC;