const { useContext } = require("react");
const { AuthContext } = require("@context/AuthContext");

export const useAuth = () => useContext(AuthContext);
