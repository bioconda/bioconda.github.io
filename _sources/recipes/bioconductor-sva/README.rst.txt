:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sva'
.. highlight: bash

bioconductor-sva
================

.. conda:recipe:: bioconductor-sva
   :replaces_section_title:
   :noindex:

   Surrogate Variable Analysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/sva.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-sva <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sva>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sva/meta.yaml>`_
   :links: biotools: :biotools:`sva`, doi: :doi:`10.1371/journal.pgen.0030161`

   The sva package contains functions for removing batch effects and other unwanted variation in high\-throughput experiment. Specifically\, the sva package contains functions for the identifying and building surrogate variables for high\-dimensional data sets. Surrogate variables are covariates constructed directly from high\-dimensional data \(like gene expression\/RNA sequencing\/methylation\/brain imaging data\) that can be used in subsequent analyses to adjust for unknown\, unmodeled\, or latent sources of noise. The sva package can be used to remove artifacts in three ways\: \(1\) identifying and estimating surrogate variables for unknown sources of variation in high\-throughput experiments \(Leek and Storey 2007 PLoS Genetics\,2008 PNAS\)\, \(2\) directly removing known batch effects using ComBat \(Johnson et al. 2007 Biostatistics\) and \(3\) removing batch effects with known control probes \(Leek 2014 biorXiv\). Removing batch effects and using surrogate variables in differential expression analysis have been shown to reduce dependence\, stabilize error rate estimates\, and improve reproducibility\, see \(Leek and Storey 2007 PLoS Genetics\, 2008 PNAS or Leek et al. 2011 Nat. Reviews Genetics\).


.. conda:package:: bioconductor-sva

   |downloads_bioconductor-sva| |docker_bioconductor-sva|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.48.0-0</code>,  <code>3.46.0-1</code>,  <code>3.46.0-0</code>,  <code>3.42.0-2</code>,  <code>3.42.0-1</code>,  <code>3.42.0-0</code>,  <code>3.40.0-0</code>,  <code>3.38.0-1</code>,  <code>3.38.0-0</code>,  </span></summary>
      

      ``3.48.0-0``,  ``3.46.0-1``,  ``3.46.0-0``,  ``3.42.0-2``,  ``3.42.0-1``,  ``3.42.0-0``,  ``3.40.0-0``,  ``3.38.0-1``,  ``3.38.0-0``,  ``3.36.0-0``,  ``3.34.0-0``,  ``3.32.1-0``,  ``3.30.1-0``,  ``3.30.0-0``,  ``3.28.0-0``,  ``3.26.0-0``,  ``3.24.4-0``,  ``3.20.0-0``,  ``3.18.0-0``,  ``3.15.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-edger: ``>=3.42.0,<3.43.0``
   :depends bioconductor-genefilter: ``>=1.82.0,<1.83.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrixstats: 
   :depends r-mgcv: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-sva

   and update with::

      mamba update bioconductor-sva

  To create a new environment, run::

      mamba create --name myenvname bioconductor-sva

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sva:<tag>

   (see `bioconductor-sva/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sva| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sva.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sva
   :alt:   (downloads)
.. |docker_bioconductor-sva| image:: https://quay.io/repository/biocontainers/bioconductor-sva/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sva
.. _`bioconductor-sva/tags`: https://quay.io/repository/biocontainers/bioconductor-sva?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sva";
        var versions = ["3.48.0","3.46.0","3.46.0","3.42.0","3.42.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sva/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sva/README.html