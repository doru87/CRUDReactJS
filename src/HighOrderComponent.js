import React from 'react'
import { useHistory } from "react-router-dom";

export default function useHistoryHook(Component) {
    return function WrappedComponent(props) {
      const history = useHistory();
      return <Component {...props} useHistory={history} />;
    }
  }
 
