module.exports = {
    before: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: []
    },

    after: {
        all: [
            context => {
                //console.log('context Count-->', context.result.data.length);
                return context;
            }
        ],
        find: [],
        get: [],
        create: [
            // context => {
            //     context.result.data = context.result.data.map(item => {
            //         item.folio = item.folio + 10;
            //     });
            //     return context;
            // }
        ],
        update: [],
        patch: [],
        remove: []
    },

    error: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: []
    }
};
