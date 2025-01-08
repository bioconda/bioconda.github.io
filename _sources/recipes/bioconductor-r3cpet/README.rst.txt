:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-r3cpet'
.. highlight: bash

bioconductor-r3cpet
===================

.. conda:recipe:: bioconductor-r3cpet
   :replaces_section_title:
   :noindex:

   3CPET\: Finding Co\-factor Complexes in Chia\-PET experiment using a Hierarchical Dirichlet Process

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/R3CPET.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-r3cpet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-r3cpet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-r3cpet/meta.yaml>`_

   The package provides a method to infer the set of proteins that are more probably to work together to maintain chormatin interaction given a ChIA\-PET experiment results.


.. conda:package:: bioconductor-r3cpet

   |downloads_bioconductor-r3cpet| |docker_bioconductor-r3cpet|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.26.0-3</code>,  <code>1.26.0-2</code>,  <code>1.26.0-1</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.26.0-3``,  ``1.26.0-2``,  ``1.26.0-1``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0a0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0a0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0a0``
   :depends bioconductor-ggbio: ``>=1.54.0,<1.55.0``
   :depends bioconductor-ggbio: ``>=1.54.0,<1.55.0a0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0a0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-clvalid: 
   :depends r-data.table: 
   :depends r-ggplot2: 
   :depends r-hmisc: 
   :depends r-igraph: 
   :depends r-pheatmap: 
   :depends r-rcpp: ``>=0.10.4``
   :depends r-rcurl: 
   :depends r-reshape2: 
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

      mamba install bioconductor-r3cpet

   and update with::

      mamba update bioconductor-r3cpet

  To create a new environment, run::

      mamba create --name myenvname bioconductor-r3cpet

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-r3cpet:<tag>

   (see `bioconductor-r3cpet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-r3cpet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-r3cpet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-r3cpet
   :alt:   (downloads)
.. |docker_bioconductor-r3cpet| image:: https://quay.io/repository/biocontainers/bioconductor-r3cpet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-r3cpet
.. _`bioconductor-r3cpet/tags`: https://quay.io/repository/biocontainers/bioconductor-r3cpet?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-r3cpet";
        var versions = ["1.38.0","1.34.0","1.32.0","1.30.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-r3cpet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-r3cpet/README.html