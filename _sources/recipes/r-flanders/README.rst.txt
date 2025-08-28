:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-flanders'
.. highlight: bash

r-flanders
==========

.. conda:recipe:: r-flanders
   :replaces_section_title:
   :noindex:

   Fast colocalization using AnnData objects in R

   :homepage: https://github.com/Biostatistics-Unit-HT/flanders_r
   :license: MIT / MIT
   :recipe: /`r-flanders <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-flanders>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-flanders/meta.yaml>`_

   flanders is an R package designed to seamlessly convert finemapping output files from the nf\-flanders pipeline
   into a unified AnnData object and facilitate colocalization analysis.
   The package provides functions to\:
   \- Convert multiple \*finemap.rds files into a single AnnData object with credible set metadata.
   \- Generate an input table \(coloc\_input\) for colocalization testing.
   \- Run pairwise colocalization tests\, with minimal runtime overhead \(typically 5–10 tests per second on standard hardware\).



.. conda:package:: r-flanders

   |downloads_r-flanders| |docker_r-flanders|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-scrnaseq: 
   :depends bioconductor-singlecellexperiment: 
   :depends bioconductor-zellkonverter: 
   :depends r-anndata: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-coloc: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-matrix: 
   :depends r-optparse: 
   :depends r-susier: 
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

      mamba install r-flanders

   and update with::

      mamba update r-flanders

  To create a new environment, run::

      mamba create --name myenvname r-flanders

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-flanders:<tag>

   (see `r-flanders/tags`_ for valid values for ``<tag>``)


.. |downloads_r-flanders| image:: https://img.shields.io/conda/dn/bioconda/r-flanders.svg?style=flat
   :target: https://anaconda.org/bioconda/r-flanders
   :alt:   (downloads)
.. |docker_r-flanders| image:: https://quay.io/repository/biocontainers/r-flanders/status
   :target: https://quay.io/repository/biocontainers/r-flanders
.. _`r-flanders/tags`: https://quay.io/repository/biocontainers/r-flanders?tab=tags


.. raw:: html

    <script>
        var package = "r-flanders";
        var versions = ["1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-flanders/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-flanders/README.html