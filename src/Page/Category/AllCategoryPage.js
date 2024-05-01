import React, { useEffect } from 'react'
import CategoryContainer from '../../Components/Category/CategoryContainer'
import Pagination from '../../Components/Uitily/Pagination'
import baseUrl from '../../Api/BaseURL'

const AllCategoryPage = () => {
    const get= async()=>{
const res= await baseUrl.get('/api/v1/categories')
console.log(res.data)
    }
    useEffect(() =>{
        get()
    },[])
    return (
        <div style={{minHeight:'670px'}}>
        
            <CategoryContainer />
            <Pagination />
        </div>
    )
}

export default AllCategoryPage
