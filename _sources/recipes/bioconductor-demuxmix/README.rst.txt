:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-demuxmix'
.. highlight: bash

bioconductor-demuxmix
=====================

.. conda:recipe:: bioconductor-demuxmix
   :replaces_section_title:
   :noindex:

   Demultiplexing oligo\-barcoded scRNA\-seq data using regression mixture models

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/demuxmix.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-demuxmix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-demuxmix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-demuxmix/meta.yaml>`_

   A package for demultiplexing single\-cell sequencing experiments of pooled cells labeled with barcode oligonucleotides. The package implements methods to fit regression mixture models for a probabilistic classification of cells\, including multiplet detection. Demultiplexing error rates can be estimated\, and methods for quality control are provided.


.. conda:package:: bioconductor-demuxmix

   |downloads_bioconductor-demuxmix| |docker_bioconductor-demuxmix|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-mass: 
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

      mamba install bioconductor-demuxmix

   and update with::

      mamba update bioconductor-demuxmix

  To create a new environment, run::

      mamba create --name myenvname bioconductor-demuxmix

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-demuxmix:<tag>

   (see `bioconductor-demuxmix/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-demuxmix| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-demuxmix.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-demuxmix
   :alt:   (downloads)
.. |docker_bioconductor-demuxmix| image:: https://quay.io/repository/biocontainers/bioconductor-demuxmix/status
   :target: https://quay.io/repository/biocontainers/bioconductor-demuxmix
.. _`bioconductor-demuxmix/tags`: https://quay.io/repository/biocontainers/bioconductor-demuxmix?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-demuxmix";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-demuxmix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-demuxmix/README.html