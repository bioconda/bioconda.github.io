:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-ukbrapr'
.. highlight: bash

r-ukbrapr
=========

.. conda:recipe:: r-ukbrapr
   :replaces_section_title:
   :noindex:

   R functions to use in the UK Biobank Research Analysis Platform \(RAP\)

   :homepage: https://lcpilling.github.io/ukbrapR
   :developer docs: https://github.com/lcpilling/ukbrapR
   :license: GPL-3.0-only
   :recipe: /`r-ukbrapr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ukbrapr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ukbrapr/meta.yaml>`_

   R functions to use in the UK Biobank Research Analysis Platform \(RAP\). The aim is to make working in the RAP quicker\, easier\, and more reproducible. Though some functions require a Spark cluster\, the package is mostly aimed to work in a \"normal\" cluster using RStudio\, and raw UK Biobank data from the table\-exporter.


.. conda:package:: r-ukbrapr

   |downloads_r-ukbrapr| |docker_r-ukbrapr|

   :versions:
      
      

      ``0.3.0-0``,  ``0.2.9-0``

      

   
   :depends r-arrow: ``>=13.0.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cli: ``>=3.6.1``
   :depends r-dplyr: ``>=1.1.0``
   :depends r-haven: ``>=2.5.0``
   :depends r-lifecycle: ``>=1.0.0``
   :depends r-lubridate: ``>=1.9.0``
   :depends r-prettyunits: ``>=1.0.0``
   :depends r-purrr: ``>=1.0.0``
   :depends r-readr: ``>=2.0.0``
   :depends r-reticulate: ``>=1.34.0``
   :depends r-rlang: ``>=1.0.0``
   :depends r-sparklyr: ``>=1.8.4``
   :depends r-stringr: ``>=1.5.0``
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

      mamba install r-ukbrapr

   and update with::

      mamba update r-ukbrapr

  To create a new environment, run::

      mamba create --name myenvname r-ukbrapr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-ukbrapr:<tag>

   (see `r-ukbrapr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-ukbrapr| image:: https://img.shields.io/conda/dn/bioconda/r-ukbrapr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-ukbrapr
   :alt:   (downloads)
.. |docker_r-ukbrapr| image:: https://quay.io/repository/biocontainers/r-ukbrapr/status
   :target: https://quay.io/repository/biocontainers/r-ukbrapr
.. _`r-ukbrapr/tags`: https://quay.io/repository/biocontainers/r-ukbrapr?tab=tags


.. raw:: html

    <script>
        var package = "r-ukbrapr";
        var versions = ["0.3.0","0.2.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-ukbrapr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-ukbrapr/README.html