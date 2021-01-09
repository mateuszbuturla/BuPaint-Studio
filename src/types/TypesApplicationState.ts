import ToolsEnum from 'enums/ToolsEnum';

interface TypesApplicationState {
  title: {
    title: string;
  };
  selectedTool: {
    tool: ToolsEnum;
  };
}

export default TypesApplicationState;
