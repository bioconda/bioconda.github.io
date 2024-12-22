:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-stexampledata'
.. highlight: bash

bioconductor-stexampledata
==========================

.. conda:recipe:: bioconductor-stexampledata
   :replaces_section_title:
   :noindex:

   Collection of spatially\-resolved transcriptomics datasets in SpatialExperiment Bioconductor format

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/STexampleData.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-stexampledata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stexampledata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stexampledata/meta.yaml>`_

   Collection of spatially\-resolved transcriptomics \(SRT\) datasets in SpatialExperiment Bioconductor format\, for use in examples\, demonstrations\, and tutorials. The datasets are from several different SRT platforms and have been sourced from various publicly available sources. Several datasets include images and\/or ground truth annotation labels.


.. conda:package:: bioconductor-stexampledata

   |downloads_bioconductor-stexampledata| |docker_bioconductor-stexampledata|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-experimenthub: ``>=2.14.0,<2.15.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-spatialexperiment: ``>=1.16.0,<1.17.0``
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

      mamba install bioconductor-stexampledata

   and update with::

      mamba update bioconductor-stexampledata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-stexampledata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-stexampledata:<tag>

   (see `bioconductor-stexampledata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-stexampledata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-stexampledata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-stexampledata
   :alt:   (downloads)
.. |docker_bioconductor-stexampledata| image:: https://quay.io/repository/biocontainers/bioconductor-stexampledata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-stexampledata
.. _`bioconductor-stexampledata/tags`: https://quay.io/repository/biocontainers/bioconductor-stexampledata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-stexampledata";
        var versions = ["1.14.0","1.10.0","1.8.0","1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-stexampledata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-stexampledata/README.html