:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-podcall'
.. highlight: bash

bioconductor-podcall
====================

.. conda:recipe:: bioconductor-podcall
   :replaces_section_title:
   :noindex:

   Positive Droplet Calling for DNA Methylation Droplet Digital PCR

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/PoDCall.html
   :license: GPL-3
   :recipe: /`bioconductor-podcall <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-podcall>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-podcall/meta.yaml>`_

   Reads files exported from \'QuantaSoft\' containing amplitude values from a run of ddPCR \(96 well plate\) and robustly sets thresholds to determine positive droplets for each channel of each individual well. Concentration and normalized concentration in addition to other metrics is then calculated for each well. Results are returned as a table\, optionally written to file\, as well as optional plots \(scatterplot and histogram\) for both channels per well written to file. The package includes a shiny application which provides an interactive and user\-friendly interface to the full functionality of PoDCall.


.. conda:package:: bioconductor-podcall

   |downloads_bioconductor-podcall| |docker_bioconductor-podcall|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-diptest: 
   :depends r-dt: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-laplacesdemon: 
   :depends r-mclust: 
   :depends r-purrr: 
   :depends r-readr: 
   :depends r-rlist: 
   :depends r-shiny: 
   :depends r-shinyjs: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-podcall

   and update with::

      conda update bioconductor-podcall

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-podcall:<tag>

   (see `bioconductor-podcall/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-podcall| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-podcall.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-podcall
   :alt:   (downloads)
.. |docker_bioconductor-podcall| image:: https://quay.io/repository/biocontainers/bioconductor-podcall/status
   :target: https://quay.io/repository/biocontainers/bioconductor-podcall
.. _`bioconductor-podcall/tags`: https://quay.io/repository/biocontainers/bioconductor-podcall?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-podcall/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-podcall/README.html