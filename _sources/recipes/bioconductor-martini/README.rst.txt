:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-martini'
.. highlight: bash

bioconductor-martini
====================

.. conda:recipe:: bioconductor-martini
   :replaces_section_title:

   martini deals with the low power inherent to GWAS studies by using prior knowledge represented as a network. SNPs are the vertices of the network\, and the edges represent biological relationships between them \(genomic adjacency\, belonging to the same gene\, physical interaction between protein products\). The network is scanned using SConES\, which looks for groups of SNPs maximally associated with the phenotype\, that form a close subnetwork.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/martini.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-martini <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-martini>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-martini/meta.yaml>`_

   


.. conda:package:: bioconductor-martini

   |downloads_bioconductor-martini| |docker_bioconductor-martini|

   :versions: 1.2.0-0
   
   :depends bioconductor-rgin: >=1.2.0,<1.3.0
   
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   
   :depends bioconductor-snpstats: >=1.32.0,<1.33.0
   
   :depends libcxx: >=4.0.1
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-igraph: >=1.0.1
   
   :depends r-matrix: 
   
   :depends r-rcpp: >=0.12.8
   
   :depends r-rcppeigen: >=0.3.3.3.0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-martini

   and update with::

      conda update bioconductor-martini

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-martini:<tag>

   (see `bioconductor-martini/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-martini| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-martini.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-martini| image:: https://quay.io/repository/biocontainers/bioconductor-martini/status
   :target: https://quay.io/repository/biocontainers/bioconductor-martini
.. _`bioconductor-martini/tags`: https://quay.io/repository/biocontainers/bioconductor-martini?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-martini/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-martini/README.html