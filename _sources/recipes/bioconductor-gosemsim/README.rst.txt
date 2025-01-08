:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gosemsim'
.. highlight: bash

bioconductor-gosemsim
=====================

.. conda:recipe:: bioconductor-gosemsim
   :replaces_section_title:
   :noindex:

   GO\-terms Semantic Similarity Measures

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GOSemSim.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gosemsim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gosemsim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gosemsim/meta.yaml>`_
   :links: biotools: :biotools:`gosemsim`

   The semantic comparisons of Gene Ontology \(GO\) annotations provide quantitative ways to compute similarities between genes and gene groups\, and have became important basis for many bioinformatics analysis approaches. GOSemSim is an R package for semantic similarity computation among GO terms\, sets of GO terms\, gene products and gene clusters. GOSemSim implemented five methods proposed by Resnik\, Schlicker\, Jiang\, Lin and Wang respectively.


.. conda:package:: bioconductor-gosemsim

   |downloads_bioconductor-gosemsim| |docker_bioconductor-gosemsim|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.32.0-0</code>,  <code>2.28.0-1</code>,  <code>2.28.0-0</code>,  <code>2.26.0-0</code>,  <code>2.24.0-1</code>,  <code>2.24.0-0</code>,  <code>2.20.0-2</code>,  <code>2.20.0-1</code>,  <code>2.20.0-0</code>,  </span></summary>
      

      ``2.32.0-0``,  ``2.28.0-1``,  ``2.28.0-0``,  ``2.26.0-0``,  ``2.24.0-1``,  ``2.24.0-0``,  ``2.20.0-2``,  ``2.20.0-1``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.1-0``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.12.0-0``,  ``2.10.0-1``,  ``2.8.0-0``,  ``2.6.2-0``,  ``2.4.0-0``,  ``2.2.0-1``,  ``2.2.0-0``,  ``1.30.3-0``,  ``1.29.0-0``,  ``1.28.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0a0``
   :depends bioconductor-go.db: ``>=3.20.0,<3.21.0``
   :depends bioconductor-go.db: ``>=3.20.0,<3.21.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dbi: 
   :depends r-digest: 
   :depends r-r.utils: 
   :depends r-rcpp: 
   :depends r-rlang: 
   :depends r-yulab.utils: ``>=0.1.6``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-gosemsim

   and update with::

      mamba update bioconductor-gosemsim

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gosemsim

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gosemsim:<tag>

   (see `bioconductor-gosemsim/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gosemsim| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gosemsim.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gosemsim
   :alt:   (downloads)
.. |docker_bioconductor-gosemsim| image:: https://quay.io/repository/biocontainers/bioconductor-gosemsim/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gosemsim
.. _`bioconductor-gosemsim/tags`: https://quay.io/repository/biocontainers/bioconductor-gosemsim?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gosemsim";
        var versions = ["2.32.0","2.28.0","2.28.0","2.26.0","2.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gosemsim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gosemsim/README.html