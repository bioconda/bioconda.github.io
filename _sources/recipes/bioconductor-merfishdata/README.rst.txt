:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-merfishdata'
.. highlight: bash

bioconductor-merfishdata
========================

.. conda:recipe:: bioconductor-merfishdata
   :replaces_section_title:
   :noindex:

   Collection of public MERFISH datasets

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/MerfishData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-merfishdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-merfishdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-merfishdata/meta.yaml>`_

   MerfishData is an ExperimentHub package that serves publicly available datasets obtained with Multiplexed Error\-Robust Fluorescence in situ Hybridization \(MERFISH\). MERFISH is a massively multiplexed single\-molecule imaging technology capable of simultaneously measuring the copy number and spatial distribution of hundreds to tens of thousands of RNA species in individual cells. The scope of the package is to provide MERFISH data for benchmarking and analysis.


.. conda:package:: bioconductor-merfishdata

   |downloads_bioconductor-merfishdata| |docker_bioconductor-merfishdata|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.1-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.14.0,<3.15.0``
   :depends bioconductor-bumpymatrix: ``>=1.14.0,<1.15.0``
   :depends bioconductor-data-packages: ``>=20250104``
   :depends bioconductor-ebimage: ``>=4.48.0,<4.49.0``
   :depends bioconductor-experimenthub: ``>=2.14.0,<2.15.0``
   :depends bioconductor-hdf5array: ``>=1.34.0,<1.35.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-spatialexperiment: ``>=1.16.0,<1.17.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends curl: 
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-merfishdata

   and update with::

      mamba update bioconductor-merfishdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-merfishdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-merfishdata:<tag>

   (see `bioconductor-merfishdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-merfishdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-merfishdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-merfishdata
   :alt:   (downloads)
.. |docker_bioconductor-merfishdata| image:: https://quay.io/repository/biocontainers/bioconductor-merfishdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-merfishdata
.. _`bioconductor-merfishdata/tags`: https://quay.io/repository/biocontainers/bioconductor-merfishdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-merfishdata";
        var versions = ["1.8.0","1.4.1","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-merfishdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-merfishdata/README.html