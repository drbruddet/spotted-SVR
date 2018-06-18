import Spot from './spot';

export const resolvers = {
    Query: {
		async spots() {
			return await Spot.find();
		},

        async spot(_, { id }) {
            return await Spot.findById(id);
        }
	},

    Mutation: {
        async createSpot(_, { input }) {
            return await Spot.create(input);
        },

        async updateSpot(_, { id, input }) {
            return await Spot.findOneAndUpdate(id, input, { new: true });
        },

        async deleteSpot(_, { id }) {
            return await Spot.findByIdAndRemove(id);
        }
    }
}
