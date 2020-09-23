import style from "./addStartup.module.css"

export default function AddStartup(){
    var startName,startCNPJ;
    return(
        <>
            <div className={style.form}>
                <form>
                    <h2>Cadastre Uma Start-Up</h2>  
                    <div className="form-startData">   
                        <br></br>
                        <label for="nameInput">Nome da empresa  </label>
                        <input className="nameInput" id="nameInput" type="text" placeholder="Nome da Startup"></input>  
                        <label for="cnpjInput">   CNPJ   </label>
                        <input className="cnpjInput" id="cnpjInput"  placeholder="CNPJ"></input><br></br>
                        <br></br>
                        <label for="typeInput">Ramo  </label>
                        <select className="typeOptions">
                            <option>Agro</option>
                            <option>Tech</option>
                            <option>ONG</option>
                        </select>
                                           
                    </div>
                    <div className="confirm">

                    </div>
                </form>
            </div>

        </>
    )
}