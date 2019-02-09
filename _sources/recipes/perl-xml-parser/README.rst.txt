.. title:: Package Recipe 'perl-xml-parser'
.. highlight: bash


perl-xml-parser
===============

.. conda:recipe:: perl-xml-parser
   :replaces_section_title:

   A perl module for parsing XML documents

   :homepage: http://metacpan.org/pod/XML::Parser
   :license: perl_5
   :recipe: /`perl-xml-parser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-parser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-parser/meta.yaml>`_

   


.. conda:package:: perl-xml-parser

   |downloads_perl-xml-parser| |docker_perl-xml-parser|

   :versions: 2.44

   :depends: :conda:package:`expat`  :conda:package:`libgcc`  :conda:package:`perl-threaded`  

   :required~by: |required_by_perl-xml-parser|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-xml-parser

   and update with::

      conda update perl-xml-parser

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-xml-parser


.. |required_by_perl-xml-parser| conda:required_by:: perl-xml-parser
.. |downloads_perl-xml-parser| image:: https://img.shields.io/conda/dn/bioconda/perl-xml-parser.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-xml-parser| image:: https://quay.io/repository/biocontainers/perl-xml-parser/status
   :target: https://quay.io/repository/biocontainers/perl-xml-parser







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-xml-parser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-xml-parser/README.html

