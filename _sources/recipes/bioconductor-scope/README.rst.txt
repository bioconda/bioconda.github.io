:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scope'
.. highlight: bash

bioconductor-scope
==================

.. conda:recipe:: bioconductor-scope
   :replaces_section_title:
   :noindex:

   A normalization and copy number estimation method for single\-cell DNA sequencing

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/SCOPE.html
   :license: GPL-2
   :recipe: /`bioconductor-scope <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scope>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scope/meta.yaml>`_

   Whole genome single\-cell DNA sequencing \(scDNA\-seq\) enables characterization of copy number profiles at the cellular level. This circumvents the averaging effects associated with bulk\-tissue sequencing and has increased resolution yet decreased ambiguity in deconvolving cancer subclones and elucidating cancer evolutionary history. ScDNA\-seq data is\, however\, sparse\, noisy\, and highly variable even within a homogeneous cell population\, due to the biases and artifacts that are introduced during the library preparation and sequencing procedure. Here\, we propose SCOPE\, a normalization and copy number estimation method for scDNA\-seq data. The distinguishing features of SCOPE include\: \(i\) utilization of cell\-specific Gini coefficients for quality controls and for identification of normal\/diploid cells\, which are further used as negative control samples in a Poisson latent factor model for normalization\; \(ii\) modeling of GC content bias using an expectation\-maximization algorithm embedded in the Poisson generalized linear models\, which accounts for the different copy number states along the genome\; \(iii\) a cross\-sample iterative segmentation procedure to identify breakpoints that are shared across cells from the same genetic background.


.. conda:package:: bioconductor-scope

   |downloads_bioconductor-scope| |docker_bioconductor-scope|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-bsgenome: ``>=1.70.0,<1.71.0``
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg19: ``>=1.4.0,<1.5.0``
   :depends bioconductor-dnacopy: ``>=1.76.0,<1.77.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-desctools: 
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-gplots: 
   :depends r-rcolorbrewer: 
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

      mamba install bioconductor-scope

   and update with::

      mamba update bioconductor-scope

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scope

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scope:<tag>

   (see `bioconductor-scope/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scope| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scope.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scope
   :alt:   (downloads)
.. |docker_bioconductor-scope| image:: https://quay.io/repository/biocontainers/bioconductor-scope/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scope
.. _`bioconductor-scope/tags`: https://quay.io/repository/biocontainers/bioconductor-scope?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scope";
        var versions = ["1.14.0","1.12.0","1.10.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scope/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scope/README.html