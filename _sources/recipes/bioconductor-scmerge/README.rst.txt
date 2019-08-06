:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scmerge'
.. highlight: bash

bioconductor-scmerge
====================

.. conda:recipe:: bioconductor-scmerge
   :replaces_section_title:

   Like all gene expression data\, single\-cell RNA\-seq \(scRNA\-Seq\) data suffers from batch effects and other unwanted variations that makes accurate biological interpretations difficult. The scMerge method leverages factor analysis\, stably expressed genes \(SEGs\) and \(pseudo\-\) replicates to remove unwanted variations and merge multiple scRNA\-Seq data. This package contains all the necessary functions in the scMerge pipeline\, including the identification of SEGs\, replication\-identification methods\, and merging of scRNA\-Seq data.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/scMerge.html
   :license: GPL-3
   :recipe: /`bioconductor-scmerge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scmerge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scmerge/meta.yaml>`_

   


.. conda:package:: bioconductor-scmerge

   |downloads_bioconductor-scmerge| |docker_bioconductor-scmerge|

   :versions: 1.0.0-1
   
   :depends bioconductor-biocparallel: >=1.18.0,<1.19.0
   :depends bioconductor-m3drop: >=1.10.0,<1.11.0
   :depends bioconductor-s4vectors: >=0.22.0,<0.23.0
   :depends bioconductor-singlecellexperiment: >=1.6.0,<1.7.0
   :depends bioconductor-summarizedexperiment: >=1.14.0,<1.15.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-cluster: 
   :depends r-distr: 
   :depends r-dosnow: 
   :depends r-foreach: 
   :depends r-igraph: 
   :depends r-irlba: 
   :depends r-iterators: 
   :depends r-matrixstats: 
   :depends r-pdist: 
   :depends r-proxy: 
   :depends r-rcpp: >=0.12.18
   :depends r-rcppeigen: >=0.3.3.4.0
   :depends r-rsvd: 
   :depends r-ruv: 
   :depends r-testthat: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scmerge

   and update with::

      conda update bioconductor-scmerge

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scmerge:<tag>

   (see `bioconductor-scmerge/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scmerge| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scmerge.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scmerge
   :alt:   (downloads)
.. |docker_bioconductor-scmerge| image:: https://quay.io/repository/biocontainers/bioconductor-scmerge/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scmerge
.. _`bioconductor-scmerge/tags`: https://quay.io/repository/biocontainers/bioconductor-scmerge?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scmerge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scmerge/README.html