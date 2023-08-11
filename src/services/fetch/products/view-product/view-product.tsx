import { urlServerLocalPostgres } from '~/services/util/server/server';

export async function fetchStoreProductsByDui(
  dui: string,
  tokenUser: string
): Promise<any> {
  const query = `
  query byDuiProduct($dui: String!) {
    byDuiProduct(dui: $dui) {
      dui
     
      name
      brand
      price
      description
      bullets
      gtin
     category {
      categoryName
    }
    subCategory {
      subCategoryName
    }
      images {
       url
      }
      basicFeatures {
    weight
    width
    height
    depth
  }
    }
  }
`;
  const variants = {
    dui,
  };

  try {
    const response = await fetch(`${urlServerLocalPostgres}/graphql`, {
      method: 'POST',
      headers: {
        Authorization: 'x-user-auth ' + tokenUser,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: query,
        variables: variants,
      }),
    });
    console.log(response);
    if (!response.ok) {
      throw new Error('Failed to fetch inventory products');
    }

    const data = await response.json();
    console.log(data);
    return data.data.byDuiProduct[0];
  } catch (error) {
    console.error('Error fetching inventory products:', error);
    throw error;
  }
}
