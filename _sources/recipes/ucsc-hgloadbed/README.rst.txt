:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-hgloadbed'
.. highlight: bash

ucsc-hgloadbed
==============

.. conda:recipe:: ucsc-hgloadbed
   :replaces_section_title:

   Load a generic bed file into database

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-hgloadbed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-hgloadbed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-hgloadbed/meta.yaml>`_

   


.. conda:package:: ucsc-hgloadbed

   |downloads_ucsc-hgloadbed| |docker_ucsc-hgloadbed|

   :versions: 377-0, 366-0, 357-2, 357-1, 357-0, 324-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libpng: >=1.6.35,<1.7.0a0
   :depends libuuid: >=2.32.1,<3.0a0
   :depends mysql-connector-c: >=6.1.11,<6.1.12.0a0
   :depends openssl: >=1.0.2p,<1.0.3a
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-hgloadbed

   and update with::

      conda update ucsc-hgloadbed

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-hgloadbed:<tag>

   (see `ucsc-hgloadbed/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-hgloadbed| image:: https://img.shields.io/conda/dn/bioconda/ucsc-hgloadbed.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-hgloadbed
   :alt:   (downloads)
.. |docker_ucsc-hgloadbed| image:: https://quay.io/repository/biocontainers/ucsc-hgloadbed/status
   :target: https://quay.io/repository/biocontainers/ucsc-hgloadbed
.. _`ucsc-hgloadbed/tags`: https://quay.io/repository/biocontainers/ucsc-hgloadbed?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-hgloadbed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-hgloadbed/README.html