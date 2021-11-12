:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-powsc'
.. highlight: bash

bioconductor-powsc
==================

.. conda:recipe:: bioconductor-powsc
   :replaces_section_title:
   :noindex:

   Simulation\, power evaluation\, and sample size recommendation for single cell RNA\-seq

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/POWSC.html
   :license: GPL-2
   :recipe: /`bioconductor-powsc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-powsc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-powsc/meta.yaml>`_

   Determining the sample size for adequate power to detect statistical significance is a crucial step at the design stage for high\-throughput experiments. Even though a number of methods and tools are available for sample size calculation for microarray and RNA\-seq in the context of differential expression \(DE\)\, this topic in the field of single\-cell RNA sequencing is understudied. Moreover\, the unique data characteristics present in scRNA\-seq such as sparsity and heterogeneity increase the challenge. We propose POWSC\, a simulation\-based method\, to provide power evaluation and sample size recommendation for single\-cell RNA sequencing DE analysis. POWSC consists of a data simulator that creates realistic expression data\, and a power assessor that provides a comprehensive evaluation and visualization of the power and sample size relationship.


.. conda:package:: bioconductor-powsc

   |downloads_bioconductor-powsc| |docker_bioconductor-powsc|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-limma: ``>=3.50.0,<3.51.0``
   :depends bioconductor-mast: ``>=1.20.0,<1.21.0``
   :depends bioconductor-singlecellexperiment: ``>=1.16.0,<1.17.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-ggplot2: 
   :depends r-pheatmap: 
   :depends r-rcolorbrewer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-powsc

   and update with::

      conda update bioconductor-powsc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-powsc:<tag>

   (see `bioconductor-powsc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-powsc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-powsc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-powsc
   :alt:   (downloads)
.. |docker_bioconductor-powsc| image:: https://quay.io/repository/biocontainers/bioconductor-powsc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-powsc
.. _`bioconductor-powsc/tags`: https://quay.io/repository/biocontainers/bioconductor-powsc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-powsc";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-powsc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-powsc/README.html