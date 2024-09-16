import Controller from "./Controller.js"


class app{
    async play(){
        const controller = new Controller();
        controller.start();
    }
}

export default app;