.. title:: Package Recipe 'perl-estscan2'
.. highlight: bash


perl-estscan2
=============

.. conda:recipe:: perl-estscan2/2.1
   :replaces_section_title:

   Detects coding regions in DNA sequences even if they are of low quality. ESTScan.pm contains the Perl part of the code that reads in the matrices file. The C code that does the actual computation is located in estscan.c.

   :homepage: http://estscan.sourceforge.net
   :license: open source
   :recipe: /`perl-estscan2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-estscan2>`_/`2.1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-estscan2/2.1>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-estscan2/2.1/meta.yaml>`_

   


.. conda:package:: perl-estscan2

   |downloads_perl-estscan2| |docker_perl-estscan2|

   :versions: 2.1

   :depends: :conda:package:`perl-btlib`  :conda:package:`perl-threaded`  

   :required~by: |required_by_perl-estscan2|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-estscan2

   and update with::

      conda update perl-estscan2

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-estscan2


.. |required_by_perl-estscan2| conda:required_by:: perl-estscan2
.. |downloads_perl-estscan2| image:: https://img.shields.io/conda/dn/bioconda/perl-estscan2.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-estscan2| image:: https://quay.io/repository/biocontainers/perl-estscan2/status
   :target: https://quay.io/repository/biocontainers/perl-estscan2







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-estscan2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-estscan2/README.html

