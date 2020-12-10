import gql from 'graphql-tag';

const BLOG_QUERY = gql`
    query Blogs{
        blogs {
            id
            name
            info
            img{
                url
            }
        }
    }
`
export default BLOG_QUERY;