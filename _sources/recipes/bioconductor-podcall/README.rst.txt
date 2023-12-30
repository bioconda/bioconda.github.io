:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-podcall'
.. highlight: bash

bioconductor-podcall
====================

.. conda:recipe:: bioconductor-podcall
   :replaces_section_title:
   :noindex:

   Positive Droplet Calling for DNA Methylation Droplet Digital PCR

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/PoDCall.html
   :license: GPL-3
   :recipe: /`bioconductor-podcall <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-podcall>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-podcall/meta.yaml>`_

   Reads files exported from \'QX Manager or QuantaSoft\' containing amplitude values from a run of ddPCR \(96 well plate\) and robustly sets thresholds to determine positive droplets for each channel of each individual well. Concentration and normalized concentration in addition to other metrics is then calculated for each well. Results are returned as a table\, optionally written to file\, as well as optional plots \(scatterplot and histogram\) for both channels per well written to file. The package includes a shiny application which provides an interactive and user\-friendly interface to the full functionality of PoDCall.


.. conda:package:: bioconductor-podcall

   |downloads_bioconductor-podcall| |docker_bioconductor-podcall|

   :versions:
      
      

      ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
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

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-podcall

   and update with::

      mamba update bioconductor-podcall

  To create a new environment, run::

      mamba create --name myenvname bioconductor-podcall

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-podcall:<tag>

   (see `bioconductor-podcall/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-podcall| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-podcall.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-podcall
   :alt:   (downloads)
.. |docker_bioconductor-podcall| image:: https://quay.io/repository/biocontainers/bioconductor-podcall/status
   :target: https://quay.io/repository/biocontainers/bioconductor-podcall
.. _`bioconductor-podcall/tags`: https://quay.io/repository/biocontainers/bioconductor-podcall?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-podcall";
        var versions = ["1.10.0","1.10.0","1.8.0","1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-podcall/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-podcall/README.html