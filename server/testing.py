import unittest
import numpy as np
import pre_processing as pp
import tsa_brain as tsa
from tensorflow.keras.preprocessing.sequence import pad_sequences


class TestPreprocess(unittest.TestCase):

    def test_preprocess(self):
        # sample data
        tweets_arr = ['<p>This is a test tweet! https://example.com</p>']

        # expected output
        expected_output = ['this is a test tweet ']

        # pre-process the data
        actual_output = pp.clean_tweets(tweets_arr)

        # compare actual output with expected output
        self.assertListEqual(actual_output, expected_output)

    def test_padding(self):
        input = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],  [10, 11, 12, 13, 14,]]
        output_padded = pad_sequences(input, maxlen=150)
        
        self.assertEqual(len(output_padded[0]), 150)


    def test_convert_sentiments(self):
        # test input
        test_input = np.array([[0.8], [0.2], [0.6], [0.4], [0.9]]) 

        # expected output
        expected_output = {'pos': 3, 'neg': 2}

        # model output to sentiments
        senti_dict = tsa.convert_setiments(test_input)

        # Compare output with expected
        self.assertEqual(senti_dict, expected_output)

    
    
if __name__ == '__main__':
    unittest.main()