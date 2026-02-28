:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gsva'
.. highlight: bash

bioconductor-gsva
=================

.. conda:recipe:: bioconductor-gsva
   :replaces_section_title:
   :noindex:

   Gene Set Variation Analysis for Microarray and RNA\-Seq Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GSVA.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-gsva <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsva>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsva/meta.yaml>`_
   :links: biotools: :biotools:`gsva`

   Gene Set Variation Analysis \(GSVA\) is a non\-parametric\, unsupervised method for estimating variation of gene set enrichment through the samples of a expression data set. GSVA performs a change in coordinate systems\, transforming the data from a gene by sample matrix to a gene\-set by sample matrix\, thereby allowing the evaluation of pathway enrichment for each sample. This new matrix of GSVA enrichment scores facilitates applying standard analytical methods like functional enrichment\, survival analysis\, clustering\, CNV\-pathway analysis or cross\-tissue pathway analysis\, in a pathway\-centric manner.


.. conda:package:: bioconductor-gsva

   |downloads_bioconductor-gsva| |docker_bioconductor-gsva|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.4.4-0</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  <code>1.50.0-1</code>,  <code>1.50.0-0</code>,  <code>1.48.2-0</code>,  <code>1.46.0-1</code>,  <code>1.46.0-0</code>,  <code>1.42.0-2</code>,  </span></summary>
      

      ``2.4.4-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.48.2-0``,  ``1.46.0-1``,  ``1.46.0-0``,  ``1.42.0-2``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.2-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.2-0``,  ``1.24.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends bioconductor-biobase: ``>=2.70.0,<2.71.0a0``
   :depends bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends bioconductor-biocgenerics: ``>=0.56.0,<0.57.0a0``
   :depends bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends bioconductor-biocparallel: ``>=1.44.0,<1.45.0a0``
   :depends bioconductor-biocsingular: ``>=1.26.0,<1.27.0``
   :depends bioconductor-biocsingular: ``>=1.26.1,<1.27.0a0``
   :depends bioconductor-delayedarray: ``>=0.36.0,<0.37.0``
   :depends bioconductor-delayedarray: ``>=0.36.0,<0.37.0a0``
   :depends bioconductor-gseabase: ``>=1.72.0,<1.73.0``
   :depends bioconductor-gseabase: ``>=1.72.0,<1.73.0a0``
   :depends bioconductor-hdf5array: ``>=1.38.0,<1.39.0``
   :depends bioconductor-hdf5array: ``>=1.38.0,<1.39.0a0``
   :depends bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends bioconductor-iranges: ``>=2.44.0,<2.45.0a0``
   :depends bioconductor-matrixgenerics: ``>=1.22.0,<1.23.0``
   :depends bioconductor-matrixgenerics: ``>=1.22.0,<1.23.0a0``
   :depends bioconductor-s4arrays: ``>=1.10.0,<1.11.0``
   :depends bioconductor-s4arrays: ``>=1.10.1,<1.11.0a0``
   :depends bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0a0``
   :depends bioconductor-sparsearray: ``>=1.10.0,<1.11.0``
   :depends bioconductor-sparsearray: ``>=1.10.8,<1.11.0a0``
   :depends bioconductor-sparsematrixstats: ``>=1.22.0,<1.23.0``
   :depends bioconductor-sparsematrixstats: ``>=1.22.0,<1.23.0a0``
   :depends bioconductor-spatialexperiment: ``>=1.20.0,<1.21.0``
   :depends bioconductor-spatialexperiment: ``>=1.20.0,<1.21.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends liblzma: ``>=5.8.2,<6.0a0``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends r-base: ``>=4.5,<4.6.0a0``
   :depends r-cli: 
   :depends r-matrix: ``>=1.5-0``
   :depends r-memuse: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-gsva

   and update with::

      mamba update bioconductor-gsva

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gsva

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gsva:<tag>

   (see `bioconductor-gsva/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gsva| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gsva.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gsva
   :alt:   (downloads)
.. |docker_bioconductor-gsva| image:: https://quay.io/repository/biocontainers/bioconductor-gsva/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gsva
.. _`bioconductor-gsva/tags`: https://quay.io/repository/biocontainers/bioconductor-gsva?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gsva";
        var versions = ["2.4.4","2.0.0","2.0.0","1.50.0","1.50.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gsva/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gsva/README.html