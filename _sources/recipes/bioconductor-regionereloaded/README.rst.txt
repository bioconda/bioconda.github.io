:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-regionereloaded'
.. highlight: bash

bioconductor-regionereloaded
============================

.. conda:recipe:: bioconductor-regionereloaded
   :replaces_section_title:
   :noindex:

   RegioneReloaded\: Multiple Association for Genomic Region Sets

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/regioneReloaded.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-regionereloaded <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-regionereloaded>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-regionereloaded/meta.yaml>`_

   RegioneReloaded is a package that allows simultaneous analysis of associations between genomic region sets\, enabling clustering of data and the creation of ready\-to\-publish graphs. It takes over and expands on all the features of its predecessor regioneR. It also incorporates a strategy to improve p\-value calculations and normalize z\-scores coming from multiple analysis to allow for their direct comparison. RegioneReloaded builds upon regioneR by adding new plotting functions for obtaining publication\-ready graphs.


.. conda:package:: bioconductor-regionereloaded

   |downloads_bioconductor-regionereloaded| |docker_bioconductor-regionereloaded|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-regioner: ``>=1.34.0,<1.35.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cluster: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-rtsne: 
   :depends r-scales: 
   :depends r-umap: 
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

      mamba install bioconductor-regionereloaded

   and update with::

      mamba update bioconductor-regionereloaded

  To create a new environment, run::

      mamba create --name myenvname bioconductor-regionereloaded

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-regionereloaded:<tag>

   (see `bioconductor-regionereloaded/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-regionereloaded| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-regionereloaded.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-regionereloaded
   :alt:   (downloads)
.. |docker_bioconductor-regionereloaded| image:: https://quay.io/repository/biocontainers/bioconductor-regionereloaded/status
   :target: https://quay.io/repository/biocontainers/bioconductor-regionereloaded
.. _`bioconductor-regionereloaded/tags`: https://quay.io/repository/biocontainers/bioconductor-regionereloaded?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-regionereloaded";
        var versions = ["1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-regionereloaded/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-regionereloaded/README.html