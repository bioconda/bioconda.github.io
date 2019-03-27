:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-genepredfilter'
.. highlight: bash

ucsc-genepredfilter
===================

.. conda:recipe:: ucsc-genepredfilter
   :replaces_section_title:

   filter a genePred file

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-genepredfilter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-genepredfilter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-genepredfilter/meta.yaml>`_

   


.. conda:package:: ucsc-genepredfilter

   |downloads_ucsc-genepredfilter| |docker_ucsc-genepredfilter|

   :versions: 377-0, 366-0, 357-2, 357-1, 357-0, 332-0
   
   :depends libgcc-ng: >=7.3.0
   
   :depends libpng: >=1.6.35,<1.7.0a0
   
   :depends libuuid: >=2.32.1,<3.0a0
   
   :depends mysql-connector-c: >=6.1.11,<6.1.12.0a0
   
   :depends openssl: >=1.0.2p,<1.0.3a
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-genepredfilter

   and update with::

      conda update ucsc-genepredfilter

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-genepredfilter:<tag>

   (see `ucsc-genepredfilter/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-genepredfilter| image:: https://img.shields.io/conda/dn/bioconda/ucsc-genepredfilter.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-genepredfilter| image:: https://quay.io/repository/biocontainers/ucsc-genepredfilter/status
   :target: https://quay.io/repository/biocontainers/ucsc-genepredfilter
.. _`ucsc-genepredfilter/tags`: https://quay.io/repository/biocontainers/ucsc-genepredfilter?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-genepredfilter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-genepredfilter/README.html