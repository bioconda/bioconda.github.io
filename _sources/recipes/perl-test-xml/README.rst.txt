.. title:: Package Recipe 'perl-test-xml'
.. highlight: bash


perl-test-xml
=============

.. conda:recipe:: perl-test-xml
   :replaces_section_title:

   Compare XML in perl tests

   :homepage: http://metacpan.org/pod/Test-XML
   :license: perl_5
   :recipe: /`perl-test-xml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-xml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-xml/meta.yaml>`_

   


.. conda:package:: perl-test-xml

   |downloads_perl-test-xml| |docker_perl-test-xml|

   :versions: 0.08

   :depends: :conda:package:`perl-threaded`  :conda:package:`perl-xml-parser`  :conda:package:`perl-xml-sax`  :conda:package:`perl-xml-sax-writer`  :conda:package:`perl-xml-semanticdiff`  :conda:package:`perl-xml-twig`  :conda:package:`perl-xml-xpath`  

   :required~by: |required_by_perl-test-xml|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-xml

   and update with::

      conda update perl-test-xml

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-test-xml


.. |required_by_perl-test-xml| conda:required_by:: perl-test-xml
.. |downloads_perl-test-xml| image:: https://img.shields.io/conda/dn/bioconda/perl-test-xml.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-test-xml| image:: https://quay.io/repository/biocontainers/perl-test-xml/status
   :target: https://quay.io/repository/biocontainers/perl-test-xml







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-xml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-xml/README.html

