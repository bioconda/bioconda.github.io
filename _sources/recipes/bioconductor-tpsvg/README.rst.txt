:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tpsvg'
.. highlight: bash

bioconductor-tpsvg
==================

.. conda:recipe:: bioconductor-tpsvg
   :replaces_section_title:
   :noindex:

   Thin plate models to detect spatially variable genes

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/tpSVG.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-tpsvg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tpsvg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tpsvg/meta.yaml>`_

   The goal of \`tpSVG\` is to detect and visualize spatial variation in the gene expression for spatially resolved transcriptomics data analysis. Specifically\, \`tpSVG\` introduces a family of count\-based models\, with generalizable parametric assumptions such as Poisson distribution or negative binomial distribution. In addition\, comparing to currently available count\-based model for spatially resolved data analysis\, the \`tpSVG\` models improves computational time\, and hence greatly improves the applicability of count\-based models in SRT data analysis.


.. conda:package:: bioconductor-tpsvg

   |downloads_bioconductor-tpsvg| |docker_bioconductor-tpsvg|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-matrixgenerics: ``>=1.18.0,<1.19.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-spatialexperiment: ``>=1.16.0,<1.17.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-mgcv: 
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

      mamba install bioconductor-tpsvg

   and update with::

      mamba update bioconductor-tpsvg

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tpsvg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tpsvg:<tag>

   (see `bioconductor-tpsvg/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tpsvg| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tpsvg.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tpsvg
   :alt:   (downloads)
.. |docker_bioconductor-tpsvg| image:: https://quay.io/repository/biocontainers/bioconductor-tpsvg/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tpsvg
.. _`bioconductor-tpsvg/tags`: https://quay.io/repository/biocontainers/bioconductor-tpsvg?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tpsvg";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tpsvg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tpsvg/README.html