:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-motiftestr'
.. highlight: bash

bioconductor-motiftestr
=======================

.. conda:recipe:: bioconductor-motiftestr
   :replaces_section_title:
   :noindex:

   Perform key tests for binding motifs in sequence data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/motifTestR.html
   :license: GPL-3
   :recipe: /`bioconductor-motiftestr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motiftestr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motiftestr/meta.yaml>`_

   Taking a set of sequence motifs as PWMs\, test a set of sequences for over\-representation of these motifs\, as well as any positional features within the set of motifs. Enrichment analysis can be undertaken using multiple statistical approaches. The package also contains core functions to prepare data for analysis\, and to visualise results.


.. conda:package:: bioconductor-motiftestr

   |downloads_bioconductor-motiftestr| |docker_bioconductor-motiftestr|

   :versions:
      
      

      ``1.2.1-0``

      

   
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-universalmotif: ``>=1.24.0,<1.25.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggplot2: ``>=3.5.0``
   :depends r-harmonicmeanp: 
   :depends r-matrixstats: 
   :depends r-patchwork: 
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

      mamba install bioconductor-motiftestr

   and update with::

      mamba update bioconductor-motiftestr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-motiftestr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-motiftestr:<tag>

   (see `bioconductor-motiftestr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-motiftestr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-motiftestr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-motiftestr
   :alt:   (downloads)
.. |docker_bioconductor-motiftestr| image:: https://quay.io/repository/biocontainers/bioconductor-motiftestr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-motiftestr
.. _`bioconductor-motiftestr/tags`: https://quay.io/repository/biocontainers/bioconductor-motiftestr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-motiftestr";
        var versions = ["1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-motiftestr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-motiftestr/README.html