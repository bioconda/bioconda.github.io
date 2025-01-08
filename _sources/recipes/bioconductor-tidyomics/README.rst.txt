:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tidyomics'
.. highlight: bash

bioconductor-tidyomics
======================

.. conda:recipe:: bioconductor-tidyomics
   :replaces_section_title:
   :noindex:

   Easily install and load the tidyomics ecosystem

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/tidyomics.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-tidyomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tidyomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tidyomics/meta.yaml>`_

   The tidyomics ecosystem is a set of packages for ’omic data analysis that work together in harmony\; they share common data representations and API design\, consistent with the tidyverse ecosystem. The tidyomics package is designed to make it easy to install and load core packages from the tidyomics ecosystem with a single command.


.. conda:package:: bioconductor-tidyomics

   |downloads_bioconductor-tidyomics| |docker_bioconductor-tidyomics|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-nullranges: ``>=1.12.0,<1.13.0``
   :depends bioconductor-plyranges: ``>=1.26.0,<1.27.0``
   :depends bioconductor-tidybulk: ``>=1.18.0,<1.19.0``
   :depends bioconductor-tidysinglecellexperiment: ``>=1.16.0,<1.17.0``
   :depends bioconductor-tidysummarizedexperiment: ``>=1.16.0,<1.17.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cli: 
   :depends r-purrr: 
   :depends r-rlang: 
   :depends r-stringr: 
   :depends r-tidyseurat: 
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

      mamba install bioconductor-tidyomics

   and update with::

      mamba update bioconductor-tidyomics

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tidyomics

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tidyomics:<tag>

   (see `bioconductor-tidyomics/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tidyomics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tidyomics.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tidyomics
   :alt:   (downloads)
.. |docker_bioconductor-tidyomics| image:: https://quay.io/repository/biocontainers/bioconductor-tidyomics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tidyomics
.. _`bioconductor-tidyomics/tags`: https://quay.io/repository/biocontainers/bioconductor-tidyomics?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tidyomics";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tidyomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tidyomics/README.html