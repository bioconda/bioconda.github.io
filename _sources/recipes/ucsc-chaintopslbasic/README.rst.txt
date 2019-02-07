.. title:: Package Recipe 'ucsc-chaintopslbasic'
.. highlight: bash


ucsc-chaintopslbasic
====================

.. conda:recipe:: ucsc-chaintopslbasic
   :replaces_section_title:

   Basic conversion chain file to psl format

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-chaintopslbasic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-chaintopslbasic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-chaintopslbasic/meta.yaml>`_

   


.. conda:package:: ucsc-chaintopslbasic

   |downloads_ucsc-chaintopslbasic| |docker_ucsc-chaintopslbasic|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-chaintopslbasic|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-chaintopslbasic

   and update with::

      conda update ucsc-chaintopslbasic

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-chaintopslbasic


.. |required_by_ucsc-chaintopslbasic| conda:required_by:: ucsc-chaintopslbasic
.. |downloads_ucsc-chaintopslbasic| image:: https://img.shields.io/conda/dn/bioconda/ucsc-chaintopslbasic.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-chaintopslbasic| image:: https://quay.io/repository/biocontainers/ucsc-chaintopslbasic/status
   :target: https://quay.io/repository/biocontainers/ucsc-chaintopslbasic







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-chaintopslbasic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-chaintopslbasic/README.html

