:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-bigbedinfo'
.. highlight: bash

ucsc-bigbedinfo
===============

.. conda:recipe:: ucsc-bigbedinfo
   :replaces_section_title:

   Show information about a bigBed file.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-bigbedinfo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bigbedinfo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bigbedinfo/meta.yaml>`_

   


.. conda:package:: ucsc-bigbedinfo

   |downloads_ucsc-bigbedinfo| |docker_ucsc-bigbedinfo|

   :versions: 377-0, 366-0, 357-2, 357-1, 357-0, 332-0, 324-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libpng: >=1.6.35,<1.7.0a0
   :depends libuuid: >=2.32.1,<3.0a0
   :depends mysql-connector-c: 
   :depends openssl: >=1.0.2p,<1.0.3a
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-bigbedinfo

   and update with::

      conda update ucsc-bigbedinfo

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-bigbedinfo:<tag>

   (see `ucsc-bigbedinfo/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-bigbedinfo| image:: https://img.shields.io/conda/dn/bioconda/ucsc-bigbedinfo.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-bigbedinfo| image:: https://quay.io/repository/biocontainers/ucsc-bigbedinfo/status
   :target: https://quay.io/repository/biocontainers/ucsc-bigbedinfo
.. _`ucsc-bigbedinfo/tags`: https://quay.io/repository/biocontainers/ucsc-bigbedinfo?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-bigbedinfo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-bigbedinfo/README.html