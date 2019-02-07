.. title:: Package Recipe 'perl-autoloader'
.. highlight: bash


perl-autoloader
===============

.. conda:recipe:: perl-autoloader/5.74
   :replaces_section_title:

   load subroutines only on demand

   :homepage: http://metacpan.org/pod/AutoLoader
   :license: perl_5
   :recipe: /`perl-autoloader <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-autoloader>`_/`5.74 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-autoloader/5.74>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-autoloader/5.74/meta.yaml>`_

   


.. conda:package:: perl-autoloader

   |downloads_perl-autoloader| |docker_perl-autoloader|

   :versions: 5.74

   :depends: :conda:package:`perl` 5.22.0* 

   :required~by: |required_by_perl-autoloader|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-autoloader

   and update with::

      conda update perl-autoloader

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-autoloader


.. |required_by_perl-autoloader| conda:required_by:: perl-autoloader
.. |downloads_perl-autoloader| image:: https://img.shields.io/conda/dn/bioconda/perl-autoloader.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-autoloader| image:: https://quay.io/repository/biocontainers/perl-autoloader/status
   :target: https://quay.io/repository/biocontainers/perl-autoloader







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-autoloader/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-autoloader/README.html

