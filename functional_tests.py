from selenium import webdriver
import unittest

class NewTests ( unittest.TestCase ):
    '''мои тесты'''
    
    def setUp ( self ):
        '''запуск'''
        self.browser = webdriver.Firefox()

    def tearDown ( self ):
        '''завершение'''
        self.browser.quit()

    def test_start_server ( self ):
        '''тест: запуск локального сервера'''
        self.browser.get( 'http://localhost:8000' )

if __name__ == '__main__':
    unittest.main()

