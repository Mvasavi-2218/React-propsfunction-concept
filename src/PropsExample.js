/*import React from "react"
class PropsExample extends React.Component{
	render(){
		console.log(this.Props)
		return(
			<div>
			<p>name:{this.Props.name}</p>
			<p>age:{this.Props.age}</p>
			</div>
			)
	}
}
export default PropsExample*/




import React from "react"
class PropsExample extends React.Component{
	render(){
		console.log(this.props)
		return(
			<div>
				<p>name:{this.props.name}</p>
				<p>age:{this.props.age}</p>
			</div>
		)
	}
}
export default PropsExample
