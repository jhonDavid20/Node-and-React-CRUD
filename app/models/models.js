const { sequileze, Sequilize } = require(".");

module.exports = (sequilize, Sequilize) => {
    const Model = sequilize.define("tutorial", {
        title: {
            type: Sequilize.STRING
        },
        description: {
             type: Sequilize.STRING
        },
        published: {
            type: sequileze.BOOLEAN
        }
    });

    return Model;
};