:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tradeseq'
.. highlight: bash

bioconductor-tradeseq
=====================

.. conda:recipe:: bioconductor-tradeseq
   :replaces_section_title:
   :noindex:

   trajectory\-based differential expression analysis for sequencing data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/tradeSeq.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-tradeseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tradeseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tradeseq/meta.yaml>`_

   tradeSeq provides a flexible method for fitting regression models that can be used to find genes that are differentially expressed along one or multiple lineages in a trajectory. Based on the fitted models\, it uses a variety of tests suited to answer different questions of interest\, e.g. the discovery of genes for which expression is associated with pseudotime\, or which are differentially expressed \(in a specific region\) along the trajectory. It fits a negative binomial generalized additive model \(GAM\) for each gene\, and performs inference on the parameters of the GAM.


.. conda:package:: bioconductor-tradeseq

   |downloads_bioconductor-tradeseq| |docker_bioconductor-tradeseq|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-edger: ``>=4.0.0,<4.1.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-slingshot: ``>=2.10.0,<2.11.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-trajectoryutils: ``>=1.10.0,<1.11.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-igraph: 
   :depends r-magrittr: 
   :depends r-mass: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-mgcv: 
   :depends r-pbapply: 
   :depends r-princurve: 
   :depends r-rcolorbrewer: 
   :depends r-tibble: 
   :depends r-viridis: 
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

      mamba install bioconductor-tradeseq

   and update with::

      mamba update bioconductor-tradeseq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tradeseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tradeseq:<tag>

   (see `bioconductor-tradeseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tradeseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tradeseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tradeseq
   :alt:   (downloads)
.. |docker_bioconductor-tradeseq| image:: https://quay.io/repository/biocontainers/bioconductor-tradeseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tradeseq
.. _`bioconductor-tradeseq/tags`: https://quay.io/repository/biocontainers/bioconductor-tradeseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tradeseq";
        var versions = ["1.16.0","1.14.0","1.12.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tradeseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tradeseq/README.html