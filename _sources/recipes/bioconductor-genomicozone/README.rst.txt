:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genomicozone'
.. highlight: bash

bioconductor-genomicozone
=========================

.. conda:recipe:: bioconductor-genomicozone
   :replaces_section_title:
   :noindex:

   Delineate outstanding genomic zones of differential gene activity

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/GenomicOZone.html
   :license: LGPL (>=3)
   :recipe: /`bioconductor-genomicozone <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicozone>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicozone/meta.yaml>`_

   The package clusters gene activity along chromosome into zones\, detects differential zones as outstanding\, and visualizes maps of outstanding zones across the genome. It enables characterization of effects on multiple genes within adaptive genomic neighborhoods\, which could arise from genome reorganization\, structural variation\, or epigenome alteration. It guarantees cluster optimality\, linear runtime to sample size\, and reproducibility. One can apply it on genome\-wide activity measurements such as copy number\, transcriptomic\, proteomic\, and methylation data.


.. conda:package:: bioconductor-genomicozone

   |downloads_bioconductor-genomicozone| |docker_bioconductor-genomicozone|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biomart: ``>=2.58.0,<2.59.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-ggbio: ``>=1.50.0,<1.51.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ckmeans.1d.dp: ``>=4.3.0``
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-lsr: 
   :depends r-plyr: 
   :depends r-rdpack: 
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

      mamba install bioconductor-genomicozone

   and update with::

      mamba update bioconductor-genomicozone

  To create a new environment, run::

      mamba create --name myenvname bioconductor-genomicozone

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genomicozone:<tag>

   (see `bioconductor-genomicozone/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genomicozone| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomicozone.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genomicozone
   :alt:   (downloads)
.. |docker_bioconductor-genomicozone| image:: https://quay.io/repository/biocontainers/bioconductor-genomicozone/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomicozone
.. _`bioconductor-genomicozone/tags`: https://quay.io/repository/biocontainers/bioconductor-genomicozone?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genomicozone";
        var versions = ["1.16.0","1.14.0","1.12.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomicozone/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomicozone/README.html