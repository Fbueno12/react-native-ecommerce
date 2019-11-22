import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main from "./pages/Main";

const Routes = createAppContainer(
    createStackNavigator(
        {
            Main
        },
        {
            headerLayoutPreset: "center",
            headerBackTitleVisible: false,
            defaultNavigationOptions: {
                headerStyle: {
                    backgroundColor: "#141419"
                },
                headerTintColor: "#FFF"
            }
        }
    )
);

export default Routes;
