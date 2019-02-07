.. title:: Package Recipe 'perl-html-parser'
.. highlight: bash


perl-html-parser
================

.. conda:recipe:: perl-html-parser
   :replaces_section_title:

   HTML parser class

   :homepage: http://metacpan.org/pod/HTML::Parser
   :license: perl_5
   :recipe: /`perl-html-parser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-html-parser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-html-parser/meta.yaml>`_

   


.. conda:package:: perl-html-parser

   |downloads_perl-html-parser| |docker_perl-html-parser|

   :versions: 3.72

   :depends: :conda:package:`perl-html-tagset`  :conda:package:`perl-threaded`  

   :required~by: |required_by_perl-html-parser|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-html-parser

   and update with::

      conda update perl-html-parser

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-html-parser


.. |required_by_perl-html-parser| conda:required_by:: perl-html-parser
.. |downloads_perl-html-parser| image:: https://img.shields.io/conda/dn/bioconda/perl-html-parser.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-html-parser| image:: https://quay.io/repository/biocontainers/perl-html-parser/status
   :target: https://quay.io/repository/biocontainers/perl-html-parser







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-html-parser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-html-parser/README.html

