:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-heron'
.. highlight: bash

bioconductor-heron
==================

.. conda:recipe:: bioconductor-heron
   :replaces_section_title:
   :noindex:

   Hierarchical Epitope pROtein biNding

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/HERON.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-heron <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-heron>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-heron/meta.yaml>`_

   HERON is a software package for analyzing peptide binding array data. In addition to identifying significant binding probes\, HERON also provides functions for finding epitopes \(string of consecutive peptides within a protein\). HERON also calculates significance on the probe\, epitope\, and protein level by employing meta p\-value methods.  HERON is designed for obtaining calls on the sample level and calculates fractions of hits for different conditions.


.. conda:package:: bioconductor-heron

   |downloads_bioconductor-heron| |docker_bioconductor-heron|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cluster: 
   :depends r-data.table: 
   :depends r-harmonicmeanp: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-metap: 
   :depends r-spdep: 
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

      mamba install bioconductor-heron

   and update with::

      mamba update bioconductor-heron

  To create a new environment, run::

      mamba create --name myenvname bioconductor-heron

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-heron:<tag>

   (see `bioconductor-heron/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-heron| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-heron.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-heron
   :alt:   (downloads)
.. |docker_bioconductor-heron| image:: https://quay.io/repository/biocontainers/bioconductor-heron/status
   :target: https://quay.io/repository/biocontainers/bioconductor-heron
.. _`bioconductor-heron/tags`: https://quay.io/repository/biocontainers/bioconductor-heron?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-heron";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-heron/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-heron/README.html