:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-alabaster.base'
.. highlight: bash

bioconductor-alabaster.base
===========================

.. conda:recipe:: bioconductor-alabaster.base
   :replaces_section_title:
   :noindex:

   Save Bioconductor Objects To File

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/alabaster.base.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-alabaster.base <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alabaster.base>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alabaster.base/meta.yaml>`_

   Save Bioconductor data structures into file artifacts\, and load them back into memory. This is a more robust and portable alternative to serialization of such objects into RDS files. Each artifact is associated with metadata for further interpretation\; downstream applications can enrich this metadata with context\-specific properties.


.. conda:package:: bioconductor-alabaster.base

   |downloads_bioconductor-alabaster.base| |docker_bioconductor-alabaster.base|

   :versions:
      
      

      ``1.2.1-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-alabaster.schemas: ``>=1.2.0,<1.3.0``
   :depends bioconductor-alabaster.schemas: ``>=1.2.0,<1.3.0a0``
   :depends bioconductor-rhdf5: ``>=2.46.0,<2.47.0``
   :depends bioconductor-rhdf5: ``>=2.46.1,<2.47.0a0``
   :depends bioconductor-rhdf5lib: ``>=1.24.0,<1.25.0``
   :depends bioconductor-rhdf5lib: ``>=1.24.0,<1.25.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-jsonlite: 
   :depends r-jsonvalidate: 
   :depends r-rcpp: 
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

      mamba install bioconductor-alabaster.base

   and update with::

      mamba update bioconductor-alabaster.base

  To create a new environment, run::

      mamba create --name myenvname bioconductor-alabaster.base

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-alabaster.base:<tag>

   (see `bioconductor-alabaster.base/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-alabaster.base| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-alabaster.base.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-alabaster.base
   :alt:   (downloads)
.. |docker_bioconductor-alabaster.base| image:: https://quay.io/repository/biocontainers/bioconductor-alabaster.base/status
   :target: https://quay.io/repository/biocontainers/bioconductor-alabaster.base
.. _`bioconductor-alabaster.base/tags`: https://quay.io/repository/biocontainers/bioconductor-alabaster.base?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-alabaster.base";
        var versions = ["1.2.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-alabaster.base/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-alabaster.base/README.html