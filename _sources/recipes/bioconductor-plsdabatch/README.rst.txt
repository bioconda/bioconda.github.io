:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-plsdabatch'
.. highlight: bash

bioconductor-plsdabatch
=======================

.. conda:recipe:: bioconductor-plsdabatch
   :replaces_section_title:
   :noindex:

   PLSDA\-batch

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/PLSDAbatch.html
   :license: GPL-3
   :recipe: /`bioconductor-plsdabatch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plsdabatch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plsdabatch/meta.yaml>`_

   A novel framework to correct for batch effects prior to any downstream analysis in microbiome data based on Projection to Latent Structures Discriminant Analysis. The main method is named “PLSDA\-batch”. It first estimates treatment and batch variation with latent components\, then subtracts batch\-associated components from the data whilst preserving biological variation of interest. PLSDA\-batch is highly suitable for microbiome data as it is non\-parametric\, multivariate and allows for ordination and data visualisation. Combined with centered log\-ratio transformation for addressing uneven library sizes and compositional structure\, PLSDA\-batch addresses all characteristics of microbiome data that existing correction methods have ignored so far. Two other variants are proposed for 1\/ unbalanced batch x treatment designs that are commonly encountered in studies with small sample sizes\, and for 2\/ selection of discriminative variables amongst treatment groups to avoid overfitting in classification problems. These two variants have widened the scope of applicability of PLSDA\-batch to different data settings.


.. conda:package:: bioconductor-plsdabatch

   |downloads_bioconductor-plsdabatch| |docker_bioconductor-plsdabatch|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biocstyle: ``>=2.34.0,<2.35.0``
   :depends bioconductor-mixomics: ``>=6.30.0,<6.31.0``
   :depends bioconductor-treesummarizedexperiment: ``>=2.14.0,<2.15.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-gridextra: 
   :depends r-lmertest: 
   :depends r-performance: 
   :depends r-pheatmap: 
   :depends r-rdpack: 
   :depends r-scales: 
   :depends r-vegan: 
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

      mamba install bioconductor-plsdabatch

   and update with::

      mamba update bioconductor-plsdabatch

  To create a new environment, run::

      mamba create --name myenvname bioconductor-plsdabatch

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-plsdabatch:<tag>

   (see `bioconductor-plsdabatch/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-plsdabatch| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-plsdabatch.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-plsdabatch
   :alt:   (downloads)
.. |docker_bioconductor-plsdabatch| image:: https://quay.io/repository/biocontainers/bioconductor-plsdabatch/status
   :target: https://quay.io/repository/biocontainers/bioconductor-plsdabatch
.. _`bioconductor-plsdabatch/tags`: https://quay.io/repository/biocontainers/bioconductor-plsdabatch?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-plsdabatch";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-plsdabatch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-plsdabatch/README.html