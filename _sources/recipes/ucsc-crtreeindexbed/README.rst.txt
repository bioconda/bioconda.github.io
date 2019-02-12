.. title:: Package Recipe 'ucsc-crtreeindexbed'
.. highlight: bash


ucsc-crtreeindexbed
===================

.. conda:recipe:: ucsc-crtreeindexbed
   :replaces_section_title:

   Create an index for a bed file.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-crtreeindexbed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-crtreeindexbed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-crtreeindexbed/meta.yaml>`_

   


.. conda:package:: ucsc-crtreeindexbed

   |downloads_ucsc-crtreeindexbed| |docker_ucsc-crtreeindexbed|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-crtreeindexbed|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-crtreeindexbed

   and update with::

      conda update ucsc-crtreeindexbed

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-crtreeindexbed


.. |required_by_ucsc-crtreeindexbed| conda:required_by:: ucsc-crtreeindexbed
.. |downloads_ucsc-crtreeindexbed| image:: https://img.shields.io/conda/dn/bioconda/ucsc-crtreeindexbed.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-crtreeindexbed| image:: https://quay.io/repository/biocontainers/ucsc-crtreeindexbed/status
   :target: https://quay.io/repository/biocontainers/ucsc-crtreeindexbed







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-crtreeindexbed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-crtreeindexbed/README.html

