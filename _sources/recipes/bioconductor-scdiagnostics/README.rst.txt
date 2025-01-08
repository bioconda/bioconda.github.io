:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scdiagnostics'
.. highlight: bash

bioconductor-scdiagnostics
==========================

.. conda:recipe:: bioconductor-scdiagnostics
   :replaces_section_title:
   :noindex:

   Cell type annotation diagnostics

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/scDiagnostics.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-scdiagnostics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scdiagnostics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scdiagnostics/meta.yaml>`_

   The scDiagnostics package provides diagnostic plots to assess the quality of cell type assignments from single cell gene expression profiles. The implemented functionality allows to assess the reliability of cell type annotations\, investigate gene expression patterns\, and explore relationships between different cell types in query and reference datasets allowing users to detect potential misalignments between reference and query datasets. The package also provides visualization capabilities for diagnostics purposes.


.. conda:package:: bioconductor-scdiagnostics

   |downloads_bioconductor-scdiagnostics| |docker_bioconductor-scdiagnostics|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-bluster: ``>=1.16.0,<1.17.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cramer: 
   :depends r-ggplot2: 
   :depends r-ggridges: 
   :depends r-isotree: 
   :depends r-patchwork: 
   :depends r-ranger: 
   :depends r-rlang: 
   :depends r-speedglm: 
   :depends r-transport: 
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

      mamba install bioconductor-scdiagnostics

   and update with::

      mamba update bioconductor-scdiagnostics

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scdiagnostics

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scdiagnostics:<tag>

   (see `bioconductor-scdiagnostics/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scdiagnostics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scdiagnostics.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scdiagnostics
   :alt:   (downloads)
.. |docker_bioconductor-scdiagnostics| image:: https://quay.io/repository/biocontainers/bioconductor-scdiagnostics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scdiagnostics
.. _`bioconductor-scdiagnostics/tags`: https://quay.io/repository/biocontainers/bioconductor-scdiagnostics?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scdiagnostics";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scdiagnostics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scdiagnostics/README.html