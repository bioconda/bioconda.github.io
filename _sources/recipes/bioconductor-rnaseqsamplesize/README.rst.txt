:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rnaseqsamplesize'
.. highlight: bash

bioconductor-rnaseqsamplesize
=============================

.. conda:recipe:: bioconductor-rnaseqsamplesize
   :replaces_section_title:
   :noindex:

   RnaSeqSampleSize

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/RnaSeqSampleSize.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-rnaseqsamplesize <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnaseqsamplesize>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnaseqsamplesize/meta.yaml>`_

   RnaSeqSampleSize package provides a sample size calculation method based on negative binomial model and the exact test for assessing differential expression analysis of RNA\-seq data. It controls FDR for multiple testing and utilizes the average read count and dispersion distributions from real data to estimate a more reliable sample size. It is also equipped with several unique features\, including estimation for interested genes or pathway\, power curve visualization\, and parameter optimization.


.. conda:package:: bioconductor-rnaseqsamplesize

   |downloads_bioconductor-rnaseqsamplesize| |docker_bioconductor-rnaseqsamplesize|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.10.0-0</code>,  <code>2.8.0-1</code>,  <code>2.8.0-0</code>,  <code>2.4.1-1</code>,  <code>2.4.1-0</code>,  <code>2.4.0-0</code>,  <code>2.2.0-0</code>,  <code>2.0.0-2</code>,  <code>2.0.0-1</code>,  </span></summary>
      

      ``2.10.0-0``,  ``2.8.0-1``,  ``2.8.0-0``,  ``2.4.1-1``,  ``2.4.1-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.0-2``,  ``2.0.0-1``,  ``1.17.0-1``,  ``1.16.0-1``,  ``1.14.0-0``,  ``1.12.0-2``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biomart: ``>=2.56.0,<2.57.0``
   :depends bioconductor-edger: ``>=3.42.0,<3.43.0``
   :depends bioconductor-keggrest: ``>=1.40.0,<1.41.0``
   :depends bioconductor-recount: ``>=1.26.0,<1.27.0``
   :depends bioconductor-rnaseqsamplesizedata: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-heatmap3: 
   :depends r-matlab: 
   :depends r-rcpp: ``>=0.11.2``
   :depends r-tidyr: 
   :depends r-tidyselect: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rnaseqsamplesize

   and update with::

      conda update bioconductor-rnaseqsamplesize

   or use the docker container::

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
        var versions = ["2.10.0","2.8.0","2.8.0","2.4.1","2.4.1"];
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