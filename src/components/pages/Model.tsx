import { adidasArr, AdidasItem } from "./Adidas";
import { useParams } from "react-router-dom";
import styles from './styles.module.css';
import { pumaArr, PumaItem } from "./Puma";

type SneakersType = {
    [key: string]: AdidasItem | PumaItem
};

export const sneakers = {
    'adidas': adidasArr,
    'puma': pumaArr,
};


export const Model = () => {
    //const params = useParams();
    const {model, id} = useParams();

    // let models;
    // if (model) {
    //     models = sneakers[model];
    // }

    const data = adidasArr.find(el => el.id === id);

    return (
        (model) ? (<div className={styles.model}>
                <dl>
                    <dt>Model</dt>
                    <dd>{data.model}</dd>

                    <dt>collection</dt>
                    <dd>{data.collection}</dd>

                    <dt>Price</dt>
                    <dd>{data.price}</dd>
                </dl>
                <img src={data.picture}/>
            </div>) :
            (<div>Error. There is no such model</div>)
    )
        ;
};