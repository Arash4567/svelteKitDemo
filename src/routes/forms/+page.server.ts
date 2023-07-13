export const actions = {
  default: async (event) => {
    const formData = Object.fromEntries(await event.request.formData());

    console.log(formData);
  }
};
