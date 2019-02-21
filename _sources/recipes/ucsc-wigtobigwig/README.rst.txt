:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-wigtobigwig'
.. highlight: bash

ucsc-wigtobigwig
================

.. conda:recipe:: ucsc-wigtobigwig
   :replaces_section_title:

   Convert ascii format wig file \(in fixedStep\, variableStep

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-wigtobigwig <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-wigtobigwig>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-wigtobigwig/meta.yaml>`_

   


.. conda:package:: ucsc-wigtobigwig

   |downloads_ucsc-wigtobigwig| |docker_ucsc-wigtobigwig|

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

      conda install ucsc-wigtobigwig

   and update with::

      conda update ucsc-wigtobigwig

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-wigtobigwig:<tag>

   (see `ucsc-wigtobigwig/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-wigtobigwig| image:: https://img.shields.io/conda/dn/bioconda/ucsc-wigtobigwig.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-wigtobigwig| image:: https://quay.io/repository/biocontainers/ucsc-wigtobigwig/status
   :target: https://quay.io/repository/biocontainers/ucsc-wigtobigwig
.. _`ucsc-wigtobigwig/tags`: https://quay.io/repository/biocontainers/ucsc-wigtobigwig?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-wigtobigwig/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-wigtobigwig/README.html