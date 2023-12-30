:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-traviz'
.. highlight: bash

bioconductor-traviz
===================

.. conda:recipe:: bioconductor-traviz
   :replaces_section_title:
   :noindex:

   Trajectory functions for visualization and interpretation.

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/traviz.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-traviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-traviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-traviz/meta.yaml>`_

   traviz provides a suite of functions to plot trajectory related objects from Bioconductor packages. It allows plotting trajectories in reduced dimension\, as well as averge gene expression smoothers as a function of pseudotime. Asides from general utility functions\, traviz also allows plotting trajectories estimated by Slingshot\, as well as smoothers estimated by tradeSeq. Furthermore\, it allows for visualization of Slingshot trajectories using ggplot2.


.. conda:package:: bioconductor-traviz

   |downloads_bioconductor-traviz| |docker_bioconductor-traviz|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-slingshot: ``>=2.8.0,<2.9.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-mgcv: 
   :depends r-princurve: 
   :depends r-rcolorbrewer: 
   :depends r-rgl: 
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

      mamba install bioconductor-traviz

   and update with::

      mamba update bioconductor-traviz

  To create a new environment, run::

      mamba create --name myenvname bioconductor-traviz

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-traviz:<tag>

   (see `bioconductor-traviz/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-traviz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-traviz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-traviz
   :alt:   (downloads)
.. |docker_bioconductor-traviz| image:: https://quay.io/repository/biocontainers/bioconductor-traviz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-traviz
.. _`bioconductor-traviz/tags`: https://quay.io/repository/biocontainers/bioconductor-traviz?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-traviz";
        var versions = ["1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-traviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-traviz/README.html