import useViewer from "../../hooks/useViewer";

const Views = ({id}) => {

    useViewer({id});

    return (<h1>views</h1>  );
}
 
export default Views;