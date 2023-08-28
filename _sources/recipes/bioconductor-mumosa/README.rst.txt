:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mumosa'
.. highlight: bash

bioconductor-mumosa
===================

.. conda:recipe:: bioconductor-mumosa
   :replaces_section_title:
   :noindex:

   Multi\-Modal Single\-Cell Analysis Methods

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/mumosa.html
   :license: GPL-3
   :recipe: /`bioconductor-mumosa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mumosa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mumosa/meta.yaml>`_

   Assorted utilities for multi\-modal analyses of single\-cell datasets. Includes functions to combine multiple modalities for downstream analysis\, perform MNN\-based batch correction across multiple modalities\, and to compute correlations between assay values for different modalities.


.. conda:package:: bioconductor-mumosa

   |downloads_bioconductor-mumosa| |docker_bioconductor-mumosa|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-batchelor: ``>=1.16.0,<1.17.0``
   :depends bioconductor-beachmat: ``>=2.16.0,<2.17.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biocneighbors: ``>=1.18.0,<1.19.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-biocsingular: ``>=1.16.0,<1.17.0``
   :depends bioconductor-delayedarray: ``>=0.26.0,<0.27.0``
   :depends bioconductor-delayedmatrixstats: ``>=1.22.0,<1.23.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-metapod: ``>=1.8.0,<1.9.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-scaledmatrix: ``>=1.8.0,<1.9.0``
   :depends bioconductor-scran: ``>=1.28.0,<1.29.0``
   :depends bioconductor-scuttle: ``>=1.10.0,<1.11.0``
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-igraph: 
   :depends r-matrix: 
   :depends r-uwot: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-mumosa

   and update with::

      mamba update bioconductor-mumosa

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mumosa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mumosa:<tag>

   (see `bioconductor-mumosa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mumosa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mumosa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mumosa
   :alt:   (downloads)
.. |docker_bioconductor-mumosa| image:: https://quay.io/repository/biocontainers/bioconductor-mumosa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mumosa
.. _`bioconductor-mumosa/tags`: https://quay.io/repository/biocontainers/bioconductor-mumosa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mumosa";
        var versions = ["1.8.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mumosa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mumosa/README.html