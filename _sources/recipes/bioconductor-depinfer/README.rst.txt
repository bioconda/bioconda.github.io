:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-depinfer'
.. highlight: bash

bioconductor-depinfer
=====================

.. conda:recipe:: bioconductor-depinfer
   :replaces_section_title:
   :noindex:

   Inferring tumor\-specific cancer dependencies through integrating ex\-vivo drug response assays and drug\-protein profiling

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/DepInfeR.html
   :license: GPL-3
   :recipe: /`bioconductor-depinfer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-depinfer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-depinfer/meta.yaml>`_

   DepInfeR integrates two experimentally accessible input data matrices\: the drug sensitivity profiles of cancer cell lines or primary tumors ex\-vivo \(X\)\, and the drug affinities of a set of proteins \(Y\)\, to infer a matrix of molecular protein dependencies of the cancers \(ß\). DepInfeR deconvolutes the protein inhibition effect on the viability phenotype by using regularized multivariate linear regression. It assigns a “dependence coefficient” to each protein and each sample\, and therefore could be used to gain a causal and accurate understanding of functional consequences of genomic aberrations in a heterogeneous disease\, as well as to guide the choice of pharmacological intervention for a specific cancer type\, sub\-type\, or an individual patient. For more information\, please read out preprint on bioRxiv\: https\:\/\/doi.org\/10.1101\/2022.01.11.475864.


.. conda:package:: bioconductor-depinfer

   |downloads_bioconductor-depinfer| |docker_bioconductor-depinfer|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-glmnet: 
   :depends r-matrixstats: 
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

      mamba install bioconductor-depinfer

   and update with::

      mamba update bioconductor-depinfer

  To create a new environment, run::

      mamba create --name myenvname bioconductor-depinfer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-depinfer:<tag>

   (see `bioconductor-depinfer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-depinfer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-depinfer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-depinfer
   :alt:   (downloads)
.. |docker_bioconductor-depinfer| image:: https://quay.io/repository/biocontainers/bioconductor-depinfer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-depinfer
.. _`bioconductor-depinfer/tags`: https://quay.io/repository/biocontainers/bioconductor-depinfer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-depinfer";
        var versions = ["1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-depinfer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-depinfer/README.html