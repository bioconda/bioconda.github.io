:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-qacagplift'
.. highlight: bash

ucsc-qacagplift
===============

.. conda:recipe:: ucsc-qacagplift
   :replaces_section_title:

   Use AGP to combine per\-scaffold qac into per\-chrom qac.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-qacagplift <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-qacagplift>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-qacagplift/meta.yaml>`_

   


.. conda:package:: ucsc-qacagplift

   |downloads_ucsc-qacagplift| |docker_ucsc-qacagplift|

   :versions: 377-0, 366-0, 357-2, 357-1, 357-0, 332-0, 324-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libpng: >=1.6.35,<1.7.0a0
   :depends libuuid: >=2.32.1,<3.0a0
   :depends mysql-connector-c: >=6.1.11,<6.1.12.0a0
   :depends openssl: >=1.0.2p,<1.0.3a
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-qacagplift

   and update with::

      conda update ucsc-qacagplift

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-qacagplift:<tag>

   (see `ucsc-qacagplift/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-qacagplift| image:: https://img.shields.io/conda/dn/bioconda/ucsc-qacagplift.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-qacagplift
   :alt:   (downloads)
.. |docker_ucsc-qacagplift| image:: https://quay.io/repository/biocontainers/ucsc-qacagplift/status
   :target: https://quay.io/repository/biocontainers/ucsc-qacagplift
.. _`ucsc-qacagplift/tags`: https://quay.io/repository/biocontainers/ucsc-qacagplift?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-qacagplift/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-qacagplift/README.html