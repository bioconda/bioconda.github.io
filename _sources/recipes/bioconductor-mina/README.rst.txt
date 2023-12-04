:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mina'
.. highlight: bash

bioconductor-mina
=================

.. conda:recipe:: bioconductor-mina
   :replaces_section_title:
   :noindex:

   Microbial community dIversity and Network Analysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/mina.html
   :license: GPL
   :recipe: /`bioconductor-mina <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mina>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mina/meta.yaml>`_

   An increasing number of microbiome datasets have been generated and analyzed with the help of rapidly developing sequencing technologies. At present\, analysis of taxonomic profiling data is mainly conducted using composition\-based methods\, which ignores interactions between community members. Besides this\, a lack of efficient ways to compare microbial interaction networks limited the study of community dynamics. To better understand how community diversity is affected by complex interactions between its members\, we developed a framework \(Microbial community dIversity and Network Analysis\, mina\)\, a comprehensive framework for microbial community diversity analysis and network comparison. By defining and integrating network\-derived community features\, we greatly reduce noise\-to\-signal ratio for diversity analyses. A bootstrap and permutation\-based method was implemented to assess community network dissimilarities and extract discriminative features in a statistically principled way.


.. conda:package:: bioconductor-mina

   |downloads_bioconductor-mina| |docker_bioconductor-mina|

   :versions:
      
      

      ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-apcluster: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-biganalytics: 
   :depends r-bigmemory: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-hmisc: 
   :depends r-mcl: 
   :depends r-paralleldist: 
   :depends r-plyr: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :depends r-rcppparallel: 
   :depends r-reshape2: 
   :depends r-rspectra: 
   :depends r-stringr: 
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

      mamba install bioconductor-mina

   and update with::

      mamba update bioconductor-mina

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mina

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mina:<tag>

   (see `bioconductor-mina/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mina| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mina.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mina
   :alt:   (downloads)
.. |docker_bioconductor-mina| image:: https://quay.io/repository/biocontainers/bioconductor-mina/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mina
.. _`bioconductor-mina/tags`: https://quay.io/repository/biocontainers/bioconductor-mina?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mina";
        var versions = ["1.10.0","1.10.0","1.8.0","1.6.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mina/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mina/README.html