:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-roastgsa'
.. highlight: bash

bioconductor-roastgsa
=====================

.. conda:recipe:: bioconductor-roastgsa
   :replaces_section_title:
   :noindex:

   Rotation based gene set analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/roastgsa.html
   :license: GPL-3
   :recipe: /`bioconductor-roastgsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-roastgsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-roastgsa/meta.yaml>`_

   This package implements a variety of functions useful for gene set analysis using rotations to approximate the null distribution. It contributes with the implementation of seven test statistic scores that can be used with different goals and interpretations. Several functions are available to complement the statistical results with graphical representations.


.. conda:package:: bioconductor-roastgsa

   |downloads_bioconductor-roastgsa| |docker_bioconductor-roastgsa|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-rcolorbrewer: 
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

      mamba install bioconductor-roastgsa

   and update with::

      mamba update bioconductor-roastgsa

  To create a new environment, run::

      mamba create --name myenvname bioconductor-roastgsa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-roastgsa:<tag>

   (see `bioconductor-roastgsa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-roastgsa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-roastgsa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-roastgsa
   :alt:   (downloads)
.. |docker_bioconductor-roastgsa| image:: https://quay.io/repository/biocontainers/bioconductor-roastgsa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-roastgsa
.. _`bioconductor-roastgsa/tags`: https://quay.io/repository/biocontainers/bioconductor-roastgsa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-roastgsa";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-roastgsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-roastgsa/README.html