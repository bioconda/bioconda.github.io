:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-bedtobigbed'
.. highlight: bash

ucsc-bedtobigbed
================

.. conda:recipe:: ucsc-bedtobigbed
   :replaces_section_title:

   Convert bed file to bigBed. \(BigBed version\: 4\)

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-bedtobigbed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bedtobigbed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bedtobigbed/meta.yaml>`_

   


.. conda:package:: ucsc-bedtobigbed

   |downloads_ucsc-bedtobigbed| |docker_ucsc-bedtobigbed|

   :versions: 377-0, 366-0, 357-2, 357-1, 357-0, 332-0, 324-0, 323-0
   
   :depends libpng: >=1.6.35,<1.7.0a0
   
   :depends libuuid: >=2.32.1,<3.0a0
   
   :depends mysql-connector-c: >=6.1.11,<6.1.12.0a0
   
   :depends openssl: >=1.0.2p,<1.0.3a
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-bedtobigbed

   and update with::

      conda update ucsc-bedtobigbed

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-bedtobigbed:<tag>

   (see `ucsc-bedtobigbed/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-bedtobigbed| image:: https://img.shields.io/conda/dn/bioconda/ucsc-bedtobigbed.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-bedtobigbed| image:: https://quay.io/repository/biocontainers/ucsc-bedtobigbed/status
   :target: https://quay.io/repository/biocontainers/ucsc-bedtobigbed
.. _`ucsc-bedtobigbed/tags`: https://quay.io/repository/biocontainers/ucsc-bedtobigbed?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-bedtobigbed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-bedtobigbed/README.html