.. title:: Package Recipe 'perl-btlib'
.. highlight: bash


perl-btlib
==========

.. conda:recipe:: perl-btlib/0.19
   :replaces_section_title:

   Binary Search Tree library

   :homepage: https://sourceforge.net/projects/estscan/files/BTLib
   :license: open source
   :recipe: /`perl-btlib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-btlib>`_/`0.19 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-btlib/0.19>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-btlib/0.19/meta.yaml>`_

   


.. conda:package:: perl-btlib

   |downloads_perl-btlib| |docker_perl-btlib|

   :versions: 0.19

   :depends: :conda:package:`perl-threaded`  

   :required~by: |required_by_perl-btlib|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-btlib

   and update with::

      conda update perl-btlib

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-btlib


.. |required_by_perl-btlib| conda:required_by:: perl-btlib
.. |downloads_perl-btlib| image:: https://img.shields.io/conda/dn/bioconda/perl-btlib.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-btlib| image:: https://quay.io/repository/biocontainers/perl-btlib/status
   :target: https://quay.io/repository/biocontainers/perl-btlib







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-btlib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-btlib/README.html

