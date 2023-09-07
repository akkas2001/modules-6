const express = require("express");
const Router = express.Router();
const blogControllers = require("./src/controllers/productControllersblogControllers");
const blogDetailsControllers = require("./src/controllers/blogDetailsControllers");
const commentControllers = require("./src/controllers/commentControllers");
const messageControllers = require("./src/controllers/messageControllers");
const productControllers = require("./src/controllers/productControllers");
const profitControllers = require("./src/controllers/profitControllers");
const projectControllers = require("./src/controllers/projectControllers");
const protfolioControllers = require("./src/controllers/profitControllers");
const serviceControllers = require("./src/controllers/serviceControllers");
const tittleControllers = require("./src/controllers/tittleControllers");
const blogDetailsControllers = require("./src/controllers/blogDetailsControllers");

//////blogDetailsControllers
Router.get("/blogDetailsControllers",blogDetailsControllers);
Router.get("/blogDetailsControllers1",blogDetailsControllers);
Router.get("/blogDetailsControllers2",blogDetailsControllers);
Router.get("/blogDetailsControllers3",blogDetailsControllers);
Router.get("/blogDetailsControllers4",blogDetailsControllers);


//////tittleControllers
Router.get("/tittleControllers",tittleControllers);
Router.get("/tittleControllers1",tittleControllers);
Router.get("/tittleControllers2",tittleControllers);
Router.get("/tittleControllers3",tittleControllers);
Router.get("/tittleControllers4",tittleControllers);
/////serviceControllers
Router.get("/serviceControllers",serviceControllers);
Router.get("/serviceControllers1",serviceControllers);
Router.get("/serviceControllers2",serviceControllers);
Router.get("/serviceControllers3",serviceControllers);
Router.get("/serviceControllers4",serviceControllers);



//////protfolioControllers
Router.get("/protfolioControllers",protfolioControllers);
Router.get("/protfolioControllers1",protfolioControllers);
Router.get("/protfolioControllers2",protfolioControllers);
Router.get("/protfolioControllers3",protfolioControllers);
Router.get("/protfolioControllers4",protfolioControllers);



/////projectControllers
Router.get("/projectControllers",projectControllers);
Router.get("/projectControllers1",projectControllers);
Router.get("/projectControllers2",projectControllers);
Router.get("/projectControllers3",projectControllers);
Router.get("/projectControllers4",projectControllers);


/////profitControllers
Router.get("/profitControllers",profitControllers);
Router.get("/profitControllers1",profitControllers);
Router.get("/profitControllers2",profitControllers);
Router.get("/profitControllers3",profitControllers);
Router.get("/profitControllers4",profitControllers);


/////productControllers
Router.get("/productControllers",productControllers);
Router.get("/productControllers1",productControllers);
Router.get("/productControllers2",productControllers);
Router.get("/productControllers3",productControllers);
Router.get("/productControllers4",productControllers);


/////messageControllers
Router.get("/messageControllers",messageControllers);
Router.get("/messageControllers1",messageControllers);
Router.get("/messageControllers2",messageControllers);
Router.get("/messageControllers3",messageControllers);
Router.get("/messageControllers4",messageControllers);


/////commentControllers
Router.get("/commentControllers",commentControllers);
Router.get("/commentControllers1",commentControllers);
Router.get("/commentControllers2",commentControllers);
Router.get("/commentControllers3",commentControllers);
Router.get("/commentControllers4",commentControllers);


/////blogControllers
Router.use("/blogControllers",blogControllers);
Router.use("/blogControllers1",blogControllers);
Router.use("/blogControllers2",blogControllers);
Router.use("/blogControllers3",blogControllers);
Router.use("/blogControllers4",blogControllers);