.. title:: Package Recipe 'ucsc-spacedtotab'
.. highlight: bash


ucsc-spacedtotab
================

.. conda:recipe:: ucsc-spacedtotab
   :replaces_section_title:

   Convert fixed width space separated fields to tab separated

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-spacedtotab <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-spacedtotab>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-spacedtotab/meta.yaml>`_

   


.. conda:package:: ucsc-spacedtotab

   |downloads_ucsc-spacedtotab| |docker_ucsc-spacedtotab|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-spacedtotab|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-spacedtotab

   and update with::

      conda update ucsc-spacedtotab

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-spacedtotab


.. |required_by_ucsc-spacedtotab| conda:required_by:: ucsc-spacedtotab
.. |downloads_ucsc-spacedtotab| image:: https://img.shields.io/conda/dn/bioconda/ucsc-spacedtotab.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-spacedtotab| image:: https://quay.io/repository/biocontainers/ucsc-spacedtotab/status
   :target: https://quay.io/repository/biocontainers/ucsc-spacedtotab







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-spacedtotab/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-spacedtotab/README.html

