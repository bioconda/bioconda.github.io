:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-genomictools'
.. highlight: bash

r-genomictools
==============

.. conda:recipe:: r-genomictools
   :replaces_section_title:
   :noindex:

   A loose collection of tools for the analysis of expression and genotype data\, currently with the main focus on \(e\)QTL and MDR analysis.

   :homepage: https://CRAN.R-project.org/package=GenomicTools
   :license: GPL2 / GPL-2
   :recipe: /`r-genomictools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-genomictools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-genomictools/meta.yaml>`_

   


.. conda:package:: r-genomictools

   |downloads_r-genomictools| |docker_r-genomictools|

   :versions:
      
      

      ``0.2.9.7-6``,  ``0.2.9.7-5``,  ``0.2.9.7-4``,  ``0.2.9.7-3``,  ``0.2.9.7-2``,  ``0.2.9.7-1``,  ``0.2.9.7-0``

      

   
   :depends bioconductor-snpstats: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-circlize: 
   :depends r-data.table: ``>=1.9.6``
   :depends r-genomictools.filehandler: ``>=0.1.5.8``
   :depends r-gmwt: ``>=1.1``
   :depends r-rcpp: ``>=0.9.13``
   :depends r-rcpparmadillo: 
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

      mamba install r-genomictools

   and update with::

      mamba update r-genomictools

  To create a new environment, run::

      mamba create --name myenvname r-genomictools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-genomictools:<tag>

   (see `r-genomictools/tags`_ for valid values for ``<tag>``)


.. |downloads_r-genomictools| image:: https://img.shields.io/conda/dn/bioconda/r-genomictools.svg?style=flat
   :target: https://anaconda.org/bioconda/r-genomictools
   :alt:   (downloads)
.. |docker_r-genomictools| image:: https://quay.io/repository/biocontainers/r-genomictools/status
   :target: https://quay.io/repository/biocontainers/r-genomictools
.. _`r-genomictools/tags`: https://quay.io/repository/biocontainers/r-genomictools?tab=tags


.. raw:: html

    <script>
        var package = "r-genomictools";
        var versions = ["0.2.9.7","0.2.9.7","0.2.9.7","0.2.9.7","0.2.9.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-genomictools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-genomictools/README.html