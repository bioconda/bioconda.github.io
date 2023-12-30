:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-differentialregulation'
.. highlight: bash

bioconductor-differentialregulation
===================================

.. conda:recipe:: bioconductor-differentialregulation
   :replaces_section_title:
   :noindex:

   Differentially regulated genes from scRNA\-seq data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/DifferentialRegulation.html
   :license: GPL-3
   :recipe: /`bioconductor-differentialregulation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-differentialregulation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-differentialregulation/meta.yaml>`_

   DifferentialRegulation is a method for detecting differentially regulated genes between two groups of samples \(e.g.\, healthy vs. disease\, or treated vs. untreated samples\)\, by targeting differences in the balance of spliced and unspliced mRNA abundances\, obtained from single\-cell RNA\-sequencing \(scRNA\-seq\) data. From a mathematical point of view\, DifferentialRegulation accounts for the sample\-to\-sample variability\, and embeds multiple samples in a Bayesian hierarchical model. Furthermore\, our method also deals with two major sources of mapping uncertainty\: i\) \'ambiguous\' reads\, compatible with both spliced and unspliced versions of a gene\, and ii\) reads mapping to multiple genes. In particular\, ambiguous reads are treated separately from spliced and unsplced reads\, while reads that are compatible with multiple genes are allocated to the gene of origin. Parameters are inferred via Markov chain Monte Carlo \(MCMC\) techniques \(Metropolis\-within\-Gibbs\).


.. conda:package:: bioconductor-differentialregulation

   |downloads_bioconductor-differentialregulation| |docker_bioconductor-differentialregulation|

   :versions:
      
      

      ``2.0.2-0``,  ``1.4.2-0``,  ``1.2.0-1``,  ``1.2.0-0``

      

   
   :depends bioconductor-bandits: ``>=1.18.0,<1.19.0``
   :depends bioconductor-bandits: ``>=1.18.1,<1.19.0a0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0a0``
   :depends bioconductor-tximport: ``>=1.30.0,<1.31.0``
   :depends bioconductor-tximport: ``>=1.30.0,<1.31.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-doparallel: 
   :depends r-dorng: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-mass: 
   :depends r-matrix: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
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

      mamba install bioconductor-differentialregulation

   and update with::

      mamba update bioconductor-differentialregulation

  To create a new environment, run::

      mamba create --name myenvname bioconductor-differentialregulation

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-differentialregulation:<tag>

   (see `bioconductor-differentialregulation/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-differentialregulation| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-differentialregulation.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-differentialregulation
   :alt:   (downloads)
.. |docker_bioconductor-differentialregulation| image:: https://quay.io/repository/biocontainers/bioconductor-differentialregulation/status
   :target: https://quay.io/repository/biocontainers/bioconductor-differentialregulation
.. _`bioconductor-differentialregulation/tags`: https://quay.io/repository/biocontainers/bioconductor-differentialregulation?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-differentialregulation";
        var versions = ["2.0.2","1.4.2","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-differentialregulation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-differentialregulation/README.html