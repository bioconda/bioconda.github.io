:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-duplexdiscoverer'
.. highlight: bash

bioconductor-duplexdiscoverer
=============================

.. conda:recipe:: bioconductor-duplexdiscoverer
   :replaces_section_title:
   :noindex:

   Analysis of the data from RNA duplex probing experiments

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/DuplexDiscovereR.html
   :license: GPL-3
   :recipe: /`bioconductor-duplexdiscoverer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-duplexdiscoverer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-duplexdiscoverer/meta.yaml>`_

   DuplexDiscovereR is a package designed for analyzing data from RNA cross\-linking and proximity ligation protocols such as SPLASH\, PARIS\, LIGR\-seq\, and others. DuplexDiscovereR accepts input in the form of chimerically or split\-aligned reads. It includes procedures for alignment classification\, filtering\, and efficient clustering of individual chimeric reads into duplex groups \(DGs\). Once DGs are identified\, the package predicts RNA duplex formation and their hybridization energies. Additional metrics\, such as p\-values for random ligation hypothesis or mean DG alignment scores\, can be calculated to rank final set of RNA duplexes. Data from multiple experiments or replicates can be processed separately and further compared to check the reproducibility of the experimental method.


.. conda:package:: bioconductor-duplexdiscoverer

   |downloads_bioconductor-duplexdiscoverer| |docker_bioconductor-duplexdiscoverer|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-genomicalignments: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-gviz: ``>=1.50.0,<1.51.0``
   :depends bioconductor-interactionset: ``>=1.34.0,<1.35.0``
   :depends bioconductor-rtracklayer: ``>=1.66.0,<1.67.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-ggsci: 
   :depends r-igraph: 
   :depends r-purrr: 
   :depends r-rlang: 
   :depends r-scales: 
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

      mamba install bioconductor-duplexdiscoverer

   and update with::

      mamba update bioconductor-duplexdiscoverer

  To create a new environment, run::

      mamba create --name myenvname bioconductor-duplexdiscoverer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-duplexdiscoverer:<tag>

   (see `bioconductor-duplexdiscoverer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-duplexdiscoverer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-duplexdiscoverer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-duplexdiscoverer
   :alt:   (downloads)
.. |docker_bioconductor-duplexdiscoverer| image:: https://quay.io/repository/biocontainers/bioconductor-duplexdiscoverer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-duplexdiscoverer
.. _`bioconductor-duplexdiscoverer/tags`: https://quay.io/repository/biocontainers/bioconductor-duplexdiscoverer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-duplexdiscoverer";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-duplexdiscoverer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-duplexdiscoverer/README.html