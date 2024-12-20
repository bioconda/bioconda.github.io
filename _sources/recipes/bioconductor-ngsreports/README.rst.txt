:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ngsreports'
.. highlight: bash

bioconductor-ngsreports
=======================

.. conda:recipe:: bioconductor-ngsreports
   :replaces_section_title:
   :noindex:

   Load FastqQC reports and other NGS related files

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ngsReports.html
   :license: file LICENSE
   :recipe: /`bioconductor-ngsreports <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ngsreports>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ngsreports/meta.yaml>`_

   This package provides methods and object classes for parsing FastQC reports and output summaries from other NGS tools into R. As well as parsing files\, multiple plotting methods have been implemented for visualising the parsed data. Plots can be generated as static ggplot objects or interactive plotly objects.


.. conda:package:: bioconductor-ngsreports

   |downloads_bioconductor-ngsreports| |docker_bioconductor-ngsreports|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.8.0-0</code>,  <code>2.4.0-0</code>,  <code>2.2.4-0</code>,  <code>2.0.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.1-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``2.8.0-0``,  ``2.4.0-0``,  ``2.2.4-0``,  ``2.0.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-checkmate: 
   :depends r-dplyr: ``>=1.1.0``
   :depends r-forcats: 
   :depends r-ggdendro: 
   :depends r-ggplot2: ``>=3.5.0``
   :depends r-jsonlite: 
   :depends r-lifecycle: 
   :depends r-lubridate: 
   :depends r-patchwork: ``>=1.1.1``
   :depends r-plotly: ``>=4.9.4``
   :depends r-reshape2: 
   :depends r-rlang: 
   :depends r-rmarkdown: 
   :depends r-scales: 
   :depends r-stringr: 
   :depends r-tibble: ``>=1.3.1``
   :depends r-tidyr: 
   :depends r-tidyselect: ``>=0.2.3``
   :depends r-zoo: 
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

      mamba install bioconductor-ngsreports

   and update with::

      mamba update bioconductor-ngsreports

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ngsreports

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ngsreports:<tag>

   (see `bioconductor-ngsreports/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ngsreports| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ngsreports.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ngsreports
   :alt:   (downloads)
.. |docker_bioconductor-ngsreports| image:: https://quay.io/repository/biocontainers/bioconductor-ngsreports/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ngsreports
.. _`bioconductor-ngsreports/tags`: https://quay.io/repository/biocontainers/bioconductor-ngsreports?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ngsreports";
        var versions = ["2.8.0","2.4.0","2.2.4","2.0.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ngsreports/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ngsreports/README.html