:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-trigger'
.. highlight: bash

bioconductor-trigger
====================

.. conda:recipe:: bioconductor-trigger
   :replaces_section_title:
   :noindex:

   Transcriptional Regulatory Inference from Genetics of Gene ExpRession

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/trigger.html
   :license: GPL-3
   :recipe: /`bioconductor-trigger <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-trigger>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-trigger/meta.yaml>`_
   :links: biotools: :biotools:`trigger`, doi: :doi:`10.1038/nmeth.3252`

   This R package provides tools for the statistical analysis of integrative genomic data that involve some combination of\: genotypes\, high\-dimensional intermediate traits \(e.g.\, gene expression\, protein abundance\)\, and higher\-order traits \(phenotypes\). The package includes functions to\: \(1\) construct global linkage maps between genetic markers and gene expression\; \(2\) analyze multiple\-locus linkage \(epistasis\) for gene expression\; \(3\) quantify the proportion of genome\-wide variation explained by each locus and identify eQTL hotspots\; \(4\) estimate pair\-wise causal gene regulatory probabilities and construct gene regulatory networks\; and \(5\) identify causal genes for a quantitative trait of interest.


.. conda:package:: bioconductor-trigger

   |downloads_bioconductor-trigger| |docker_bioconductor-trigger|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-1</code>,  <code>1.44.0-0</code>,  <code>1.40.0-2</code>,  <code>1.40.0-1</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-1</code>,  </span></summary>
      

      ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.40.0-2``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-qvalue: ``>=2.34.0,<2.35.0``
   :depends bioconductor-qvalue: ``>=2.34.0,<2.35.0a0``
   :depends bioconductor-sva: ``>=3.50.0,<3.51.0``
   :depends bioconductor-sva: ``>=3.50.0,<3.51.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-corpcor: 
   :depends r-qtl: 
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

      mamba install bioconductor-trigger

   and update with::

      mamba update bioconductor-trigger

  To create a new environment, run::

      mamba create --name myenvname bioconductor-trigger

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-trigger:<tag>

   (see `bioconductor-trigger/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-trigger| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-trigger.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-trigger
   :alt:   (downloads)
.. |docker_bioconductor-trigger| image:: https://quay.io/repository/biocontainers/bioconductor-trigger/status
   :target: https://quay.io/repository/biocontainers/bioconductor-trigger
.. _`bioconductor-trigger/tags`: https://quay.io/repository/biocontainers/bioconductor-trigger?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-trigger";
        var versions = ["1.48.0","1.46.0","1.44.0","1.44.0","1.40.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-trigger/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-trigger/README.html