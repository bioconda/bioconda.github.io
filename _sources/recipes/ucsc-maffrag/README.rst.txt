.. title:: Package Recipe 'ucsc-maffrag'
.. highlight: bash


ucsc-maffrag
============

.. conda:recipe:: ucsc-maffrag
   :replaces_section_title:

   Extract maf sequences for a region from database

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-maffrag <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-maffrag>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-maffrag/meta.yaml>`_

   


.. conda:package:: ucsc-maffrag

   |downloads_ucsc-maffrag| |docker_ucsc-maffrag|

   :versions: 366, 357, 324

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-maffrag|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-maffrag

   and update with::

      conda update ucsc-maffrag

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-maffrag


.. |required_by_ucsc-maffrag| conda:required_by:: ucsc-maffrag
.. |downloads_ucsc-maffrag| image:: https://img.shields.io/conda/dn/bioconda/ucsc-maffrag.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-maffrag| image:: https://quay.io/repository/biocontainers/ucsc-maffrag/status
   :target: https://quay.io/repository/biocontainers/ucsc-maffrag







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-maffrag/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-maffrag/README.html

