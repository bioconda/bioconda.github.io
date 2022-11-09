:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-netsmooth'
.. highlight: bash

bioconductor-netsmooth
======================

.. conda:recipe:: bioconductor-netsmooth
   :replaces_section_title:
   :noindex:

   Network smoothing for scRNAseq

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/netSmooth.html
   :license: GPL-3
   :recipe: /`bioconductor-netsmooth <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netsmooth>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netsmooth/meta.yaml>`_

   netSmooth is an R package for network smoothing of single cell RNA sequencing data. Using bio networks such as protein\-protein interactions as priors for gene co\-expression\, netsmooth improves cell type identification from noisy\, sparse scRNAseq data.


.. conda:package:: bioconductor-netsmooth

   |downloads_bioconductor-netsmooth| |docker_bioconductor-netsmooth|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  <code>1.2.0-1</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-clusterexperiment: ``>=2.18.0,<2.19.0``
   :depends bioconductor-delayedarray: ``>=0.24.0,<0.25.0``
   :depends bioconductor-hdf5array: ``>=1.26.0,<1.27.0``
   :depends bioconductor-scater: ``>=1.26.0,<1.27.0``
   :depends bioconductor-singlecellexperiment: ``>=1.20.0,<1.21.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-cluster: 
   :depends r-data.table: 
   :depends r-entropy: 
   :depends r-matrix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-netsmooth

   and update with::

      conda update bioconductor-netsmooth

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-netsmooth:<tag>

   (see `bioconductor-netsmooth/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-netsmooth| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-netsmooth.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-netsmooth
   :alt:   (downloads)
.. |docker_bioconductor-netsmooth| image:: https://quay.io/repository/biocontainers/bioconductor-netsmooth/status
   :target: https://quay.io/repository/biocontainers/bioconductor-netsmooth
.. _`bioconductor-netsmooth/tags`: https://quay.io/repository/biocontainers/bioconductor-netsmooth?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-netsmooth";
        var versions = ["1.18.0","1.14.0","1.12.0","1.10.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-netsmooth/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-netsmooth/README.html