:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-smoothclust'
.. highlight: bash

bioconductor-smoothclust
========================

.. conda:recipe:: bioconductor-smoothclust
   :replaces_section_title:
   :noindex:

   smoothclust

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/smoothclust.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-smoothclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-smoothclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-smoothclust/meta.yaml>`_

   Method for segmentation of spatial domains and spatially\-aware clustering in spatial transcriptomics data. The method generates spatial domains with smooth boundaries by smoothing gene expression profiles across neighboring spatial locations\, followed by unsupervised clustering. Spatial domains consisting of consistent mixtures of cell types may then be further investigated by applying cell type compositional analyses or differential analyses.


.. conda:package:: bioconductor-smoothclust

   |downloads_bioconductor-smoothclust| |docker_bioconductor-smoothclust|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-sparsematrixstats: ``>=1.18.0,<1.19.0``
   :depends bioconductor-spatialexperiment: ``>=1.16.0,<1.17.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-spdep: 
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

      mamba install bioconductor-smoothclust

   and update with::

      mamba update bioconductor-smoothclust

  To create a new environment, run::

      mamba create --name myenvname bioconductor-smoothclust

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-smoothclust:<tag>

   (see `bioconductor-smoothclust/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-smoothclust| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-smoothclust.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-smoothclust
   :alt:   (downloads)
.. |docker_bioconductor-smoothclust| image:: https://quay.io/repository/biocontainers/bioconductor-smoothclust/status
   :target: https://quay.io/repository/biocontainers/bioconductor-smoothclust
.. _`bioconductor-smoothclust/tags`: https://quay.io/repository/biocontainers/bioconductor-smoothclust?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-smoothclust";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-smoothclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-smoothclust/README.html