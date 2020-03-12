import React from "react"
import {connect} from "react-redux"
import {Delete} from "../../store/actions/learningCardsAction"

const DeleteButton =(props)=>{
    const {collectionName,DocId} = props
    const handleDelete=e=>{
        props.Delete(collectionName,DocId)
    }
    return(
        <button className="btn btn-outline-danger btn-lg btn-block mr-3 mb-2 mt-2"
        onClick={handleDelete}>
            Delete
        </button>
    )
}

const mapDispatchToProps=(dispatch)=>{
    return{
        Delete: (collectionName,id)=>{
            dispatch(Delete(collectionName,id))
        }
    }
}

export default connect(null,mapDispatchToProps)(DeleteButton)