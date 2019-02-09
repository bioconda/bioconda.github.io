.. title:: Package Recipe 'perl-inline-c'
.. highlight: bash


perl-inline-c
=============

.. conda:recipe:: perl-inline-c
   :replaces_section_title:

   C Language Support for Inline

   :homepage: https://github.com/ingydotnet/inline-c-pm
   :license: perl_5
   :recipe: /`perl-inline-c <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-inline-c>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-inline-c/meta.yaml>`_

   


.. conda:package:: perl-inline-c

   |downloads_perl-inline-c| |docker_perl-inline-c|

   :versions: 0.78, 0.76

   :depends: :conda:package:`clang_osx-64`  :conda:package:`make`  :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-extutils-makemaker`  :conda:package:`perl-inline`  :conda:package:`perl-parse-recdescent`  :conda:package:`perl-pegex`  

   :required~by: |required_by_perl-inline-c|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-inline-c

   and update with::

      conda update perl-inline-c

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-inline-c


.. |required_by_perl-inline-c| conda:required_by:: perl-inline-c
.. |downloads_perl-inline-c| image:: https://img.shields.io/conda/dn/bioconda/perl-inline-c.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-inline-c| image:: https://quay.io/repository/biocontainers/perl-inline-c/status
   :target: https://quay.io/repository/biocontainers/perl-inline-c







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-inline-c/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-inline-c/README.html

