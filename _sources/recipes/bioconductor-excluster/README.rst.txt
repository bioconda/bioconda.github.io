:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-excluster'
.. highlight: bash

bioconductor-excluster
======================

.. conda:recipe:: bioconductor-excluster
   :replaces_section_title:
   :noindex:

   ExCluster robustly detects differentially expressed exons between two conditions of RNA\-seq data\, requiring at least two independent biological replicates per condition

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ExCluster.html
   :license: GPL-3
   :recipe: /`bioconductor-excluster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-excluster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-excluster/meta.yaml>`_

   ExCluster flattens Ensembl and GENCODE GTF files into GFF files\, which are used to count reads per non\-overlapping exon bin from BAM files. This read counting is done using the function featureCounts from the package Rsubread. Library sizes are normalized across all biological replicates\, and ExCluster then compares two different conditions to detect signifcantly differentially spliced genes. This process requires at least two independent biological repliates per condition\, and ExCluster accepts only exactly two conditions at a time. ExCluster ultimately produces false discovery rates \(FDRs\) per gene\, which are used to detect significance. Exon log2 fold change \(log2FC\) means and variances may be plotted for each significantly differentially spliced gene\, which helps scientists develop hypothesis and target differential splicing events for RT\-qPCR validation in the wet lab.


.. conda:package:: bioconductor-excluster

   |downloads_bioconductor-excluster| |docker_bioconductor-excluster|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rsubread: ``>=2.16.0,<2.17.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrixstats: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-excluster

   and update with::

      mamba update bioconductor-excluster

  To create a new environment, run::

      mamba create --name myenvname bioconductor-excluster

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-excluster:<tag>

   (see `bioconductor-excluster/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-excluster| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-excluster.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-excluster
   :alt:   (downloads)
.. |docker_bioconductor-excluster| image:: https://quay.io/repository/biocontainers/bioconductor-excluster/status
   :target: https://quay.io/repository/biocontainers/bioconductor-excluster
.. _`bioconductor-excluster/tags`: https://quay.io/repository/biocontainers/bioconductor-excluster?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-excluster";
        var versions = ["1.20.0","1.18.0","1.16.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-excluster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-excluster/README.html