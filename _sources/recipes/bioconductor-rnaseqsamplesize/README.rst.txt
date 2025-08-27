:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rnaseqsamplesize'
.. highlight: bash

bioconductor-rnaseqsamplesize
=============================

.. conda:recipe:: bioconductor-rnaseqsamplesize
   :replaces_section_title:
   :noindex:

   RnaSeqSampleSize

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/RnaSeqSampleSize.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-rnaseqsamplesize <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnaseqsamplesize>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnaseqsamplesize/meta.yaml>`_

   RnaSeqSampleSize package provides a sample size calculation method based on negative binomial model and the exact test for assessing differential expression analysis of RNA\-seq data. It controls FDR for multiple testing and utilizes the average read count and dispersion distributions from real data to estimate a more reliable sample size. It is also equipped with several unique features\, including estimation for interested genes or pathway\, power curve visualization\, and parameter optimization.


.. conda:package:: bioconductor-rnaseqsamplesize

   |downloads_bioconductor-rnaseqsamplesize| |docker_bioconductor-rnaseqsamplesize|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.16.0-0</code>,  <code>2.12.0-0</code>,  <code>2.10.0-0</code>,  <code>2.8.0-1</code>,  <code>2.8.0-0</code>,  <code>2.4.1-1</code>,  <code>2.4.1-0</code>,  <code>2.4.0-0</code>,  <code>2.2.0-0</code>,  </span></summary>
      

      ``2.16.0-0``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-1``,  ``2.8.0-0``,  ``2.4.1-1``,  ``2.4.1-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.0-2``,  ``2.0.0-1``,  ``1.17.0-1``,  ``1.16.0-1``,  ``1.14.0-0``,  ``1.12.0-2``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biomart: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biomart: ``>=2.62.0,<2.63.0a0``
   :depends bioconductor-edger: ``>=4.4.0,<4.5.0``
   :depends bioconductor-edger: ``>=4.4.0,<4.5.0a0``
   :depends bioconductor-keggrest: ``>=1.46.0,<1.47.0``
   :depends bioconductor-keggrest: ``>=1.46.0,<1.47.0a0``
   :depends bioconductor-recount: ``>=1.32.0,<1.33.0``
   :depends bioconductor-recount: ``>=1.32.0,<1.33.0a0``
   :depends bioconductor-rnaseqsamplesizedata: ``>=1.38.0,<1.39.0``
   :depends bioconductor-rnaseqsamplesizedata: ``>=1.38.0,<1.39.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=18``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-heatmap3: 
   :depends r-matlab: 
   :depends r-rcpp: ``>=0.11.2``
   :depends r-tidyr: 
   :depends r-tidyselect: 
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

      mamba install bioconductor-rnaseqsamplesize

   and update with::

      mamba update bioconductor-rnaseqsamplesize

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rnaseqsamplesize

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rnaseqsamplesize:<tag>

   (see `bioconductor-rnaseqsamplesize/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rnaseqsamplesize| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rnaseqsamplesize.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rnaseqsamplesize
   :alt:   (downloads)
.. |docker_bioconductor-rnaseqsamplesize| image:: https://quay.io/repository/biocontainers/bioconductor-rnaseqsamplesize/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rnaseqsamplesize
.. _`bioconductor-rnaseqsamplesize/tags`: https://quay.io/repository/biocontainers/bioconductor-rnaseqsamplesize?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rnaseqsamplesize";
        var versions = ["2.16.0","2.12.0","2.10.0","2.8.0","2.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rnaseqsamplesize/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rnaseqsamplesize/README.html