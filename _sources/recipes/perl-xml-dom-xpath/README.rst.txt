.. title:: Package Recipe 'perl-xml-dom-xpath'
.. highlight: bash


perl-xml-dom-xpath
==================

.. conda:recipe:: perl-xml-dom-xpath
   :replaces_section_title:

   Perl extension to add XPath support to XML\:\:DOM\, using XML\:\:XPath engine

   :homepage: http://metacpan.org/pod/XML-DOM-XPath
   :license: unknown
   :recipe: /`perl-xml-dom-xpath <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-dom-xpath>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-dom-xpath/meta.yaml>`_

   


.. conda:package:: perl-xml-dom-xpath

   |downloads_perl-xml-dom-xpath| |docker_perl-xml-dom-xpath|

   :versions: 0.14

   :depends: :conda:package:`perl-threaded`  :conda:package:`perl-xml-dom`  :conda:package:`perl-xml-xpathengine`  

   :required~by: |required_by_perl-xml-dom-xpath|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-xml-dom-xpath

   and update with::

      conda update perl-xml-dom-xpath

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-xml-dom-xpath


.. |required_by_perl-xml-dom-xpath| conda:required_by:: perl-xml-dom-xpath
.. |downloads_perl-xml-dom-xpath| image:: https://img.shields.io/conda/dn/bioconda/perl-xml-dom-xpath.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-xml-dom-xpath| image:: https://quay.io/repository/biocontainers/perl-xml-dom-xpath/status
   :target: https://quay.io/repository/biocontainers/perl-xml-dom-xpath







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-xml-dom-xpath/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-xml-dom-xpath/README.html

