<script>
const sections = [["STACKS", crown, 'stacks'],
["SKILLS", axes, 'skills'],
["ABOUT PORTFOLIO", list, 'about'],
["CONTACTS", helmet, 'contacts']
];
</script>
<div id="menu">
    
</div>
<style>
    
</style>

const Menu = styled.div`
    display:flex;
    align-items:center;
    width: 100%;
    height: 48px;
    color:#02fba6;
    font-family: "KreepTown";
    font-size:34px;
    text-align:center;
    margin-top:3px;
    background-color: black;
    opacity:0.75;

    & span {
        margin: 0 auto;
    }
`;

const Icon = styled.div`
    width: 44px;
    height:44px;
    border: #05749e 2px solid;
    border-radius:50%;
    background:url(${props => props.bg}) no-repeat;
    background-position: center;
`;
<!-- export default (): ReactElement => {
    let [settings, setSettings] = useContext(ContextSettings);
    let nav = sections.map(([title, icon, category]) => {
        return (
            <Menu key={shortid.generate()}
                onClick={() => {
                    setSettings({ category: category, go: true, close: false });
                }}>
                <Icon bg={icon} />
                <span>{title}</span>
            </Menu>)
    });
    return (<>{nav}</>);
} -->