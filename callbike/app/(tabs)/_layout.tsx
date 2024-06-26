// import { Tabs } from 'expo-router';
// import React from 'react';

// import { TabBarIcon } from '@/components/navigation/TabBarIcon';
// import { Colors } from '@/constants/Colors';
// import { useColorScheme } from '@/hooks/useColorScheme';

// import { useAuth } from '../../components/loginScreen/actions/authContext';


// export default function TabLayout() {
//   const colorScheme = useColorScheme();

//   const { isLoggedIn } = useAuth();

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//         headerShown: false,
//       }}>
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="explore"
//         options={{
//           title: 'Explore',
//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
//           ),
//         }}
//       />

//       {isLoggedIn ? (
//         <Tabs.Screen
//           name="profile"
//           options={{
//             title: 'Profile',
//             tabBarIcon: ({ color, focused }) => (
//               <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
//             ),
//           }}
//         />
//       ) : (
//         <Tabs.Screen
//           name="login"
//           options={{
//             title: 'Login',
//             tabBarIcon: ({ color, focused }) => (
//               <TabBarIcon name={focused ? 'log-in' : 'log-in-outline'} color={color} />
//             ),
//           }}
//         />
//       )}

//     </Tabs>
//   );
// }

// import React from 'react';
// import { Tabs } from 'expo-router';
// import { TabBarIcon } from '@/components/navigation/TabBarIcon';
// import { Colors } from '@/constants/Colors';
// import { useColorScheme } from '@/hooks/useColorScheme';
// import { useSelector } from 'react-redux';

// export default function TabLayout() {
//   const colorScheme = useColorScheme();


//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//         headerShown: false,
//       }}>
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="explore"
//         options={{
//           title: 'Explore',
//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
//           ),
//         }}
//       />
//         {/* <Tabs.Screen
//           name="profile"
//           options={{
//             title: 'Profile',
//           tabBarIcon: ({ color, focused }) => (
//               <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
//             ),
//           }}
//         /> */}
//         <Tabs.Screen
//           name="login"
//           options={{
//             title: 'Login',
//             tabBarIcon: ({ color, focused }) => (
//               <TabBarIcon name={focused ? 'log-in' : 'log-in-outline'} color={color} />
//             ),
//           }}
//         />

//     </Tabs>
//   );
// }


// import React from 'react';
// import { Tabs } from 'expo-router';
// import { TabBarIcon } from '@/components/navigation/TabBarIcon';
// import { Colors } from '@/constants/Colors';
// import { useColorScheme } from '@/hooks/useColorScheme';
// import { useSelector } from 'react-redux';

// export default function TabLayout() {
//   const colorScheme = useColorScheme();
//   const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//         headerShown: false,
//       }}>
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="explore"
//         options={{
//           title: 'Explore',
//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
//           ),
//         }}
//       />
//       {isAuthenticated ? (
//         <Tabs.Screen
//           name="profile"
//           options={{
//             title: 'Profile',
//             tabBarIcon: ({ color, focused }) => (
//               <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
//             ),
//           }}
//         />
//       ) : (
//         <Tabs.Screen
//           name="login"
//           options={{
//             title: 'Login',
//             tabBarIcon: ({ color, focused }) => (
//               <TabBarIcon name={focused ? 'log-in' : 'log-in-outline'} color={color} />
//             ),
//           }}
//         />
//       )}
//     </Tabs>
//   );
// }


// (tabs)/_layout.tsx
// import React from 'react';
// import { Tabs } from 'expo-router';
// import { TabBarIcon } from '@/components/navigation/TabBarIcon';
// import { Colors } from '@/constants/Colors';
// import { useColorScheme } from '@/hooks/useColorScheme';
// import { useSelector } from 'react-redux';

// interface RootState {
//   auth: {
//     isAuthenticated: boolean;
//   };
// }

// export default function TabLayout() {
//   const colorScheme = useColorScheme();
//   const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated); // Sử dụng kiểu tạm cho RootState

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//         headerShown: false,
//       }}>
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="explore"
//         options={{
//           title: 'Explore',
//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
//           ),
//         }}
//       />
//       {isAuthenticated ? (
//         <Tabs.Screen
//           name="profile"
//           options={{
//             title: 'Profile',
//             tabBarIcon: ({ color, focused }) => (
//               <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
//             ),
//           }}
//         />
//       ) : (
//         <Tabs.Screen
//           name="login"
//           options={{
//             title: 'Login',
//             tabBarIcon: ({ color, focused }) => (
//               <TabBarIcon name={focused ? 'log-in' : 'log-in-outline'} color={color} />
//             ),
//           }}
//         />
//       )}
//     </Tabs>
//   );
// }


// import React from 'react';
// import { Tabs } from 'expo-router';

// import { TabBarIcon } from '@/components/navigation/TabBarIcon';
// import { Colors } from '@/constants/Colors';
// import { useColorScheme } from '@/hooks/useColorScheme';


// export default function TabLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//         headerShown: false,
//       }}
//     >
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="explore"
//         options={{
//           title: 'Explore',
//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="login"
//         options={{
//           title: 'Login',
//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon name={focused ? 'log-in' : 'log-in-outline'} color={color} />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }



import React from 'react';
import { Tabs } from 'expo-router';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useSelector } from 'react-redux';

interface RootState {
  auth: {
    isAuthenticated: false;
  };
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated); 

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      {isAuthenticated ? (
        <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      ) : (
        <Tabs.Screen
          name="login"
          options={{
            title: 'Login',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'log-in' : 'log-in-outline'} color={color} />
            ),
          }}
        />
      )}
    </Tabs>
  );
}