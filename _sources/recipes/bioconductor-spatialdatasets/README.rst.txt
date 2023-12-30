:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spatialdatasets'
.. highlight: bash

bioconductor-spatialdatasets
============================

.. conda:recipe:: bioconductor-spatialdatasets
   :replaces_section_title:
   :noindex:

   Collection of spatial omics datasets

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/SpatialDatasets.html
   :license: GPL-3
   :recipe: /`bioconductor-spatialdatasets <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spatialdatasets>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spatialdatasets/meta.yaml>`_

   This is a collection of publically available spatial omics datasets. Where possible we have curated these datasets as either SpatialExperiments\, MoleculeExperiments or CytoImageLists and included annotations of the sample characteristics.


.. conda:package:: bioconductor-spatialdatasets

   |downloads_bioconductor-spatialdatasets| |docker_bioconductor-spatialdatasets|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-experimenthub: ``>=2.10.0,<2.11.0``
   :depends bioconductor-spatialexperiment: ``>=1.12.0,<1.13.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-spatialdatasets

   and update with::

      mamba update bioconductor-spatialdatasets

  To create a new environment, run::

      mamba create --name myenvname bioconductor-spatialdatasets

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spatialdatasets:<tag>

   (see `bioconductor-spatialdatasets/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spatialdatasets| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spatialdatasets.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spatialdatasets
   :alt:   (downloads)
.. |docker_bioconductor-spatialdatasets| image:: https://quay.io/repository/biocontainers/bioconductor-spatialdatasets/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spatialdatasets
.. _`bioconductor-spatialdatasets/tags`: https://quay.io/repository/biocontainers/bioconductor-spatialdatasets?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spatialdatasets";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spatialdatasets/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spatialdatasets/README.html