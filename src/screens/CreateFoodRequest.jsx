import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Alert
} from 'react-native';

const CreateFoodRequest = () => {
  return (
    <ScrollView style={styles.container}>
        <View style={styles.content}>
            {/* organization details */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Organization Details</Text>

                <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>Organization Name</Text>
                    <TextInput
                        style={styles.input}
                        // value={}
                        // onChangeText={}
                        placeholder='Org name fetched'
                    />
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>Organization ID</Text>
                    <TextInput
                        style={styles.input}
                        // value={}
                        // onChangeText={}
                        placeholder='Org ID fetched'
                    />
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>Request Made By</Text>
                    <TextInput
                        style={styles.input}
                        // value={}
                        // onChangeText={}
                        placeholder='logged in user fetched'
                    />
                </View>
            </View>

            {/* Food request details */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Food Request Details</Text>
                <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>Food Item</Text>
                    <TextInput
                        style={styles.input}
                        // value={}
                        // onChangeText={}
                        placeholder='food items'
                    />
                {/* close button to clear selection */}

                </View>
                <View style={styles.inputGroup}>  {/* food item, amount - flexed display */}
                    <Text style={styles.inputLabel}>Amount</Text>
                    <TextInput
                        style={styles.input}
                        // value={}
                        // onChangeText={}
                        placeholder='food amount dropdown'
                    /> {/*change input type to dropdown */}
                </View>

                {/* insert add another item button */}

                <View style={styles.inputGroup}>  
                    <Text style={styles.inputLabel}>Required Before</Text>
                    <TextInput
                        style={styles.input}
                        // value={}
                        // onChangeText={}
                        placeholder='date'
                    /> {/*change input type to date */}
                </View>

                <View style={styles.inputGroup}>  
                    <Text style={styles.inputLabel}>Priority</Text>
                    <TextInput
                        style={styles.input}
                        // value={}
                        // onChangeText={}
                        placeholder='date'
                    /> {/*change input type to dropdown */}
                </View>
                <View style={styles.inputGroup}>  
                    <Text style={styles.inputLabel}>Available Pick-Up Date</Text>
                    <TextInput
                        style={styles.input}
                        // value={}
                        // onChangeText={}
                        placeholder='date'
                    /> {/*change input type to date */}
                </View>
                <View style={styles.inputGroup}>  
                    <Text style={styles.inputLabel}>Available Pick-Up Time</Text>
                    <TextInput
                        style={styles.input}
                        // value={}
                        // onChangeText={}
                        placeholder='date'
                    /> {/*change input type to time */}
                </View>
            </View> 

            {/* submit button */}
            <TouchableOpacity
                style={styles.submitButton}
                // onPress={}
            >
                <Text style={styles.submitButtonText}>Create Request</Text>
            </TouchableOpacity>

        </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        padding: 20,
    },
    section: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 20,
        marginBottom:20,
        shadowColor: '#000',
        shadowOffset:{
            width: 0,
            height:2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
    },
    inputGroup: {
        marginBottom: 15,
    },
    inputLabel: {
        fontSize: 14,
        fontWeight: '500',
        color: '#555',
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        padding: 10,
        fontSize: 14,
        backgroundColor: '#fff',
    },
    submitButton: {
        backgroundColor: '#106a25ff',
        paddingVertical: 12,
        paddingHorizontal:25,
        borderRadius:8,
        alignSelf: 'center',
        marginTop: 20,
    },
    submitButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
});


export default CreateFoodRequest;
