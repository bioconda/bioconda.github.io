:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-intomics'
.. highlight: bash

bioconductor-intomics
=====================

.. conda:recipe:: bioconductor-intomics
   :replaces_section_title:
   :noindex:

   Integrative analysis of multi\-omics data to infer regulatory networks

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/IntOMICS.html
   :license: GPL-3
   :recipe: /`bioconductor-intomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-intomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-intomics/meta.yaml>`_

   IntOMICS is an efficient integrative framework based on Bayesian networks. IntOMICS systematically analyses gene expression \(GE\)\, DNA methylation \(METH\)\, copy number variation \(CNV\) and biological prior knowledge \(B\) to infer regulatory networks. IntOMICS complements the missing biological prior knowledge by so\-called empirical biological knowledge \(empB\)\, estimated from the available experimental data. An automatically tuned MCMC algorithm \(Yang and Rosenthal\, 2017\) estimates model parameters and the empirical biological knowledge. Conventional MCMC algorithm with additional Markov blanket resampling \(MBR\) step \(Su and Borsuk\, 2016\) infers resulting regulatory network structure consisting of three types of nodes\: GE nodes refer to gene expression levels\, CNV nodes refer to associated copy number variations\, and METH nodes refer to associated DNA methylation probe\(s\).


.. conda:package:: bioconductor-intomics

   |downloads_bioconductor-intomics| |docker_bioconductor-intomics|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bestnormalize: 
   :depends r-bnlearn: 
   :depends r-bnstruct: 
   :depends r-cowplot: 
   :depends r-ggplot2: 
   :depends r-ggraph: 
   :depends r-gplots: 
   :depends r-igraph: 
   :depends r-matrixstats: 
   :depends r-numbers: 
   :depends r-rcolorbrewer: 
   :depends r-rlang: 
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

      mamba install bioconductor-intomics

   and update with::

      mamba update bioconductor-intomics

  To create a new environment, run::

      mamba create --name myenvname bioconductor-intomics

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-intomics:<tag>

   (see `bioconductor-intomics/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-intomics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-intomics.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-intomics
   :alt:   (downloads)
.. |docker_bioconductor-intomics| image:: https://quay.io/repository/biocontainers/bioconductor-intomics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-intomics
.. _`bioconductor-intomics/tags`: https://quay.io/repository/biocontainers/bioconductor-intomics?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-intomics";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-intomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-intomics/README.html