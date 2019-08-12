from django.test import TestCase
from django.urls import resolve
from startpage.views import homepage
from django.http import HttpRequest

class MyTestCase ( TestCase ):
    '''мои модульные тесты домашней страницы'''

    def test_home_page ( self ):
        '''тест: корневой URL преобразуется в представление домашней страницы'''
        found = resolve( '/' )
        self.assertEqual( found.func, homepage )

    def test_home_page_return_correct_html ( self ):
        '''тест: домашняя страница возвращает корректный html'''
        request = HttpRequest()
        response = homepage( request )
        html = response.content.decode( 'utf8' )
        self.assertTrue( html.startswith( '<html>' ) )
        self.assertIn( '<title>To-Do page</title>', html )
        self.assertTrue( html.endswith( '</html>' ) )

