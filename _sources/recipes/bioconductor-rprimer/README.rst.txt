:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rprimer'
.. highlight: bash

bioconductor-rprimer
====================

.. conda:recipe:: bioconductor-rprimer
   :replaces_section_title:
   :noindex:

   Design Degenerate Oligos from a Multiple DNA Sequence Alignment

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/rprimer.html
   :license: GPL-3
   :recipe: /`bioconductor-rprimer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rprimer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rprimer/meta.yaml>`_

   Functions\, workflow\, and a Shiny application for visualizing sequence conservation and designing degenerate primers\, probes\, and \(RT\)\-\(q\/d\)PCR assays from a multiple DNA sequence alignment. The results can be presented in data frame format and visualized as dashboard\-like plots. For more information\, please see the package vignette.


.. conda:package:: bioconductor-rprimer

   |downloads_bioconductor-rprimer| |docker_bioconductor-rprimer|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-bslib: 
   :depends r-dt: 
   :depends r-ggplot2: 
   :depends r-mathjaxr: 
   :depends r-patchwork: 
   :depends r-reshape2: 
   :depends r-shiny: 
   :depends r-shinycssloaders: 
   :depends r-shinyfeedback: 
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

      mamba install bioconductor-rprimer

   and update with::

      mamba update bioconductor-rprimer

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rprimer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rprimer:<tag>

   (see `bioconductor-rprimer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rprimer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rprimer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rprimer
   :alt:   (downloads)
.. |docker_bioconductor-rprimer| image:: https://quay.io/repository/biocontainers/bioconductor-rprimer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rprimer
.. _`bioconductor-rprimer/tags`: https://quay.io/repository/biocontainers/bioconductor-rprimer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rprimer";
        var versions = ["1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rprimer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rprimer/README.html