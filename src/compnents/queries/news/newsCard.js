import gql from 'graphql-tag';

const NEWS_CARD_QUERIES = gql`
    query News($id: ID!) {
        product(id: $id) {
            id
            name
            description
            data
            img{
                url
            }
        }
    }
`;

export default NEWS_CARD_QUERIES;