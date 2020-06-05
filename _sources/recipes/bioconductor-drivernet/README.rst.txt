:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-drivernet'
.. highlight: bash

bioconductor-drivernet
======================

.. conda:recipe:: bioconductor-drivernet
   :replaces_section_title:
   :noindex:

   Drivernet\: uncovering somatic driver mutations modulating transcriptional networks in cancer

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/DriverNet.html
   :license: GPL-3
   :recipe: /`bioconductor-drivernet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-drivernet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-drivernet/meta.yaml>`_
   :links: biotools: :biotools:`drivernet`, doi: :doi:`10.1186/gb-2012-13-12-r124`

   DriverNet is a package to predict functional important driver genes in cancer by integrating genome data \(mutation and copy number variation data\) and transcriptome data \(gene expression data\). The different kinds of data are combined by an influence graph\, which is a gene\-gene interaction network deduced from pathway data. A greedy algorithm is used to find the possible driver genes\, which may mutated in a larger number of patients and these mutations will push the gene expression values of the connected genes to some extreme values.


.. conda:package:: bioconductor-drivernet

   |downloads_bioconductor-drivernet| |docker_bioconductor-drivernet|

   :versions:
      
      

      ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``

      

   
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-drivernet

   and update with::

      conda update bioconductor-drivernet

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-drivernet:<tag>

   (see `bioconductor-drivernet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-drivernet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-drivernet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-drivernet
   :alt:   (downloads)
.. |docker_bioconductor-drivernet| image:: https://quay.io/repository/biocontainers/bioconductor-drivernet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-drivernet
.. _`bioconductor-drivernet/tags`: https://quay.io/repository/biocontainers/bioconductor-drivernet?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-drivernet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-drivernet/README.html