function Skill(){
    const skills =  [
        {imageFilePath : 'src/assets/img/javascript.svg', text : 'JavaScript'},   
        {imageFilePath : 'src/assets/img/typescript.svg', text : 'Typescript'},   
        {imageFilePath : 'src/assets/img/java.svg', text : 'Java'},   
        {imageFilePath : 'src/assets/img/nodejs.svg', text : 'NodeJs'},   
        {imageFilePath : 'src/assets/img/express.svg', text : 'ExpressJs'},   
        {imageFilePath : 'src/assets/img/mysql.svg', text : 'MySql'},   
        {imageFilePath : 'src/assets/img/pgsql.svg', text : 'PostgreSql'},   
        {imageFilePath : 'src/assets/img/angular.svg', text : 'Angular'},   
        {imageFilePath : 'src/assets/img/react.svg', text : 'React'},   
        {imageFilePath : 'src/assets/img/git.svg', text : 'Git'},   
        {imageFilePath : 'src/assets/img/ubuntu.svg', text : 'linux'}   
    ]

    const skillCount = skills.length;

    const rows = 4;
    const skillPerRow = skillCount/rows;
    const modifiedSkillSet = [];
    
    for(let no =0,ind=0;ind<skillCount;no++){
        const arr = [];
        for(let col=0;col < (no%2===0 ? skillPerRow-1 : skillPerRow) && ind<skillCount;ind++,col++){
            arr.push(skills[ind]);
        }
        modifiedSkillSet.push(arr);
    }

    return (
        <section>
            <div className="skill-header">
                <h1>Skill : Upskill</h1>
            </div>
            <div className="skill-wrapper">
                {
                    modifiedSkillSet.map((items,i)=> (
                        <div className="skill-row" key={i}>
                            {
                                items.map((item,j)=>(
                                    <div key={i+j}>
                                        <img src={item.imageFilePath} />
                                        <span> {item.text} </span>   
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Skill;