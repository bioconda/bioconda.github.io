:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ggspavis'
.. highlight: bash

bioconductor-ggspavis
=====================

.. conda:recipe:: bioconductor-ggspavis
   :replaces_section_title:
   :noindex:

   Visualization functions for spatially resolved transcriptomics data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ggspavis.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-ggspavis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggspavis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggspavis/meta.yaml>`_

   Visualization functions for spatially resolved transcriptomics datasets stored in SpatialExperiment format. Includes functions to create several types of plots for data from from spot\-based \(e.g. 10x Genomics Visium\) and molecule\-based \(e.g. seqFISH\) technological platforms.


.. conda:package:: bioconductor-ggspavis

   |downloads_bioconductor-ggspavis| |docker_bioconductor-ggspavis|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-spatialexperiment: ``>=1.16.0,<1.17.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-ggside: 
   :depends r-rcolorbrewer: 
   :depends r-scales: 
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

      mamba install bioconductor-ggspavis

   and update with::

      mamba update bioconductor-ggspavis

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ggspavis

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ggspavis:<tag>

   (see `bioconductor-ggspavis/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ggspavis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ggspavis.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ggspavis
   :alt:   (downloads)
.. |docker_bioconductor-ggspavis| image:: https://quay.io/repository/biocontainers/bioconductor-ggspavis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ggspavis
.. _`bioconductor-ggspavis/tags`: https://quay.io/repository/biocontainers/bioconductor-ggspavis?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ggspavis";
        var versions = ["1.12.0","1.8.0","1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ggspavis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ggspavis/README.html