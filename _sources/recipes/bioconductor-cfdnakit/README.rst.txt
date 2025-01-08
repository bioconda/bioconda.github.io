:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cfdnakit'
.. highlight: bash

bioconductor-cfdnakit
=====================

.. conda:recipe:: bioconductor-cfdnakit
   :replaces_section_title:
   :noindex:

   Fragmen\-length analysis package from high\-throughput sequencing of cell\-free DNA \(cfDNA\)

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/cfdnakit.html
   :license: GPL-3
   :recipe: /`bioconductor-cfdnakit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cfdnakit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cfdnakit/meta.yaml>`_

   This package provides basic functions for analyzing shallow whole\-genome sequencing \(\~0.3X or more\) of cell\-free DNA \(cfDNA\). The package basically extracts the length of cfDNA fragments and aids the vistualization of fragment\-length information. The package also extract fragment\-length information per non\-overlapping fixed\-sized bins and used it for calculating ctDNA estimation score \(CES\).


.. conda:package:: bioconductor-cfdnakit

   |downloads_bioconductor-cfdnakit| |docker_bioconductor-cfdnakit|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-qdnaseq: ``>=1.42.0,<1.43.0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-pscbs: 
   :depends r-rlang: 
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

      mamba install bioconductor-cfdnakit

   and update with::

      mamba update bioconductor-cfdnakit

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cfdnakit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cfdnakit:<tag>

   (see `bioconductor-cfdnakit/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cfdnakit| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cfdnakit.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cfdnakit
   :alt:   (downloads)
.. |docker_bioconductor-cfdnakit| image:: https://quay.io/repository/biocontainers/bioconductor-cfdnakit/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cfdnakit
.. _`bioconductor-cfdnakit/tags`: https://quay.io/repository/biocontainers/bioconductor-cfdnakit?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cfdnakit";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cfdnakit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cfdnakit/README.html