:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-roseq'
.. highlight: bash

bioconductor-roseq
==================

.. conda:recipe:: bioconductor-roseq
   :replaces_section_title:

   A Rank Based Approach to Modeling Gene Expression

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/ROSeq.html
   :license: GPL-3
   :recipe: /`bioconductor-roseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-roseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-roseq/meta.yaml>`_

   A rank based approach to modeling gene expression with filtered and normalized read count matrix. Takes in the complete filtered and normalized read count matrix\, the location of the two sub\-populations and the number of cores to be used.


.. conda:package:: bioconductor-roseq

   |downloads_bioconductor-roseq| |docker_bioconductor-roseq|

   :versions: 1.0.0-0
   
   :depends bioconductor-edger: >=3.30.0,<3.31.0
   :depends bioconductor-limma: >=3.44.0,<3.45.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-pbmcapply: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-roseq

   and update with::

      conda update bioconductor-roseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-roseq:<tag>

   (see `bioconductor-roseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-roseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-roseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-roseq
   :alt:   (downloads)
.. |docker_bioconductor-roseq| image:: https://quay.io/repository/biocontainers/bioconductor-roseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-roseq
.. _`bioconductor-roseq/tags`: https://quay.io/repository/biocontainers/bioconductor-roseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-roseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-roseq/README.html