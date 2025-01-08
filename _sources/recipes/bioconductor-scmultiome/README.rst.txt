:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scmultiome'
.. highlight: bash

bioconductor-scmultiome
=======================

.. conda:recipe:: bioconductor-scmultiome
   :replaces_section_title:
   :noindex:

   Collection of Public Single\-Cell Multiome \(scATAC \+ scRNAseq\) Datasets

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/scMultiome.html
   :license: CC BY-SA 4.0
   :recipe: /`bioconductor-scmultiome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scmultiome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scmultiome/meta.yaml>`_

   Single cell multiome data\, containing chromatin accessibility \(scATAC\-seq\) and gene expression \(scRNA\-seq\) information analyzed with the ArchR package and presented as MultiAssayExperiment objects.


.. conda:package:: bioconductor-scmultiome

   |downloads_bioconductor-scmultiome| |docker_bioconductor-scmultiome|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-alabaster.matrix: ``>=1.6.0,<1.7.0``
   :depends bioconductor-annotationhub: ``>=3.14.0,<3.15.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-experimenthub: ``>=2.14.0,<2.15.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-hdf5array: ``>=1.34.0,<1.35.0``
   :depends bioconductor-multiassayexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-rhdf5: ``>=2.50.0,<2.51.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends curl: 
   :depends r-azurestor: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-checkmate: 
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

      mamba install bioconductor-scmultiome

   and update with::

      mamba update bioconductor-scmultiome

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scmultiome

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scmultiome:<tag>

   (see `bioconductor-scmultiome/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scmultiome| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scmultiome.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scmultiome
   :alt:   (downloads)
.. |docker_bioconductor-scmultiome| image:: https://quay.io/repository/biocontainers/bioconductor-scmultiome/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scmultiome
.. _`bioconductor-scmultiome/tags`: https://quay.io/repository/biocontainers/bioconductor-scmultiome?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scmultiome";
        var versions = ["1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scmultiome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scmultiome/README.html