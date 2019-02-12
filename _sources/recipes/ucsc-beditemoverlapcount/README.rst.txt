:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-beditemoverlapcount'
.. highlight: bash

ucsc-beditemoverlapcount
========================

.. conda:recipe:: ucsc-beditemoverlapcount
   :replaces_section_title:

   count number of times a base is overlapped by the

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-beditemoverlapcount <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-beditemoverlapcount>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-beditemoverlapcount/meta.yaml>`_

   


.. conda:package:: ucsc-beditemoverlapcount

   |downloads_ucsc-beditemoverlapcount| |docker_ucsc-beditemoverlapcount|

   :versions: 366-0, 357-2, 357-1, 357-0, 332-0, 324-0
   
   :depends libgcc-ng: >=4.9
   
   :depends libpng: >=1.6.34,<1.7.0a0
   
   :depends libuuid: 
   
   :depends mysql-connector-c: 
   
   :depends openssl: >=1.0.2o,<1.0.3a
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-beditemoverlapcount

   and update with::

      conda update ucsc-beditemoverlapcount

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-beditemoverlapcount:<tag>

   (see `ucsc-beditemoverlapcount/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-beditemoverlapcount| image:: https://img.shields.io/conda/dn/bioconda/ucsc-beditemoverlapcount.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-beditemoverlapcount| image:: https://quay.io/repository/biocontainers/ucsc-beditemoverlapcount/status
   :target: https://quay.io/repository/biocontainers/ucsc-beditemoverlapcount
.. _`ucsc-beditemoverlapcount/tags`: https://quay.io/repository/biocontainers/ucsc-beditemoverlapcount?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-beditemoverlapcount/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-beditemoverlapcount/README.html