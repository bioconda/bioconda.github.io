:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-celldex'
.. highlight: bash

bioconductor-celldex
====================

.. conda:recipe:: bioconductor-celldex
   :replaces_section_title:
   :noindex:

   Reference Index for Cell Types

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/celldex.html
   :license: GPL-3
   :recipe: /`bioconductor-celldex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-celldex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-celldex/meta.yaml>`_

   Provides a collection of reference expression datasets with curated cell type labels\, for use in procedures like automated annotation of single\-cell data or deconvolution of bulk RNA\-seq.


.. conda:package:: bioconductor-celldex

   |downloads_bioconductor-celldex| |docker_bioconductor-celldex|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.1-0``,  ``1.8.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-annotationhub: ``>=3.10.0,<3.11.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-delayedarray: ``>=0.28.0,<0.29.0``
   :depends bioconductor-delayedmatrixstats: ``>=1.24.0,<1.25.0``
   :depends bioconductor-experimenthub: ``>=2.10.0,<2.11.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-celldex

   and update with::

      mamba update bioconductor-celldex

  To create a new environment, run::

      mamba create --name myenvname bioconductor-celldex

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-celldex:<tag>

   (see `bioconductor-celldex/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-celldex| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-celldex.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-celldex
   :alt:   (downloads)
.. |docker_bioconductor-celldex| image:: https://quay.io/repository/biocontainers/bioconductor-celldex/status
   :target: https://quay.io/repository/biocontainers/bioconductor-celldex
.. _`bioconductor-celldex/tags`: https://quay.io/repository/biocontainers/bioconductor-celldex?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-celldex";
        var versions = ["1.12.0","1.10.1","1.8.0","1.4.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-celldex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-celldex/README.html