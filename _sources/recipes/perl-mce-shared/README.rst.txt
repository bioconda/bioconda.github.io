.. title:: Package Recipe 'perl-mce-shared'
.. highlight: bash


perl-mce-shared
===============

.. conda:recipe:: perl-mce-shared
   :replaces_section_title:

   MCE extension for sharing data supporting threads and processes

   :homepage: https://github.com/marioroy/mce-shared
   :license: perl_5
   :recipe: /`perl-mce-shared <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mce-shared>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mce-shared/meta.yaml>`_

   


.. conda:package:: perl-mce-shared

   |downloads_perl-mce-shared| |docker_perl-mce-shared|

   :versions: 1.840, 1.839, 1.838, 1.836

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-base`  :conda:package:`perl-carp`  :conda:package:`perl-constant`  :conda:package:`perl-mce` >=1.836 :conda:package:`perl-socket`  :conda:package:`perl-storable`  :conda:package:`perl-time-hires`  

   :required~by: |required_by_perl-mce-shared|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-mce-shared

   and update with::

      conda update perl-mce-shared

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-mce-shared


.. |required_by_perl-mce-shared| conda:required_by:: perl-mce-shared
.. |downloads_perl-mce-shared| image:: https://img.shields.io/conda/dn/bioconda/perl-mce-shared.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-mce-shared| image:: https://quay.io/repository/biocontainers/perl-mce-shared/status
   :target: https://quay.io/repository/biocontainers/perl-mce-shared







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-mce-shared/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-mce-shared/README.html

