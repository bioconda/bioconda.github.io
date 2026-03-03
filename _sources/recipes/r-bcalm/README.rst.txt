:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-bcalm'
.. highlight: bash

r-bcalm
=======

.. conda:recipe:: r-bcalm
   :replaces_section_title:
   :noindex:

   Barcode Analysis using linear models for MPRA data

   :homepage: https://github.com/kircherlab/BCalm
   :license: MIT / MIT
   :recipe: /`r-bcalm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bcalm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bcalm/meta.yaml>`_

   BCalm is a package that provides a modification from the mpralm package\, 
   an R package that provides tools for differential analysis in MPRA studies.
   BCalm allows users to use individual barcodes as model input. It provides 
   tools for data management\, count preprocessing\, and differential analysis 
   in massively parallel reporter assays \(MPRA\).



.. conda:package:: r-bcalm

   |downloads_r-bcalm| |docker_r-bcalm|

   :versions:
      
      

      ``0.100.0-0``,  ``0.99.0-0``

      

   
   :depends bioconductor-biobase: 
   :depends bioconductor-biocgenerics: 
   :depends bioconductor-delayedarray: 
   :depends bioconductor-genomeinfodb: 
   :depends bioconductor-genomicranges: 
   :depends bioconductor-iranges: 
   :depends bioconductor-limma: 
   :depends bioconductor-mpra: 
   :depends bioconductor-s4vectors: 
   :depends bioconductor-summarizedexperiment: 
   :depends r-base: ``>=4.5,<4.6.0a0``
   :depends r-curl: 
   :depends r-scales: 
   :depends r-statmod: 
   :depends r-tidyr: 
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

      mamba install r-bcalm

   and update with::

      mamba update r-bcalm

  To create a new environment, run::

      mamba create --name myenvname r-bcalm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-bcalm:<tag>

   (see `r-bcalm/tags`_ for valid values for ``<tag>``)


.. |downloads_r-bcalm| image:: https://img.shields.io/conda/dn/bioconda/r-bcalm.svg?style=flat
   :target: https://anaconda.org/bioconda/r-bcalm
   :alt:   (downloads)
.. |docker_r-bcalm| image:: https://quay.io/repository/biocontainers/r-bcalm/status
   :target: https://quay.io/repository/biocontainers/r-bcalm
.. _`r-bcalm/tags`: https://quay.io/repository/biocontainers/r-bcalm?tab=tags


.. raw:: html

    <script>
        var package = "r-bcalm";
        var versions = ["0.100.0","0.99.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-bcalm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-bcalm/README.html