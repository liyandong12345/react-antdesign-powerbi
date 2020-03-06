import React, { PureComponent } from 'react';
import { Table } from 'antd';
import ReactDragListView from 'react-drag-listview';

export default class MoveTableRow extends React.Component<any, any> {
    dragProps: any;
    // dragProps: { onDragEnd(fromIndex: any, toIndex: any): void; nodeSelector: string; };
    constructor(props: any) {
        super(props);
        this.state = {
            data: [
                {
                    key: "1",
                    name: "Boran",
                    gender: "male",
                    age: "12",
                    address: "New York"
                },
                {
                    key: "2",
                    name: "JayChou",
                    gender: "male",
                    age: "38",
                    address: "TaiWan"
                },
                {
                    key: "3",
                    name: "Lee",
                    gender: "female",
                    age: "22",
                    address: "BeiJing"
                },
                {
                    key: "4",
                    name: "ChouTan",
                    gender: "male",
                    age: "31",
                    address: "HangZhou"
                },
                {
                    key: "5",
                    name: "AiTing",
                    gender: "female",
                    age: "22",
                    address: "Xi’An"
                }
            ],
            
        };
    }
    columns=[
        {
            title: "Key",
            dataIndex: "key"
        },
        {
            title: "Name",
            dataIndex: "name"
        },
        {
            title: "Gender",
            dataIndex: "gender"
        },
        {
            title: "Age",
            dataIndex: "age"
        },
        {
            title: "Address",
            dataIndex: "address"
        },
        {
            title: "Operates",
            key: "operate",
            render: (text, record, index) =>
                <a className="drag-handle" href="#">Drag</a>
        }
    ]
    render() {

        const dragProps = {
            onDragEnd:(fromIndex: any, toIndex: any) =>{
                const data = this.state.data;
                const item = data.splice(fromIndex, 1)[0];
                data.splice(toIndex, 0, item);
                this.setState({
                    data
                });
            },
            handleSelector: "a"
        };


        return (
            <div style={{ margin: 20 }}>
            <h2>Table row with dragging</h2>
            <ReactDragListView {...dragProps}>
                <Table
                    columns={this.columns}
                    pagination={false}
                    dataSource={this.state.data}
                    size='small'
                />
            </ReactDragListView>
        </div>
        );
    }
}