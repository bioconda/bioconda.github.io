.. title:: Package Recipe 'perl-xml-simple'
.. highlight: bash


perl-xml-simple
===============

.. conda:recipe:: perl-xml-simple
   :replaces_section_title:

   An API for simple XML files

   :homepage: http://metacpan.org/pod/XML-Simple
   :license: perl_5
   :recipe: /`perl-xml-simple <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-simple>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-simple/meta.yaml>`_

   


.. conda:package:: perl-xml-simple

   |downloads_perl-xml-simple| |docker_perl-xml-simple|

   :versions: 2.25, 2.22

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-xml-namespacesupport`  :conda:package:`perl-xml-sax`  :conda:package:`perl-xml-sax-expat`  

   :required~by: |required_by_perl-xml-simple|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-xml-simple

   and update with::

      conda update perl-xml-simple

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-xml-simple


.. |required_by_perl-xml-simple| conda:required_by:: perl-xml-simple
.. |downloads_perl-xml-simple| image:: https://img.shields.io/conda/dn/bioconda/perl-xml-simple.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-xml-simple| image:: https://quay.io/repository/biocontainers/perl-xml-simple/status
   :target: https://quay.io/repository/biocontainers/perl-xml-simple







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-xml-simple/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-xml-simple/README.html

