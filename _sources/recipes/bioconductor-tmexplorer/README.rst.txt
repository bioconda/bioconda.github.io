:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tmexplorer'
.. highlight: bash

bioconductor-tmexplorer
=======================

.. conda:recipe:: bioconductor-tmexplorer
   :replaces_section_title:
   :noindex:

   A Collection of Tumour Microenvironment Single\-cell RNA Sequencing Datasets and Corresponding Metadata

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/TMExplorer.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-tmexplorer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tmexplorer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tmexplorer/meta.yaml>`_

   This package provides a tool to search and download a collection of tumour microenvironment single\-cell RNA sequencing datasets and their metadata. TMExplorer aims to act as a single point of entry for users looking to study the tumour microenvironment at the single cell level. Users can quickly search available datasets using the metadata table and then download the ones they are interested in for analysis.


.. conda:package:: bioconductor-tmexplorer

   |downloads_bioconductor-tmexplorer| |docker_bioconductor-tmexplorer|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.0.1-0``,  ``0.99.6-0``

      

   
   :depends bioconductor-biocfilecache: ``>=2.10.0,<2.11.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrix: 
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

      mamba install bioconductor-tmexplorer

   and update with::

      mamba update bioconductor-tmexplorer

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tmexplorer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tmexplorer:<tag>

   (see `bioconductor-tmexplorer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tmexplorer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tmexplorer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tmexplorer
   :alt:   (downloads)
.. |docker_bioconductor-tmexplorer| image:: https://quay.io/repository/biocontainers/bioconductor-tmexplorer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tmexplorer
.. _`bioconductor-tmexplorer/tags`: https://quay.io/repository/biocontainers/bioconductor-tmexplorer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tmexplorer";
        var versions = ["1.12.0","1.10.0","1.8.0","1.4.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tmexplorer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tmexplorer/README.html