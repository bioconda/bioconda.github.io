:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-edger'
.. highlight: bash

bioconductor-edger
==================

.. conda:recipe:: bioconductor-edger
   :replaces_section_title:
   :noindex:

   Empirical Analysis of Digital Gene Expression Data in R

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/edgeR.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-edger <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-edger>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-edger/meta.yaml>`_
   :links: biotools: :biotools:`edger`, usegalaxy-eu: :usegalaxy-eu:`edger`

   Differential expression analysis of RNA\-seq expression profiles with biological replication. Implements a range of statistical methodology based on the negative binomial distributions\, including empirical Bayes estimation\, exact tests\, generalized linear models and quasi\-likelihood tests. As well as RNA\-seq\, it be applied to differential signal analysis of other types of genomic data that produce read counts\, including ChIP\-seq\, ATAC\-seq\, Bisulfite\-seq\, SAGE and CAGE.


.. conda:package:: bioconductor-edger

   |downloads_bioconductor-edger| |docker_bioconductor-edger|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.0.2-0</code>,  <code>3.42.4-0</code>,  <code>3.40.0-1</code>,  <code>3.40.0-0</code>,  <code>3.36.0-2</code>,  <code>3.36.0-1</code>,  <code>3.36.0-0</code>,  <code>3.34.0-0</code>,  <code>3.32.1-0</code>,  </span></summary>
      

      ``4.0.2-0``,  ``3.42.4-0``,  ``3.40.0-1``,  ``3.40.0-0``,  ``3.36.0-2``,  ``3.36.0-1``,  ``3.36.0-0``,  ``3.34.0-0``,  ``3.32.1-0``,  ``3.32.0-0``,  ``3.30.0-0``,  ``3.28.0-1``,  ``3.28.0-0``,  ``3.26.5-0``,  ``3.26.0-0``,  ``3.24.3-0``,  ``3.24.1-0``,  ``3.22.5-0``,  ``3.20.7-0``,  ``3.20.1-0``,  ``3.20.0-0``,  ``3.18.1-0``,  ``3.16.5-0``,  ``3.14.0-1``,  ``3.14.0-0``,  ``3.12.1-1``,  ``3.12.1-0``,  ``3.12.0-0``,  ``3.10.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-limma: ``>=3.58.1,<3.59.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-locfit: 
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-edger

   and update with::

      mamba update bioconductor-edger

  To create a new environment, run::

      mamba create --name myenvname bioconductor-edger

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-edger:<tag>

   (see `bioconductor-edger/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-edger| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-edger.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-edger
   :alt:   (downloads)
.. |docker_bioconductor-edger| image:: https://quay.io/repository/biocontainers/bioconductor-edger/status
   :target: https://quay.io/repository/biocontainers/bioconductor-edger
.. _`bioconductor-edger/tags`: https://quay.io/repository/biocontainers/bioconductor-edger?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-edger";
        var versions = ["4.0.2","3.42.4","3.40.0","3.40.0","3.36.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-edger/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-edger/README.html