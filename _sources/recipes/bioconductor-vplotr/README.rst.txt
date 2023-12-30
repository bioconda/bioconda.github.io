:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-vplotr'
.. highlight: bash

bioconductor-vplotr
===================

.. conda:recipe:: bioconductor-vplotr
   :replaces_section_title:
   :noindex:

   Set of tools to make V\-plots and compute footprint profiles

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/VplotR.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-vplotr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vplotr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vplotr/meta.yaml>`_

   The pattern of digestion and protection from DNA nucleases such as DNAse I\, micrococcal nuclease\, and Tn5 transposase can be used to infer the location of associated proteins. This package contains useful functions to analyze patterns of paired\-end sequencing fragment density. VplotR facilitates the generation of V\-plots and footprint profiles over single or aggregated genomic loci of interest.


.. conda:package:: bioconductor-vplotr

   |downloads_bioconductor-vplotr| |docker_bioconductor-vplotr|

   :versions:
      
      

      ``1.12.1-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicalignments: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cowplot: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-zoo: 
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

      mamba install bioconductor-vplotr

   and update with::

      mamba update bioconductor-vplotr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-vplotr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-vplotr:<tag>

   (see `bioconductor-vplotr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-vplotr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-vplotr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-vplotr
   :alt:   (downloads)
.. |docker_bioconductor-vplotr| image:: https://quay.io/repository/biocontainers/bioconductor-vplotr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-vplotr
.. _`bioconductor-vplotr/tags`: https://quay.io/repository/biocontainers/bioconductor-vplotr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-vplotr";
        var versions = ["1.12.1","1.10.0","1.8.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-vplotr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-vplotr/README.html