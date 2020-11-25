import React from 'react';
import { Spinner } from '@class101/ui';
import * as G from  "../../../assets/style/GlobalStyle";

const Loading = () => {
    const { main } = "#0f4c81";

	return (
		<G.Loading>
			<Spinner size={100} backgroundColor={main} />
		</G.Loading>
	);
};

export default Loading;