:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spectra'
.. highlight: bash

bioconductor-spectra
====================

.. conda:recipe:: bioconductor-spectra
   :replaces_section_title:
   :noindex:

   Spectra Infrastructure for Mass Spectrometry Data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/Spectra.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-spectra <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spectra>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spectra/meta.yaml>`_

   The Spectra package defines an efficient infrastructure for storing and handling mass spectrometry spectra and functionality to subset\, process\, visualize and compare spectra data. It provides different implementations \(backends\) to store mass spectrometry data. These comprise backends tuned for fast data access and processing and backends for very large data sets ensuring a small memory footprint.


.. conda:package:: bioconductor-spectra

   |downloads_bioconductor-spectra| |docker_bioconductor-spectra|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.1-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.5-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-metabocoreutils: ``>=1.10.0,<1.11.0``
   :depends bioconductor-mscoreutils: ``>=1.14.0,<1.15.0``
   :depends bioconductor-protgenerics: ``>=1.34.0,<1.35.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-fs: 
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

      mamba install bioconductor-spectra

   and update with::

      mamba update bioconductor-spectra

  To create a new environment, run::

      mamba create --name myenvname bioconductor-spectra

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spectra:<tag>

   (see `bioconductor-spectra/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spectra| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spectra.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spectra
   :alt:   (downloads)
.. |docker_bioconductor-spectra| image:: https://quay.io/repository/biocontainers/bioconductor-spectra/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spectra
.. _`bioconductor-spectra/tags`: https://quay.io/repository/biocontainers/bioconductor-spectra?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spectra";
        var versions = ["1.12.0","1.10.1","1.8.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spectra/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spectra/README.html