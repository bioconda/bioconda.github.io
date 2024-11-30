:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cliquems'
.. highlight: bash

bioconductor-cliquems
=====================

.. conda:recipe:: bioconductor-cliquems
   :replaces_section_title:
   :noindex:

   Annotation of Isotopes\, Adducts and Fragmentation Adducts for in\-Source LC\/MS Metabolomics Data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/cliqueMS.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-cliquems <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cliquems>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cliquems/meta.yaml>`_

   Annotates data from liquid chromatography coupled to mass spectrometry \(LC\/MS\) metabolomics experiments. Based on a network algorithm \(O.Senan\, A. Aguilar\- Mogas\, M. Navarro\, O. Yanes\, R.Guimerà and M. Sales\-Pardo\, Bioinformatics\, 35\(20\)\, 2019\)\, \'CliqueMS\' builds a weighted similarity network where nodes are features and edges are weighted according to the similarity of this features. Then it searches for the most plausible division of the similarity network into cliques \(fully connected components\). Finally it annotates metabolites within each clique\, obtaining for each annotated metabolite the neutral mass and their features\, corresponding to isotopes\, ionization adducts and fragmentation adducts of that metabolite.


.. conda:package:: bioconductor-cliquems

   |downloads_bioconductor-cliquems| |docker_bioconductor-cliquems|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.16.0-0</code>,  <code>1.13.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.8.0-2</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  </span></summary>
      

      ``1.16.0-0``,  ``1.13.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.8.0-2``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-msnbase: ``>=2.28.0,<2.29.0``
   :depends bioconductor-msnbase: ``>=2.28.1,<2.29.0a0``
   :depends bioconductor-xcms: ``>=4.0.0,<4.1.0``
   :depends bioconductor-xcms: ``>=4.0.0,<4.1.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bh: 
   :depends r-igraph: 
   :depends r-matrixstats: 
   :depends r-qlcmatrix: 
   :depends r-rcpp: ``>=0.12.15``
   :depends r-rcpparmadillo: 
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

      mamba install bioconductor-cliquems

   and update with::

      mamba update bioconductor-cliquems

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cliquems

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cliquems:<tag>

   (see `bioconductor-cliquems/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cliquems| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cliquems.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cliquems
   :alt:   (downloads)
.. |docker_bioconductor-cliquems| image:: https://quay.io/repository/biocontainers/bioconductor-cliquems/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cliquems
.. _`bioconductor-cliquems/tags`: https://quay.io/repository/biocontainers/bioconductor-cliquems?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cliquems";
        var versions = ["1.16.0","1.13.0","1.12.0","1.12.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cliquems/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cliquems/README.html