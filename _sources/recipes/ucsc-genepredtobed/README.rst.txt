:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-genepredtobed'
.. highlight: bash

ucsc-genepredtobed
==================

.. conda:recipe:: ucsc-genepredtobed
   :replaces_section_title:

   Convert from genePred to bed format. Does not yet handle genePredExt

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-genepredtobed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-genepredtobed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-genepredtobed/meta.yaml>`_

   


.. conda:package:: ucsc-genepredtobed

   |downloads_ucsc-genepredtobed| |docker_ucsc-genepredtobed|

   :versions: 366-0, 357-1, 357-0, 332-0, 324-0
   
   :depends libgcc-ng: >=4.9
   
   :depends libpng: >=1.6.34,<1.7.0a0
   
   :depends libuuid: 
   
   :depends mysql-connector-c: 
   
   :depends openssl: >=1.0.2o,<1.0.3a
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-genepredtobed

   and update with::

      conda update ucsc-genepredtobed

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-genepredtobed:<tag>

   (see `ucsc-genepredtobed/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-genepredtobed| image:: https://img.shields.io/conda/dn/bioconda/ucsc-genepredtobed.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-genepredtobed| image:: https://quay.io/repository/biocontainers/ucsc-genepredtobed/status
   :target: https://quay.io/repository/biocontainers/ucsc-genepredtobed
.. _`ucsc-genepredtobed/tags`: https://quay.io/repository/biocontainers/ucsc-genepredtobed?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-genepredtobed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-genepredtobed/README.html