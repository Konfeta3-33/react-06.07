export const GET_CHATS_SUCCESS = "chats/GET_CHATS_SUCCESS"; // название экшена

export const getChatsSuccess = () => ({
  type: GET_CHATS_SUCCESS,
  payload: [
    {
      id: 4,
      to: "/chats/1",
      title: "Chat 1",
    },
    {
      id: 5,
      to: "/chats/2",
      title: "Chat 2",
    },
    {
      id: 6,
      to: "/chats/3",
      title: "Chat 3",
    },
  ],
});
