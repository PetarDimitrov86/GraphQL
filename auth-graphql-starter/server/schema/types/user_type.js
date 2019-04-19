const grpahql = require('graphql');
const {
  GraphQLObjectType, GraphQLString
} = grpahql;

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: {
    email: { type: GraphQLString }
  }
});

module.exports = UserType;