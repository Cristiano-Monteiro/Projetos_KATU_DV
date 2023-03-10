import { KeyIndicatorsContainer } from './KeyIndicators.styles';

import BalanceIcon from '../../FmeiPageComponents/FmeiAssets/icons/balance_icon.svg';
import TredingUpIcon from '../../FmeiPageComponents/FmeiAssets/icons/trending_up_icon.svg';
import AccountBalanceIcon from '../../FmeiPageComponents/FmeiAssets/icons/account_balance_icon.svg';
import QueryStatsIcon from '../../FmeiPageComponents/FmeiAssets/icons/query_stats_icon.svg';
import LeaderboardIcon from '../../FmeiPageComponents/FmeiAssets/icons/leaderboard_icon.svg';
import UpdateIcon from '../../FmeiPageComponents/FmeiAssets/icons/update_icon.svg';

export function KeyIndicators(){
    return(
        <KeyIndicatorsContainer>
            <div className='organizerBox'>
                <section data-animation='toRight'>
                    <div className="logo_ilustrativa">
                        <img 
                            src={BalanceIcon} 
                            alt="logo ilustrativa"
                        />
                    </div>
                    <h2>Receita e saldo.</h2>
                    <p>
                        Saiba exatamente qual sua maior fonte de receita e a quantidade de seu saldo de maneira
                        categorizada.
                    </p>
                </section>
                <section data-animation='toRight'>
                    <div className="logo_ilustrativa">
                        <img 
                            src={TredingUpIcon} 
                            alt="logo ilustrativa"
                        />
                    </div>
                    <h2>Projeção de lucro.</h2>
                    <p>
                        Tenha a visão do futuro do seu negócio baseada em seus dados históricos.
                    </p>
                </section>
                <section data-animation='toRight'>
                    <div className="logo_ilustrativa">
                        <img 
                            src={AccountBalanceIcon} 
                            alt="logo ilustrativa"
                        />
                    </div>
                    <h2>Despesas.</h2>
                    <p>
                        Tenha a visão de quanto se foi gasto com cada tipo de despesa, taxas e afins.
                    </p>
                </section>
                <section data-animation='toRight'>
                    <div className="logo_ilustrativa">
                        <img 
                            src={QueryStatsIcon} 
                            alt="logo ilustrativa"
                        />
                    </div>
                    <h2>Resultados semestrais e trimestrais.</h2>
                    <p>
                        Tenha a visão temporal de como está seu negócio.
                    </p>
                </section>
                <section data-animation='toRight'>
                    <div className="logo_ilustrativa">
                        <img 
                            src={LeaderboardIcon} 
                            alt="logo ilustrativa"
                        />
                    </div>
                    <h2>Gráficos pensados para seu entendimento.</h2>
                    <p>
                        Gráficos interativos e que melhor representam suas informações.
                    </p>
                </section>
                <section data-animation='toRight'>
                    <div className="logo_ilustrativa">
                        <img 
                            src={UpdateIcon} 
                            alt="logo ilustrativa"
                        />
                    </div>
                    <h2>informações atualizadas com o mercado.</h2>
                    <p>
                        Constantes atualizações no aplicativo deixarão você sempre atualizado aos 
                        melhores indicadores financeiros.
                    </p>
                </section>
            </div>
        </KeyIndicatorsContainer>
    );
};
