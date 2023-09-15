import React, { useContext } from "react";
import {Routes, Route, Navigate} from 'react-router-dom';
import { authRoutes, publickRoutes } from "../routes";
import { LOGIN_ROUTE} from "../utils/consts";
import { Context } from "..";


const AppRouter = () => {
    const {user} = useContext(Context);

    return(
		<Routes>
            {user.isAuth && authRoutes.map(({path, component}) =>
                <Route key={path} path={path} element={component} exact/>
            )}

            {publickRoutes.map(({path, component}) =>
                <Route key={path} path={path} element={component} exact/>
            )}
            <Route path="*" element={<Navigate to={LOGIN_ROUTE} replace/> }/>
        </Routes>
    );
};

export default AppRouter;