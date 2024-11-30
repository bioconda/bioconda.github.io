:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-recount3'
.. highlight: bash

bioconductor-recount3
=====================

.. conda:recipe:: bioconductor-recount3
   :replaces_section_title:
   :noindex:

   Explore and download data from the recount3 project

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/recount3.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-recount3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-recount3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-recount3/meta.yaml>`_

   The recount3 package enables access to a large amount of uniformly processed RNA\-seq data from human and mouse. You can download RangedSummarizedExperiment objects at the gene\, exon or exon\-exon junctions level with sample metadata and QC statistics. In addition we provide access to sample coverage BigWig files.


.. conda:package:: bioconductor-recount3

   |downloads_bioconductor-recount3| |docker_bioconductor-recount3|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.2-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.0.7-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-biocfilecache: ``>=2.10.0,<2.11.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-httr: 
   :depends r-matrix: 
   :depends r-r.utils: 
   :depends r-sessioninfo: 
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

      mamba install bioconductor-recount3

   and update with::

      mamba update bioconductor-recount3

  To create a new environment, run::

      mamba create --name myenvname bioconductor-recount3

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-recount3:<tag>

   (see `bioconductor-recount3/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-recount3| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-recount3.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-recount3
   :alt:   (downloads)
.. |docker_bioconductor-recount3| image:: https://quay.io/repository/biocontainers/bioconductor-recount3/status
   :target: https://quay.io/repository/biocontainers/bioconductor-recount3
.. _`bioconductor-recount3/tags`: https://quay.io/repository/biocontainers/bioconductor-recount3?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-recount3";
        var versions = ["1.12.0","1.10.2","1.8.0","1.4.0","1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-recount3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-recount3/README.html