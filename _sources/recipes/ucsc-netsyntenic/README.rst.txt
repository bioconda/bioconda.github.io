.. title:: Package Recipe 'ucsc-netsyntenic'
.. highlight: bash


ucsc-netsyntenic
================

.. conda:recipe:: ucsc-netsyntenic
   :replaces_section_title:

   Add synteny info to net.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-netsyntenic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-netsyntenic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-netsyntenic/meta.yaml>`_

   


.. conda:package:: ucsc-netsyntenic

   |downloads_ucsc-netsyntenic| |docker_ucsc-netsyntenic|

   :versions: 366, 357, 332

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-netsyntenic|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-netsyntenic

   and update with::

      conda update ucsc-netsyntenic

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-netsyntenic


.. |required_by_ucsc-netsyntenic| conda:required_by:: ucsc-netsyntenic
.. |downloads_ucsc-netsyntenic| image:: https://img.shields.io/conda/dn/bioconda/ucsc-netsyntenic.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-netsyntenic| image:: https://quay.io/repository/biocontainers/ucsc-netsyntenic/status
   :target: https://quay.io/repository/biocontainers/ucsc-netsyntenic







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-netsyntenic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-netsyntenic/README.html

