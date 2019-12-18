import { connect } from 'react-redux'
import { SVF } from '../action'
import buttonItem from '../component/button'
//maping state to props
const mapSToProps = (state, op) => ({
  active: op.filter === state.visFilter
})
//maping dispatch to props
const mapDToProps = (dispatch, op) => ({
  onClick: () => 
  dispatch(SVF(op.filter))
})

export default connect(
  mapSToProps,
  mapDToProps
)(buttonItem)
