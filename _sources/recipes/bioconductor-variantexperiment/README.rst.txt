:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-variantexperiment'
.. highlight: bash

bioconductor-variantexperiment
==============================

.. conda:recipe:: bioconductor-variantexperiment
   :replaces_section_title:
   :noindex:

   A RangedSummarizedExperiment Container for VCF\/GDS Data with GDS Backend

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/VariantExperiment.html
   :license: GPL-3
   :recipe: /`bioconductor-variantexperiment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-variantexperiment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-variantexperiment/meta.yaml>`_

   VariantExperiment is a Bioconductor package for saving data in VCF\/GDS format into RangedSummarizedExperiment object. The high\-throughput genetic\/genomic data are saved in GDSArray objects. The annotation data for features\/samples are saved in DelayedDataFrame format with mono\-dimensional GDSArray in each column. The on\-disk representation of both assay data and annotation data achieves on\-disk reading and processing and saves memory space significantly. The interface of RangedSummarizedExperiment data format enables easy and common manipulations for high\-throughput genetic\/genomic data with common SummarizedExperiment metaphor in R and Bioconductor.


.. conda:package:: bioconductor-variantexperiment

   |downloads_bioconductor-variantexperiment| |docker_bioconductor-variantexperiment|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-delayedarray: ``>=0.32.0,<0.33.0``
   :depends bioconductor-delayeddataframe: ``>=1.22.0,<1.23.0``
   :depends bioconductor-gdsarray: ``>=1.26.0,<1.27.0``
   :depends bioconductor-gdsfmt: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-seqarray: ``>=1.46.0,<1.47.0``
   :depends bioconductor-snprelate: ``>=1.40.0,<1.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-variantexperiment

   and update with::

      mamba update bioconductor-variantexperiment

  To create a new environment, run::

      mamba create --name myenvname bioconductor-variantexperiment

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-variantexperiment:<tag>

   (see `bioconductor-variantexperiment/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-variantexperiment| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-variantexperiment.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-variantexperiment
   :alt:   (downloads)
.. |docker_bioconductor-variantexperiment| image:: https://quay.io/repository/biocontainers/bioconductor-variantexperiment/status
   :target: https://quay.io/repository/biocontainers/bioconductor-variantexperiment
.. _`bioconductor-variantexperiment/tags`: https://quay.io/repository/biocontainers/bioconductor-variantexperiment?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-variantexperiment";
        var versions = ["1.20.0","1.16.0","1.14.0","1.12.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-variantexperiment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-variantexperiment/README.html