const ProductClient = require("../product_client");
const ProductService = require("../product_service_no_di");

// mock 남용 사례
jest.mock("../product_client");

describe("ProductService", () => {
  const fetchItems = jest.fn(async () => [
    { item: "Milk", available: true },
    { item: "banana", available: false },
  ]);
  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    };
  });
  let productService;

  beforeEach(() => {
    productService = new ProductService();
    fetchItems.mockClear();
    ProductClient.mockClear();
  });

  it("should filter out only availble items", async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: "Milk", available: true }]);
  });

  it("test", async () => {
    const items = await productService.fetchAvailableItems();
    expect(fetchItems).toHaveBeenCalledTimes(1);
  });
});
