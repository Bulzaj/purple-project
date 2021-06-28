import { useDispatch } from "react-redux";
import BarTab from "../components/bar/bar-tab/bar-tab";
import { setCanvas } from "../store/actions";

import VisibilityOffOutlinedIcon from "@material-ui/icons/VisibilityOffOutlined";

const useLayerTabsDrawer = () => {
  const dispatch = useDispatch();

  //TODO:click on tab should stretch and center group element
  const onTabClickHandler = (e, layerId, isEmpty) => {
    console.log(isEmpty);
    if (isEmpty) return;
    const bBox = document.getElementById(layerId).getBBox();
    dispatch(setCanvas({ x: -bBox.x, y: -bBox.y }, 1));
    console.log(bBox);
  };

  const renderLayerTabs = (layers) => {
    return layers.map((layer) => {
      return (
        <BarTab
          key={layer.id}
          label={layer.name}
          btnIcon={layer.items.length && <VisibilityOffOutlinedIcon />}
          disable={!layer.items.length}
          onClickHandler={(e) =>
            onTabClickHandler(e, layer.id, layer.items.length === 0)
          }
        />
      );
    });
  };

  return renderLayerTabs;
};
export default useLayerTabsDrawer;
