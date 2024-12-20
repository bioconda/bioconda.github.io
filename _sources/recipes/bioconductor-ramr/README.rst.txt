:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ramr'
.. highlight: bash

bioconductor-ramr
=================

.. conda:recipe:: bioconductor-ramr
   :replaces_section_title:
   :noindex:

   Detection of Rare Aberrantly Methylated Regions in Array and NGS Data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ramr.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ramr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ramr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ramr/meta.yaml>`_

   ramr is an R package for detection of low\-frequency aberrant methylation events in large data sets obtained by methylation profiling using array or high\-throughput bisulfite sequencing. In addition\, package provides functions to visualize found aberrantly methylated regions \(AMRs\)\, to generate sets of all possible regions to be used as reference sets for enrichment analysis\, and to generate biologically relevant test data sets for performance evaluation of AMR\/DMR search algorithms.


.. conda:package:: bioconductor-ramr

   |downloads_bioconductor-ramr| |docker_bioconductor-ramr|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-doparallel: 
   :depends r-dorng: 
   :depends r-envstats: 
   :depends r-extdist: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-matrixstats: 
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
        var versions = ["1.14.0","1.10.0","1.8.0","1.6.0","1.2.0"];
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