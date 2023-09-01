:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dstruct'
.. highlight: bash

bioconductor-dstruct
====================

.. conda:recipe:: bioconductor-dstruct
   :replaces_section_title:
   :noindex:

   Identifying differentially reactive regions from RNA structurome profiling data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/dStruct.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-dstruct <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dstruct>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dstruct/meta.yaml>`_

   dStruct identifies differentially reactive regions from RNA structurome profiling data. dStruct is compatible with a broad range of structurome profiling technologies\, e.g.\, SHAPE\-MaP\, DMS\-MaPseq\, Structure\-Seq\, SHAPE\-Seq\, etc. See Choudhary et al\, Genome Biology\, 2019 for the underlying method.


.. conda:package:: bioconductor-dstruct

   |downloads_bioconductor-dstruct| |docker_bioconductor-dstruct|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-purrr: 
   :depends r-reshape2: 
   :depends r-rlang: 
   :depends r-zoo: 
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

      mamba install bioconductor-dstruct

   and update with::

      mamba update bioconductor-dstruct

  To create a new environment, run::

      mamba create --name myenvname bioconductor-dstruct

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dstruct:<tag>

   (see `bioconductor-dstruct/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dstruct| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dstruct.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dstruct
   :alt:   (downloads)
.. |docker_bioconductor-dstruct| image:: https://quay.io/repository/biocontainers/bioconductor-dstruct/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dstruct
.. _`bioconductor-dstruct/tags`: https://quay.io/repository/biocontainers/bioconductor-dstruct?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dstruct";
        var versions = ["1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dstruct/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dstruct/README.html