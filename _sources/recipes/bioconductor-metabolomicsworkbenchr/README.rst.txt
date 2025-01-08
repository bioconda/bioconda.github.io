:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metabolomicsworkbenchr'
.. highlight: bash

bioconductor-metabolomicsworkbenchr
===================================

.. conda:recipe:: bioconductor-metabolomicsworkbenchr
   :replaces_section_title:
   :noindex:

   Metabolomics Workbench in R

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/metabolomicsWorkbenchR.html
   :license: GPL-3
   :recipe: /`bioconductor-metabolomicsworkbenchr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metabolomicsworkbenchr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metabolomicsworkbenchr/meta.yaml>`_

   This package provides functions for interfacing with the Metabolomics Workbench RESTful API. Study\, compound\, protein and gene information can be searched for using the API. Methods to obtain study data in common Bioconductor formats such as SummarizedExperiment and MultiAssayExperiment are also included.


.. conda:package:: bioconductor-metabolomicsworkbenchr

   |downloads_bioconductor-metabolomicsworkbenchr| |docker_bioconductor-metabolomicsworkbenchr|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-multiassayexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-struct: ``>=1.18.0,<1.19.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-httr: 
   :depends r-jsonlite: 
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

      mamba install bioconductor-metabolomicsworkbenchr

   and update with::

      mamba update bioconductor-metabolomicsworkbenchr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-metabolomicsworkbenchr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-metabolomicsworkbenchr:<tag>

   (see `bioconductor-metabolomicsworkbenchr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-metabolomicsworkbenchr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metabolomicsworkbenchr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metabolomicsworkbenchr
   :alt:   (downloads)
.. |docker_bioconductor-metabolomicsworkbenchr| image:: https://quay.io/repository/biocontainers/bioconductor-metabolomicsworkbenchr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metabolomicsworkbenchr
.. _`bioconductor-metabolomicsworkbenchr/tags`: https://quay.io/repository/biocontainers/bioconductor-metabolomicsworkbenchr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-metabolomicsworkbenchr";
        var versions = ["1.16.0","1.12.0","1.10.0","1.8.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metabolomicsworkbenchr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metabolomicsworkbenchr/README.html