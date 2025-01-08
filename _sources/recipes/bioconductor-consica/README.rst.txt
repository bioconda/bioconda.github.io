:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-consica'
.. highlight: bash

bioconductor-consica
====================

.. conda:recipe:: bioconductor-consica
   :replaces_section_title:
   :noindex:

   consensus Independent Component Analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/consICA.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-consica <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-consica>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-consica/meta.yaml>`_

   consICA implements a data\-driven deconvolution method – consensus independent component analysis \(ICA\) to decompose heterogeneous omics data and extract features suitable for patient diagnostics and prognostics. The method separates biologically relevant transcriptional signals from technical effects and provides information about the cellular composition and biological processes. The implementation of parallel computing in the package ensures efficient analysis of modern multicore systems.


.. conda:package:: bioconductor-consica

   |downloads_bioconductor-consica| |docker_bioconductor-consica|

   :versions:
      
      

      ``2.4.0-0``,  ``2.0.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-go.db: ``>=3.20.0,<3.21.0``
   :depends bioconductor-graph: ``>=1.84.0,<1.85.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.20.0,<3.21.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-topgo: ``>=2.58.0,<2.59.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-fastica: ``>=1.2.1``
   :depends r-ggplot2: 
   :depends r-pheatmap: 
   :depends r-rfast: 
   :depends r-sm: 
   :depends r-survival: 
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

      mamba install bioconductor-consica

   and update with::

      mamba update bioconductor-consica

  To create a new environment, run::

      mamba create --name myenvname bioconductor-consica

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-consica:<tag>

   (see `bioconductor-consica/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-consica| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-consica.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-consica
   :alt:   (downloads)
.. |docker_bioconductor-consica| image:: https://quay.io/repository/biocontainers/bioconductor-consica/status
   :target: https://quay.io/repository/biocontainers/bioconductor-consica
.. _`bioconductor-consica/tags`: https://quay.io/repository/biocontainers/bioconductor-consica?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-consica";
        var versions = ["2.4.0","2.0.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-consica/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-consica/README.html