const { useContext } = require("react");
const { default: DispatchContext } = require("../Contect/DispatchContext");

function useDispatchContext(){
    return useContext(DispatchContext)
}

export default useDispatchContext;