import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { TReduxState } from 'reducers';
import actions from 'actions';
import { getDetails } from 'selectors';
import * as s from './styled';

interface TOwnProps {
    id: number;
};

interface TConnectedProps {
    details: any;
}

const Details: React.FunctionComponent<TOwnProps & TConnectedProps> = ({ id, details }) => {
    useEffect(() => {
        actions.getDetails(id);
    }, [id])

    if(!details) {
        return null;
    }

    return (
        <s.Container>
            <s.Name>
                {details.name}
                <s.AddToFavorite onClick={() => actions.addToFavorite({...details, id})}/>
            </s.Name>

            <s.BIO>
                <div>height: {details.height}</div>
                <div>mass: {details.mass}</div>
                <div>hair color: {details.hair_color}</div>
                <div>skin color: {details.skin_color}</div>
                <div>eye color: {details.eye_color}</div>
                <div>birth year: {details.birth_year}</div>
                <div>gender: {details.gender}</div>
            </s.BIO>
            <s.RestBlock>
                {details.films?.length > 0 &&
                <s.Category>
                    <s.CategoryHeader>
                        Films
                    </s.CategoryHeader>
                    <s.Data>
                        {details.films.map((item: any, i: number) => (
                            <div key={i}>{item}</div>
                        ))}
                    </s.Data>
                </s.Category>
                }

                {details.species?.length > 0 &&
                <s.Category>
                    <s.CategoryHeader>
                        Species
                    </s.CategoryHeader>
                    <s.Data>
                        {details.species.map((item: any, i: number) => (
                            <div key={i}>{item}</div>
                        ))}
                    </s.Data>
                </s.Category>
                }

                {details.starships?.length > 0 &&
                <s.Category>
                    <s.CategoryHeader>
                        Starships
                    </s.CategoryHeader>
                    <s.Data>
                        {details.starships.map((item: any, i: number) => (
                            <div key={i}>{item}</div>
                        ))}
                    </s.Data>
                </s.Category>
                }

                {details.vehicles?.length > 0 &&
                <s.Category>
                    <s.CategoryHeader>
                        Vehicles
                    </s.CategoryHeader>
                    <s.Data>
                        {details.vehicles.map((item: any, i: number) => (
                            <div key={i}>{item}</div>
                        ))}
                    </s.Data>
                </s.Category>
                }
            </s.RestBlock>
        </s.Container>
    );
};

export default connect((state: TReduxState) => ({
    details: getDetails(state),
}))(Details);