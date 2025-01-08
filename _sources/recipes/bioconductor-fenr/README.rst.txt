:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fenr'
.. highlight: bash

bioconductor-fenr
=================

.. conda:recipe:: bioconductor-fenr
   :replaces_section_title:
   :noindex:

   Fast functional enrichment for interactive applications

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/fenr.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-fenr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fenr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fenr/meta.yaml>`_

   Perform fast functional enrichment on feature lists \(like genes or proteins\) using the hypergeometric distribution. Tailored for speed\, this package is ideal for interactive platforms such as Shiny. It supports the retrieval of functional data from sources like GO\, KEGG\, Reactome\, Bioplanet and WikiPathways. By downloading and preparing data first\, it allows for rapid successive tests on various feature selections without the need for repetitive\, time\-consuming preparatory steps typical of other packages.


.. conda:package:: bioconductor-fenr

   |downloads_bioconductor-fenr| |docker_bioconductor-fenr|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocfilecache: ``>=2.14.0,<2.15.0``
   :depends r-assertthat: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-httr2: 
   :depends r-progress: 
   :depends r-purrr: 
   :depends r-readr: 
   :depends r-rlang: 
   :depends r-rvest: 
   :depends r-shiny: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-tidyselect: 
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

      mamba install bioconductor-fenr

   and update with::

      mamba update bioconductor-fenr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-fenr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fenr:<tag>

   (see `bioconductor-fenr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fenr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fenr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fenr
   :alt:   (downloads)
.. |docker_bioconductor-fenr| image:: https://quay.io/repository/biocontainers/bioconductor-fenr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fenr
.. _`bioconductor-fenr/tags`: https://quay.io/repository/biocontainers/bioconductor-fenr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-fenr";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fenr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fenr/README.html