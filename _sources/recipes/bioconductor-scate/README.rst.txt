:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scate'
.. highlight: bash

bioconductor-scate
==================

.. conda:recipe:: bioconductor-scate
   :replaces_section_title:
   :noindex:

   SCATE\: Single\-cell ATAC\-seq Signal Extraction and Enhancement

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/SCATE.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-scate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scate/meta.yaml>`_

   SCATE is a software tool for extracting and enhancing the sparse and discrete Single\-cell ATAC\-seq Signal. Single\-cell sequencing assay for transposase\-accessible chromatin \(scATAC\-seq\) is the state\-of\-the\-art technology for analyzing genome\-wide regulatory landscapes in single cells. Single\-cell ATAC\-seq data are sparse and noisy\, and analyzing such data is challenging. Existing computational methods cannot accurately reconstruct activities of individual cis\-regulatory elements \(CREs\) in individual cells or rare cell subpopulations. SCATE was developed to adaptively integrate information from co\-activated CREs\, similar cells\, and publicly available regulome data and substantially increase the accuracy for estimating activities of individual CREs. We demonstrate that SCATE can be used to better reconstruct the regulatory landscape of a heterogeneous sample.


.. conda:package:: bioconductor-scate

   |downloads_bioconductor-scate| |docker_bioconductor-scate|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-genomicalignments: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-preprocesscore: ``>=1.62.0,<1.63.0``
   :depends bioconductor-scatedata: ``>=1.10.0,<1.11.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-mclust: 
   :depends r-rtsne: 
   :depends r-splines2: 
   :depends r-xgboost: 
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

      mamba install bioconductor-scate

   and update with::

      mamba update bioconductor-scate

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scate

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scate:<tag>

   (see `bioconductor-scate/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scate| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scate.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scate
   :alt:   (downloads)
.. |docker_bioconductor-scate| image:: https://quay.io/repository/biocontainers/bioconductor-scate/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scate
.. _`bioconductor-scate/tags`: https://quay.io/repository/biocontainers/bioconductor-scate?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scate";
        var versions = ["1.10.0","1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scate/README.html