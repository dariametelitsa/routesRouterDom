import { adidasArr, AdidasItem } from "./Adidas";
import { useParams } from "react-router-dom";
import styles from './styles.module.css';
import { pumaArr, PumaItem } from "./Puma";

type SneakersType = {
    [key: string]: AdidasItem[] | PumaItem[]
};

export const sneakers: SneakersType = {
    adidas: adidasArr,
    puma: pumaArr,
};

export const Model = () => {
    const {company, id} = useParams<{company: string, id: string}>();

    const data = company ? sneakers[company].find(el => el.id === id)
        : null;
    return (
        (data) ? (<div className={styles.model}>
                <dl>
                    <dt>Model</dt>
                    <dd>{data.model}</dd>

                    <dt>collection</dt>
                    <dd>{data.collection}</dd>

                    <dt>Price</dt>
                    <dd>{data.price}</dd>
                </dl>
                <img src={data.picture} alt={data.model}/>
            </div>) :
            (<div>Error. There is no such model</div>)
    )

};