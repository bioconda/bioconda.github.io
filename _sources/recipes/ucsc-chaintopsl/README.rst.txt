.. title:: Package Recipe 'ucsc-chaintopsl'
.. highlight: bash


ucsc-chaintopsl
===============

.. conda:recipe:: ucsc-chaintopsl
   :replaces_section_title:

   Convert chain file to psl format

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-chaintopsl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-chaintopsl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-chaintopsl/meta.yaml>`_

   


.. conda:package:: ucsc-chaintopsl

   |downloads_ucsc-chaintopsl| |docker_ucsc-chaintopsl|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-chaintopsl|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-chaintopsl

   and update with::

      conda update ucsc-chaintopsl

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-chaintopsl


.. |required_by_ucsc-chaintopsl| conda:required_by:: ucsc-chaintopsl
.. |downloads_ucsc-chaintopsl| image:: https://img.shields.io/conda/dn/bioconda/ucsc-chaintopsl.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-chaintopsl| image:: https://quay.io/repository/biocontainers/ucsc-chaintopsl/status
   :target: https://quay.io/repository/biocontainers/ucsc-chaintopsl







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-chaintopsl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-chaintopsl/README.html

