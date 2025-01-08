:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-carnival'
.. highlight: bash

bioconductor-carnival
=====================

.. conda:recipe:: bioconductor-carnival
   :replaces_section_title:
   :noindex:

   A CAusal Reasoning tool for Network Identification \(from gene expression data\) using Integer VALue programming

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/CARNIVAL.html
   :license: GPL-3
   :recipe: /`bioconductor-carnival <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-carnival>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-carnival/meta.yaml>`_

   An upgraded causal reasoning tool from Melas et al in R with updated assignments of TFs\' weights from PROGENy scores. Optimization parameters can be freely adjusted and multiple solutions can be obtained and aggregated.


.. conda:package:: bioconductor-carnival

   |downloads_bioconductor-carnival| |docker_bioconductor-carnival|

   :versions:
      
      

      ``2.16.0-0``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-igraph: 
   :depends r-lpsolve: 
   :depends r-readr: 
   :depends r-rjson: 
   :depends r-rmarkdown: 
   :depends r-stringr: 
   :depends r-tibble: 
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

      mamba install bioconductor-carnival

   and update with::

      mamba update bioconductor-carnival

  To create a new environment, run::

      mamba create --name myenvname bioconductor-carnival

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-carnival:<tag>

   (see `bioconductor-carnival/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-carnival| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-carnival.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-carnival
   :alt:   (downloads)
.. |docker_bioconductor-carnival| image:: https://quay.io/repository/biocontainers/bioconductor-carnival/status
   :target: https://quay.io/repository/biocontainers/bioconductor-carnival
.. _`bioconductor-carnival/tags`: https://quay.io/repository/biocontainers/bioconductor-carnival?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-carnival";
        var versions = ["2.16.0","2.12.0","2.10.0","2.8.0","2.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-carnival/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-carnival/README.html