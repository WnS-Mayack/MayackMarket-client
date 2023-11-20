const load = async ({ locals }) => {
  const searchData = {
    searchText: "",
    location: "서울",
    minPrice: null,
    maxPrice: null
  };
  if (locals.user) {
    searchData.location = locals.user.location;
  }
  return { searchData };
};
export {
  load
};
