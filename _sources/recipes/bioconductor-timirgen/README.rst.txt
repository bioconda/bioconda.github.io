:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-timirgen'
.. highlight: bash

bioconductor-timirgen
=====================

.. conda:recipe:: bioconductor-timirgen
   :replaces_section_title:
   :noindex:

   Time sensitive microRNA\-mRNA integration\, analysis and network generation tool

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/TimiRGeN.html
   :license: GPL-3
   :recipe: /`bioconductor-timirgen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-timirgen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-timirgen/meta.yaml>`_

   TimiRGeN \(Time Incorporated miR\-mRNA Generation of Networks\) is a novel R package which functionally analyses and integrates time course miRNA\-mRNA differential expression data. This tool can generate small networks within R or export results into cytoscape or pathvisio for more detailed network construction and hypothesis generation. This tool is created for researchers that wish to dive deep into time series multi\-omic datasets. TimiRGeN goes further than many other tools in terms of data reduction. Here\, potentially hundreds\-of\-thousands of potential miRNA\-mRNA interactions can be whittled down into a handful of high confidence miRNA\-mRNA interactions affecting a signalling pathway\, across a time course.


.. conda:package:: bioconductor-timirgen

   |downloads_bioconductor-timirgen| |docker_bioconductor-timirgen|

   :versions:
      
      

      ``1.11.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.3-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biomart: ``>=2.58.0,<2.59.0``
   :depends bioconductor-clusterprofiler: ``>=4.10.0,<4.11.0``
   :depends bioconductor-mfuzz: ``>=2.62.0,<2.63.0``
   :depends bioconductor-multiassayexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-rcy3: ``>=2.22.0,<2.23.0``
   :depends bioconductor-rwikipathways: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: ``>=0.8.4``
   :depends r-freqprof: 
   :depends r-ggdendro: 
   :depends r-gghighlight: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-gtools: ``>=3.8.1``
   :depends r-igraph: ``>=1.2.4.2``
   :depends r-readxl: 
   :depends r-reshape2: 
   :depends r-scales: 
   :depends r-stringr: ``>=1.4.0``
   :depends r-tidyr: ``>=1.0.2``
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

      mamba install bioconductor-timirgen

   and update with::

      mamba update bioconductor-timirgen

  To create a new environment, run::

      mamba create --name myenvname bioconductor-timirgen

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-timirgen:<tag>

   (see `bioconductor-timirgen/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-timirgen| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-timirgen.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-timirgen
   :alt:   (downloads)
.. |docker_bioconductor-timirgen| image:: https://quay.io/repository/biocontainers/bioconductor-timirgen/status
   :target: https://quay.io/repository/biocontainers/bioconductor-timirgen
.. _`bioconductor-timirgen/tags`: https://quay.io/repository/biocontainers/bioconductor-timirgen?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-timirgen";
        var versions = ["1.11.0","1.10.0","1.8.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-timirgen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-timirgen/README.html