import React , { useState } from "react";

const Loading = React.createContext({
  loading: true,
  setLoading: () => {},
});

export const LoadingProvider = (props) => {
    const [loading, setLoading] = useState(true)

    let context = {
        loading:loading,
        setLoading:setLoading
    }

    return(
        <Loading.Provider value={context}>
            {props.children}
        </Loading.Provider>
    )
}

export default Loading;
