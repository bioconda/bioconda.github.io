.. title:: Package Recipe 'ucsc-fetchchromsizes'
.. highlight: bash


ucsc-fetchchromsizes
====================

.. conda:recipe:: ucsc-fetchchromsizes
   :replaces_section_title:

    used to fetch chrom.sizes information from UCSC for the given \<db\> 

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-fetchchromsizes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-fetchchromsizes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-fetchchromsizes/meta.yaml>`_

   


.. conda:package:: ucsc-fetchchromsizes

   |downloads_ucsc-fetchchromsizes| |docker_ucsc-fetchchromsizes|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-fetchchromsizes|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-fetchchromsizes

   and update with::

      conda update ucsc-fetchchromsizes

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-fetchchromsizes


.. |required_by_ucsc-fetchchromsizes| conda:required_by:: ucsc-fetchchromsizes
.. |downloads_ucsc-fetchchromsizes| image:: https://img.shields.io/conda/dn/bioconda/ucsc-fetchchromsizes.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-fetchchromsizes| image:: https://quay.io/repository/biocontainers/ucsc-fetchchromsizes/status
   :target: https://quay.io/repository/biocontainers/ucsc-fetchchromsizes







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-fetchchromsizes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-fetchchromsizes/README.html

