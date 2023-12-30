:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-velociraptor'
.. highlight: bash

bioconductor-velociraptor
=========================

.. conda:recipe:: bioconductor-velociraptor
   :replaces_section_title:
   :noindex:

   Toolkit for Single\-Cell Velocity

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/velociraptor.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-velociraptor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-velociraptor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-velociraptor/meta.yaml>`_

   This package provides Bioconductor\-friendly wrappers for RNA velocity calculations in single\-cell RNA\-seq data. We use the basilisk package to manage Conda environments\, and the zellkonverter package to convert data structures between SingleCellExperiment \(R\) and AnnData \(Python\). The information produced by the velocity methods is stored in the various components of the SingleCellExperiment class.


.. conda:package:: bioconductor-velociraptor

   |downloads_bioconductor-velociraptor| |docker_bioconductor-velociraptor|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-basilisk: ``>=1.14.0,<1.15.0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biocsingular: ``>=1.18.0,<1.19.0``
   :depends bioconductor-delayedarray: ``>=0.28.0,<0.29.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-scuttle: ``>=1.12.0,<1.13.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-zellkonverter: ``>=1.12.0,<1.13.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrix: 
   :depends r-reticulate: 
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

      mamba install bioconductor-velociraptor

   and update with::

      mamba update bioconductor-velociraptor

  To create a new environment, run::

      mamba create --name myenvname bioconductor-velociraptor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-velociraptor:<tag>

   (see `bioconductor-velociraptor/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-velociraptor| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-velociraptor.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-velociraptor
   :alt:   (downloads)
.. |docker_bioconductor-velociraptor| image:: https://quay.io/repository/biocontainers/bioconductor-velociraptor/status
   :target: https://quay.io/repository/biocontainers/bioconductor-velociraptor
.. _`bioconductor-velociraptor/tags`: https://quay.io/repository/biocontainers/bioconductor-velociraptor?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-velociraptor";
        var versions = ["1.12.0","1.10.0","1.8.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-velociraptor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-velociraptor/README.html