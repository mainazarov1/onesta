import gql from 'graphql-tag';

const CATEGORY_QUERY = gql`
    query Categories {
        categories{
            id
            name
            photo{
                url
            }
          }
    }
`

export default CATEGORY_QUERY;