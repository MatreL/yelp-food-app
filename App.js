import {createAppContainer} from "react-navigation"
import {createStackNavigator} from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultScreen from "./src/screens/ResultScreen";

const navigator = createStackNavigator({
  Search: SearchScreen,
  Result: ResultScreen
},{
    initialRouteName: "Search",
    defaultNavigationOptions: {
        title: "Evens food",
        cardStyle: { backgroundColor: '#fff' }
    },
  }
);

export default createAppContainer(navigator);
