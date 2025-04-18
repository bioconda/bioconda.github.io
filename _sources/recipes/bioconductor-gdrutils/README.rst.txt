:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gdrutils'
.. highlight: bash

bioconductor-gdrutils
=====================

.. conda:recipe:: bioconductor-gdrutils
   :replaces_section_title:
   :noindex:

   A package with helper functions for processing drug response data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/gDRutils.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gdrutils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gdrutils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gdrutils/meta.yaml>`_

   This package contains utility functions used throughout the gDR platform to fit data\, manipulate data\, and convert and validate data structures. This package also has the necessary default constants for gDR platform. Many of the functions are utilized by the gDRcore package.


.. conda:package:: bioconductor-gdrutils

   |downloads_bioconductor-gdrutils| |docker_bioconductor-gdrutils|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-bumpymatrix: ``>=1.14.0,<1.15.0``
   :depends bioconductor-multiassayexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-checkmate: 
   :depends r-data.table: 
   :depends r-drc: 
   :depends r-jsonlite: 
   :depends r-jsonvalidate: 
   :depends r-stringr: 
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

      mamba install bioconductor-gdrutils

   and update with::

      mamba update bioconductor-gdrutils

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gdrutils

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gdrutils:<tag>

   (see `bioconductor-gdrutils/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gdrutils| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gdrutils.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gdrutils
   :alt:   (downloads)
.. |docker_bioconductor-gdrutils| image:: https://quay.io/repository/biocontainers/bioconductor-gdrutils/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gdrutils
.. _`bioconductor-gdrutils/tags`: https://quay.io/repository/biocontainers/bioconductor-gdrutils?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gdrutils";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gdrutils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gdrutils/README.html