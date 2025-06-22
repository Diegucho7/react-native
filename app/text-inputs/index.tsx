import {View, Text, TextInput, Animated, KeyboardAvoidingView, Platform} from 'react-native';
import ThemedView from "@/presentation/shared/ThemedView";
import {useState} from "react";
import ThemedCard from "@/presentation/shared/ThemedCard";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedTextInput from "@/presentation/shared/ThemedTextInput";
import ScrollView = Animated.ScrollView;


const isIOS = Platform.OS === 'ios';

const TextInputsScreen = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: ''
    });

    return (

        <KeyboardAvoidingView
        behavior = { isIOS ? 'height' : undefined }
        >

        <ScrollView>



      <ThemedView margin>

          <ThemedCard className="mb-5">

          <ThemedTextInput

              placeholder="Ingrese el nombre completo"
              autoCapitalize={'words'}
              autoCorrect={false}
            onChangeText={(text) => setForm({ ...form, name: text })}
          />
          </ThemedCard>
          <ThemedCard className="mb-5">

          <ThemedTextInput
              placeholder="Ingrese el Email"
              keyboardType='email-address'
              autoCorrect={false}
            onChangeText={(text) => setForm({ ...form, email: text })}
          />
          </ThemedCard>
          <ThemedCard className="mb-5"
            style = {{
                marginBottom: isIOS ? 100 : 10 ,
            }}
          >

          <ThemedTextInput
              keyboardType='numeric'
              autoCorrect={false}
              placeholder="Ingrese el telefono"
            onChangeText={(text) => setForm({ ...form, phone: text })}
          />
          </ThemedCard>


          <ThemedCard>
              <ThemedText>
                  {JSON.stringify(form, null, 2)}
              </ThemedText>
          </ThemedCard>
      </ThemedView>
        </ScrollView>
        </KeyboardAvoidingView>

  );
};
export default TextInputsScreen;
