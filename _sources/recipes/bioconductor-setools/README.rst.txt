:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-setools'
.. highlight: bash

bioconductor-setools
====================

.. conda:recipe:: bioconductor-setools
   :replaces_section_title:
   :noindex:

   SEtools\: tools for working with SummarizedExperiment

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/SEtools.html
   :license: GPL
   :recipe: /`bioconductor-setools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-setools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-setools/meta.yaml>`_

   This includes a set of convenience functions for working with the SummarizedExperiment class. Note that plotting functions historically in this package have been moved to the sechm package \(see vignette for details\).


.. conda:package:: bioconductor-setools

   |downloads_bioconductor-setools| |docker_bioconductor-setools|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-deseq2: ``>=1.42.0,<1.43.0``
   :depends bioconductor-edger: ``>=4.0.0,<4.1.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-sechm: ``>=1.10.0,<1.11.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-sva: ``>=3.50.0,<3.51.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-circlize: 
   :depends r-data.table: 
   :depends r-matrix: 
   :depends r-openxlsx: 
   :depends r-pheatmap: 
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

      mamba install bioconductor-setools

   and update with::

      mamba update bioconductor-setools

  To create a new environment, run::

      mamba create --name myenvname bioconductor-setools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-setools:<tag>

   (see `bioconductor-setools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-setools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-setools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-setools
   :alt:   (downloads)
.. |docker_bioconductor-setools| image:: https://quay.io/repository/biocontainers/bioconductor-setools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-setools
.. _`bioconductor-setools/tags`: https://quay.io/repository/biocontainers/bioconductor-setools?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-setools";
        var versions = ["1.16.0","1.14.0","1.12.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-setools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-setools/README.html