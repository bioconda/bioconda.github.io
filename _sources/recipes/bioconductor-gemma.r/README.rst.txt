:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gemma.r'
.. highlight: bash

bioconductor-gemma.r
====================

.. conda:recipe:: bioconductor-gemma.r
   :replaces_section_title:
   :noindex:

   A wrapper for Gemma\'s Restful API to access curated gene expression data and differential expression analyses

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/gemma.R.html
   :license: Apache License (>= 2)
   :recipe: /`bioconductor-gemma.r <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gemma.r>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gemma.r/meta.yaml>`_

   Low\- and high\-level wrappers for Gemma\'s RESTful API. They enable access to curated expression and differential expression data from over 10\,000 published studies. Gemma is a web site\, database and a set of tools for the meta\-analysis\, re\-use and sharing of genomics data\, currently primarily targeted at the analysis of gene expression profiles.


.. conda:package:: bioconductor-gemma.r

   |downloads_bioconductor-gemma.r| |docker_bioconductor-gemma.r|

   :versions:
      
      

      ``2.0.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-assertthat: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bit64: 
   :depends r-data.table: 
   :depends r-digest: 
   :depends r-glue: 
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-lubridate: 
   :depends r-magrittr: 
   :depends r-memoise: 
   :depends r-rappdirs: 
   :depends r-rlang: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
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

      mamba install bioconductor-gemma.r

   and update with::

      mamba update bioconductor-gemma.r

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gemma.r

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gemma.r:<tag>

   (see `bioconductor-gemma.r/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gemma.r| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gemma.r.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gemma.r
   :alt:   (downloads)
.. |docker_bioconductor-gemma.r| image:: https://quay.io/repository/biocontainers/bioconductor-gemma.r/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gemma.r
.. _`bioconductor-gemma.r/tags`: https://quay.io/repository/biocontainers/bioconductor-gemma.r?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gemma.r";
        var versions = ["2.0.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gemma.r/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gemma.r/README.html