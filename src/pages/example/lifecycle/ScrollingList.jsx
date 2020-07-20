import React from 'react'

class ScrollingList extends React.Component {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // 我们是否在 list 中添加新的 items ？
    // 捕获滚动​​位置以便我们稍后调整滚动位置。
    // if (prevProps.list.length < this.props.list.length) {
    //   const list = this.listRef.current;
    //   return list.scrollHeight - list.scrollTop;
    // }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // 如果我们 snapshot 有值，说明我们刚刚添加了新的 items，
    // 调整滚动位置使得这些新 items 不会将旧的 items 推出视图。
    //（这里的 snapshot 是 getSnapshotBeforeUpdate 的返回值）
    // if (snapshot !== null) {
    //   const list = this.listRef.current;
    //   list.scrollTop = 0
    // }

    // const list = this.listRef.current;
    // list.scrollTop = 300

    // console.log(list.scrollTop)
  }

  componentDidMount() {
    const list = this.listRef.current;
    list.scrollTop = 300

    console.log(list.scrollTop)
  }

  render() {
    const list = this.listRef.current;
    console.log(list)

    return (
      <div ref={this.listRef} id="10" >
        {
          this.props.list.map((item) => <li key={item.id}>{item.name}</li>)
        }
      </div>
    );
  }
}

class ScrollingListDemo extends React.Component{
  constructor(props) {
    super(props);

    this.state = {list: this.buildData(100)};

  }

  handleClick = () => {
    this.setState((state) => {
      return {list: this.buildData(state.list.length + 10)}
    })
  };

  buildData = (length = 0) => {
    let list = []
    for(let i=0; i < length; i++) {
      list.push({id: i, name: 'jack ' + i})
    }
    return list
  }

  render() {
    return (
      <div>
        <button style={{position: "fixed", top: 0, right: 0}}
          onClick={this.handleClick}
        >增加list</button>
        <ScrollingList list={this.state.list}></ScrollingList>
      </div>
    );
  }
}


export default ScrollingListDemo