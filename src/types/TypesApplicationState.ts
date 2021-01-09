import ToolsEnum from 'enums/ToolsEnum';

interface TypesApplicationState {
  title: {
    title: string;
  };
  selectedTool: {
    tool: ToolsEnum;
  };
  toolSettings: {
    brushSize: number;
  };
}

export default TypesApplicationState;
