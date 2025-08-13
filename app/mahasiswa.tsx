// import { TouchableOpacity, View } from "react-native";
// import { router } from "expo-router";
// export default function MahasiswaPage() {
//   return (
//     <View style={{ flex: 1 }}>
//       <Text>Daftar Mahasiswa</Text>
//       {mahasiswa.map((mahasiswa, index) => {
//         return (
//           <TouchableOpacity
//             key={index}
//             onPress={() => {
//               // @ts-ignore
//               router.push("/mahasiswa/" + mahasiswa.nim);
//             }}
//             style={{
//               flexDirection: "row",
//               gap: 10,
//               borderTopWidth: 1,
//               borderBottomWidth: 1,
//               paddingVertical: 10,
//             }}
//           >
//             <Text
//               style={{
//                 width: "10%",
//                 borderRightWidth: 1,
//               }}
//             >
//               {mahasiswa.nama}
//             </Text>
//             <Text>{mahasiswa.nim}</Text>
//           </TouchableOpacity>
//         );
//       })}
//     </View>
//   );
// }
