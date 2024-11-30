:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lrcelltypemarkers'
.. highlight: bash

bioconductor-lrcelltypemarkers
==============================

.. conda:recipe:: bioconductor-lrcelltypemarkers
   :replaces_section_title:
   :noindex:

   Marker gene information for LRcell R Bioconductor package

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/LRcellTypeMarkers.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-lrcelltypemarkers <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lrcelltypemarkers>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lrcelltypemarkers/meta.yaml>`_

   This is an external ExperimentData package for LRcell. This data package contains the gene enrichment scores calculated from scRNA\-seq dataset which indicates the gene enrichment of each cell type in certain brain region. LRcell package is used to identify specific sub\-cell types that drives the changes observed in a bulk RNA\-seq differential gene expression experiment. For more details\, please visit\: https\:\/\/github.com\/marvinquiet\/LRcell.


.. conda:package:: bioconductor-lrcelltypemarkers

   |downloads_bioconductor-lrcelltypemarkers| |docker_bioconductor-lrcelltypemarkers|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-experimenthub: ``>=2.10.0,<2.11.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-lrcelltypemarkers

   and update with::

      mamba update bioconductor-lrcelltypemarkers

  To create a new environment, run::

      mamba create --name myenvname bioconductor-lrcelltypemarkers

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lrcelltypemarkers:<tag>

   (see `bioconductor-lrcelltypemarkers/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lrcelltypemarkers| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lrcelltypemarkers.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lrcelltypemarkers
   :alt:   (downloads)
.. |docker_bioconductor-lrcelltypemarkers| image:: https://quay.io/repository/biocontainers/bioconductor-lrcelltypemarkers/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lrcelltypemarkers
.. _`bioconductor-lrcelltypemarkers/tags`: https://quay.io/repository/biocontainers/bioconductor-lrcelltypemarkers?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lrcelltypemarkers";
        var versions = ["1.10.0","1.8.0","1.6.0","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lrcelltypemarkers/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lrcelltypemarkers/README.html