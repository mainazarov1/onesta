import gql from 'graphql-tag';

const NEWS_QUERY = gql`
    query News{
        products {
            id
            name
            description
            info
            data
            img{
                url
            }
        }
    }
`
export default NEWS_QUERY;