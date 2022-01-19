import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Main: undefined;
  Transactions: undefined;
  AddTransaction: undefined;
};

export type Props = NativeStackScreenProps<RootStackParamList>;
