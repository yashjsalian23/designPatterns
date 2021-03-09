// Here only one object can be instantized
// used in global scope

const Singleton = (function(){
    let pManager;

    function processManager(){
        this.numProcess = 0;
    }

    function createProcessManager(){
        pManager = new processManager();
        return pManager;
    }

    return {
        getProcessManager: () => {
            if(!pManager){ 
                pManager = createProcessManager();
            }
            return pManager;
        }
    }
})();

const singleton = Singleton.getProcessManager();
const singleton2 = Singleton.getProcessManager();

console.log(singleton === singleton2);