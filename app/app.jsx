import React from 'react';
import Header from './header.jsx'
import Content from './content.jsx'
import TableRow from './tableRow.jsx';

class App extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            data:
            [
                {
                    "id": 1,
                    "name": "Foo",
                    "age": "20"
                },

                {
                    "id": 2,
                    "name": "Bar",
                    "age": "30"
                },

                {
                    "id": 3,
                    "name": "Baz",
                    "age": "40"
                }
            ]
        };
    }

    render() {
        return (
            <div>
                <Header headerProp={"My Portal"} />
                <h2>{this.state.data[0].name}</h2>
                <table>
                    <tbody>
                        {this.state.data.map((person, i) => <TableRow key={i} data={person} />)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App;