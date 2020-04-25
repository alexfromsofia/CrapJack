import { REQUEST_METHODS } from '../utils/constants';

/**
 * @param {String} method either GET,PUT,POST,DELETE
 * @param {String} endpoint the url from which to fetch from
 * @param {Object} body request body (for PUT and POST)
 */
export const generateRequest = async ({
  method = REQUEST_METHODS.GET,
  endpoint = '',
  body = undefined
}) => {
  try {
    const response = await fetch(
      // Hardcoding for the purpose of the task. Usually will be a environment variable or an argument.
      `https://deckofcardsapi.com/api/deck/${endpoint}`,
      {
        method,
        body: JSON.stringify(body) //TODO: maybe delete this part?
      }
    );

    const { status, ok } = response;

    if (ok) {
      return response.json();
    }

    if (status >= 400) {
      console.log(response);
    }
  } catch (error) {
    console.error(error);

    return error;
  }
};

export const getNewShuffledDeck = async () => {
  try {
    const deck = await generateRequest({
      endpoint: 'new/shuffle/?deck_count=1'
    });

    if (!deck.success) {
      return { error: 'Error getting deck.' };
    }

    return deck;
  } catch (error) {
    console.log(error);
  }
};

export const drawCards = async (deckId = null, numOfCards = 1) => {
  if (!deckId) {
    return console.log('Please provide deckId');
  }

  const cards = await generateRequest({
    endpoint: `${deckId}/?count=${numOfCards}`
  });
  console.log(cards);
};
