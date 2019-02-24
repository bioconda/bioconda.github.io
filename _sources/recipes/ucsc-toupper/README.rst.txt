:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-toupper'
.. highlight: bash

ucsc-toupper
============

.. conda:recipe:: ucsc-toupper
   :replaces_section_title:

   Convert lower case to upper case in file. Leave other chars alone

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-toupper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-toupper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-toupper/meta.yaml>`_

   


.. conda:package:: ucsc-toupper

   |downloads_ucsc-toupper| |docker_ucsc-toupper|

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

      conda install ucsc-toupper

   and update with::

      conda update ucsc-toupper

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-toupper:<tag>

   (see `ucsc-toupper/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-toupper| image:: https://img.shields.io/conda/dn/bioconda/ucsc-toupper.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-toupper| image:: https://quay.io/repository/biocontainers/ucsc-toupper/status
   :target: https://quay.io/repository/biocontainers/ucsc-toupper
.. _`ucsc-toupper/tags`: https://quay.io/repository/biocontainers/ucsc-toupper?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-toupper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-toupper/README.html