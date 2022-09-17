import { gql } from "@apollo/client";

export const querySearch = gql`
    query Search($Keyword:String! , $Limit:Int!, $Offset:Int!){
    Search(Keyword:$Keyword , Limit:$Limit , Offset:$Offset){
        Users{
            id
            email
            password
            isActive
            firstName
            lastName
            profileImageUrl
            backgroundImageUrl
            pronouns
            headline
            about
            city
            country
            profileLink
            Educations{
                id
                userId
                school
                degree
                fieldStudy
                grade
                activities
                description
                monthStartDate
                yearStartDate
                monthEndDate
                yearEndDate
            }
            Experiences{
                id
                userId
                title
                employmentType
                companyName
                country
                city
                isActive
                industry
                monthStartDate
                yearStartDate
                monthEndDate
                yearEndDate
            }
            Visits{
                userId
                visitId
            }
            Follows{
                userId
                followId
            }
            Connections{
                id
                user1{
                    id
                    headline
                    firstName
                    lastName
                    email
                    password
                }
                user2{
                    id
                    headline
                    firstName
                    lastName
                    email
                    password
                }
            }
            ConnectRequests{
                id
                fromUser{
                    id
                    headline
                    firstName
                    lastName
                    email
                    password
                }
                toUser{
                    id
                    headline
                    firstName
                    lastName
                    email
                    password
                }
            }
        }    
        Posts{
            id
            text
            photoUrl
            videoUrl
            Sender{
                id
                firstName
                lastName
                profileImageUrl
                Follows{
                    userId
                    followId
                }
            }
        } 
    }
}
`

export const querySearchHastag = gql`
    query SearchHastag($Keyword:String! , $Limit:Int!, $Offset:Int!){
    SearchHastag(Keyword:$Keyword , Limit:$Limit , Offset:$Offset){
        Posts{
            id
            text
            photoUrl
            videoUrl
            Sender{
                id
                firstName
                lastName
                profileImageUrl
                Follows{
                    userId
                    followId
                }
            }
        } 
    }
}
`

export const queryPosts = gql`
    query Posts($Limit:Int! , $Offset:Int!) {
    Posts(Limit:$Limit , Offset:$Offset){
        id
        text
        videoUrl
        photoUrl
        Sender{
            id
            firstName
            lastName
            profileImageUrl
            headline
            Follows{
                userId
                followId
            }
        }
        Likes{
            userId
            postId
        }
        Comments{
            id
            postId
            Commenter{
                firstName
                lastName
                profileImageUrl
                headline
            }
            comment
            Likes{
                id
                commentId
                User{
                    id
                    firstName
                    lastName
                }
            }
            Replies{
                id
            }
        }
    }
    }
`

export const queryCommentPost = gql`
    query postComments($Limit:Int! , $Offset:Int! , $postId:ID!){
        postComments(Limit:$Limit , Offset:$Offset , postId:$postId){
            id
            postId
            Commenter{
                firstName
                lastName
                profileImageUrl
                headline
            }
            comment
            Likes{
                id
                commentId
                User{
                    id
                    firstName
                    lastName
                }
            }
            Replies{
                id
            }
        }
    }
`

export const queryRepliedToComments = gql`
    query repliedToComments($Limit:Int! , $Offset:Int! , $commentId:ID!){
        repliedToComments(Limit:$Limit , Offset:$Offset , commentId:$commentId){
            id
            postId
            Commenter{
                firstName
                lastName
                profileImageUrl
                headline
            }
            comment
            Likes{
                id
                commentId
                User{
                    id
                    firstName
                    lastName
                }
            }
            Replies{
                id
            }
        }
    }
`

export const queryPostComment = gql`
    query postComment($id:ID!) {
        postComment(id:$id){
            id
            postId
            Commenter{
                id
                firstName
                lastName
                profileImageUrl
                headline
            }
            comment
            Likes{
                id
                commentId
                User{
                    id
                    firstName
                    lastName
                }
            }
            Replies{
                id
            }
        }
    }
`

export const queryUserSuggestion = gql`
    query UserSuggestion($userId:ID!){
    UserSuggestion(userId:$userId){
        id
        firstName
        lastName
        headline
        city
        country
        profileImageUrl
    }
}
`

export const queryHastags = gql`
    query hastags{
    Hastags{
        id
        hastag
    }
}
`

export const queryJobs = gql `
    query jobs {
    Jobs{
        id
        title
        companyName
        workplace
        city
        country
        employmentType
        description
    }
}
`

export const queryNotifications = gql `
    query Notifications($toUserId:ID!){
    userNotification(toUserId:$toUserId){
        id
        message
        fromUser{
            id
            firstName
            lastName
            profileImageUrl
        }
    }
}
`