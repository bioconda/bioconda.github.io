.. title:: Package Recipe 'ucsc-bedgraphpack'
.. highlight: bash


ucsc-bedgraphpack
=================

.. conda:recipe:: ucsc-bedgraphpack
   :replaces_section_title:

   Pack together adjacent records representing same value.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-bedgraphpack <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bedgraphpack>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bedgraphpack/meta.yaml>`_

   


.. conda:package:: ucsc-bedgraphpack

   |downloads_ucsc-bedgraphpack| |docker_ucsc-bedgraphpack|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-bedgraphpack|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-bedgraphpack

   and update with::

      conda update ucsc-bedgraphpack

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-bedgraphpack


.. |required_by_ucsc-bedgraphpack| conda:required_by:: ucsc-bedgraphpack
.. |downloads_ucsc-bedgraphpack| image:: https://img.shields.io/conda/dn/bioconda/ucsc-bedgraphpack.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-bedgraphpack| image:: https://quay.io/repository/biocontainers/ucsc-bedgraphpack/status
   :target: https://quay.io/repository/biocontainers/ucsc-bedgraphpack







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-bedgraphpack/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-bedgraphpack/README.html

