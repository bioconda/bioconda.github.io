:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-animalcules'
.. highlight: bash

bioconductor-animalcules
========================

.. conda:recipe:: bioconductor-animalcules
   :replaces_section_title:
   :noindex:

   Interactive microbiome analysis toolkit

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/animalcules.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-animalcules <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-animalcules>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-animalcules/meta.yaml>`_

   animalcules is an R package for utilizing up\-to\-date data analytics\, visualization methods\, and machine learning models to provide users an easy\-to\-use interactive microbiome analysis framework. It can be used as a standalone software package or users can explore their data with the accompanying interactive R Shiny application. Traditional microbiome analysis such as alpha\/beta diversity and differential abundance analysis are enhanced\, while new methods like biomarker identification are introduced by animalcules. Powerful interactive and dynamic figures generated by animalcules enable users to understand their data better and discover new insights.


.. conda:package:: bioconductor-animalcules

   |downloads_bioconductor-animalcules| |docker_bioconductor-animalcules|

   :versions:
      
      

      ``1.22.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.6-0``

      

   
   :depends bioconductor-deseq2: ``>=1.46.0,<1.47.0``
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends bioconductor-multiassayexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-ape: 
   :depends r-assertthat: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-caret: 
   :depends r-covr: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-forcats: 
   :depends r-ggforce: 
   :depends r-ggplot2: 
   :depends r-gunifrac: 
   :depends r-lattice: 
   :depends r-magrittr: 
   :depends r-matrix: 
   :depends r-plotly: 
   :depends r-rentrez: 
   :depends r-reshape2: 
   :depends r-rocit: 
   :depends r-scales: 
   :depends r-shiny: 
   :depends r-shinyjs: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-tsne: 
   :depends r-umap: 
   :depends r-vegan: 
   :depends r-xml: 
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

      mamba install bioconductor-animalcules

   and update with::

      mamba update bioconductor-animalcules

  To create a new environment, run::

      mamba create --name myenvname bioconductor-animalcules

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-animalcules:<tag>

   (see `bioconductor-animalcules/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-animalcules| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-animalcules.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-animalcules
   :alt:   (downloads)
.. |docker_bioconductor-animalcules| image:: https://quay.io/repository/biocontainers/bioconductor-animalcules/status
   :target: https://quay.io/repository/biocontainers/bioconductor-animalcules
.. _`bioconductor-animalcules/tags`: https://quay.io/repository/biocontainers/bioconductor-animalcules?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-animalcules";
        var versions = ["1.22.0","1.16.0","1.14.0","1.10.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-animalcules/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-animalcules/README.html