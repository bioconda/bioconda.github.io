:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mudata'
.. highlight: bash

bioconductor-mudata
===================

.. conda:recipe:: bioconductor-mudata
   :replaces_section_title:
   :noindex:

   Serialization for MultiAssayExperiment Objects

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/MuData.html
   :license: GPL-3
   :recipe: /`bioconductor-mudata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mudata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mudata/meta.yaml>`_

   Save MultiAssayExperiments to h5mu files supported by muon and mudata. Muon is a Python framework for multimodal omics data analysis. It uses an HDF5\-based format for data storage.


.. conda:package:: bioconductor-mudata

   |downloads_bioconductor-mudata| |docker_bioconductor-mudata|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-delayedarray: ``>=0.26.0,<0.27.0``
   :depends bioconductor-multiassayexperiment: ``>=1.26.0,<1.27.0``
   :depends bioconductor-rhdf5: ``>=2.44.0,<2.45.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
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

      mamba install bioconductor-mudata

   and update with::

      mamba update bioconductor-mudata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mudata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mudata:<tag>

   (see `bioconductor-mudata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mudata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mudata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mudata
   :alt:   (downloads)
.. |docker_bioconductor-mudata| image:: https://quay.io/repository/biocontainers/bioconductor-mudata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mudata
.. _`bioconductor-mudata/tags`: https://quay.io/repository/biocontainers/bioconductor-mudata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mudata";
        var versions = ["1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mudata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mudata/README.html