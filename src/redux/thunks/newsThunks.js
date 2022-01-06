import axios from 'axios';
import { setLoadingFalseAction, setLoadingTrueAction } from '../actions/appActions';
import { setNewsListAction } from '../actions/newsActions';

export const getNewsThunk = () => async (dispatch, getState) => {
    try {
        dispatch(setLoadingTrueAction());
        const response = await axios.get('https://bing-news-search1.p.rapidapi.com/news', {
            params: { safeSearch: 'Off', textFormat: 'Raw' },
            headers: {
                'x-bingapis-sdk': 'true',
                'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
                'x-rapidapi-key': '3a04793796msha81966c703afc51p118b65jsn001f902eb8c9'
            }
        });
        dispatch(setNewsListAction(response.data.value));
        console.log(response.data.value)

    } catch (error) {
        console.log(error);
    } finally {
        dispatch(setLoadingFalseAction());
    }
}