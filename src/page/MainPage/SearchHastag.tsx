import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../component/MainPage/Navbar'
import FilterNavbar from '../../component/MainPage/Search/FilterNavbar'
import PostCardSearch from '../../component/MainPage/Search/PostCardSearch'
import SearchUserCard from '../../component/MainPage/SearchUserCard'
import { querySearch, querySearchHastag } from '../../lib/graphql/SelectQuery'
import { PostType, UserType } from '../../model/model'

const SearchHastag = () => {
    const { keyword } = useParams()
    const [limit, setLimit] = useState(100)
    const [offset, setOffset] = useState(0)
    const [filter, setFilter] = useState("")

    console.log(keyword);


    const { loading: loadingSearchUser, error: errorSearchUser, data: dataSearchUser, fetchMore, refetch: refectSearchData } = useQuery(querySearchHastag, {
        variables: { Keyword: keyword, Limit: limit, Offset: offset }
    })

    useEffect(() => {
        refectSearchData()
    }, [])

    if (loadingSearchUser) return
    if (errorSearchUser) console.log(errorSearchUser)
    
    console.log(dataSearchUser.SearchHastag)
    const dataPost = dataSearchUser.SearchHastag.Posts as Array<PostType>

    console.log(filter)

    return (
        <div style={{ backgroundColor: "rgb(238 , 238 , 238)", minHeight: "100vh" }}>
            <Navbar />
            <div className='search-container'>
                {
                    filter === "" ?
                        (
                            <>
                                {
                                    dataPost.map((postData, i) => {
                                        return (
                                            <div className='post-search-container'>
                                                {
                                                    i === 0 ?
                                                        (
                                                            <div className='post-search-container__title-container'>
                                                                <p className='title'>Posts</p>
                                                            </div>
                                                        )
                                                        :
                                                        (null)
                                                }
                                                <div className='post-search-container__content-container'>
                                                    <PostCardSearch postData={postData} key={i} index={i} />
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </>
                        )
                        :
                        (
                            <>
                                {
                                    dataPost.map((postData, i) => {
                                        return (
                                            <div className='post-search-container'>
                                                {
                                                    i === 0 ?
                                                        (
                                                            <div className='post-search-container__title-container'>
                                                                <p className='title'>Posts</p>
                                                            </div>
                                                        )
                                                        :
                                                        (null)
                                                }
                                                <div className='post-search-container__content-container'>
                                                    <PostCardSearch postData={postData} key={i} index={i} />
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </>
                        )
                }
            </div>
        </div>
    )
}

export default SearchHastag