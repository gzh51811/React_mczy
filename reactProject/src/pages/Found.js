import React from 'react';
import './Found.scss';
import Dibu from './Dibu';
import withAxios from '../hoc/withAxios';
class Found extends React.Component {
    constructor() {
        super();
        this.state = {
            datalist: []
        }
    }
    async componentWillMount() {
        // 使用axios
        let { data } = await this.props.axios.get('/api/found', {
            params: {
            }
        });
        // console.log(data);
        this.setState({
            datalist: data
        });


    }
    render() {
        return <div id="found">
            {
                this.state.datalist.map(goods => {
                    return <div className="item" id={goods.item.showOrdersId}>
                        <div className="iteminfo">
                            <img src={goods.item.avatarUrl} /> <span>{goods.item.memberName}</span>
                            <p className="praise">{goods.item.readCount}人浏览</p>
                        </div>
                        <div className="showtitle">{goods.item.titleText}</div>
                        <a><div className="cover"><img src={goods.item.titleImageSrc} /></div></a>
                    </div>
                })
            }
            <Dibu />
        </div>
    }
}
Found = withAxios(Found);
export default Found;