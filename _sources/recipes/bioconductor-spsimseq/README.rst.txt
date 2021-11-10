:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spsimseq'
.. highlight: bash

bioconductor-spsimseq
=====================

.. conda:recipe:: bioconductor-spsimseq
   :replaces_section_title:
   :noindex:

   Semi\-parametric simulation tool for bulk and single\-cell RNA sequencing data

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/SPsimSeq.html
   :license: GPL-2
   :recipe: /`bioconductor-spsimseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spsimseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spsimseq/meta.yaml>`_

   SPsimSeq uses a specially designed exponential family for density estimation to constructs the distribution of gene expression levels from a given real RNA sequencing data \(single\-cell or bulk\)\, and subsequently simulates a new dataset from the estimated marginal distributions using Gaussian\-copulas to retain the dependence between genes. It allows simulation of multiple groups and batches with any required sample size and library size.


.. conda:package:: bioconductor-spsimseq

   |downloads_bioconductor-spsimseq| |docker_bioconductor-spsimseq|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-edger: ``>=3.36.0,<3.37.0``
   :depends bioconductor-limma: ``>=3.50.0,<3.51.0``
   :depends bioconductor-phyloseq: ``>=1.38.0,<1.39.0``
   :depends bioconductor-singlecellexperiment: ``>=1.16.0,<1.17.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-fitdistrplus: 
   :depends r-hmisc: 
   :depends r-mvtnorm: 
   :depends r-wgcna: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-spsimseq

   and update with::

      conda update bioconductor-spsimseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spsimseq:<tag>

   (see `bioconductor-spsimseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spsimseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spsimseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spsimseq
   :alt:   (downloads)
.. |docker_bioconductor-spsimseq| image:: https://quay.io/repository/biocontainers/bioconductor-spsimseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spsimseq
.. _`bioconductor-spsimseq/tags`: https://quay.io/repository/biocontainers/bioconductor-spsimseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spsimseq";
        var versions = ["1.4.0","1.2.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spsimseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spsimseq/README.html