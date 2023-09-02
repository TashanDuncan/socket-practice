import { socket } from "../socket";

interface ConnectionStateProps {
  isConnected: boolean;
}

export const ConnectionState = ({ isConnected }: ConnectionStateProps) => {
  return (
    <>
      <p>Connection State:{" " + isConnected}</p>
      <p>socket ID: {socket.id}</p>
    </>
  );
};
