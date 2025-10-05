export const onRowClick = (
  property,
  setShowSpecs,
  setSelectedPropertie,
  showSpecs
) => {
  setSelectedPropertie(property);

  setShowSpecs(!showSpecs);
  console.log(property);
};
