##Component LifeCylce

constructor(props) -> getDerivedStateFromProps(props,state) -> render() -> Render Child Components and Lifecylces -> componentDidMount()


##Component Update LifeCycle

getDerivedStateFromProps(props, state) -> shoulComponentUpdate(nextProps, nextState) -> render() -> Update Child Components Props
-> getSnapShotBeforeUpdate(prevProps, prevState) -> componentDidUpdate()

