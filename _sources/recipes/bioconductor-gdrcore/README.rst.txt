:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gdrcore'
.. highlight: bash

bioconductor-gdrcore
====================

.. conda:recipe:: bioconductor-gdrcore
   :replaces_section_title:
   :noindex:

   Processing functions and interface to process and analyze drug dose\-response data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/gDRcore.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gdrcore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gdrcore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gdrcore/meta.yaml>`_

   This package contains core functions to process and analyze drug response data. The package provides tools for normalizing\, averaging\, and calculation of gDR metrics data. All core functions are wrapped into the pipeline function allowing analyzing the data in a straightforward way.


.. conda:package:: bioconductor-gdrcore

   |downloads_bioconductor-gdrcore| |docker_bioconductor-gdrcore|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0a0``
   :depends bioconductor-bumpymatrix: ``>=1.10.0,<1.11.0``
   :depends bioconductor-bumpymatrix: ``>=1.10.0,<1.11.0a0``
   :depends bioconductor-gdrutils: ``>=1.0.0,<1.1.0``
   :depends bioconductor-gdrutils: ``>=1.0.0,<1.1.0a0``
   :depends bioconductor-multiassayexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-multiassayexperiment: ``>=1.28.0,<1.29.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-checkmate: 
   :depends r-data.table: 
   :depends r-futile.logger: 
   :depends r-purrr: 
   :depends r-stringr: 
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

      mamba install bioconductor-gdrcore

   and update with::

      mamba update bioconductor-gdrcore

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gdrcore

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gdrcore:<tag>

   (see `bioconductor-gdrcore/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gdrcore| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gdrcore.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gdrcore
   :alt:   (downloads)
.. |docker_bioconductor-gdrcore| image:: https://quay.io/repository/biocontainers/bioconductor-gdrcore/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gdrcore
.. _`bioconductor-gdrcore/tags`: https://quay.io/repository/biocontainers/bioconductor-gdrcore?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gdrcore";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gdrcore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gdrcore/README.html