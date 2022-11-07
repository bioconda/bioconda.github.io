:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ngsreports'
.. highlight: bash

bioconductor-ngsreports
=======================

.. conda:recipe:: bioconductor-ngsreports
   :replaces_section_title:
   :noindex:

   Load FastqQC reports and other NGS related files

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/ngsReports.html
   :license: file LICENSE
   :recipe: /`bioconductor-ngsreports <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ngsreports>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ngsreports/meta.yaml>`_

   This package provides methods and object classes for parsing FastQC reports and output summaries from other NGS tools into R. As well as parsing files\, multiple plotting methods have been implemented for visualising the parsed data. Plots can be generated as static ggplot objects or interactive plotly objects.


.. conda:package:: bioconductor-ngsreports

   |downloads_bioconductor-ngsreports| |docker_bioconductor-ngsreports|

   :versions:
      
      

      ``2.0.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends bioconductor-biostrings: ``>=2.66.0,<2.67.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-checkmate: 
   :depends r-dplyr: ``>=1.0.0``
   :depends r-dt: 
   :depends r-forcats: 
   :depends r-ggdendro: 
   :depends r-ggplot2: ``>=3.3.5``
   :depends r-lifecycle: 
   :depends r-lubridate: 
   :depends r-pander: 
   :depends r-patchwork: ``>=1.1.1``
   :depends r-plotly: ``>=4.9.4``
   :depends r-readr: 
   :depends r-reshape2: 
   :depends r-rmarkdown: 
   :depends r-scales: 
   :depends r-stringr: 
   :depends r-tibble: ``>=1.3.1``
   :depends r-tidyr: 
   :depends r-tidyselect: ``>=0.2.3``
   :depends r-zoo: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ngsreports

   and update with::

      conda update bioconductor-ngsreports

   or use the docker container::

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
        var versions = ["2.0.0","1.10.0","1.8.0","1.6.1","1.6.0"];
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