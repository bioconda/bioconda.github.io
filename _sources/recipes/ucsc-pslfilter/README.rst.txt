:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-pslfilter'
.. highlight: bash

ucsc-pslfilter
==============

.. conda:recipe:: ucsc-pslfilter
   :replaces_section_title:

   filter out psl file

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-pslfilter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-pslfilter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-pslfilter/meta.yaml>`_

   


.. conda:package:: ucsc-pslfilter

   |downloads_ucsc-pslfilter| |docker_ucsc-pslfilter|

   :versions: 377-0, 366-0, 357-2, 357-1, 357-0, 332-0, 324-0
   
   :depends libpng: >=1.6.35,<1.7.0a0
   :depends libuuid: >=2.32.1,<3.0a0
   :depends mysql-connector-c: >=6.1.11,<6.1.12.0a0
   :depends openssl: >=1.0.2p,<1.0.3a
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-pslfilter

   and update with::

      conda update ucsc-pslfilter

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-pslfilter:<tag>

   (see `ucsc-pslfilter/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-pslfilter| image:: https://img.shields.io/conda/dn/bioconda/ucsc-pslfilter.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-pslfilter
   :alt:   (downloads)
.. |docker_ucsc-pslfilter| image:: https://quay.io/repository/biocontainers/ucsc-pslfilter/status
   :target: https://quay.io/repository/biocontainers/ucsc-pslfilter
.. _`ucsc-pslfilter/tags`: https://quay.io/repository/biocontainers/ucsc-pslfilter?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-pslfilter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-pslfilter/README.html