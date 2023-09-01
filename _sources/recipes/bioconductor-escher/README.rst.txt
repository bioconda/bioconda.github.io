:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-escher'
.. highlight: bash

bioconductor-escher
===================

.. conda:recipe:: bioconductor-escher
   :replaces_section_title:
   :noindex:

   Unified multi\-dimensional visualizations with Gestalt principles

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/escheR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-escher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-escher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-escher/meta.yaml>`_

   The creation of effective visualizations is a fundamental component of data analysis. In biomedical research\, new challenges are emerging to visualize multi\-dimensional data in a 2D space\, but current data visualization tools have limited capabilities. To address this problem\, we leverage Gestalt principles to improve the design and interpretability of multi\-dimensional data in 2D data visualizations\, layering aesthetics to display multiple variables. The proposed visualization can be applied to spatially\-resolved transcriptomics data\, but also broadly to data visualized in 2D space\, such as embedding visualizations. We provide this open source R package escheR\, which is built off of the state\-of\-the\-art ggplot2 visualization framework and can be seamlessly integrated into genomics toolboxes and workflows.


.. conda:package:: bioconductor-escher

   |downloads_bioconductor-escher| |docker_bioconductor-escher|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-spatialexperiment: ``>=1.10.0,<1.11.0``
   :depends bioconductor-spatiallibd: ``>=1.12.0,<1.13.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
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

      mamba install bioconductor-escher

   and update with::

      mamba update bioconductor-escher

  To create a new environment, run::

      mamba create --name myenvname bioconductor-escher

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-escher:<tag>

   (see `bioconductor-escher/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-escher| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-escher.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-escher
   :alt:   (downloads)
.. |docker_bioconductor-escher| image:: https://quay.io/repository/biocontainers/bioconductor-escher/status
   :target: https://quay.io/repository/biocontainers/bioconductor-escher
.. _`bioconductor-escher/tags`: https://quay.io/repository/biocontainers/bioconductor-escher?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-escher";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-escher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-escher/README.html