:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-qpgraph'
.. highlight: bash

bioconductor-qpgraph
====================

.. conda:recipe:: bioconductor-qpgraph
   :replaces_section_title:
   :noindex:

   Estimation of genetic and molecular regulatory networks from high\-throughput genomics data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/qpgraph.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-qpgraph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qpgraph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qpgraph/meta.yaml>`_
   :links: biotools: :biotools:`qpgraph`

   Estimate gene and eQTL networks from high\-throughput expression and genotyping assays.


.. conda:package:: bioconductor-qpgraph

   |downloads_bioconductor-qpgraph| |docker_bioconductor-qpgraph|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.36.0-0</code>,  <code>2.34.2-0</code>,  <code>2.32.0-1</code>,  <code>2.32.0-0</code>,  <code>2.28.2-0</code>,  <code>2.28.1-0</code>,  <code>2.28.0-0</code>,  <code>2.26.0-0</code>,  <code>2.24.3-0</code>,  </span></summary>
      

      ``2.36.0-0``,  ``2.34.2-0``,  ``2.32.0-1``,  ``2.32.0-0``,  ``2.28.2-0``,  ``2.28.1-0``,  ``2.28.0-0``,  ``2.26.0-0``,  ``2.24.3-0``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.0-1``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotate: ``>=1.80.0,<1.81.0``
   :depends bioconductor-annotate: ``>=1.80.0,<1.81.0a0``
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-annotationdbi: ``>=1.64.1,<1.65.0a0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0a0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0a0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.1,<1.39.0a0``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicfeatures: ``>=1.54.1,<1.55.0a0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.1,<1.55.0a0``
   :depends bioconductor-graph: ``>=1.80.0,<1.81.0``
   :depends bioconductor-graph: ``>=1.80.0,<1.81.0a0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0a0``
   :depends bioconductor-rgraphviz: ``>=2.46.0,<2.47.0``
   :depends bioconductor-rgraphviz: ``>=2.46.0,<2.47.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrix: ``>=1.5-0``
   :depends r-mvtnorm: 
   :depends r-qtl: 
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

      mamba install bioconductor-qpgraph

   and update with::

      mamba update bioconductor-qpgraph

  To create a new environment, run::

      mamba create --name myenvname bioconductor-qpgraph

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-qpgraph:<tag>

   (see `bioconductor-qpgraph/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-qpgraph| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-qpgraph.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-qpgraph
   :alt:   (downloads)
.. |docker_bioconductor-qpgraph| image:: https://quay.io/repository/biocontainers/bioconductor-qpgraph/status
   :target: https://quay.io/repository/biocontainers/bioconductor-qpgraph
.. _`bioconductor-qpgraph/tags`: https://quay.io/repository/biocontainers/bioconductor-qpgraph?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-qpgraph";
        var versions = ["2.36.0","2.34.2","2.32.0","2.32.0","2.28.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-qpgraph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-qpgraph/README.html