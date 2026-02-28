:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ramr'
.. highlight: bash

bioconductor-ramr
=================

.. conda:recipe:: bioconductor-ramr
   :replaces_section_title:
   :noindex:

   Detection of Rare Aberrantly Methylated Regions in Array and NGS Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ramr.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ramr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ramr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ramr/meta.yaml>`_

   ramr is an R package for detection of low\-frequency aberrant methylation events in large data sets obtained by methylation profiling using array or high\-throughput bisulfite sequencing. In addition\, package provides functions to visualize found aberrantly methylated regions \(AMRs\)\, to generate sets of all possible regions to be used as reference sets for enrichment analysis\, and to generate biologically relevant test data sets for performance evaluation of AMR\/DMR search algorithms.


.. conda:package:: bioconductor-ramr

   |downloads_bioconductor-ramr| |docker_bioconductor-ramr|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends bioconductor-biocgenerics: ``>=0.56.0,<0.57.0a0``
   :depends bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends bioconductor-genomicranges: ``>=1.62.1,<1.63.0a0``
   :depends bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends bioconductor-iranges: ``>=2.44.0,<2.45.0a0``
   :depends bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends bioconductor-seqinfo: ``>=1.0.0,<1.1.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=19``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends liblzma: ``>=5.8.2,<6.0a0``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends r-base: ``>=4.5,<4.6.0a0``
   :depends r-data.table: 
   :depends r-rcpp: 
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

      mamba install bioconductor-ramr

   and update with::

      mamba update bioconductor-ramr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ramr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ramr:<tag>

   (see `bioconductor-ramr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ramr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ramr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ramr
   :alt:   (downloads)
.. |docker_bioconductor-ramr| image:: https://quay.io/repository/biocontainers/bioconductor-ramr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ramr
.. _`bioconductor-ramr/tags`: https://quay.io/repository/biocontainers/bioconductor-ramr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ramr";
        var versions = ["1.18.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ramr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ramr/README.html