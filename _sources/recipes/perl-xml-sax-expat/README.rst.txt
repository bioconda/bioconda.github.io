.. title:: Package Recipe 'perl-xml-sax-expat'
.. highlight: bash


perl-xml-sax-expat
==================

.. conda:recipe:: perl-xml-sax-expat
   :replaces_section_title:

   SAX Driver for Expat

   :homepage: http://metacpan.org/pod/XML-SAX-Expat
   :license: perl_5
   :recipe: /`perl-xml-sax-expat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-sax-expat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-sax-expat/meta.yaml>`_

   


.. conda:package:: perl-xml-sax-expat

   |downloads_perl-xml-sax-expat| |docker_perl-xml-sax-expat|

   :versions: 0.51

   :depends: :conda:package:`perl-threaded`  :conda:package:`perl-xml-namespacesupport`  :conda:package:`perl-xml-parser`  :conda:package:`perl-xml-sax`  :conda:package:`perl-xml-sax-base`  

   :required~by: |required_by_perl-xml-sax-expat|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-xml-sax-expat

   and update with::

      conda update perl-xml-sax-expat

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-xml-sax-expat


.. |required_by_perl-xml-sax-expat| conda:required_by:: perl-xml-sax-expat
.. |downloads_perl-xml-sax-expat| image:: https://img.shields.io/conda/dn/bioconda/perl-xml-sax-expat.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-xml-sax-expat| image:: https://quay.io/repository/biocontainers/perl-xml-sax-expat/status
   :target: https://quay.io/repository/biocontainers/perl-xml-sax-expat







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-xml-sax-expat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-xml-sax-expat/README.html

