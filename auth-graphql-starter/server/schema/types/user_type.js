const grpahql = require('graphql');
const {
  GraphQLObjectType, GraphQLString, GraphQLID
} = grpahql;

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: {
    id: { type: GraphQLID },
    email: { type: GraphQLString }
  }
});

module.exports = UserType;