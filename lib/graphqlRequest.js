const url = "https://xdr.veganblessing.com/graphql";
const headers = { 'Content-Type': 'application/json' };
export async function graphqlRequest(query) {

    const res = await fetch(url, {
        headers,
        method: 'POST',
        body: JSON.stringify({query})
    });

    const resJson = await res.json();
    return resJson;

}

export async function graphqlRequestSingle(query) {

    const res = await fetch(url, {
        headers,
        method: 'POST',
        body: JSON.stringify(query)
    });

    const resJson = await res.json();
    return resJson;

}
