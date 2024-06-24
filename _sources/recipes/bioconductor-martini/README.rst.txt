:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-martini'
.. highlight: bash

bioconductor-martini
====================

.. conda:recipe:: bioconductor-martini
   :replaces_section_title:
   :noindex:

   GWAS Incorporating Networks

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/martini.html
   :license: GPL-3.0-only
   :recipe: /`bioconductor-martini <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-martini>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-martini/meta.yaml>`_
   :links: biotools: :biotools:`martini`, usegalaxy-eu: :usegalaxy-eu:`martini`

   martini deals with the low power inherent to GWAS studies by using prior knowledge represented as a network. SNPs are the vertices of the network\, and the edges represent biological relationships between them \(genomic adjacency\, belonging to the same gene\, physical interaction between protein products\). The network is scanned using SConES\, which looks for groups of SNPs maximally associated with the phenotype\, that form a close subnetwork.


.. conda:package:: bioconductor-martini

   |downloads_bioconductor-martini| |docker_bioconductor-martini|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.14.0-2</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.14.0-2``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-snpstats: ``>=1.52.0,<1.53.0``
   :depends bioconductor-snpstats: ``>=1.52.0,<1.53.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-igraph: ``>=1.0.1``
   :depends r-matrix: 
   :depends r-memoise: ``>=2.0.0``
   :depends r-rcpp: ``>=0.12.8``
   :depends r-rcppeigen: ``>=0.3.3.5.0``
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

      mamba install bioconductor-martini

   and update with::

      mamba update bioconductor-martini

  To create a new environment, run::

      mamba create --name myenvname bioconductor-martini

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-martini:<tag>

   (see `bioconductor-martini/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-martini| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-martini.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-martini
   :alt:   (downloads)
.. |docker_bioconductor-martini| image:: https://quay.io/repository/biocontainers/bioconductor-martini/status
   :target: https://quay.io/repository/biocontainers/bioconductor-martini
.. _`bioconductor-martini/tags`: https://quay.io/repository/biocontainers/bioconductor-martini?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-martini";
        var versions = ["1.22.0","1.22.0","1.20.0","1.18.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-martini/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-martini/README.html